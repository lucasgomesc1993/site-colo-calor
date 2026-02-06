import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
    title: "Termos de Uso | Colo & Calor",
    description: "Confira as regras e condições para utilização do site e serviços da Colo & Calor.",
    alternates: {
        canonical: '/termos',
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-20">
            <BreadcrumbSchema
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Termos de Uso', item: '/termos' }
                ]}
            />
            {/* Hero */}
            <section className="bg-cream py-20 text-center">
                <Container>
                    <h1 className="font-cormorant text-5xl md:text-6xl text-terracotta mb-4">
                        Termos de Uso
                    </h1>
                    <p className="font-raleway text-xl text-[#8E7878] max-w-2xl mx-auto font-medium">
                        Regras e condições para utilização dos nossos serviços.
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
                            Seja bem-vinda ao site da Colo & Calor. Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">1. Uso de Licença</h2>
                        <p className="mb-6">
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Colo & Calor, apenas para visualização transitória pessoal e não comercial.
                        </p>
                        <p className="mb-6">Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>Modificar ou copiar os materiais;</li>
                            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
                        </ul>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">2. Isenção de Responsabilidade</h2>
                        <p className="mb-8">
                            Os materiais no site da Colo & Calor são fornecidos "como estão". A Colo & Calor não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">3. Limitações</h2>
                        <p className="mb-8">
                            Em nenhum caso a Colo & Calor ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">4. Precisão dos Materiais</h2>
                        <p className="mb-8">
                            Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Colo & Calor não garante que qualquer material em seu site seja preciso, completo ou atual, embora busquemos sempre a excelência.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">5. Links</h2>
                        <p className="mb-8">
                            A Colo & Calor não analisou todos os locais vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso pela Colo & Calor.
                        </p>

                        <h2 className="font-cormorant text-3xl text-terracotta mt-12 mb-6">6. Modificações</h2>
                        <p className="mb-8">
                            A Colo & Calor pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
