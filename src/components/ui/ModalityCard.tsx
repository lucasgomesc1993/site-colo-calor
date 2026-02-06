import React from 'react';
import { Button } from './Button';
import Image from 'next/image';

interface ModalityCardProps {
    title: string;
    description: string;
    features?: string[];
    icon: React.ReactNode;
    actionLabel: string;
    href: string;
    isPrimary?: boolean;
    backgroundImage?: string;
}

export function ModalityCard({
    title,
    description,
    features = [],
    icon,
    actionLabel,
    href,
    isPrimary = false,
    backgroundImage
}: ModalityCardProps) {
    return (
        <div className={`relative p-8 rounded-none flex flex-col h-full transition-all duration-300 overflow-hidden group ${isPrimary ? 'bg-terracotta text-white' : 'bg-cream text-terracotta'}`}>
            {/* Background Image and Overlay */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay to ensure legibility - Gradient from top-left to bottom-right */}
                    <div className={`absolute inset-0 z-10 bg-gradient-to-br ${isPrimary
                        ? 'from-[#9D5951]/95 via-[#9D5951]/85 to-[#9D5951]/50'
                        : 'from-[#FDFBF7]/98 via-[#FDFBF7]/90 to-[#FDFBF7]/60'
                        }`} />
                </div>
            )}

            <div className="relative z-20 flex flex-col h-full">
                <div className={`p-3 rounded-none w-fit mb-6 ${isPrimary ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                    {icon}
                </div>
                <h3 className={`font-cormorant text-3xl font-bold mb-4 ${isPrimary ? 'text-white' : 'text-terracotta'}`}>{title}</h3>
                <p className={`font-raleway mb-8 flex-grow ${isPrimary ? 'text-white/90' : 'text-terracotta/80'}`}>{description}</p>

                {features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {features.map((feature, index) => (
                            <span key={index} className={`px-3 py-1 rounded-none text-sm font-medium ${isPrimary ? 'bg-white/20 text-white' : 'bg-terracotta/10 text-terracotta'}`}>
                                {feature}
                            </span>
                        ))}
                    </div>
                )}

                <Button
                    href={href}
                    variant={isPrimary ? 'secondary' : 'primary'}
                    className={`w-full ${isPrimary ? '!bg-white !text-terracotta hover:!bg-white/90' : ''}`}
                >
                    {actionLabel}
                </Button>
            </div>
        </div>
    );
}
