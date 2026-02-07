"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Heart, CheckCircle2, AlertCircle, Quote, ChevronDown, ChevronUp, Lock, ShieldCheck, Clock, Star, Users, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaYoutube, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

const steps = [
    {
        number: "Módulo 1",
        title: "Antes de tudo: a amamentação começa na sua mente",
        description: "Reduz medo e tensão que intensificam a dor e atrapalham a descida do leite."
    },
    {
        number: "Módulo 2",
        title: "Preparando o ambiente e o enxoval para amamentar com leveza",
        description: "Evita erros de posicionamento, tensão corporal e cansaço excessivo."
    },
    {
        number: "Módulo 3",
        title: "Golden Hour: iniciação da amamentação e cuidados práticos",
        description: "O que fazer quando a Golden Hour não aconteceu como deveria."
    },
    {
        number: "Módulo 4",
        title: "Quebrando os mitos que te impedem de amamentar com confiança",
        description: "Elimina crenças que levam à insegurança e à introdução precoce de fórmula."
    },
    {
        number: "Módulo 5",
        title: "A pega perfeita começa com o preparo da mama e o posicionamento certo",
        description: "O passo mais decisivo para aliviar dor, evitar fissuras e melhorar a mamada."
    },
    {
        number: "Módulo 6",
        title: "Lapidando a mamada",
        description: "Ajustes finos que reduzem dor, tempo no peito e melhoram a transferência de leite."
    },
    {
        number: "Módulo 7",
        title: "Finalizando a mamada: desacoplando o bebê e corrigindo problemas",
        description: "Evita trauma, novas fissuras e dor persistente."
    },
    {
        number: "Módulo 8",
        title: "Pós-mamada: hora da soneca",
        description: "Como identificar sinais de que a mamada funcionou e favorecer descanso."
    }
];

const faqs = [
    {
        question: "Quando posso começar o curso?",
        answer: "Imediatamente. Mesmo durante a gestação, você já pode iniciar hoje mesmo."
    },
    {
        question: "E se meu bebê já tiver nascido, ainda vale a pena fazer?",
        answer: "Sim! O Método Colo & Calor foi criado para ajudar em qualquer fase da amamentação — seja enfrentando dor, pega incorreta, baixa produção ou insegurança nas mamadas."
    },
    {
        question: "Em quanto tempo verei resultados?",
        answer: "Os resultados podem aparecer logo nas primeiras aulas. As técnicas são práticas, diretas e já trouxeram alívio para muitas mães em poucos dias — algumas sentiram diferença já na primeira mamada."
    },
    {
        question: "Por quanto tempo terei acesso?",
        answer: "Você terá acesso ao treinamento por 12 meses."
    }
];

export default function MetodoPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <main className="min-h-screen pt-20">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'O Método', item: '/metodo' }
                ]}
            />
            {/* Hero Section */}
            <section className="bg-cream py-16 md:py-24 text-center">
                <Container>
                    <h1 className="font-cormorant text-4xl md:text-6xl text-terracotta mb-6 max-w-4xl mx-auto leading-tight">
                        Não perca sua amamentação por demorar a buscar ajuda.
                    </h1>
                    <p className="font-raleway text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Se você sente que amamentação dói, que o bebê não se satisfaz ou que a produção caiu, este é o momento de agir — não depois.
                    </p>

                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-none inline-block mb-12 border border-terracotta/10">
                        <p className="font-raleway text-xl md:text-2xl text-terracotta font-bold mb-2">
                            Isso não é um curso para estudar.
                        </p>
                        <p className="font-cormorant text-2xl md:text-3xl text-gray-800 italic">
                            É um Plano de Resgate da Amamentação para aplicar agora.
                        </p>
                    </div>

                    {/* Video Placeholder/Embed - Optimized with Facade Pattern */}
                    <div className="max-w-4xl mx-auto aspect-video mb-12 shadow-2xl relative group bg-black overflow-hidden">
                        {!showVideo ? (
                            <button
                                onClick={() => setShowVideo(true)}
                                className="w-full h-full relative flex items-center justify-center group cursor-pointer"
                                aria-label="Reproduzir vídeo"
                            >
                                <Image
                                    src="https://img.youtube.com/vi/lrTpcHoqdLg/maxresdefault.jpg"
                                    alt="Capa do vídeo Plano de Resgate da Amamentação"
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-terracotta/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pl-1">
                                        <FaYoutube className="text-white text-4xl" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <p className="text-white font-raleway text-sm font-bold uppercase tracking-widest">Clique para assistir</p>
                                </div>
                            </button>
                        ) : (
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/lrTpcHoqdLg?autoplay=1"
                                title="Plano de Resgate da Amamentação"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Button
                            href="https://lastlink.com/p/C00A5AE1C/checkout-payment"
                            size="lg"
                            className="w-full md:w-auto px-12 py-6 text-lg font-bold shadow-xl bg-terracotta hover:bg-[#7A3E3E]"
                        >
                            QUERO COMEÇAR MEU PLANO DE RESGATE AGORA
                        </Button>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 font-medium">
                            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-terracotta" /> Acesso imediato</span>
                            <span className="flex items-center gap-1 text-terracotta">•</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-terracotta" /> Garantia de 7 dias</span>
                            <span className="flex items-center gap-1 text-terracotta">•</span>
                            <span className="flex items-center gap-1"><Star size={16} className="text-terracotta" /> Investimento acessível</span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Problem Section - Redesigned */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <p className="font-raleway text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                            Quando esses problemas não são corrigidos, eles evoluem para fissuras no peito, baixa produção de leite, bebê perdendo peso e frustração crescente a cada mamada.
                        </p>
                        <div className="space-y-4">
                            <p className="font-cormorant text-4xl text-terracotta font-bold italic">
                                Não é falta de amor.
                            </p>
                            <p className="font-raleway text-3xl text-gray-800 font-medium">
                                É falta de orientação no momento certo.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#FDFBF7] p-8 md:p-16 border border-cream">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta text-center mb-16 max-w-2xl mx-auto">
                            Principais problemas na amamentação que levam à desistência
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Bebê não pega o peito corretamente",
                                    image: "/images/problems/pega-incorreta.webp",
                                    desc: "Dificuldade inicial que gera dor e baixa transferência de leite."
                                },
                                {
                                    title: "Bebê mama e não se satisfaz",
                                    image: "/images/problems/bebe-insatisfeito.webp",
                                    desc: "Sinal de que a mamada precisa de ajustes técnicos imediatos."
                                },
                                {
                                    title: "Fissura no peito ao amamentar",
                                    image: "/images/problems/fissura-dor.webp",
                                    desc: "O resultado direto de uma pega incorreta que torna o processo sofrido."
                                },
                                {
                                    title: "Medo da próxima mamada",
                                    image: "/images/problems/medo-proxima-mamada.webp",
                                    desc: "Ansiedade e tensão que bloqueiam a ocitocina e a descida do leite."
                                },
                                {
                                    title: "Introdução precoce de fórmula",
                                    image: "/images/problems/introducao-formula.webp",
                                    desc: "Muitas vezes feita por insegurança, sem necessidade real."
                                },
                                {
                                    title: "Introdução de bicos artificiais",
                                    image: "/images/problems/bicos-artificiais.webp",
                                    desc: "Confusão de bicos que compromete a amamentação a longo prazo."
                                }
                            ].map((problem, i) => (
                                <div key={i} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={problem.image}
                                            alt={problem.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-95"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="font-cormorant text-2xl text-terracotta font-bold mb-3 leading-tight">
                                            {problem.title}
                                        </h3>
                                        <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                                            {problem.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Testimonials Section */}
            <Section className="bg-cream">
                <Container>
                    <h2 className="font-cormorant text-4xl text-terracotta text-center mb-16">
                        Mães que agiram a tempo e conseguiram resgatar a amamentação
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Milena Santana",
                                role: "Mamãe",
                                text: "Camila é uma profissional excelente! Me ajudou muitíssimo no início da amamentação, onde muita dor se tornou em alegria na hora de amamentar. Com as melhores estratégias ensinadas por ela, hoje amamento com zero dor."
                            },
                            {
                                name: "Fernanda Caxito",
                                role: "Mamãe",
                                text: "O trabalho dela é excepcional, ela é paciente e ajuda a desmistificar tudo que aprendemos ao longo da vida que amamentar tem que doer, quando não tem e que apesar de ser por instinto, tem a forma correta. Depois que conheci ela amamentar realmente se tornou algo prazeroso tanto para mim como para minha bebê."
                            },
                            {
                                name: "Yanca Oliveira",
                                role: "Mamãe",
                                text: "Simplesmente ela salvou minha vida. Estava tendo bastante dificuldades com a amamentação, muita dor pela pega errada e fissuras no meu peito. Se não fosse por ela, não teria conseguido. Agradeço muito ao trabalho excepcional que ela fez, ao carinho e dedicação, uma profissional excelente."
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-8 shadow-md relative">
                                <Quote className="absolute top-4 right-4 text-cream" size={32} />
                                <p className="font-raleway text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                                <div className="mt-auto">
                                    <p className="font-cormorant text-xl text-terracotta font-bold">{t.name}</p>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Button
                            href="https://lastlink.com/p/C00A5AE1C/checkout-payment"
                            size="lg"
                            className="bg-terracotta hover:bg-[#7A3E3E]"
                        >
                            QUERO COMEÇAR MEU PLANO DE RESGATE AGORA
                        </Button>
                        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><Users size={16} /> Método aplicado por mais de 600 mães</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={16} /> Garantia de 7 dias</span>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Plan Section */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-6">
                            Existe uma janela curta para resgatar a amamentação
                        </h2>
                        <p className="font-raleway text-xl text-gray-700 mb-8">
                            O Plano de Resgate da Amamentação – Método Colo & Calor foi criado exatamente para esse momento em que tudo parece difícil:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {["Quando você está exausta", "Quando cada mamada dói", "Quando o medo te paralisa", "Quando a desistência parece próxima"].map((text, i) => (
                                <div key={i} className="p-4 bg-cream text-terracotta text-sm font-bold font-raleway flex items-center justify-center text-center">
                                    {text}
                                </div>
                            ))}
                        </div>
                        <div className="bg-terracotta/5 p-8 border-l-4 border-terracotta">
                            <p className="font-raleway text-xl text-gray-800 mb-2">Aqui você não vai encontrar teoria.</p>
                            <p className="font-cormorant text-2xl text-terracotta font-bold italic">Você vai encontrar o que fazer agora.</p>
                        </div>
                    </div>

                    <h3 className="font-cormorant text-3xl md:text-4xl text-center text-gray-800 mb-12">
                        Os 8 Passos do Plano de Resgate da Amamentação
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-6 p-6 border border-gray-100 hover:border-terracotta/20 transition-colors shadow-sm bg-[#FDFBF7]">
                                <div className="bg-terracotta text-white font-cormorant text-2xl w-14 h-14 shrink-0 flex items-center justify-center shadow-md">
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="text-terracotta font-bold text-xs uppercase tracking-widest mb-1">{step.number}</p>
                                    <h4 className="font-cormorant text-xl text-gray-800 font-bold mb-2">{step.title}</h4>
                                    <p className="font-raleway text-gray-600 text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="font-raleway text-lg text-gray-700 italic">Esses não são conteúdos para estudar.</p>
                        <p className="font-cormorant text-2xl text-terracotta font-bold">São passos para aplicar em sequência.</p>
                    </div>
                </Container>
            </Section>

            {/* Formula Cost Section */}
            {/* Formula Cost Section */}
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
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-12">O custo de desistir da amamentação</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-cream p-8 md:p-12 shadow-2xl relative text-gray-800">
                                <p className="font-raleway text-lg mb-6 text-gray-700">Quando a amamentação não é corrigida a tempo, muitas famílias recorrem à fórmula — quase sempre por exaustão, não por escolha.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-gray-800 font-medium">
                                        <AlertCircle className="shrink-0 mt-1 text-terracotta" />
                                        <span>Cada lata de fórmula custa, em média, entre R$ 80 e R$ 150</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-800 font-medium">
                                        <AlertCircle className="shrink-0 mt-1 text-terracotta" />
                                        <span>Um bebê pode consumir 4 a 6 latas por mês</span>
                                    </li>
                                </ul>
                                <div className="bg-white p-6 border-l-4 border-terracotta shadow-sm">
                                    <p className="font-bold text-sm uppercase tracking-widest mb-1 text-terracotta">Cálculo de Custo Mensal</p>
                                    <p className="font-cormorant text-4xl text-gray-800">R$ 400 a R$ 900</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 text-gray-800 shadow-2xl">
                                <h3 className="font-cormorant text-2xl text-terracotta mb-6">Além do investimento financeiro, considere:</h3>
                                <ul className="space-y-4 font-raleway text-gray-600 mb-8">
                                    <li className="flex items-center gap-3"><FaCheck className="text-terracotta" /> Gasto mensal recorrente por até 2 anos</li>
                                    <li className="flex items-center gap-3"><FaCheck className="text-terracotta" /> Investimento em acessórios (mamadeiras, bicos)</li>
                                    <li className="flex items-center gap-3"><FaCheck className="text-terracotta" /> Rotina de esterilização e preparo constante</li>
                                </ul>
                                <div className="bg-cream/50 p-4 border border-terracotta/10">
                                    <p className="text-sm italic italic text-gray-700">
                                        <strong>Dica de Especialista:</strong> Antes de considerar o custo da fórmula, vale a pena investir na correção da pega e no ajuste da rotina para resgatar sua amamentação.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Pricing Section - Redesigned */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-6">Tudo o que você recebe no Plano de Resgate da Amamentação</h2>
                        <p className="font-raleway text-lg text-gray-600">Se cada um desses conteúdos fosse vendido separadamente, o investimento seria muito maior.</p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {[
                            { id: "1", title: "Antes de tudo: a amamentação começa na sua mente", price: "97,00" },
                            { id: "2", title: "Preparando o ambiente e o enxoval para amamentar com leveza", price: "97,00" },
                            { id: "3", title: "Golden Hour: iniciação da amamentação e cuidados práticos", price: "97,00" },
                            { id: "4", title: "Quebrando os mitos que te impedem de amamentar com confiança", price: "97,00" },
                            { id: "5", title: "A pega perfeita começa com o preparo da mama e o posicionamento certo", price: "147,00" },
                            { id: "6", title: "Lapidando a mamada", price: "147,00" },
                            { id: "7", title: "Finalizando a mamada: desacoplando o bebê e corrigindo problemas", price: "97,00" },
                            { id: "8", title: "Pós-mamada: hora da soneca", price: "97,00" },
                            { id: "Bônus", title: "Bônus e Extras", price: "81,00" }
                        ].map((item, i) => (
                            <div key={i} className="group p-6 border border-gray-100 bg-[#FDFBF7] flex flex-col justify-between hover:border-terracotta/30 transition-all duration-300 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-cream group-hover:bg-terracotta transition-colors"></div>
                                <div>
                                    <span className="text-xs font-bold text-terracotta/50 uppercase tracking-widest mb-2 block">{item.id}</span>
                                    <h3 className="font-cormorant text-xl text-gray-800 font-bold mb-4">{item.title}</h3>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-terracotta font-raleway text-sm font-bold">R$ {item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* High Impact Offer Box */}
                    <div className="max-w-3xl mx-auto relative">
                        {/* Decorative background elements */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-terracotta/10 pointer-events-none hidden md:block"></div>

                        <div className="relative bg-[#F9F4EF] p-10 md:p-16 text-center shadow-2xl border border-terracotta/20 ring-1 ring-terracotta/5">
                            <span className="inline-block px-6 py-2 bg-terracotta text-white text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-lg">Oferta Especial</span>

                            <p className="font-raleway text-gray-400 line-through text-xl mb-2">De: R$ 957,00</p>
                            <p className="font-raleway text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed text-sm">
                                Esse seria o valor total de cada produto vendido separadamente, e que facilmente poderia custar muito mais, visto que é o MÉTODO que vai garantir uma experiência perfeita para você e seu bebê.
                            </p>

                            <div className="mb-10">
                                <p className="font-raleway text-gray-600 mb-2 uppercase tracking-widest text-sm font-bold">Por apenas</p>
                                <div className="flex items-start justify-center gap-1 font-cormorant text-terracotta font-bold">
                                    <span className="text-3xl mt-4">R$</span>
                                    <span className="text-8xl md:text-9xl leading-none">97</span>
                                    <span className="text-4xl mt-4">,00</span>
                                </div>
                                <div className="mt-4 bg-terracotta/5 inline-block px-4 py-2">
                                    <p className="font-raleway text-gray-800 font-bold text-lg">ou 12x de <span className="text-terracotta text-2xl font-cormorant">R$ 10,33</span></p>
                                </div>
                            </div>


                            <div className="space-y-6">
                                <Button
                                    href="https://lastlink.com/p/C00A5AE1C/checkout-payment"
                                    size="lg"
                                    className="bg-terracotta hover:bg-[#7A3E3E] w-full py-10 text-xl font-bold tracking-wider shadow-xl group transition-all duration-300"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        QUERO COMEÇAR MEU PLANO DE RESGATE AGORA
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>

                                <p className="font-raleway text-terracotta font-bold italic text-lg px-4 leading-relaxed">
                                    "Menos do que o valor de uma única lata de fórmula infantil."
                                </p>

                                <div className="pt-6 border-t border-terracotta/10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-gray-400 font-medium tracking-widest uppercase">
                                    <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100"><Lock size={14} className="text-terracotta" /> Pagamento 100% seguro</span>
                                    <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100"><ShieldCheck size={14} className="text-terracotta" /> Ambiente protegido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* How it works Section */}
            <Section className="bg-[#FDFBF7]">
                <Container>
                    <h2 className="font-cormorant text-4xl text-terracotta text-center mb-16">Como Funciona a Compra</h2>
                    <p className="text-center font-raleway text-gray-500 mb-12 uppercase tracking-widest text-sm">Entenda o processo passo a passo</p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="relative pl-12">
                            <div className="absolute left-0 top-0 w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                            <h3 className="font-cormorant text-2xl text-gray-800 mb-4 font-bold">Você começa pelo Plano de Resgate da Amamentação</h3>
                            <p className="font-raleway text-gray-600">O acesso imediato ao método completo para resolver suas dores e dificuldades.</p>
                        </div>
                        <div className="relative pl-12">
                            <div className="absolute left-0 top-0 w-10 h-10 bg-cream text-terracotta rounded-full flex items-center justify-center font-bold text-xl border-2 border-terracotta">2</div>
                            <h3 className="font-cormorant text-2xl text-gray-800 mb-4 font-bold">No checkout, se sentir necessidade, pode adicionar:</h3>
                            <ul className="space-y-4 font-raleway text-gray-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-terracotta shrink-0 mt-1" size={18} />
                                    <span>Avaliação da mamada por vídeo (WhatsApp), com Camila Toniatti</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-terracotta shrink-0 mt-1" size={18} />
                                    <span>Consulta online ao vivo com Camila Toniatti</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-sm italic text-terracotta font-medium">Você decide no checkout, com total liberdade.</p>
                        </div>
                    </div>

                    <div className="mt-24 max-w-3xl mx-auto bg-white p-8 md:p-12 border-2 border-dashed border-terracotta/30 text-center">
                        <ShieldCheck className="mx-auto text-terracotta mb-6" size={64} />
                        <h3 className="font-cormorant text-3xl md:text-4xl text-terracotta mb-4 font-bold">7 dias de garantia incondicional!</h3>
                        <p className="font-raleway text-xl text-gray-800 mb-6 font-bold uppercase tracking-widest tracking-tighter">Você não corre nenhum risco!</p>
                        <p className="font-raleway text-gray-600 mb-8 leading-relaxed">
                            Se o conteúdo não fizer sentido para você, reembolsamos 100% do valor investido.
                        </p>
                        <p className="font-cormorant text-2xl text-terracotta italic mb-2">Compromisso real com o seu resultado</p>
                        <p className="font-raleway text-gray-500 font-medium">Você não tem nada a perder, só uma amamentação tranquila a ganhar!</p>
                    </div>
                </Container>
            </Section>

            {/* Profile Section */}
            <Section className="bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                        <div className="relative aspect-[4/5] shadow-2xl overflow-hidden group">
                            <Image
                                src="/images/camila.webp"
                                alt="Camila Toniatti"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-terracotta/40 to-transparent"></div>
                        </div>
                        <div>
                            <span className="text-terracotta font-bold text-sm uppercase tracking-widest mb-4 inline-block">Sua Mentora</span>
                            <h2 className="font-cormorant text-5xl text-terracotta mb-2">Camila Toniatti</h2>
                            <p className="font-raleway text-xl text-gray-500 mb-8 font-medium">Consultora em Aleitamento Materno</p>
                            <div className="space-y-6 font-raleway text-gray-700">
                                <div className="flex items-center gap-4">
                                    <Users className="text-terracotta" size={32} />
                                    <span className="text-2xl font-cormorant text-gray-800 font-bold">Mais de 600 mães atendidas</span>
                                </div>
                                <p className="leading-relaxed">
                                    Especialista em transformar histórias de amamentação através de um método validado que une ciência, escuta e resultados práticos.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-[#F9F4EF]">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-cormorant text-4xl text-terracotta text-center mb-16">Perguntas Frequentes</h2>
                        <p className="text-center font-raleway text-gray-500 mb-12 uppercase tracking-widest text-sm">Tire suas dúvidas sobre o método</p>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white border-b border-gray-100 last:border-0 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex justify-between items-center p-6 text-left hover:bg-cream/20 transition-colors"
                                    >
                                        <span className="font-raleway font-bold text-gray-800">{faq.question}</span>
                                        {openFaq === i ? <ChevronUp className="text-terracotta" /> : <ChevronDown className="text-terracotta" />}
                                    </button>
                                    <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 p-6 pt-0' : 'max-h-0'}`}>
                                        <p className="font-raleway text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Final CTA */}
            <Section className="bg-white text-center py-24">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
                            Cada dia sem ajuda torna tudo mais difícil.
                        </h2>
                        <div className="mb-12">
                            <span className="font-raleway text-terracotta text-3xl font-bold">🔥 R$ 97 ou 12x de R$ 10,33</span>
                        </div>
                        <Button
                            href="https://lastlink.com/p/C00A5AE1C/checkout-payment"
                            size="lg"
                            className="bg-terracotta hover:bg-[#7A3E3E] text-white px-12 py-8 text-xl font-bold shadow-2xl"
                        >
                            QUERO COMEÇAR MEU PLANO DE RESGATE AGORA
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
