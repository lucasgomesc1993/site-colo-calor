import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BreadcrumbSchema, BlogPostingSchema } from "@/components/seo/Schemas";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: 'Post não encontrado | Colo & Calor' };

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `/blog/${post.slug}`,
            type: 'article',
            images: post.image ? [{ url: post.image }] : undefined,
        }
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Blog', item: '/blog' },
                    { name: post.title, item: `/blog/${post.slug}` }
                ]}
            />
            <BlogPostingSchema post={post} />
            <Section className="bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta/80 mb-8 font-medium transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Voltar para o Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 uppercase tracking-widest font-medium">
                            <span className="flex items-center gap-1.5"><Tag size={16} className="text-terracotta" /> {post.category}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-terracotta" /> {post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5"><User size={16} className="text-terracotta" /> {post.author}</span>
                        </div>

                        {post.image && (
                            <div className="relative aspect-video w-full mb-10 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <h1 className="font-cormorant text-4xl md:text-6xl text-gray-800 mb-10 leading-tight">
                            {post.title}
                        </h1>

                        <div
                            className="font-raleway text-lg text-gray-600 leading-relaxed prose prose-lg prose-terracotta max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-16 pt-10 border-t border-gray-100">
                            <div className="bg-[#FDFBF7] p-8 md:p-12 text-center shadow-sm border border-terracotta/10">
                                <h3 className="font-cormorant text-3xl text-terracotta mb-4">Preciso de ajuda profissional</h3>
                                <p className="font-raleway text-gray-600 mb-8">
                                    Não passe por essas dificuldades sozinha. Recupere o prazer de amamentar com apoio especializado e acolhedor.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button href="/metodo" size="lg" className="w-full sm:w-auto">
                                        Conhecer o Método Colo & Calor
                                    </Button>
                                    <Button
                                        href="https://wa.me/5511999494829"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outline"
                                        size="lg"
                                        className="w-full sm:w-auto"
                                    >
                                        <FaWhatsapp className="mr-2 h-5 w-5" />
                                        Falar no WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
