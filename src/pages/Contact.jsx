import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <>
            <main className="pt-28 bg-surface">
                {/* Hero Section */}
                <section className="relative h-[300px] md:h-[400px] flex items-center bg-primary overflow-hidden">
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
                                    <span className="text-accent text-[10px] font-technical tracking-[0.4em] uppercase">Formulario de Ingeniería</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white leading-[0.85] tracking-tighter mb-8 uppercase">
                                    Contacto y <br /> <span className="text-accent">Presupuestos</span>
                                </h1>
                                <div className="max-w-2xl border-l-4 border-accent pl-10 py-2">
                                    <p className="text-lg md:text-xl text-on-primary-container font-body leading-relaxed opacity-80">
                                        Solicite asesoramiento técnico o presupuesto para nuevos proyectos de escala nacional.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Infrastructure Network */}
                <section className="py-20 bg-surface relative overflow-hidden">
                    <div className="container mx-auto px-8 md:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                            {/* Left: Global Hubs */}
                            <div className="lg:col-span-5 space-y-24">
                                <div>
                                    <div className="flex items-center gap-6 mb-16">
                                        <div className="w-12 h-1 bg-primary"></div>
                                        <h2 className="text-3xl font-headline font-black text-primary uppercase tracking-tighter">OFICINAS</h2>
                                    </div>
                                    <div className="space-y-16">
                                        <div className="relative pl-8 border-l border-outline-variant/20 group">
                                            <div className="absolute top-0 -left-1 w-2 h-2 bg-accent"></div>
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-headline font-black text-primary tracking-tighter uppercase">ROSARIO</h3>
                                                <span className="text-[10px] font-technical text-accent uppercase tracking-widest bg-accent/5 px-2 py-1">SEDE CENTRAL</span>
                                            </div>
                                            <p className="text-secondary/70 font-body leading-relaxed text-lg italic">Av. Pellegrini 1260 Piso 13 Dto. B<br />(2000) Rosario, Santa Fe.</p>
                                        </div>
                                        <div className="relative pl-8 border-l border-outline-variant/20 group">
                                            <div className="absolute top-0 -left-1 w-2 h-2 bg-primary"></div>
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-headline font-black text-primary tracking-tighter uppercase">CABA</h3>
                                                <span className="text-[10px] font-technical text-secondary/40 uppercase tracking-widest">SEDE CABA</span>
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
                                        <a href="mailto:info@h2obras.com" className="flex items-center gap-8 group">
                                            <div className="w-16 h-16 bg-surface-container-low border border-outline-variant/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white">mail</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-technical text-secondary/40 uppercase tracking-widest mb-1">Correo Oficial</p>
                                                <p className="text-2xl font-headline font-black text-primary group-hover:text-primary/70 transition-colors">info@h2obras.com</p>
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
                                            DEPÓSITOS
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="bg-surface p-10 border-t-8 border-primary shadow-sm hover:-translate-y-2 transition-transform duration-500">
                                                <p className="text-[10px] font-technical text-accent uppercase tracking-widest mb-6">Depósito 01</p>
                                                <h3 className="text-2xl font-headline font-black text-primary mb-4 tracking-tighter uppercase whitespace-pre-line leading-tight">ESPAÑA{"\n"}5281</h3>
                                                <p className="text-secondary/60 text-sm font-body leading-relaxed group-hover:text-secondary transition-colors italic">Esq. Regimiento 11<br />(2000) Rosario</p>
                                            </div>
                                            <div className="bg-surface p-10 border-t-8 border-primary shadow-sm hover:-translate-y-2 transition-transform duration-500">
                                                <p className="text-[10px] font-technical text-accent uppercase tracking-widest mb-6">Depósito 02</p>
                                                <h3 className="text-2xl font-headline font-black text-primary mb-4 tracking-tighter uppercase whitespace-pre-line leading-tight">GÜEMES{"\n"}2798</h3>
                                                <p className="text-secondary/60 text-sm font-body leading-relaxed group-hover:text-secondary transition-colors italic">Esq. Ovidio Lagos<br />(2000) Rosario</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Consultation Form */}
                <section className="py-24 bg-surface relative overflow-hidden" id="technical-form">
                    <div className="absolute inset-0 technical-grid opacity-10"></div>
                    <div className="container mx-auto px-8 md:px-24 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h2 className="text-3xl md:text-5xl font-headline font-black text-primary mb-10 tracking-tighter leading-none uppercase">FORMULARIO <br /> DE CONTACTO</h2>
                                    <p className="text-secondary/70 text-lg font-body leading-relaxed mb-12">
                                        Complete sus datos para que nuestro equipo pueda contactarlo a la brevedad.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="bg-white border border-outline-variant/20 p-12 md:p-16 shadow-xl rounded-sm"
                                >
                                    <form className="space-y-12">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="space-y-3">
                                                <label className="text-xs font-technical text-primary uppercase tracking-widest block font-black">RAZÓN SOCIAL</label>
                                                <input className="w-full bg-surface border border-outline-variant/50 h-14 px-6 text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-primary/40" placeholder="NOMBRE DE LA EMPRESA O ENTIDAD" type="text" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-technical text-primary uppercase tracking-widest block font-black">CORREO ELECTRÓNICO</label>
                                                <input className="w-full bg-surface border border-outline-variant/50 h-14 px-6 text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-primary/40" placeholder="EMAIL@SYSTEM.COM" type="email" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-technical text-primary uppercase tracking-widest block font-black">TIPO DE PROYECTO</label>
                                                <div className="relative w-full">
                                                    <select className="w-full bg-surface border border-outline-variant/50 h-14 px-6 pr-12 text-primary font-body text-sm focus:outline-none focus:border-accent appearance-none transition-colors">
                                                        <option className="bg-surface text-primary">INSTALACIONES SANITARIAS</option>
                                                        <option className="bg-surface text-primary">REDES DE GAS</option>
                                                        <option className="bg-surface text-primary">SISTEMAS CONTRA INCENDIO</option>
                                                        <option className="bg-surface text-primary">OBRAS DE INFRAESTRUCTURA</option>
                                                        <option className="bg-surface text-primary">CLIMATIZACIÓN Y CALEFACCIÓN</option>
                                                    </select>
                                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none">
                                                        expand_more
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-technical text-primary uppercase tracking-widest block font-black">UBICACIÓN</label>
                                                <input className="w-full bg-surface border border-outline-variant/50 h-14 px-6 text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-primary/40" placeholder="CIUDAD / PROVINCIA" type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-technical text-primary uppercase tracking-widest block font-black">ALCANCE DEL PROYECTO</label>
                                            <textarea className="w-full bg-surface border border-outline-variant/50 p-8 text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors min-h-[150px] placeholder:text-primary/40" placeholder="DESCRIBA LOS PARÁMETROS TÉCNICOS..."></textarea>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="w-full py-6 bg-primary text-white font-headline font-black text-lg uppercase tracking-[0.3em] flex items-center justify-center gap-6 shadow-xl hover:bg-accent transition-colors duration-300 group"
                                        >
                                            ENVIAR
                                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
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
