import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { Container } from './Container';
import { Check } from 'lucide-react';

interface ServiceDetailProps {
    title: string;
    subtitle?: string;
    description: React.ReactNode;
    benefits?: string[];
    benefitsTitle?: string;
    indications?: string[];
    indicationsTitle?: string;
    imageSrc: string;
    imageAlt: string;
    ctaLabel?: string;
    ctaLink?: string;
    target?: string;
    rel?: string;
    reversed?: boolean;
    bgVariant?: 'white' | 'beige';
    id?: string;
    locations?: string[];
    preCtaText?: string;
}

export function ServiceDetail({
    title,
    subtitle,
    description,
    benefits = [],
    benefitsTitle = "Benefícios",
    indications = [],
    indicationsTitle = "Indicações",
    imageSrc,
    imageAlt,
    ctaLabel = "Agendar Consultoria",
    ctaLink = "#contato",
    target,
    rel,
    reversed = false,
    bgVariant,
    id,
    locations = [],
    preCtaText
}: ServiceDetailProps) {
    const bgColor = bgVariant
        ? (bgVariant === 'white' ? 'bg-white' : 'bg-cream')
        : (reversed ? 'bg-white' : 'bg-cream');

    return (
        <section id={id} className={`py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 ${bgColor}`}>
            <Container>
                <div className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start ${reversed ? 'md:flex-row-reverse' : ''}`}>

                    {/* Image Column */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-[4/5] md:aspect-square rounded-none overflow-hidden shadow-2xl">
                            <div className={`absolute inset-0 bg-terracotta/10 mix-blend-multiply z-10 rounded-none`} />
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2">
                        {subtitle && (
                            <span className="inline-block px-3 py-1 bg-terracotta/10 rounded-none text-terracotta text-sm font-semibold mb-4">
                                {subtitle}
                            </span>
                        )}
                        <h2 className="font-cormorant text-4xl md:text-5xl text-terracotta mb-6 leading-tight">
                            {title}
                        </h2>

                        <div className="font-raleway text-gray-700 text-lg mb-8 leading-relaxed space-y-4">
                            {description}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 mb-10">
                            {benefits.length > 0 && (
                                <div>
                                    <h3 className="font-cormorant text-xl text-terracotta font-bold mb-4 border-b border-terracotta/20 pb-2">{benefitsTitle}</h3>
                                    <ul className="space-y-2">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-raleway">
                                                <Check size={16} className="text-terracotta mt-0.5 shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {indications.length > 0 && (
                                <div>
                                    <h3 className="font-cormorant text-xl text-terracotta font-bold mb-4 border-b border-terracotta/20 pb-2">{indicationsTitle}</h3>
                                    <ul className="space-y-2">
                                        {indications.map((indication, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-raleway">
                                                <span className="w-1.5 h-1.5 rounded-none bg-terracotta/60 mt-2 shrink-0" />
                                                <span>{indication}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {preCtaText && (
                            <p className="font-cormorant text-terracotta italic text-xl mb-6 max-w-lg">
                                {preCtaText}
                            </p>
                        )}

                        <Button href={ctaLink} size="lg" target={target} rel={rel}>
                            {ctaLabel}
                        </Button>

                        {locations.length > 0 && (
                            <div className="mt-8">
                                <div className="flex flex-wrap gap-2">
                                    {locations.map((city, index) => (
                                        <span key={index} className="px-3 py-1 bg-white border border-terracotta/20 text-terracotta text-xs font-medium">
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </Container>
        </section>
    );
}
