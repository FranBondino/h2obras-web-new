import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <>
            <main className="pt-20 bg-surface">
                {/* Hero Section */}
                <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden py-28 md:py-0">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 technical-grid opacity-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-8 md:px-24 relative z-10">
                        <div className="max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-1 bg-accent"></div>
                                    <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">LINK_INFRA_V2</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl lg:text-9xl font-headline font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase">
                                    CONSULTAS Y <br /> <span className="text-white/40">PRESUPUESTOS</span>
                                </h1>
                                <div className="max-w-2xl border-l-4 border-accent pl-10 py-2">
                                    <p className="text-xl md:text-2xl text-on-primary-container font-body leading-relaxed opacity-80">
                                        Active nuestro protocolo de consultoría técnica para nuevos proyectos o licitaciones federales.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Infrastructure Network */}
                <section className="py-32 bg-surface relative overflow-hidden">
                    <div className="container mx-auto px-8 md:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                            {/* Left: Global Hubs */}
                            <div className="lg:col-span-5 space-y-24">
                                <div>
                                    <div className="flex items-center gap-6 mb-16">
                                        <div className="w-12 h-1 bg-primary"></div>
                                        <h2 className="text-3xl font-headline font-black text-primary uppercase tracking-tighter">CENTROS OPERATIVOS</h2>
                                    </div>
                                    <div className="space-y-16">
                                        <div className="relative pl-8 border-l border-outline-variant/20 group">
                                            <div className="absolute top-0 -left-1 w-2 h-2 bg-accent"></div>
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-headline font-black text-primary tracking-tighter uppercase">ROSARIO</h3>
                                                <span className="text-[10px] font-technical text-accent uppercase tracking-widest bg-accent/5 px-2 py-1">MAIN_HUB</span>
                                            </div>
                                            <p className="text-secondary/70 font-body leading-relaxed text-lg italic">Av. Pellegrini 1260 Piso 13 Dto. B<br />(2000) Rosario, Santa Fe.</p>
                                        </div>
                                        <div className="relative pl-8 border-l border-outline-variant/20 group">
                                            <div className="absolute top-0 -left-1 w-2 h-2 bg-primary"></div>
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-headline font-black text-primary tracking-tighter uppercase">CABA</h3>
                                                <span className="text-[10px] font-technical text-secondary/40 uppercase tracking-widest">NODE_02</span>
                                            </div>
                                            <p className="text-secondary/70 font-body leading-relaxed text-lg italic">Austria 1951 Piso 6º C<br />Ciudad Autónoma de Buenos Aires.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-6 mb-16">
                                        <div className="w-12 h-1 bg-primary"></div>
                                        <h2 className="text-3xl font-headline font-black text-primary uppercase tracking-tighter">COMUNICACIÓN DIRECTA</h2>
                                    </div>
                                    <div className="space-y-10">
                                        <a href="tel:03414480566" className="flex items-center gap-8 group">
                                            <div className="w-16 h-16 bg-surface-container-low border border-outline-variant/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white">call</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-technical text-secondary/40 uppercase tracking-widest mb-1">CENTRAL_SPEC</p>
                                                <p className="text-2xl font-headline font-black text-primary group-hover:text-accent transition-colors">0341- 4480566</p>
                                            </div>
                                        </a>
                                        <a href="mailto:ricardobondino@gmail.com" className="flex items-center gap-8 group">
                                            <div className="w-16 h-16 bg-surface-container-low border border-outline-variant/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white">mail</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-technical text-secondary/40 uppercase tracking-widest mb-1">CORREO_OFFICIAL</p>
                                                <p className="text-2xl font-headline font-black text-primary group-hover:text-accent transition-colors">info@h2obras.com</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Technical Logistics Map/Depots */}
                            <div className="lg:col-span-7">
                                <div className="bg-surface-container-low border border-outline-variant/10 p-16 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 technical-grid w-full h-full opacity-5 pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-headline font-black text-primary mb-16 uppercase tracking-tighter flex items-center gap-4">
                                            <span className="material-symbols-outlined">warehouse</span>
                                            MATRIZ LOGÍSTICA
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="bg-surface p-10 border-t-8 border-primary shadow-sm hover:-translate-y-2 transition-transform duration-500">
                                                <p className="text-[10px] font-technical text-accent uppercase tracking-widest mb-6">DEPOT_ALPHA</p>
                                                <h3 className="text-2xl font-headline font-black text-primary mb-4 tracking-tighter uppercase whitespace-pre-line leading-tight">ESPAÑA{"\n"}5281</h3>
                                                <p className="text-secondary/60 text-sm font-body leading-relaxed group-hover:text-secondary transition-colors italic">Esq. Regimiento 11<br />(2000) Rosario</p>
                                            </div>
                                            <div className="bg-surface p-10 border-t-8 border-primary shadow-sm hover:-translate-y-2 transition-transform duration-500">
                                                <p className="text-[10px] font-technical text-accent uppercase tracking-widest mb-6">DEPOT_BETA</p>
                                                <h3 className="text-2xl font-headline font-black text-primary mb-4 tracking-tighter uppercase whitespace-pre-line leading-tight">GÜEMES{"\n"}2798</h3>
                                                <p className="text-secondary/60 text-sm font-body leading-relaxed group-hover:text-secondary transition-colors italic">Esq. Ovidio Lagos<br />(2000) Rosario</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-20 pt-12 border-t border-outline-variant/10">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-technical text-secondary/40 tracking-[0.4em] uppercase">SYSTEM_READY</span>
                                                <div className="flex gap-2">
                                                    <div className="w-1 h-1 bg-accent"></div>
                                                    <div className="w-1 h-1 bg-accent/40"></div>
                                                    <div className="w-1 h-1 bg-accent/20"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Consultation Form */}
                <section className="py-48 bg-primary relative overflow-hidden" id="technical-form">
                    <div className="absolute inset-0 technical-grid opacity-10"></div>
                    <div className="container mx-auto px-8 md:px-24 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h2 className="text-5xl md:text-7xl font-headline font-black text-white mb-10 tracking-tighter leading-none uppercase">SOLICITUD <br /> DE OBRA</h2>
                                    <p className="text-on-primary-container text-xl font-body leading-relaxed mb-12 opacity-80">
                                        Nuestro equipo de ingeniería evaluará su solicitud en un plazo federal de 48 hs.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-white/40">
                                            <span className="material-symbols-outlined text-sm">check_circle</span>
                                            <span className="text-xs font-technical uppercase tracking-widest">VALIDACIÓN_REMITENTE</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-white/40">
                                            <span className="material-symbols-outlined text-sm">check_circle</span>
                                            <span className="text-xs font-technical uppercase tracking-widest">ANÁLISIS_LOGÍSTICO</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-white/40">
                                            <span className="material-symbols-outlined text-sm">check_circle</span>
                                            <span className="text-xs font-technical uppercase tracking-widest">ASIGNACIÓN_INGENIERO</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="lg:col-span-8">
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 md:p-20 shadow-2xl machined-glass"
                                >
                                    <form className="space-y-12">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-technical text-primary/60 uppercase tracking-[0.4em] block">ID_LEGAL / RAZÓN SOCIAL</label>
                                                <input className="w-full bg-black/5 border border-primary/10 h-16 px-6 text-primary font-headline text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-primary/30" placeholder="ENTIDAD" type="text" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-technical text-primary/60 uppercase tracking-[0.4em] block">COMMS_LINK / CORREO</label>
                                                <input className="w-full bg-black/5 border border-primary/10 h-16 px-6 text-primary font-headline text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-primary/30" placeholder="EMAIL@SYSTEM" type="email" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-technical text-primary/60 uppercase tracking-[0.4em] block">PROJECT_TYPE / CATEGORÍA</label>
                                                <select className="w-full bg-black/5 border border-primary/10 h-16 px-6 text-primary font-headline text-lg focus:outline-none focus:border-primary appearance-none transition-colors">
                                                    <option className="bg-surface text-primary">INST_SANITARIAS</option>
                                                    <option className="bg-surface text-primary">INST_GAS</option>
                                                    <option className="bg-surface text-primary">SISTEMA_INCENDIO</option>
                                                    <option className="bg-surface text-primary">OBRAS_INFRAESTRUCTURA</option>
                                                    <option className="bg-surface text-primary">OTRO_CRÍTICO</option>
                                                </select>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-technical text-primary/60 uppercase tracking-[0.4em] block">LOC_GEO / UBICACIÓN</label>
                                                <input className="w-full bg-black/5 border border-primary/10 h-16 px-6 text-primary font-headline text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-primary/30" placeholder="CIUDAD / PROVINCIA" type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-technical text-primary/60 uppercase tracking-[0.4em] block">TECH_SPEC / ALCANCE DEL PROYECTO</label>
                                            <textarea className="w-full bg-black/5 border border-primary/10 p-8 text-primary font-headline text-lg focus:outline-none focus:border-primary transition-colors min-h-[200px] placeholder:text-primary/30" placeholder="DESCRIBA LOS PARÁMETROS TÉCNICOS..."></textarea>
                                        </div>
                                        
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-8 bg-accent text-on-accent font-headline font-black text-xl uppercase tracking-[0.3em] flex items-center justify-center gap-6 shadow-2xl"
                                        >
                                            TRANSMITIR SOLICITUD
                                            <span className="material-symbols-outlined">send</span>
                                        </motion.button>
                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
