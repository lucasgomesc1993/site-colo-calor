import { JsonLd } from './JsonLd';

const SITE_URL = 'https://colocalor.com.br'; // Ajustar para o domínio real se conhecido

export const OrganizationSchema = () => (
    <JsonLd
        data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Colo & Calor',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            sameAs: [
                'https://www.instagram.com/colocalor/',
                'https://www.instagram.com/bemgestaroficial/'
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-11-99949-4829',
                contactType: 'customer service',
                areaServed: 'BR',
                availableLanguage: 'Portuguese'
            }
        }}
    />
);

export const ProfessionalServiceSchema = () => (
    <JsonLd
        data={{
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Colo & Calor - Camila Toniatti',
            image: `${SITE_URL}/images/camila.jpeg`,
            '@id': `${SITE_URL}/#professional-service`,
            url: SITE_URL,
            telephone: '+5511999494829',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Atendimento Domiciliar e Online',
                addressLocality: 'São Paulo',
                addressRegion: 'SP',
                postalCode: '01000-000',
                addressCountry: 'BR'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: -23.5505,
                longitude: -46.6333
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '08:00',
                    closes: '18:00'
                }
            ],
            priceRange: '$$'
        }}
    />
);

export const BreadcrumbSchema = ({ items }: { items: { name: string; item: string }[] }) => (
    <JsonLd
        data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.item.startsWith('http') ? item.item : `${SITE_URL}${item.item}`
            }))
        }}
    />
);

export const BlogPostingSchema = ({ post }: { post: any }) => (
    <JsonLd
        data={{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : undefined,
            datePublished: post.date, // Idealmente em formato ISO, mas usaremos do post por enquanto
            author: {
                '@type': 'Person',
                name: post.author,
                url: `${SITE_URL}/sobre`
            },
            publisher: {
                '@type': 'Organization',
                name: 'Colo & Calor',
                logo: {
                    '@type': 'ImageObject',
                    url: `${SITE_URL}/logo.png`
                }
            },
            description: post.excerpt
        }}
    />
);
