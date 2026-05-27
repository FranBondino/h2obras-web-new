import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full relative overflow-hidden">
            {/* Background Branding */}
            <div className="absolute inset-0 technical-grid opacity-[0.03] pointer-events-none"></div>

            {/* Main grid */}
            <div className="container mx-auto px-8 md:px-24 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24 items-start">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-10">
                        <div className="flex items-center justify-start transition-opacity hover:opacity-100 group">
                            <img
                                src="/h2obras-web-new/logoh2o_clean.png"
                                alt="H2O Obras"
                                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                                style={{
                                    imageRendering: 'crisp-edges'
                                }}
                            />
                        </div>
                        <div className="border-l-2 border-accent pl-6 pt-2">
                            <p className="text-secondary/90 text-sm font-body leading-relaxed uppercase tracking-tighter">
                                Proyecto y Ejecución de Instalaciones <br /> de alta precisión <br /> <span className="text-xs font-technical opacity-60">EST. 2009</span>
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h5 className="text-[11px] font-technical font-black uppercase tracking-[0.4em] text-primary/70">Estructura Operativa</h5>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'EMPRESA', to: '/' },
                                { label: 'PORTAFOLIO', to: '/portfolio' },
                                { label: 'EQUIPAMIENTO', to: '/equipment' },
                                { label: 'CONTACTO', to: '/contact' },
                            ].map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-primary font-headline font-black text-lg hover:text-secondary transition-all duration-300 tracking-tighter uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Specialized Logistics */}
                    <div className="space-y-8">
                        <h5 className="text-[11px] font-technical font-black uppercase tracking-[0.4em] text-primary/70">Activos Técnicos</h5>
                        <div className="flex flex-col gap-4">
                            {[
                                'SANITARIAS & GAS',
                                'SISTEMAS INCENDIO',
                                'INFRAESTRUCTURA',
                                'SUSTENTABILIDAD'
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 group/item">
                                    <div className="w-1.5 h-px bg-accent/40 group-hover/item:w-3 transition-all"></div>
                                    <span className="text-primary font-headline font-bold text-[13px] tracking-tight italic opacity-80 uppercase transition-opacity hover:opacity-100 group-hover/item:text-secondary">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Institutional Hubs */}
                    <div className="space-y-10">
                        <h5 className="text-[11px] font-technical font-black uppercase tracking-[0.4em] text-primary/70">Sedes y Centros</h5>
                        <div className="space-y-6">
                            <div className="group border-l border-outline-variant/20 pl-4">
                                <p className="text-[9px] font-technical uppercase tracking-widest text-primary/60 mb-2">SEDE ROSARIO</p>
                                <p className="text-sm text-primary font-headline font-bold tracking-tighter uppercase leading-tight">Av. Pellegrini 1260 <br /> Santa Fe, AR</p>
                            </div>
                            <div className="group border-l border-outline-variant/20 pl-4">
                                <p className="text-[9px] font-technical uppercase tracking-widest text-primary/60 mb-2">SEDE CABA</p>
                                <p className="text-sm text-primary font-headline font-bold tracking-tighter uppercase leading-tight">Austria 1951 <br /> Buenos Aires, AR</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-8 items-center pt-12 border-t border-outline-variant/10 mt-20">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-[11px] font-technical text-secondary/70 uppercase tracking-widest">Normas NFPA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/20"></div>
                        <span className="text-[11px] font-technical text-secondary/70 uppercase tracking-widest">Sello FM/UL</span>
                    </div>
                </div>
            </div>

            {/* Bottom Technical Bar */}
            <div className="border-t border-outline-variant/10 bg-surface/50 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-8 md:px-24 py-12 md:py-20 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <p className="text-secondary/60 text-[11px] font-technical uppercase tracking-[0.4em]">
                            © 2026 H2OBRAS
                        </p>
                        <div className="hidden md:flex gap-4">
                            <div className="w-1 h-1 bg-accent"></div>
                            <div className="w-1 h-1 bg-accent/40"></div>
                            <div className="w-1 h-1 bg-accent/20"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-secondary/70 text-[10px] font-technical uppercase tracking-widest">
                        <span>NORMATIVA NFPA</span>
                        <span>CERTIFICACIÓN FM/UL</span>
                    </div>

                    <p className="text-secondary/60 text-[11px] font-technical uppercase tracking-widest">
                        DESARROLLADO POR <a href="https://funnagency.com" target="_blank" rel="noopener noreferrer" className="text-primary font-black hover:text-secondary transition-colors">FUNN_AGENCY</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
