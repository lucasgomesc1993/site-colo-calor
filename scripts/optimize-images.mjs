import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const IMAGES_DIR = './public/images';

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            const name = path.parse(entry.name).name;

            // 1. Convert PNG, JPG, JPEG to WebP
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const outputPath = path.join(dir, `${name}.webp`);
                console.log(`Convertendo: ${fullPath} -> ${name}.webp`);

                await sharp(fullPath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(outputPath);
            }
            // 2. Optimize existing WebPs
            else if (ext === '.webp') {
                const stats = await fs.stat(fullPath);
                if (stats.size > 100 * 1024) {
                    console.log(`Otimizando WebP grande: ${fullPath} (${(stats.size / 1024).toFixed(2)} KB)`);
                    const buffer = await fs.readFile(fullPath);
                    const tempPath = path.join(dir, `temp_${entry.name}`);

                    await sharp(buffer)
                        .webp({ quality: 80, effort: 6 })
                        .toFile(tempPath);

                    const newStats = await fs.stat(tempPath);
                    if (newStats.size < stats.size) {
                        await fs.rename(tempPath, fullPath);
                        console.log(`  Reduzido para ${(newStats.size / 1024).toFixed(2)} KB`);
                    } else {
                        await fs.unlink(tempPath);
                        console.log(`  Mantido original`);
                    }
                }
            }
        }
    }
}

async function start() {
    try {
        console.log('Iniciando otimização recursiva...');
        await processDirectory(IMAGES_DIR);
        console.log('Otimização concluída!');
    } catch (err) {
        console.error('Erro:', err);
    }
}

start();
