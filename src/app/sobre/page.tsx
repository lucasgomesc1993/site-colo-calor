import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heart, BookOpen, CheckCircle, Quote } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
    title: "Sobre Camila Toniatti - Consultora em Aleitamento Materno",
    description: "Conheça a história de Camila Toniatti, mãe de duas e especialista em amamentação. Missão de acolher mães e nutrir vínculos através do aleitamento.",
    alternates: {
        canonical: '/sobre',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Sobre', item: '/sobre' }
                ]}
            />
            {/* Hero Section */}
            <Section className="relative bg-[#F9F4EF] !pt-32 md:!pt-52 pb-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl border-4 border-white max-w-sm mx-auto">
                                {/* Placeholder for now, assume generic consultant image or specific one if available */}
                                <Image
                                    src="/images/camila.webp"
                                    alt="Camila Toniatti"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-[#E7D0BC] rounded-none opacity-50"></div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-block px-3 py-1 bg-terracotta/10 rounded-none text-terracotta text-sm font-semibold mb-4">
                                Conheça a especialista
                            </div>
                            <h1 className="font-cormorant text-5xl md:text-6xl text-terracotta mb-6 leading-tight">
                                Camila Toniatti
                            </h1>
                            <p className="font-raleway text-xl text-[#8E7878] leading-relaxed font-medium">
                                Mãe, Consultora em Aleitamento Materno e apaixonada por transformar histórias de amamentação.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Story Section */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center md:text-left">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-8 leading-tight text-center">
                            Do desafio ao propósito
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600 font-raleway">
                            <p className="mb-6">
                                Minha jornada de maternidade, como mãe de duas meninas maravilhosas, foi marcada por grandes desafios, especialmente no puerpério e na amamentação. Foram momentos de dor, insegurança e, muitas vezes, de solidão.
                            </p>
                            <p className="mb-10">
                                Essa experiência profunda me fez entender, na pele e no coração, os verdadeiros desafios que todas nós, mães, enfrentamos. Foi esse o ponto de virada que me impulsionou: em 2020, decidi transformar minha dor em propósito e me tornei Consultora em Aleitamento Materno.
                            </p>

                            <div className="relative p-8 md:p-12 bg-[#F9F4EF] rounded-none my-12 text-center">
                                <Quote className="absolute top-4 left-4 text-[#E7D0BC] opacity-50" size={40} />
                                <p className="font-cormorant text-2xl md:text-3xl text-terracotta italic leading-relaxed relative z-10">
                                    "Percebi o quanto eu poderia mudar a trajetória e a experiência de centenas de famílias, transformando angústia em alívio, confiança e alegria."
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Mission Section */}
            <Section className="relative text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/fundo.webp"
                        alt="Fundo decorativo"
                        fill
                        className="object-cover"
                    />
                </div>
                <Container className="relative z-10">
                    <div className="bg-[#FDFBF7] p-8 md:p-12 shadow-2xl relative text-gray-800 max-w-4xl mx-auto">
                        <div className="text-center">
                            <h2 className="font-cormorant text-4xl md:text-5xl mb-6 text-terracotta">Minha Missão</h2>
                            <p className="font-raleway text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                                Fazer com que você amamente sem dor, com confiança total e desfrute de cada momento.
                            </p>

                            <div className="bg-white p-8 rounded-none border border-terracotta/20 inline-block shadow-sm">
                                <p className="font-raleway text-lg text-gray-600">
                                    Para isso, desenvolvi os <strong className="text-terracotta">"8 Passos para uma Amamentação de Sucesso"</strong> - um método validado que guia você para uma experiência plena e tranquila.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Dedication Section */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-6">
                            Minha dedicação à causa
                        </h2>
                        <p className="font-raleway text-lg text-[#8E7878]">
                            Reflete-se em diversas frentes para apoiar famílias:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#F9F4EF] p-8 rounded-none shadow-md hover:shadow-lg transition-shadow border-none h-full flex flex-col">
                            <div className="mb-6 text-terracotta">
                                <Heart size={32} />
                            </div>
                            <h3 className="font-cormorant text-2xl font-bold text-terracotta mb-4">Bem Gestar</h3>
                            <p className="font-raleway text-[#8E7878] mb-6 flex-grow">
                                Idealizadora do Bem Gestar - Seu Guia, Seu Momento: O maior evento preparatório para gestantes de Mogi das Cruzes, já em sua 9ª edição, preparando mães e pais para o momento mais importante de suas vidas.
                            </p>
                            <a href="https://www.instagram.com/bemgestaroficial/" target="_blank" rel="noopener noreferrer" className="font-semibold text-terracotta hover:text-[#7A3E3E] inline-flex items-center mt-auto">
                                Conhecer o Bem Gestar →
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#F9F4EF] p-8 rounded-none shadow-md hover:shadow-lg transition-shadow border-none h-full flex flex-col">
                            <div className="mb-6 text-terracotta">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="font-cormorant text-2xl font-bold text-terracotta mb-4">Coautora</h3>
                            <p className="font-raleway text-[#8E7878] mb-6 flex-grow">
                                Livro Conhe'Ser Você na Maternidade: Onde compartilho minha experiência pessoal, aliada a informações técnicas e práticas essenciais sobre amamentação.
                            </p>
                            <a href="https://www.amazon.com.br/ConheSer-Voc%C3%AA-Maternidade-Vol-02/dp/6525176778" target="_blank" rel="noopener noreferrer" className="font-semibold text-terracotta hover:text-[#7A3E3E] inline-flex items-center mt-auto">
                                Conhecer o livro →
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#F9F4EF] p-8 rounded-none shadow-md hover:shadow-lg transition-shadow border-none h-full flex flex-col">
                            <div className="mb-6 text-terracotta">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="font-cormorant text-2xl font-bold text-terracotta mb-4">Método Validado</h3>
                            <p className="font-raleway text-[#8E7878] mb-6 flex-grow">
                                8 Passos para uma Amamentação de Sucesso: A metodologia exclusiva que estrutura todo o meu atendimento para garantir resultados reais.
                            </p>
                            <Link href="/metodo" className="font-semibold text-terracotta hover:text-[#7A3E3E] inline-flex items-center mt-auto">
                                Conhecer o Método →
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Beliefs Section */}
            <Section className="bg-[#F9F4EF]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-8 leading-tight">
                                No que acredito
                            </h2>
                            <div className="space-y-6 font-raleway text-lg text-gray-600">
                                <p>
                                    Eu acredito, de verdade, que a amamentação muda o mundo.
                                </p>
                                <p>
                                    Amamentar não é apenas sobre nutrição de "padrão ouro". É um ato que envolve a produção e liberação de uma cascata de "hormônios do Bem" que trazem bem-estar e segurança para você e seu bebê.
                                </p>
                                <p>
                                    Quando um bebê se sente amado, seguro e acolhido desde o seu primeiro relacionamento fora do útero, por uma mãe feliz e confiante, ele floresce. E é essa base sólida que fará toda a diferença na sociedade que estamos construindo.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-none overflow-hidden shadow-xl border-4 border-white">
                            <Image
                                src="/images/acredito.webp"
                                alt="Mãe e bebê"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Final CTA */}
            <Section className="bg-white text-center py-24">
                <Container>
                    <h2 className="font-cormorant text-4xl md:text-5xl mb-6 leading-tight text-terracotta">
                        Permita-se viver o melhor da amamentação.
                        <span className="block italic text-3xl md:text-4xl mt-2 font-light">Eu estou aqui para guiar você.</span>
                    </h2>
                    <Button
                        href="https://wa.me/5511999494829"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-terracotta hover:bg-[#7A3E3E] text-white border-none shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-10 py-5 rounded-none font-medium mt-8"
                    >
                        <FaWhatsapp className="w-6 h-6 mr-2" />
                        Falar com a Camila no WhatsApp
                    </Button>
                </Container>
            </Section>

        </main>
    );
}
