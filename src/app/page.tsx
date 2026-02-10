import { Metadata } from "next";
import { ProfessionalServiceSchema } from "@/components/seo/Schemas";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ModalityCard } from "@/components/ui/ModalityCard";
import {
  Heart,
  Baby,
  Calendar,
  MapPin,
  Video,
  PlayCircle,
  Zap,
  BookOpen,
  LogOut,
  Briefcase,
  Stethoscope,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Acolhimento e Segurança na Amamentação",
  description: "Consultoria em amamentação e laserterapia em São Paulo. Apoio especializado para gestantes e mães com Camila Toniatti.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ProfessionalServiceSchema />
      {/* Hero Section */}
      <Section className="relative bg-terracotta pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Dark gradient overlay - solid left, fading to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-terracotta via-terracotta/90 via-60% to-transparent z-10 w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-terracotta/40 to-transparent z-10 w-full h-40" />
          <Image
            src="/images/hero-emo.webp"
            alt="Mãe amamentando bebê"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
          />
        </div>

        <Container className="relative z-20">
          {/* Content aligned to the left */}
          <div className="max-w-2xl pt-0 flex flex-col items-start text-left">


            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-6 tracking-tight text-left">
              <span className="text-[#FDFBF7] block">Acolhendo mães.</span>
              <span className="text-[#E7D0BC] italic font-normal block mt-1">Nutrindo vínculos.</span>
            </h1>

            <p className="font-raleway text-lg md:text-xl text-[#FDFBF7]/90 mb-10 max-w-md leading-relaxed text-left">
              A amamentação não precisa doer, confundir ou assustar.
              <br />
              Aqui você encontra acolhimento, informação segura e apoio profissional para viver esse momento com leveza, confiança e conexão com seu bebê.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                href="https://wa.me/5511999494829"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto !bg-[#FDFBF7] hover:!bg-[#E7D0BC] !text-terracotta font-bold shadow-sm rounded-none px-8 py-4 justify-center transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Preciso de ajuda agora
              </Button>
              <Button
                href="/metodo"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-none px-8 py-4 text-base font-medium justify-center"
              >
                Conhecer o Método Colo & Calor
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b border-beige/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-beige/30">
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-cream rounded-none text-terracotta mb-2">
                  <Heart size={24} />
                </div>
              </div>
              <p className="font-cormorant text-5xl text-terracotta font-bold">
                <AnimatedCounter end={185} suffix="+" />
              </p>
              <p className="font-raleway text-gray-500 uppercase tracking-wider text-sm mt-2">Avaliações 5 Estrelas</p>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-cream rounded-none text-terracotta mb-2">
                  <Baby size={24} />
                </div>
              </div>
              <p className="font-cormorant text-5xl text-terracotta font-bold">
                <AnimatedCounter end={600} suffix="+" />
              </p>
              <p className="font-raleway text-gray-500 uppercase tracking-wider text-sm mt-2">Famílias Atendidas</p>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-cream rounded-none text-terracotta mb-2">
                  <Calendar size={24} />
                </div>
              </div>
              <p className="font-cormorant text-5xl text-terracotta font-bold">2020</p>
              <p className="font-raleway text-gray-500 uppercase tracking-wider text-sm mt-2">Atuação desde</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Method Section */}
      <Section id="metodo" className="bg-cream/30">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-beige/50 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-terracotta/10 rounded-full blur-xl" />
              <Image
                src="/images/amamentacao1.webp"
                alt="Ilustração Método Colo e Calor"
                width={400}
                height={400}
                className="relative z-10 w-full max-w-sm mx-auto h-auto drop-shadow-2xl rounded-none"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-cormorant text-5xl text-terracotta mb-6 leading-tight">
                Prepare-se para amamentar <span className="italic font-light">sem dor, medo ou insegurança, e... SEM COMPLEMENTO</span>
              </h2>
              <p className="font-raleway text-lg text-gray-700 leading-relaxed mb-8">
                O <strong className="text-terracotta">Método Colo & Calor</strong> é um passo a passo prático e acolhedor para gestantes e mães que querem se preparar para a amamentação ou resolver dificuldades como dor, fissuras, pega incorreta e insegurança — antes ou depois do nascimento do bebê.
              </p>
              <Button href="/metodo">
                Conhecer o Método Colo & Calor
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modalities Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-terracotta uppercase tracking-widest text-sm font-semibold mb-2 block">
              Para gestantes e mães em qualquer fase da amamentação
            </span>
            <h2 className="font-cormorant text-5xl text-terracotta mb-6">Como você prefere ser atendida?</h2>
            <p className="font-raleway text-gray-600">
              Escolha a modalidade que melhor se adapta à sua rotina e necessidade atual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ModalityCard
              icon={<MapPin size={32} />}
              title="Atendimento Presencial"
              description="Para mães que precisam de apoio prático, correção de pega e cuidados diretos com a mama."
              features={["São Paulo", "ABC Paulista", "Alto do Tietê", "Vale do Ribeira", "Vale do Paraíba"]}
              actionLabel="Quero agendar a Consultoria Presencial"
              href="/servicos"
              backgroundImage="/images/presencial-home.webp"
            />
            <ModalityCard
              icon={<Video size={32} />}
              title="Atendimento Online"
              description="Orientação profissional, segura e eficaz, onde você estiver."
              actionLabel="Quero agendar a Consultoria Online"
              href="/servicos"
              isPrimary
              backgroundImage="/images/online-home.webp"
              features={["Suporte especializado via videochamada."]}
            />
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="servicos" className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fundo.webp"
            alt="Fundo decorativo"
            fill
            className="object-cover"
            priority={false}
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-none border border-terracotta/20 bg-white mb-4">
              <span className="text-terracotta text-sm font-medium">Serviços em Destaque</span>
            </div>
            <h2 className="font-cormorant text-5xl text-white mb-4 font-medium">
              Serviços pensados para cada fase da sua <span className="italic">jornada materna</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Baby size={24} />}
              title="Preparação na Gestação"
              description="Comece certo! Aprenda tudo sobre amamentação antes do bebê nascer."
              href="/servicos"
            />
            <ServiceCard
              icon={<PlayCircle size={24} />}
              title="Avaliação da mamada por vídeo"
              description="Análise detalhada da mamada através de vídeos gravados para identificar correções na pega."
              href="/servicos"
            />
            <ServiceCard
              icon={<Zap size={24} />}
              title="Laserterapia"
              description="Tecnologia avançada para cicatrização rápida de fissuras e alívio da dor."
              href="/servicos"
            />
            <ServiceCard
              icon={<Stethoscope size={24} />}
              title="Consultoria na Maternidade"
              description="Apoio especializado ainda na maternidade para garantir o melhor início da amamentação."
              href="/servicos"
            />
            <ServiceCard
              icon={<Briefcase size={24} />}
              title="Retorno ao Trabalho"
              description="Planejamento personalizado para manter a amamentação no retorno ao trabalho."
              href="/servicos"
            />
            <ServiceCard
              icon={<LogOut size={24} />}
              title="Desmame Gentil"
              description="Planejamento e acompanhamento para encerrar a amamentação com respeito e amor."
              href="/servicos"
            />
          </div>

          <div className="text-center mt-12">
            <Button href="/servicos" className="!bg-[#E7D0BC] hover:!bg-[#D4B8A0] !text-terracotta font-bold">Ver todos os serviços</Button>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section className="bg-[#F7EBE0] text-terracotta">
        <Container>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl border-4 border-terracotta/10">
                <Image
                  src="/images/camila.webp"
                  alt="Camila Toniatti - Consultora em Aleitamento Materno"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="inline-block px-3 py-1 bg-terracotta/10 rounded-none text-terracotta text-sm font-semibold mb-4 backdrop-blur-sm">
                Quem é Camila Toniatti?
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-6 leading-tight">
                Mãe de duas meninas e <span className="italic">Consultora em Aleitamento Materno</span>
              </h2>
              <p className="font-raleway text-lg text-terracotta/90 mb-6 leading-relaxed">
                Transformei minha dor e dificuldade pessoal em propósito para ajudar outras mães. Minha missão é fazer com que você amamente sem dor, com confiança total.
              </p>
              <Button href="/sobre" variant="text" className="mb-10 text-lg text-terracotta hover:text-terracotta/80 p-0 hover:bg-transparent">
                Conheça minha história →
              </Button>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#F9F4EF] p-6 rounded-none shadow-md border-none">
                  <div className="mb-4 text-terracotta"><Heart size={28} /></div>
                  <h3 className="font-cormorant text-xl font-bold text-terracotta mb-2">Bem Gestar</h3>
                  <p className="font-raleway text-sm text-[#8E7878] mb-4">Idealizadora do Bem Gestar — evento preparatório para gestantes, em sua 7ª edição.</p>
                  <a href="https://www.instagram.com/bemgestaroficial/" target="_blank" rel="noopener noreferrer" className="text-terracotta text-sm font-semibold hover:underline">Conhecer o Bem Gestar</a>
                </div>
                <div className="bg-[#F9F4EF] p-6 rounded-none shadow-md border-none">
                  <div className="mb-4 text-terracotta"><BookOpen size={28} /></div>
                  <h3 className="font-cormorant text-xl font-bold text-terracotta mb-2">Livro</h3>
                  <p className="font-raleway text-sm text-[#8E7878] mb-4">Coautora do livro Conhe’Ser Você na Maternidade.</p>
                  <a href="https://www.amazon.com.br/ConheSer-Voc%C3%AA-Maternidade-Vol-02/dp/6525176778" target="_blank" rel="noopener noreferrer" className="text-terracotta text-sm font-semibold hover:underline">Conhecer o livro</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Home CTA Section */}
      <Section className="bg-white text-center py-24">
        <Container>
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 leading-tight text-terracotta">
            Você não precisa passar por esse momento <span className="italic">sozinha</span>.
          </h2>
          <p className="font-raleway text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Estou aqui para te acolher e guiar em cada etapa da sua jornada de amamentação.
          </p>
          <Button
            href="https://wa.me/5511999494829"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta hover:bg-[#7A3E3E] text-white border-none shadow-md transition-all duration-300 text-lg px-8 py-4 rounded-none font-medium"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            Falar com a consultora no WhatsApp
          </Button>
        </Container>
      </Section>
    </main>
  );
}
