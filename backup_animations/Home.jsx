import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.35 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="w-full h-full object-cover mix-blend-luminosity"
                        alt="Background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxPT5BWIeArnSq3xxz3i56DPTvmFixpiIQZwUGCtmstpmqrUHFhhLGWtBzZoyRziS3XYUhfMMP9nhekZmYuJKewaHPEWvYdVzEqLlTVWQGz8fJY1IooaJzxPXMicO5b28Y0sXG4hWp9gbnVffPwkYVBLFPGs-WHX9BBH6Ssr2rz_6jBymWNKral2_3anFKmmxwb84E9PlPXcIib861R1vJDjAOjfINb-BY2V5UN1eueE4FiY0cehDdu_PIo4ghcFSjRlt5eUDasw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full px-8 md:px-20 grid md:grid-cols-12 gap-8 items-end pb-20">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="md:col-span-9"
                    >
                        <motion.div variants={fadeUp} className="inline-block px-3 py-1 bg-tertiary-fixed/10 border border-primary/20 text-tertiary-fixed-dim text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm rounded-sm">
                            Infraestructura Soberana de Alta Capacidad
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-federal uppercase mb-8 leading-tight">
                            Proyecto y Ejecución de Instalaciones <br /> <span className="text-gradient-primary">de Alta Complejidad</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-secondary text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12">
                            Instalaciones sanitarias, gas, e incendio bajo normativas internacionales para obras a escala federal.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <button className="bg-white text-slate-950 font-bold px-8 py-4 tracking-tighter uppercase rounded-none flex items-center gap-3 group hover:bg-cyan-50 transition-colors shadow-xl shadow-white/5">
                                Ver Obras Críticas
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button className="border border-outline text-primary font-bold px-8 py-4 tracking-tighter uppercase rounded-none hover:bg-white/5 hover:border-slate-500 transition-all backdrop-blur-md">
                                Especificaciones Técnicas
                            </button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="md:col-span-3 hidden md:block text-right pb-4 border-r-2 border-primary/20 pr-6"
                    >
                        <span className="text-on-tertiary-container/50 text-[10px] tracking-[0.3em] uppercase block mb-2">Núcleo Técnico</span>
                        <span className="text-on-surface text-xs font-mono">LAT: -32.9468 <br /> LON: -60.6393</span>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics Band */}
            <section className="bg-surface-container-low border-y border-outline-variant py-16 px-8 md:px-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 to-transparent pointer-events-none"></div>
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
                >
                    {[
                        { val: "+25 Años", label: "de Experiencia" },
                        { val: "LEED", label: "Certificación Platinum" },
                        { val: "NFPA", label: "Normativas UL-FM" },
                        { val: "FEDERAL", label: "Oficinas ROS & CABA" }
                    ].map((metric, i) => (
                        <motion.div variants={fadeUp} key={i} className="flex flex-col gap-2 group">
                            <span className="text-tertiary-fixed-dim text-4xl md:text-5xl font-black tracking-tighter group-hover:text-cyan-300 transition-colors">{metric.val}</span>
                            <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">{metric.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-32 px-8 md:px-20 bg-slate-50">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900  uppercase tracking-tighter mb-6">
                            Expertise en <br /> Complejidad Estructural
                        </h2>
                        <p className="text-outline  text-lg leading-relaxed">
                            Operamos en el núcleo de las infraestructuras críticas, integrando Proyecto Ejecutivo, Dirección de Obra y Ejecución bajo un solo mando técnico.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-on-tertiary-container  font-mono text-sm tracking-widest uppercase">
                        [ Protocolos ISO 9001:2015 ]
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Service Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="md:col-span-7 bg-white  p-12 min-h-[400px] flex flex-col justify-between group border border-slate-200  shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-4 bg-cyan-50  rounded-full group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-4xl text-on-tertiary-container " data-weight="fill">fire_extinguisher</span>
                            </div>
                            <span className="text-slate-200  font-black text-6xl transition-colors group-hover:text-cyan-100 :text-cyan-900/50">01</span>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-3xl font-bold text-slate-900  uppercase mb-4">Sistemas Contra Incendio</h3>
                            <p className="text-on-surface-variant  mb-8 max-w-md">Instalaciones certificadas NFPA / UL-FM para aeropuertos, centros logísticos e industrias de alto riesgo.</p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-1.5 bg-background  text-slate-700  text-[10px] font-bold uppercase tracking-widest">Rociadores ESFR</span>
                                <span className="px-4 py-1.5 bg-background  text-slate-700  text-[10px] font-bold uppercase tracking-widest">Bombas Listadas</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="md:col-span-5 bg-surface-container-low p-12 min-h-[400px] flex flex-col justify-between text-primary relative overflow-hidden group shadow-xl shadow-slate-900/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="flex justify-between items-start relative z-10">
                            <div className="p-4 bg-white/5 rounded-full group-hover:bg-tertiary-fixed/20 transition-colors duration-500">
                                <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim" data-weight="fill">eco</span>
                            </div>
                            <span className="text-primary/10 font-black text-6xl">02</span>
                        </div>
                        <div className="relative z-10 mt-12">
                            <h3 className="text-3xl font-bold uppercase mb-4 text-primary">Termodinámica &amp; Sustentabilidad</h3>
                            <p className="text-secondary mb-8">Optimización de recursos hídricos y eficiencia energética para desarrollos de escala federal LEED.</p>
                            <button className="text-xs font-bold tracking-widest uppercase border-b border-white/30 pb-2 hover:border-cyan-400 hover:text-tertiary-fixed-dim transition-colors">Sistemas Inverter</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-32 px-8 md:px-20 bg-background text-primary">
                <div className="mb-20">
                    <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-sm font-bold tracking-[0.5em] text-on-tertiary-container uppercase mb-4">Portfolio Federal</motion.h2>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-1 bg-tertiary-fixed"></motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {[
                        { type: 'Salud Pública', id: '2022_OP', name: 'Hospital Regional Oscar Orias (Jujuy)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmS-J43u4Oer2wqPtAvWY6Gl53q2g64vAhCU3x-Y3EkHBae0VmMyw4PEt2EyAG-p7WaMX4fIxZx95sJM1cFjTztrcBSSerOigPsBEMfAICFQGBZAPOzUo5Oh3ieOGNvNW6Y0dp9jxDT2YfaJBOWFAOScqmv3odVa8NJRfuzmOjZCr9JfyRmR9x9qTLEA8qZ3a2OUNGbkqsRAXaS16T9chDkPEmSXnaSnfw1n8PYnnIouei0hS0YxWPATMkl_-onokm-n6klfIxwsE', stat1: ['Superficie', '25.000 m2'], stat2: ['Alcance', 'Integral'] },
                        { type: 'Transporte', id: '2023_INFRA', name: 'Aeropuerto Internacional Rosario', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRWfX4MAoAzvr_qylku0x6HUTgBcbem7x7EyfCZDGvo-hiKa7EgpdJz89_7BVRkbjWkEuuiQ2uZSVAvg7hcUn1orCdvwPznIWmQNuxOzXfEMo6gwa7Q-m8tkN75juKFDERQfOf5Q5S1oIdej6_UOyIBe__3GinTgNdD5AcKvWPC6DHZrf1lb9eHEzAUqShh21iC2YPZY_Ey42Cx7pQsvu3uwjtMzhzTCzc9v5ct93Bu8ZNMrBvflOYFqjBk-kF0W2ZOCgKRmEijZA', stat1: ['Protocolo', 'Red NFPA'], stat2: ['Capacidad', 'Alta Compl.'] },
                        { type: 'Corporativo', id: '2021_CORP', name: 'La Segunda Seguros', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRN4QmsE3EvV3lljYTyE07CMI9n5xs7kCKkkFAPbLqojo_2siSJ2Yt7uhzfsMEtB-2BwPfVxtpCnh4Ama_etUOm4bH4XiBT4ieYExe5IvToiKaiFD_tWT45CIhiDIqYNuIFJ4RbUkmd7GGpqh5ZWu5QkWK23FziY2MQA4BnhsUsQdvUBluVR8YSAvgnbPfJJippOTzsjQvyAvJgzl8pr91_aV3a2tTnMmOvvKXYJ58oUq4u6XAz0v3mJezbW-vaMYXqZl9ga-Dsdw', stat1: ['Certificación', 'LEED Plat.'], stat2: ['Tipo', 'Sustentable'] }
                    ].map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            className={`flex flex-col gap-6 group cursor-pointer lg:mt-[${i * 4}rem]`}
                        >
                            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-container/20/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <img className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={proj.name} src={proj.img} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">{proj.type}</span>
                                    <span className="text-[10px] font-mono text-on-surface-variant">{proj.id}</span>
                                </div>
                                <h3 className="text-xl font-bold uppercase text-primary mb-4 group-hover:text-cyan-100 transition-colors">{proj.name}</h3>
                                <div className="space-y-2 border-t border-outline-variant pt-4">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-secondary">{proj.stat1[0]}</span>
                                        <span className="font-bold">{proj.stat1[1]}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-secondary">{proj.stat2[0]}</span>
                                        <span className="font-bold uppercase tracking-widest text-on-tertiary-container">{proj.stat2[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
