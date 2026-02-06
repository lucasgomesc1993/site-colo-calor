import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/components/ui/ServiceDetail";
import { Section } from "@/components/ui/Section";
import { Heart } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
    title: "Consultoria em Amamentação e Laserterapia - Serviços",
    description: "Consultoria presencial e online, laserterapia, preparação na gestação e desmame gentil. Apoio profissional em todas as fases da amamentação.",
    alternates: {
        canonical: '/servicos',
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Serviços', item: '/servicos' }
                ]}
            />
            {/* Hero */}
            <section className="bg-cream py-20 text-center">
                <Container>
                    <div className="inline-flex items-center justify-center p-3 bg-white/50 rounded-none mb-6 backdrop-blur-sm">
                        <Heart className="w-5 h-5 text-terracotta mr-2" />
                        <span className="text-terracotta text-sm font-medium uppercase tracking-widest">Nossos Serviços</span>
                    </div>
                    <h1 className="font-cormorant text-5xl md:text-6xl text-terracotta mb-6">
                        Cuidado, ciência e acolhimento para<br /> uma <span className="italic">amamentação sem dor</span>
                    </h1>
                    <p className="font-raleway text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed">
                        Na Colo & Calor, a amamentação é vista como ela realmente é: um processo fisiológico, emocional e aprendido — que precisa de informação correta, apoio e presença.
                        Seja na gestação, no pós-parto ou em fases de transição, você não precisa passar por isso sozinha.
                    </p>
                </Container>
            </section>

            {/* 1. Consultoria em Amamentação */}
            <ServiceDetail
                id="consultoria"
                title="Consultoria em Amamentação"
                subtitle="Consultoria em Amamentação"
                description={<>
                    <p>A consultoria em amamentação é indicada sempre que a amamentação não está fluindo com conforto, segurança ou prazer. Dor, insegurança e dúvidas não são sinais de fraqueza — são sinais de que você precisa de orientação especializada.</p>
                </>}
                benefits={[
                    "Correção da pega e do posicionamento",
                    "Redução ou eliminação da dor",
                    "Prevenção do desmame precoce",
                    "Mais confiança para a mãe",
                    "Melhor eficiência da mamada",
                    "Fortalecimento do vínculo mãe-bebê"
                ]}
                indications={[
                    "Dor ao amamentar",
                    "Fissuras ou rachaduras",
                    "Pega incorreta",
                    "Bebê que mama por longos períodos",
                    "Baixa produção de leite",
                    "Bebê com dificuldade de sucção",
                    "Insegurança nas primeiras mamadas",
                    "Uso de bicos artificiais"
                ]}
                imageSrc="/images/service_consultancy.png"
                imageAlt="Consultora orientando mãe na amamentação"
                ctaLabel="Agendar Consultoria Presencial"
                ctaLink="https://wa.me/5511999494829?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20Consultoria%20Presencial."
                target="_blank"
                rel="noopener noreferrer"
                reversed={false}
                bgVariant="white"
            />

            {/* 2. Laserterapia */}
            <ServiceDetail
                id="laserterapia"
                title="Laserterapia na Amamentação"
                subtitle="Laserterapia na Amamentação"
                description={<>
                    <strong className="block text-xl mb-4 text-terracotta/90">Um grande aliado contra dor, fissuras e inflamações</strong>
                    <p className="mb-4">A laserterapia é um recurso terapêutico seguro, indolor e altamente eficaz, amplamente utilizado como complemento nas consultorias em amamentação.</p>
                    <p className="mb-4"><strong>Como a laserterapia atua (mecanismo de ação):</strong><br />
                        O laser atua diretamente nas células, estimulando a regeneração celular, aumentando a circulação sanguínea e modulando o processo inflamatório. Isso favorece a cicatrização dos tecidos lesionados e proporciona alívio da dor de forma natural e segura.</p>
                    <div className="bg-white p-4 rounded-none border-l-4 border-terracotta my-6">
                        <p className="text-sm italic text-gray-600">👉 A dor e os machucados nas mamas estão entre as principais causas de desmame precoce. A laserterapia, associada à correção da pega, é uma grande aliada para preservar a amamentação.</p>
                    </div>
                </>}
                benefits={[
                    "Alívio rápido da dor",
                    "Aceleração da cicatrização",
                    "Redução da inflamação e do inchaço",
                    "Estímulo à regeneração dos tecidos",
                    "Melhora da vascularização local",
                    "Conforto desde as primeiras aplicações"
                ]}
                indications={[
                    "Fissuras mamárias",
                    "Dor persistente ao amamentar",
                    "Inflamações nos mamilos",
                    "Assaduras em bebês",
                    "Dor na incisão da cesárea",
                    "Lacerações do parto normal",
                    "Processos inflamatórios"
                ]}
                imageSrc="/images/service_laser.png"
                imageAlt="Aplicação de laserterapia para conforto na amamentação"
                ctaLabel="Agendar Laserterapia"
                ctaLink="https://wa.me/5511999494829?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Laserterapia."
                target="_blank"
                rel="noopener noreferrer"
                reversed={true}
                bgVariant="beige"
            />

            {/* 3. Preparação na Gestação */}
            <ServiceDetail
                id="gestacao"
                title="Preparação para Amamentação na Gestação"
                subtitle="Preparação para Amamentação na Gestação"
                description={<>
                    <strong className="block text-xl mb-4 text-terracotta/90">A amamentação começa antes do bebê nascer</strong>
                    <p>Muitas dificuldades da amamentação podem ser evitadas quando a mãe se prepara ainda durante a gestação. A preparação é indicada para gestantes que desejam iniciar a amamentação com mais segurança, consciência e tranquilidade.</p>
                    <p className="mt-4 italic text-terracotta">Preparar-se é um ato de autocuidado e proteção da sua amamentação.</p>

                    <div className="mt-6">
                        <h4 className="font-bold text-terracotta mb-2">O que é trabalhado:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            <li>Fisiologia da amamentação</li>
                            <li>Golden Hour e primeiras mamadas</li>
                            <li>Pega correta e posicionamento</li>
                            <li>Organização do enxoval funcional</li>
                            <li>Construção da rede de apoio familiar</li>
                            <li>Quebra de mitos que geram medo</li>
                        </ul>
                    </div>
                </>}
                benefits={[
                    "Maior segurança emocional no pós-parto",
                    "Redução de dor e fissuras nas primeiras mamadas",
                    "Mais confiança na primeira pega",
                    "Menor risco de desmame precoce"
                ]}
                indications={[
                    "Gestantes de primeira viagem",
                    "Gestantes com dificuldades anteriores",
                    "Medo da dor ou de não conseguir",
                    "Desejo de viver uma amamentação leve"
                ]}
                imageSrc="/images/service_pregnancy.png"
                imageAlt="Gestante se preparando para amamentação"
                ctaLabel="Saber mais sobre Preparação"
                ctaLink="https://wa.me/5511999494829?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Prepara%C3%A7%C3%A3o%20na%20Gesta%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                reversed={false}
                bgVariant="white"
            />

            {/* 4. Desmame Gentil */}
            <ServiceDetail
                id="desmame"
                title="Desmame Gentil"
                subtitle="Desmame Gentil"
                description={<>
                    <strong className="block text-xl mb-4 text-terracotta/90">Respeito, vínculo e acolhimento até o final da jornada</strong>
                    <p className="mb-4">O desmame é parte natural da amamentação — e também precisa ser cuidado. O desmame gentil respeita o tempo emocional da mãe e do bebê, sem rupturas abruptas, culpa ou sofrimento desnecessário.</p>
                    <p><strong>Como funciona:</strong><br />
                        O acompanhamento é feito de forma personalizada, com orientações progressivas via WhatsApp, respeitando o ritmo da dupla mãe-bebê até a finalização do desmame.</p>
                </>}
                benefits={[
                    "Menos sofrimento emocional",
                    "Preservação do vínculo mãe-bebê",
                    "Redução de dor e ingurgitamento",
                    "Processo mais leve e consciente"
                ]}
                indications={[
                    "Desejo de encerrar a amamentação",
                    "Mudanças na rotina familiar",
                    "Retorno ao trabalho",
                    "Limites físicos ou emocionais"
                ]}
                imageSrc="/images/service_weaning.png"
                imageAlt="Mãe e filho em momento de conexão e afeto"
                ctaLabel="Orientação Desmame Gentil"
                ctaLink="https://wa.me/5511999494829?text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20com%20o%20Desmame%20Gentil."
                target="_blank"
                rel="noopener noreferrer"
                reversed={true}
                bgVariant="beige"
            />

            {/* 5. Retorno ao Trabalho */}
            <ServiceDetail
                id="trabalho"
                title="Retorno ao Trabalho e Amamentação"
                subtitle="Retorno ao Trabalho e Amamentação"
                description={<>
                    <strong className="block text-xl mb-4 text-terracotta/90">É possível continuar amamentando</strong>
                    <p className="mb-4">Voltar ao trabalho não precisa significar o fim da amamentação. Com orientação correta, é possível manter a produção de leite e adaptar a rotina de forma saudável e realista.</p>
                    <p>O acompanhamento inclui orientações sobre ordenha, armazenamento do leite materno e adaptação da rotina, com suporte contínuo por WhatsApp.</p>
                </>}
                benefits={[
                    "Manutenção da amamentação",
                    "Mais segurança e organização",
                    "Menos ansiedade na transição",
                    "Orientações práticas e personalizadas"
                ]}
                indications={[
                    "Mães que estão retornando ao trabalho",
                    "Dúvidas sobre ordenha e armazenamento",
                    "Medo de redução da produção",
                    "Organização da nova rotina"
                ]}
                imageSrc="/images/service_work.png"
                imageAlt="Mãe organizada para retorno ao trabalho"
                ctaLabel="Planejar Retorno ao Trabalho"
                ctaLink="https://wa.me/5511999494829?text=Ol%C3%A1!%20Gostaria%20de%20planejar%20meu%20Retorno%20ao%20Trabalho%20mantendo%20a%20amamenta%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                reversed={false}
                bgVariant="white"
            />

            {/* Closing CTA */}
            <Section className="bg-cream">
                <Container>
                    <div className="bg-[#9D5951] text-white p-8 md:p-12 text-center shadow-lg relative overflow-hidden group border border-white/5 max-w-4xl mx-auto">
                        {/* Subtle decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

                            <h2 className="font-cormorant text-3xl md:text-5xl mb-6 leading-tight tracking-tight">
                                Na Colo & Calor, você encontra <br />
                                <span className="italic font-light">mais do que técnica</span>.
                            </h2>

                            <div className="w-16 h-0.5 bg-beige/30 mb-6" />

                            <p className="font-raleway text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-2xl">
                                Você encontra presença, escuta e um caminho seguro para viver a amamentação com confiança, sem dor e com vínculo.
                                <br /><br />
                                <span className="text-beige font-medium">Permita-se ser cuidada enquanto cuida do seu bebê. Eu estou aqui para te guiar.</span>
                            </p>

                            <Button
                                href="https://wa.me/5511999494829"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                size="lg"
                                className="!bg-beige !text-terracotta hover:!bg-[#dcbca0] transition-all duration-300 px-8 py-4 text-base font-bold uppercase tracking-wider shadow-md"
                            >
                                Falar com a consultora no WhatsApp
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
