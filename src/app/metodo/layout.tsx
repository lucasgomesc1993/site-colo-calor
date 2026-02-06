import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Método Colo & Calor - Plano de Resgate da Amamentação",
    description: "Conheça o Método Colo & Calor, um passo a passo para gestantes e mães vencerem a dor e a insegurança na amamentação com Camila Toniatti.",
    alternates: {
        canonical: '/metodo',
    },
};

export default function MetodoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
