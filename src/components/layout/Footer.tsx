import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer id="contato" className="bg-terracotta text-white py-20 relative overflow-hidden border-t border-white/5">
            {/* Subtle premium background glow */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-beige rounded-full blur-[150px] transform translate-x-1/3 translate-y-1/3 opacity-20"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-left">
                    {/* Column 1: Logo & Bio */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                            <div className="relative h-[52px] w-[160px]">
                                <Image
                                    src="/images/logo-branco-2.webp"
                                    alt="Colo & Calor Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-white/80 font-raleway text-sm leading-relaxed max-w-[260px]">
                            Acolhendo mães, nutrindo vínculos. Consultoria especializada em amamentação e laserterapia.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.instagram.com/coloecalorconsultoria" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://wa.me/5511999494829" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1" aria-label="WhatsApp">
                                <FaWhatsapp size={18} />
                            </a>
                            <a href="https://www.youtube.com/@coloecalorconsultoria" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1" aria-label="YouTube">
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links Rápidos */}
                    <div>
                        <h3 className="font-cormorant text-2xl text-white mb-6 tracking-tight relative inline-block">
                            Links Rápidos
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-beige rounded-full opacity-60"></span>
                        </h3>
                        <ul className="space-y-3 font-raleway text-sm">
                            <li><Link href="/" className="text-white/70 hover:text-white transition-colors duration-200">Início</Link></li>
                            <li><Link href="/servicos" className="text-white/70 hover:text-white transition-colors duration-200">Serviços</Link></li>
                            <li><Link href="/sobre" className="text-white/70 hover:text-white transition-colors duration-200">Sobre a Camila</Link></li>
                            <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors duration-200">Blog</Link></li>
                            <li><Link href="/metodo" className="text-white/70 hover:text-white transition-colors duration-200">Método</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contato */}
                    <div>
                        <h3 className="font-cormorant text-2xl text-white mb-6 tracking-tight relative inline-block">
                            Contato
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-beige rounded-full opacity-60"></span>
                        </h3>
                        <ul className="space-y-4 font-raleway text-sm">
                            <li>
                                <a href="https://wa.me/5511999494829" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-200">
                                    <span className="p-2 bg-white/5 group-hover:bg-white/10 rounded-lg transition-colors">
                                        <FaWhatsapp size={18} />
                                    </span>
                                    <span>(11) 99949-4829</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:metodocoloecalor@gmail.com" className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-200">
                                    <span className="p-2 bg-white/5 group-hover:bg-white/10 rounded-lg transition-colors">
                                        <FaEnvelope size={18} />
                                    </span>
                                    <span className="break-all">metodocoloecalor@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Localização */}
                    <div>
                        <h3 className="font-cormorant text-2xl text-white mb-6 tracking-tight relative inline-block">
                            Onde Atuamos
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-beige rounded-full opacity-60"></span>
                        </h3>
                        <div className="space-y-4 font-raleway text-sm">
                            <div className="flex gap-3 text-white/70 group">
                                <span className="p-2 bg-white/5 group-hover:bg-white/10 h-fit rounded-lg transition-colors">
                                    <MapPin size={18} className="text-beige" />
                                </span>
                                <div>
                                    <p className="font-semibold text-white mb-1">Atendimento Presencial:</p>
                                    <p className="leading-relaxed">São Paulo, ABC e Vales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-[11px] font-raleway">
                    <p className="order-2 md:order-1">© 2026 Colo & Calor. Todos os direitos reservados.</p>
                    <div className="flex gap-8 order-1 md:order-2">
                        <Link href="/privacidade" className="hover:text-white transition-colors uppercase tracking-widest">Política de Privacidade</Link>
                        <Link href="/termos" className="hover:text-white transition-colors uppercase tracking-widest">Termos de Uso</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
