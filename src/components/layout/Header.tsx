"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Blog', href: '/blog' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[#9D5951] shadow-md py-3 transition-all duration-300"
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative h-[52px] w-[166px] md:h-[62px] md:w-[208px]">
                            <Image
                                src="/images/logo-branco-2.webp"
                                alt="Colo & Calor Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`font-raleway text-sm font-medium transition-colors duration-200 relative py-1 ${active
                                        ? 'text-white border-b-2 border-beige shadow-sm font-semibold'
                                        : 'text-white/90 hover:text-white border-b-2 border-transparent'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="flex items-center gap-4 ml-4">
                            <Link href="/metodo">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className={`!border-white !text-white hover:!bg-white/10 font-bold px-6 ${pathname === '/metodo' ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-[#9D5951]' : ''}`}
                                >
                                    Método
                                </Button>
                            </Link>
                            <Button
                                size="sm"
                                href="https://wa.me/5511999494829"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="!bg-[#FDFBF7] !text-[#9D5951] hover:!bg-[#E7D0BC] font-bold"
                            >
                                Agendar
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden p-2 text-white`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-[60] bg-[#9D5951] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Close Button Inside Overlay */}
                <button
                    className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-all duration-300 active:scale-90"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Fechar menu"
                >
                    <X size={32} />
                </button>

                <Container className="h-full flex flex-col justify-center">
                    <nav className="flex flex-col items-center gap-10 py-12">
                        <div className="flex flex-col items-center gap-8 w-full mt-4">
                            {navItems.map((item, index) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`font-cormorant text-4xl font-medium tracking-tight transition-all duration-500 hover:scale-105 active:scale-95 ${isMobileMenuOpen
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-8 opacity-0'
                                            } ${active
                                                ? 'text-white border-b-2 border-beige shadow-sm'
                                                : 'text-white/90 hover:text-white border-b-2 border-transparent'
                                            }`}
                                        style={{
                                            transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className={`w-full max-w-[280px] flex flex-col gap-4 pt-8 transition-all duration-700 delay-[400ms] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}>
                            <Link href="/metodo" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className={`w-full !border-white !text-white hover:!bg-white/10 font-bold text-lg ${pathname === '/metodo' ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-[#9D5951]' : ''}`}
                                >
                                    Conhecer Método
                                </Button>
                            </Link>
                            <Button
                                href="https://wa.me/5511999494829"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="lg"
                                className="w-full !bg-[#FDFBF7] !text-[#9D5951] hover:!bg-[#E7D0BC] font-bold text-lg shadow-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Agendar Consultoria
                            </Button>
                        </div>
                    </nav>
                </Container>
            </div>
        </header>
    );
}
