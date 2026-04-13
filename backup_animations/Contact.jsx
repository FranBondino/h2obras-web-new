import { motion } from 'framer-motion';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
    return (
        <main className="bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[500px] md:h-[716px] flex items-center overflow-hidden py-28 md:py-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img className="w-full h-full object-cover filter brightness-[0.3] grayscale" alt="Modern industrial facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1B6NLqKDG2WjiXqHAXsLP4zNGasY2hpMz0URjO9bEc0DYEduaTqvQgOtM9NtqUADnmU-1k8udUmfqo4rnHKI4r1-_ayDlGDmV8OCPPaIO67hnEMPtRLoH-A2jVFJftBALfKY0WQsAxj6px8qsJ3-Rb8ewvSGX_jDOnbBfO9Xq7HCrAj4Tp_qTGoCZZ-mGrr--k3bEazFyTot5ZFi_u1_YvBKP41kru-ouNKobi7CjLggMjv1gJXud91PvuMd103SisNSp5JJTzI3" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
                </motion.div>

                <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl"
                    >
                        <motion.span variants={fadeUpVariant} className="inline-block bg-primary-container/10/50 border border-primary/30 text-tertiary-fixed-dim px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-widest mb-6 rounded-sm backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">Consultoría de Ingeniería</motion.span>
                        <motion.h1 variants={fadeUpVariant} className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter text-gradient-primary">
                            Consultoría de Ingeniería y <br />Factibilidad Técnica
                        </motion.h1>
                        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                            <a className="machined-glass border border-primary/50 text-primary px-8 py-4 rounded-sm font-bold uppercase text-sm flex items-center gap-3 hover:bg-primary-container transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]" href="#technical-form">
                                INICIAR PROTOCOLO TÉCNICO
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Metadata Divider */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-surface-container-low/50 border-y border-outline-variant py-4 px-8 overflow-hidden whitespace-nowrap"
            >
                <div className="flex justify-center items-center gap-12 text-on-tertiary-container/30 text-[0.6875rem] font-mono uppercase tracking-[0.3em]">
                    <span>REGISTRO DE INFRAESTRUCTURA SOBERANA 2026</span>
                    <span className="material-symbols-outlined text-xs">close</span>
                    <span>H2O-OP-PROTOCOL-v4.0</span>
                    <span className="material-symbols-outlined text-xs">close</span>
                    <span>ESTÁNDARES DE INGENIERÍA HIDRÁULICA</span>
                </div>
            </motion.div>

            {/* Red de Infraestructura */}
            <section className="py-24 bg-background border-b border-outline-variant">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left: Offices & Info */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:col-span-5 space-y-20"
                        >
                            <div>
                                <motion.div variants={fadeUpVariant} className="flex items-baseline gap-4 mb-10">
                                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">Oficinas</h2>
                                    <div className="flex-grow border-b border-outline-variant"></div>
                                </motion.div>
                                <div className="space-y-12">
                                    <motion.div variants={fadeUpVariant} className="group hover:bg-surface-container-low/30 p-4 -ml-4 rounded-xl transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-headline font-bold text-lg text-tertiary-fixed-dim tracking-tight">ROSARIO</h3>
                                            <span className="text-[0.65rem] font-bold text-cyan-100 px-2 bg-primary-container/20/50 rounded-sm border border-primary">HUB PRINCIPAL</span>
                                        </div>
                                        <p className="text-secondary font-light leading-relaxed">Av. Pellegrini 1260 Piso 13 Dto. B<br />(2000) Rosario, Santa Fe.</p>
                                    </motion.div>
                                    <motion.div variants={fadeUpVariant} className="group hover:bg-surface-container-low/30 p-4 -ml-4 rounded-xl transition-colors">
                                        <h3 className="font-headline font-bold text-lg text-primary group-hover:text-tertiary-fixed-dim transition-colors tracking-tight mb-2">CABA</h3>
                                        <p className="text-secondary font-light leading-relaxed">Austria 1951 Piso 6º C<br />Ciudad Autónoma de Buenos Aires.</p>
                                    </motion.div>
                                </div>
                            </div>

                            <div>
                                <motion.div variants={fadeUpVariant} className="flex items-baseline gap-4 mb-10">
                                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">Información de Contacto</h2>
                                    <div className="flex-grow border-b border-outline-variant"></div>
                                </motion.div>
                                <div className="space-y-8">
                                    <motion.div variants={fadeUpVariant} className="flex items-center gap-6 group hover:bg-surface-container-low/30 p-4 -ml-4 rounded-xl transition-colors">
                                        <div className="w-12 h-12 flex items-center justify-center machined-glass border border-primary/30 text-tertiary-fixed-dim rounded-sm group-hover:bg-primary-container group-hover:text-primary transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <span className="block text-[0.6875rem] font-bold uppercase text-on-surface-variant tracking-widest mb-1">Central Telefónica</span>
                                            <p className="font-headline font-medium text-xl text-primary tracking-tight">0341- 4480566 / 154-680331</p>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={fadeUpVariant} className="flex items-center gap-6 group hover:bg-surface-container-low/30 p-4 -ml-4 rounded-xl transition-colors">
                                        <div className="w-12 h-12 flex items-center justify-center machined-glass border border-primary/30 text-tertiary-fixed-dim rounded-sm group-hover:bg-primary-container group-hover:text-primary transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <span className="block text-[0.6875rem] font-bold uppercase text-on-surface-variant tracking-widest mb-1">Protocolo Digital</span>
                                            <p className="font-headline font-medium text-xl text-primary tracking-tight">ricardobondino@gmail.com</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Warehouses */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 bg-surface-container-low/50 border border-outline-variant rounded-2xl p-12 relative overflow-hidden backdrop-blur-sm"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="material-symbols-outlined text-8xl text-cyan-900/20 font-thin select-none">warehouse</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-baseline gap-4 mb-10">
                                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">Depósitos</h2>
                                    <div className="flex-grow border-b border-outline/50"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="machined-glass p-8 border-l-4 border-primary rounded-lg hover:shadow-[0_15px_30px_-10px_rgba(6,182,212,0.15)] transition-all"
                                    >
                                        <span className="block text-[0.6875rem] font-bold uppercase text-on-tertiary-container mb-4 tracking-widest">Logística 01</span>
                                        <h3 className="font-headline font-bold text-xl mb-4 text-primary leading-tight">España 5281</h3>
                                        <p className="text-secondary text-sm mb-4">Esq. Regimiento 11<br />(2000) Rosario</p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="machined-glass p-8 border-l-4 border-primary rounded-lg hover:shadow-[0_15px_30px_-10px_rgba(6,182,212,0.15)] transition-all"
                                    >
                                        <span className="block text-[0.6875rem] font-bold uppercase text-on-tertiary-container mb-4 tracking-widest">Logística 02</span>
                                        <h3 className="font-headline font-bold text-xl mb-4 text-primary leading-tight">Güemes 2798</h3>
                                        <p className="text-secondary text-sm mb-4">Esq. Ovidio Lagos<br />(2000) Rosario</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Form Section */}
            <section className="py-24 bg-surface-container-low relative overflow-hidden" id="technical-form">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #06b6d4 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="machined-glass p-1 shadow-2xl rounded-xl"
                    >
                        <div className="border border-outline/50 bg-background/80 rounded-lg p-8 md:p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                <div className="lg:col-span-4">
                                    <h2 className="font-headline text-4xl font-bold mb-8 leading-tight uppercase text-gradient-primary">Protocolo de Factibilidad</h2>
                                    <p className="text-secondary leading-relaxed mb-8 font-light">
                                        Complete los parámetros técnicos del proyecto para iniciar el análisis de viabilidad técnica y consultoría estructural.
                                    </p>
                                </div>
                                <div className="lg:col-span-8">
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-on-tertiary-container uppercase tracking-widest">Nombre Completo / Razón Social</label>
                                            <input className="w-full bg-surface-container-low/50 border border-outline-variant rounded-sm focus:border-primary focus:ring-1 focus:ring-cyan-500 h-14 px-4 text-primary font-medium transition-colors" placeholder="Ingrese entidad legal" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-on-tertiary-container uppercase tracking-widest">Correo Electrónico</label>
                                            <input className="w-full bg-surface-container-low/50 border border-outline-variant rounded-sm focus:border-primary focus:ring-1 focus:ring-cyan-500 h-14 px-4 text-primary font-medium transition-colors" placeholder="ejemplo@entidad.com" type="email" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-on-tertiary-container uppercase tracking-widest">Tipo de Proyecto</label>
                                            <select className="w-full bg-surface-container-low/50 border border-outline-variant rounded-sm focus:border-primary focus:ring-1 focus:ring-cyan-500 h-14 px-4 text-primary font-medium transition-colors appearance-none">
                                                <option className="bg-surface-container-low text-primary">Factibilidad Hidráulica</option>
                                                <option className="bg-surface-container-low text-primary">Estructura Industrial</option>
                                                <option className="bg-surface-container-low text-primary">Consultoría Técnica</option>
                                                <option className="bg-surface-container-low text-primary">Otro</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-on-tertiary-container uppercase tracking-widest">Ubicación de Obra</label>
                                            <input className="w-full bg-surface-container-low/50 border border-outline-variant rounded-sm focus:border-primary focus:ring-1 focus:ring-cyan-500 h-14 px-4 text-primary font-medium transition-colors" placeholder="Ciudad / Provincia" type="text" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-on-tertiary-container uppercase tracking-widest">Especificaciones Técnicas</label>
                                            <textarea className="w-full bg-surface-container-low/50 border border-outline-variant rounded-sm focus:border-primary focus:ring-1 focus:ring-cyan-500 p-4 text-primary font-medium transition-colors resize-none" placeholder="Describa los alcances del proyecto..." rows="4"></textarea>
                                        </div>
                                        <div className="md:col-span-2 mt-4">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full md:w-auto bg-primary-container hover:bg-tertiary-fixed text-primary font-bold uppercase py-5 px-12 text-sm tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                                                type="button"
                                            >
                                                ENVIAR PROTOCOLO
                                                <span className="material-symbols-outlined">send</span>
                                            </motion.button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
