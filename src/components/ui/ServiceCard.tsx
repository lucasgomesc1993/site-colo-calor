import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
    return (
        <div className="bg-white p-6 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full border border-beige/20">
            <div className="bg-beige/30 p-3 rounded-none mb-4 text-terracotta">
                {icon}
            </div>
            <h3 className="font-cormorant text-2xl text-terracotta font-semibold mb-2">{title}</h3>
            <p className="font-raleway text-gray-600 mb-4 flex-grow">{description}</p>
            <Link href={href} className="text-terracotta font-medium hover:underline flex items-center gap-1 group">
                Ver detalhes
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
        </div>
    );
}
