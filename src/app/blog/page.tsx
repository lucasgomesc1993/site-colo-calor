import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
    title: "Blog Colo & Calor - Conteúdos sobre Amamentação e Maternidade",
    description: "Artigos e orientações exclusivas sobre amamentação, cuidados com o bebê e a jornada da maternidade real por Camila Toniatti.",
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Blog', item: '/blog' }
                ]}
            />
            <Section className="bg-[#F9F4EF]">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="font-cormorant text-5xl md:text-6xl text-terracotta mb-6">Blog Colo & Calor</h1>
                        <p className="font-raleway text-lg text-gray-600">
                            Conteúdos exclusivos sobre amamentação, maternidade e bem-estar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <div className="bg-white h-full border border-gray-100 hover:border-terracotta/20 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden">
                                    {post.image && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-xs text-terracotta font-bold uppercase tracking-widest mb-4">
                                            <span>{post.category}</span>
                                            <span className="text-gray-300">•</span>
                                            <span className="text-gray-400 font-medium">{post.date}</span>
                                        </div>
                                        <h3 className="font-cormorant text-2xl text-gray-800 font-bold mb-4 group-hover:text-terracotta transition-colors line-clamp-3">
                                            {post.title}
                                        </h3>
                                        <p className="font-raleway text-gray-600 text-sm mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-terracotta font-bold text-sm">
                                            Ler mais
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {blogPosts.length === 0 && (
                        <div className="bg-white p-12 text-center shadow-sm border border-gray-100 max-w-2xl mx-auto">
                            <h3 className="font-cormorant text-3xl text-gray-800 mb-4">Em breve</h3>
                            <p className="font-raleway text-gray-600 mb-8">
                                Estamos preparando artigos incríveis para você. Volte em breve!
                            </p>
                            <Button href="/" variant="outline">
                                Voltar para a Home
                            </Button>
                        </div>
                    )}
                </Container>
            </Section>
        </main>
    );
}
