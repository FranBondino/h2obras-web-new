import { motion } from 'framer-motion';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Equipment() {
    return (
        <>
            <main className="pt-20 bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[500px] md:h-[819px] flex items-center overflow-hidden py-28 md:py-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img className="w-full h-full object-cover grayscale opacity-30" data-alt="Close-up of a massive industrial excavator at a high-end construction site with cold blue atmospheric lighting and technical details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuEJIyi0KlXHGt7DY0cZJVgJFBYGaxz6t38fueyfnmhRvylXyvyOBlcMGK-9KUGu4dsJ8A2wlHSfXn3-Jrqc0J_XK_nS3zLi2ds0rE9h9VGRU2KCeMczOSAgTGfuCU254aeg44GhEiCslxUgoxxjiSP-Pa5XGhT8cf-t83plKxAgvFq0W3WXQZqlZs2peEelzcaqhWTfqZGXZJFjZ1fehhCXWoOfynLId1t9K4s7JCcxvkuuiF-WQM4ErJjUBJK4vQJ7n_MxVxBT4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
                    </motion.div>

                    <div className="container mx-auto px-6 md:px-10 relative z-10 grid grid-cols-12 gap-6">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="col-span-12 lg:col-span-8"
                        >
                            <motion.span variants={fadeUpVariant} className="inline-block px-4 py-1 machined-glass text-tertiary-fixed-dim font-headline font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-primary/20 rounded-sm">Ingeniería de Infraestructura Soberana</motion.span>

                            <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-black text-primary leading-[0.9] tracking-tighter mb-8 uppercase text-gradient-primary">
                                Capacidad <br /> Operativa <br /> Autónoma
                            </motion.h1>

                            <motion.div variants={fadeUpVariant} className="machined-glass border-l-4 border-primary p-8 max-w-2xl rounded-r-lg">
                                <p className="text-lg md:text-xl text-on-surface font-light leading-relaxed">
                                    Infraestructura, logística y maquinaria pesada propia. Garantizamos ejecución ininterrumpida sin depender de subcontratación de terceros.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Technical Metadata Decoration */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-12 right-12 hidden lg:block font-headline text-[10px] tracking-widest text-on-tertiary-container/40 space-y-1 text-right uppercase"
                    >
                        <p>LATERAL_CORE_ASSET: ACTIVE</p>
                        <p>DEPLOYMENT_RADIUS: FEDERAL_UNLIMITED</p>
                        <p>STRUCTURAL_INTEGRITY: 100%</p>
                    </motion.div>
                </section>

                {/* Featured Fleet (Structural Grid) */}
                <section className="bg-surface-container-low py-24 technical-grid border-t border-outline-variant">
                    <div className="container mx-auto px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-8"
                        >
                            <div>
                                <h2 className="text-4xl font-headline font-black text-primary tracking-tighter uppercase mb-2">Flota de Activos Críticos</h2>
                                <p className="text-on-tertiary-container font-medium uppercase tracking-widest text-xs">Unidades de Movimiento y Precisión Estructural</p>
                            </div>
                            <div className="mt-4 md:mt-0 text-right font-headline text-2xl font-bold text-cyan-900 tracking-tighter">
                                FASE_01: MOVIMIENTO PESADO
                            </div>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {/* Movimiento de Suelos */}
                            <motion.div variants={fadeUpVariant} className="machined-glass rounded-xl p-10 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] border border-outline-variant hover:border-primary/30">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-on-tertiary-container group-hover:text-tertiary-fixed-dim transition-colors">precision_manufacturing</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-primary mb-4 uppercase leading-tight">Movimiento de Suelos y Zanjeo</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Minicargadoras Bobcat S450
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Excavadoras Bobcat E-26
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Niveladora y Rodillo Compactador
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-outline-variant">
                                    <p className="text-[10px] text-outline tracking-widest uppercase group-hover:text-on-tertiary-container transition-colors">Categoría de Activo: Movimiento de Suelos Móvil</p>
                                </div>
                            </motion.div>

                            {/* Trabajos en Altura */}
                            <motion.div variants={fadeUpVariant} className="machined-glass rounded-xl p-10 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] border border-outline-variant hover:border-primary/30">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-on-tertiary-container group-hover:text-tertiary-fixed-dim transition-colors">height</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-primary mb-4 uppercase leading-tight">Trabajos en Altura</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Plataformas Mantall XE160W
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Alcance vertical de hasta 16 metros
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Sistemas de estabilización todo terreno
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-outline-variant">
                                    <p className="text-[10px] text-outline tracking-widest uppercase group-hover:text-on-tertiary-container transition-colors">Categoría de Activo: Despliegue Aéreo</p>
                                </div>
                            </motion.div>

                            {/* Perforación */}
                            <motion.div variants={fadeUpVariant} className="machined-glass rounded-xl p-10 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] border border-outline-variant hover:border-primary/30">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-on-tertiary-container group-hover:text-tertiary-fixed-dim transition-colors">architecture</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-primary mb-4 uppercase leading-tight">Perforación y Anclajes</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Hilti D250 Sistemas de Corte Pesado
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Hilti D160 Precisión de Diamante
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-on-surface transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs text-cyan-800 group-hover:text-tertiary-fixed-dim">radio_button_checked</span> Tecnología de Anclaje Químico
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-outline-variant">
                                    <p className="text-[10px] text-outline tracking-widest uppercase group-hover:text-on-tertiary-container transition-colors">Categoría de Activo: Precisión Estructural</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Specialized Tech Grid */}
                <section className="py-32 bg-background text-primary relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none mix-blend-screen">
                        <img className="w-full h-full object-cover" data-alt="Technical blueprint and engineering lines overlapping industrial components with a cold neon glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGaxTOMdLB4L9gvFdLSKSDLOn1660Irq_TFWrkGAdAkXLiBwLPf_OJ2O6Xrg-RwKN9k5liWzw7BQXXdgMjA0UHK7dXB8eKq0YFL6N-4kz3I1iHdffvQo3hfmNXEHxT9UWjlPp_-yyiKwLxmfj6qF6IjGvkib9AL32DayVdLqRApPbJ7QKho3Y7b83HtXrDnHw672pfGb6jk4NXKx9AK_J6GJRnj6CroAtYPtmHzD6j-yahJMMp4ctoWYcN9E_EB4F1MN0ub4tmhPo" />
                    </div>

                    <div className="container mx-auto px-10 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mb-20"
                        >
                            <h2 className="text-5xl font-headline font-black mb-6 uppercase tracking-tighter text-gradient-primary">Tecnología Especializada de Montaje</h2>
                            <p className="text-secondary text-lg leading-relaxed">Operamos con estándares internacionales de termofusión y soldadura, utilizando herramental de alta gama para asegurar la integridad de sistemas hidráulicos complejos.</p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {/* Tech Item 1 */}
                            <motion.div variants={fadeUpVariant} className="bg-surface-container-low border border-outline-variant rounded-xl p-12 hover:bg-surface-container/80 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-on-tertiary-container text-sm font-headline tracking-widest">TECH_MOD.01</span>
                                        <span className="material-symbols-outlined text-outline group-hover:text-tertiary-fixed-dim transition-colors">settings_input_component</span>
                                    </div>
                                    <h4 className="text-2xl font-headline font-bold mb-4 uppercase text-primary">Sistemas Victaulic</h4>
                                    <p className="text-secondary text-sm leading-relaxed mb-6">Large diameter groovers and roll-grooving specialized tools for seismic-ready mechanical joints.</p>
                                </div>
                            </motion.div>

                            {/* Tech Item 2 */}
                            <motion.div variants={fadeUpVariant} className="bg-surface-container-low border border-outline-variant rounded-xl p-12 hover:bg-surface-container/80 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-on-tertiary-container text-sm font-headline tracking-widest">TECH_MOD.02</span>
                                        <span className="material-symbols-outlined text-outline group-hover:text-tertiary-fixed-dim transition-colors">heat_pump</span>
                                    </div>
                                    <h4 className="text-2xl font-headline font-bold mb-4 uppercase text-primary">Soldadura TIG Inverter</h4>
                                    <p className="text-secondary text-sm leading-relaxed mb-6">Stainless Steel high-purity specialists for pharmaceutical and industrial water treatment clusters.</p>
                                </div>
                            </motion.div>

                            {/* Tech Item 3 */}
                            <motion.div variants={fadeUpVariant} className="bg-surface-container-low border border-outline-variant rounded-xl p-12 hover:bg-surface-container/80 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-on-tertiary-container text-sm font-headline tracking-widest">TECH_MOD.03</span>
                                        <span className="material-symbols-outlined text-outline group-hover:text-tertiary-fixed-dim transition-colors">bolt</span>
                                    </div>
                                    <h4 className="text-2xl font-headline font-bold mb-4 uppercase text-primary">Electrofusionadoras</h4>
                                    <p className="text-secondary text-sm leading-relaxed mb-6">Advanced fusion control units supporting large-scale HD-PE pipes up to Ø 600 mm.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Logistics & Admin Callout */}
                <section className="py-32 bg-surface-container-low border-y border-outline-variant">
                    <div className="container mx-auto px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-5"
                            >
                                <div className="machined-glass rounded-2xl p-12 shadow-2xl border-l-4 border-primary relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-headline font-black text-primary uppercase mb-6 tracking-tight">Poder Logístico <br /> y Técnico</h3>
                                        <p className="text-secondary mb-8 font-medium">Nuestra capacidad de respuesta federal se apoya en una flota logística pesada y una oficina técnica de alto rendimiento.</p>
                                        <div className="space-y-8">
                                            <div className="flex items-start group">
                                                <span className="material-symbols-outlined text-on-tertiary-container mr-4 group-hover:scale-110 transition-transform">local_shipping</span>
                                                <div>
                                                    <p className="text-sm font-bold text-primary uppercase tracking-widest">Logística Pesada</p>
                                                    <p className="text-xs text-on-surface-variant mt-2">Camiones DFM 14tn + Flotas Foton/Lifan para despliegue rápido en obra.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start group">
                                                <span className="material-symbols-outlined text-on-tertiary-container mr-4 group-hover:scale-110 transition-transform">monitoring</span>
                                                <div>
                                                    <p className="text-sm font-bold text-primary uppercase tracking-widest">Oficina Técnica i7</p>
                                                    <p className="text-xs text-on-surface-variant mt-2">Plóters y estaciones de trabajo de alto rendimiento para modelado BIM en tiempo real.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:col-span-7 grid grid-cols-2 gap-6 h-full"
                            >
                                <div className="h-80 relative rounded-xl overflow-hidden shadow-2xl group">
                                    <img className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700" data-alt="Modern high-tech logistics truck in a warehouse environment with dramatic industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl-fDbT0YCeajs693i6ABy4tpi6DRwMudTgd4kk7PO60kDNC60YBj8uCxR5V7f7EJz9jo9tCDfhA0XeYOzft1TXpMjQcktAmvIttpV7fdRymVxddpep7z5NEHcZAQkJIFcWF8_2zSsZEdzksL_XOYuTBnB4TqsFrPS8cKzMW5zBgfN4Uw1BHcRmWoiVuLbTjEqgueyQMnDI0bbNLuZZToLjjl-MLmgbj-fUIMxTtY1JFIXuf1UeNCVRDkF5L1JztjnB_gF0w9O-4E" />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
                                </div>
                                <div className="h-80 relative mt-12 rounded-xl overflow-hidden shadow-2xl group">
                                    <img className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700" data-alt="Technical office interior with high-end computers and engineering blueprints in a professional industrial design office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx8BDL9Ue6VtSStHGKUjpscljbTnLPF2JkruntqlOewH8yBE96SEYwuhmvjEqomvlx8qXimSo75TE2bZUE74ObuUAEs6sndkuTBMKhUYvdNjAX0jjQUrLTXIeYUR8JxAWINgs05nMXWaWhob5qH_fHeTvhkIBxMGrnqXV9P4Hyh6lhrUplrdGv8Q9wAelPsJnT-K3NigyNXLreV-Y1OaaUJnWUaOiGOk6LDbs1kxD2twfHJShBeOfSLOKOK97v1rJqcg1wdy6HvGQ" />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-background text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-container/20/10 blur-[120px] rounded-full max-w-3xl mx-auto -translate-y-1/2"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="container mx-auto px-10 max-w-4xl relative z-10"
                    >
                        <h2 className="text-5xl font-headline font-black text-primary mb-8 uppercase tracking-tighter">¿Listo para escalar su <br /> infraestructura?</h2>
                        <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto font-light">Poseemos el equipamiento y el conocimiento para transformar grandes visiones en realidades operativas.</p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-6 bg-primary-container text-primary font-headline font-bold text-sm uppercase tracking-widest hover:bg-tertiary-fixed transition-all duration-300 rounded-sm shadow-[0_0_40px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/50"
                        >
                            Solicitar Cotización de Obra
                        </motion.button>
                    </motion.div>
                </section>
            </main>
        </>
    );
}

