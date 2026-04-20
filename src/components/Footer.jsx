import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full relative overflow-hidden">
            {/* Background Branding */}
            <div className="absolute inset-0 technical-grid opacity-[0.03] pointer-events-none"></div>
            
            {/* Main grid */}
            <div className="container mx-auto px-8 md:px-24 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-8">
                        <div className="h-16 md:h-20 w-[240px] md:w-[350px] flex items-center justify-start overflow-hidden relative opacity-90 transition-opacity hover:opacity-100 group">
                            <img
                                src="/h2obras-web-new/logoh2o_new.png"
                                alt="H2O Obras"
                                className="h-[350px] md:h-[400px] w-auto max-w-none object-contain absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 dark:brightness-0 dark:invert transition-all duration-500 group-hover:scale-105"
                                style={{ 
                                    imageRendering: 'crisp-edges',
                                    objectPosition: '0% 50%'
                                }}
                            />
                        </div>
                        <div className="border-l-2 border-accent pl-6 pt-4">
                            <p className="text-secondary/70 text-sm font-body leading-relaxed uppercase tracking-tighter">
                                Ingeniería hidráulica <br /> y civil de alta precisión <br /> <span className="text-xs font-technical opacity-40">EST. 2009</span>
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h5 className="text-[10px] font-technical font-black uppercase tracking-[0.4em] text-primary/40">DIR_SYSTEM</h5>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'EMPRESA', to: '/' },
                                { label: 'PORTFOLIO', to: '/portfolio' },
                                { label: 'EQUIPAMIENTO', to: '/equipment' },
                                { label: 'CONTACTO', to: '/contact' },
                            ].map(link => (
                                <Link 
                                    key={link.to} 
                                    to={link.to} 
                                    className="text-primary font-headline font-black text-lg hover:text-accent transition-all duration-300 tracking-tighter uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Specialized Logistics */}
                    <div className="space-y-8">
                        <h5 className="text-[10px] font-technical font-black uppercase tracking-[0.4em] text-primary/40">CORE_CAPACITY</h5>
                        <div className="flex flex-col gap-4">
                            {[
                                'SANITARIAS & GAS',
                                'SISTEMAS INCENDIO',
                                'INFRAESTRUCTURA',
                                'LEED_PLATINUM'
                            ].map(item => (
                                <span key={item} className="text-secondary/60 text-sm font-headline font-bold tracking-tight italic opacity-70 uppercase">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Institutional Hubs */}
                    <div className="space-y-10">
                        <h5 className="text-[10px] font-technical font-black uppercase tracking-[0.4em] text-primary/40">NODE_LOCATIONS</h5>
                        <div className="space-y-6">
                            <div className="group border-l border-outline-variant/20 pl-4">
                                <p className="text-[9px] font-technical uppercase tracking-widest text-accent mb-2">HUB_ROSARIO</p>
                                <p className="text-sm text-primary font-headline font-bold tracking-tighter uppercase leading-tight">Av. Pellegrini 1260 <br /> Santa Fe, AR</p>
                            </div>
                            <div className="group border-l border-outline-variant/20 pl-4">
                                <p className="text-[9px] font-technical uppercase tracking-widest text-secondary/40 mb-2">NODE_CABA</p>
                                <p className="text-sm text-primary font-headline font-bold tracking-tighter uppercase leading-tight">Austria 1951 <br /> Buenos Aires, AR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Technical Bar */}
            <div className="border-t border-outline-variant/10 bg-surface/50 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-8 md:px-24 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <p className="text-secondary/40 text-[10px] font-technical uppercase tracking-[0.4em]">
                            © 2026 H2O_OBRAS_V2
                        </p>
                        <div className="hidden md:flex gap-4">
                            <div className="w-1 h-1 bg-accent"></div>
                            <div className="w-1 h-1 bg-accent/40"></div>
                            <div className="w-1 h-1 bg-accent/20"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-secondary/40 text-[9px] font-technical uppercase tracking-widest">
                        <span>NFPA_CERTIFIED</span>
                        <span>FM_UL_COMPLIANT</span>
                        <span>ISO_9001_READY</span>
                    </div>

                    <p className="text-secondary/40 text-[10px] font-technical uppercase tracking-widest">
                        ENGINEERING BY <a href="https://funnagency.com" target="_blank" rel="noopener noreferrer" className="text-primary font-black hover:text-accent transition-colors">FUNN_AGENCY</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
