import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
    title: "Política de Privacidade | Colo & Calor",
    description: "Saiba como a Colo & Calor protege seus dados e garante sua privacidade.",
    alternates: {
        canonical: '/privacidade',
    },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-20">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Privacidade', item: '/privacidade' }
                ]}
            />
            {/* Hero */}
            <section className="bg-cream py-20 text-center">
                <Container>
                    <h1 className="font-cormorant text-5xl md:text-6xl text-terracotta mb-4">
                        Política de Privacidade
                    </h1>
                    <p className="font-raleway text-xl text-[#8E7878] max-w-2xl mx-auto font-medium">
                        Transparência e cuidado com seus dados.
                    </p>
                </Container>
            </section>

            {/* Content */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto prose prose-terracotta font-raleway text-gray-700">
                        <p className="mb-8 italic text-sm text-gray-500">
                            Última atualização: 02 de Fevereiro de 2026
                        </p>

                        <p className="mb-8">
                            Na Colo & Calor, privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes. Por isso, esta presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam nosso site.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">1. Quais dados coletamos?</h2>
                        <p className="mb-6">
                            Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li><strong>Dados fornecidos por você:</strong> Nome, e-mail e telefone de contato através de formulários ou botões de WhatsApp.</li>
                            <li><strong>Dados coletados automaticamente:</strong> Informações de navegação (cookies) através das ferramentas Google Tag Manager e Microsoft Clarity para entender como o site é utilizado e melhorar sua performance.</li>
                        </ul>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">2. Como coletamos os seus dados?</h2>
                        <p className="mb-8">
                            A coleta dos seus dados pessoais ocorre quando você preenche formulários no site, clica em nossos links de contato ou simplesmente navega em nossas páginas.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">3. Para que finalidades utilizamos seus dados?</h2>
                        <p className="mb-6">Utilizamos os dados para:</p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>Entrar em contato para agendamento de consultorias.</li>
                            <li>Enviar informações solicitadas sobre o Método Colo & Calor.</li>
                            <li>Análise estatística de navegação para melhoria contínua do site.</li>
                        </ul>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">4. Seus Direitos</h2>
                        <p className="mb-8">
                            Você pode, a qualquer momento, solicitar o acesso, correção ou exclusão de seus dados pessoais entrando em contato conosco através do e-mail <a href="mailto:metodocoloecalor@gmail.com" className="text-terracotta hover:underline font-semibold">metodocoloecalor@gmail.com</a>.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">5. Segurança dos Dados</h2>
                        <p className="mb-8">
                            Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, extravio ou alteração desses dados.
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
