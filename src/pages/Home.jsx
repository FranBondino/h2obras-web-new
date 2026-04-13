import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-40 mix-blend-overlay" data-alt="dramatic wide shot of a massive industrial construction site with steel girders and heavy machinery under a moody deep teal and blue twilight sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxPT5BWIeArnSq3xxz3i56DPTvmFixpiIQZwUGCtmstpmqrUHFhhLGWtBzZoyRziS3XYUhfMMP9nhekZmYuJKewaHPEWvYdVzEqLlTVWQGz8fJY1IooaJzxPXMicO5b28Y0sXG4hWp9gbnVffPwkYVBLFPGs-WHX9BBH6Ssr2rz_6jBymWNKral2_3anFKmmxwb84E9PlPXcIib861R1vJDjAOjfINb-BY2V5UN1eueE4FiY0cehDdu_PIo4ghcFSjRlt5eUDasw" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full px-8 md:px-20 grid md:grid-cols-12 gap-8 items-end pb-20">
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="md:col-span-9">
                        <motion.div variants={fadeUpVariant} className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                            Marco de Infraestructura Soberana
                        </motion.div>
                        <motion.h1 variants={fadeUpVariant} className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-federal uppercase mb-8">
                            Ingeniería Hidromecánica <br /> de Alta Complejidad
                        </motion.h1>
                        <motion.p variants={fadeUpVariant} className="text-on-primary-container text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-10">
                            Instalaciones sanitarias, gas, e incendio bajo normativas internacionales para obras a escala federal.
                        </motion.p>
                        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                            <Link to="/portfolio">
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-surface-container-lowest text-primary font-bold px-8 py-4 tracking-tighter uppercase rounded-sm flex items-center gap-3 group shadow-lg shadow-black/20"
                                >
                                    Ver Obras Críticas
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </motion.button>
                            </Link>
                            <button className="border border-white/20 text-white font-bold px-8 py-4 tracking-tighter uppercase rounded-sm hover:bg-white/5 transition-colors">
                                Especificaciones Técnicas
                            </button>
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1 }} className="md:col-span-3 hidden md:block text-right pb-4 border-r-2 border-white/10 pr-6">
                        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-2">Núcleo Técnico</span>
                        <span className="text-white text-xs font-mono">LAT: -32.9468 <br /> LON: -60.6393</span>
                    </motion.div>
                </div>
            </section>
            {/* Key Metrics Band */}
            <section className="bg-surface-container-low py-16 px-8 md:px-20">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                        <span className="text-primary text-4xl font-black tracking-tighter">+25 Años</span>
                        <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">de Experiencia</span>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                        <span className="text-primary text-4xl font-black tracking-tighter">LEED</span>
                        <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Certificación Platinum</span>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                        <span className="text-primary text-4xl font-black tracking-tighter">NFPA</span>
                        <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Normativas UL-FM</span>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                        <span className="text-primary text-4xl font-black tracking-tighter">FEDERAL</span>
                        <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Oficinas en Rosario y CABA</span>
                    </motion.div>
                </motion.div>
            </section>
            {/* Services Section */}
            <section className="py-32 px-8 md:px-20 bg-surface">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div variants={fadeUpVariant} className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">Expertise en <br /> Complejidad Estructural</h2>
                        <p className="text-secondary text-lg leading-relaxed">Operamos en el núcleo de las infraestructuras críticas, integrando Proyecto Ejecutivo, Dirección de Obra y Ejecución bajo un solo mando técnico.</p>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="text-primary font-mono text-sm tracking-widest uppercase">
                        [ Protocolos ISO 9001:2015 ]
                    </motion.div>
                </motion.div>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Service Card 1 */}
                    <motion.div variants={fadeUpVariant} className="md:col-span-7 bg-surface-container-high p-12 min-h-[400px] flex flex-col justify-between group">
                        <div className="flex justify-between items-start">
                            <span className="material-symbols-outlined text-4xl text-primary" data-weight="fill">fire_extinguisher</span>
                            <span className="text-primary/20 font-black text-6xl">01</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-primary uppercase mb-4">Sistemas Contra Incendio</h3>
                            <p className="text-on-surface-variant mb-8 max-w-md">Instalaciones certificadas NFPA / UL-FM para aeropuertos, centros logísticos e industrias de alto riesgo.</p>
                            <div className="flex gap-4">
                                <span className="px-3 py-1 bg-primary-container text-white text-[9px] font-bold uppercase tracking-widest">Rociadores ESFR</span>
                                <span className="px-3 py-1 bg-primary-container text-white text-[9px] font-bold uppercase tracking-widest">Bombas Listadas</span>
                            </div>
                        </div>
                    </motion.div>
                    {/* Service Card 2 */}
                    <motion.div variants={fadeUpVariant} className="md:col-span-5 bg-primary p-12 min-h-[400px] flex flex-col justify-between text-white">
                        <div className="flex justify-between items-start">
                            <span className="material-symbols-outlined text-4xl text-tertiary-fixed" data-weight="fill">eco</span>
                            <span className="text-white/10 font-black text-6xl">02</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold uppercase mb-4">Termodinámica &amp; Sustentabilidad</h3>
                            <p className="text-on-primary-container mb-8">Optimización de recursos hídricos y eficiencia energética para desarrollos de escala federal LEED.</p>
                            <button className="text-xs font-bold tracking-widest uppercase border-b border-white/30 pb-2 hover:border-white transition-colors">Sistemas Inverter</button>
                        </div>
                    </motion.div>
                    {/* Service Card 3 */}
                    <motion.div variants={fadeUpVariant} className="md:col-span-12 bg-surface-container-highest p-12 flex flex-col md:flex-row justify-between items-center group">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="material-symbols-outlined text-4xl text-primary">water_drop</span>
                                <h3 className="text-3xl font-bold text-primary uppercase">Sanitarias &amp; Gas</h3>
                            </div>
                            <p className="text-on-surface-variant mb-8">Redes de gran diámetro, plantas de tratamiento y estaciones de regulación para obras públicas y corporativas de alta densidad.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                            <div className="p-6 bg-white shadow-sm">
                                <span className="block text-primary font-black text-2xl mb-1">D.O.</span>
                                <span className="text-[10px] uppercase font-bold text-secondary">Dirección de Obra</span>
                            </div>
                            <div className="p-6 bg-white shadow-sm">
                                <span className="block text-primary font-black text-2xl mb-1">P.E.</span>
                                <span className="text-[10px] uppercase font-bold text-secondary">Proyecto Ejecutivo</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            {/* Featured Projects */}
            <section className="py-32 px-8 md:px-20 bg-surface-container-low">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-4">Portfolio Federal</h2>
                        <div className="h-1 w-24 bg-primary"></div>
                    </div>
                    <Link to="/portfolio">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] group transition-all"
                        >
                            Ver Todas las Obras
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="material-symbols-outlined text-sm"
                            >
                                arrow_forward
                            </motion.span>
                        </motion.button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Project 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="modern brutalist architectural photography of a large regional hospital in Jujuy Argentina with sharp concrete lines and clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmS-J43u4Oer2wqPtAvWY6Gl53q2g64vAhCU3x-Y3EkHBae0VmMyw4PEt2EyAG-p7WaMX4fIxZx95sJM1cFjTztrcBSSerOigPsBEMfAICFQGBZAPOzUo5Oh3ieOGNvNW6Y0dp9jxDT2YfaJBOWFAOScqmv3odVa8NJRfuzmOjZCr9JfyRmR9x9qTLEA8qZ3a2OUNGbkqsRAXaS16T9chDkPEmSXnaSnfw1n8PYnnIouei0hS0YxWPATMkl_-onokm-n6klfIxwsE" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Salud Pública</span>
                                <span className="text-[10px] font-mono text-primary">2022_OP</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-primary mb-4">Hospital Regional Oscar Orias (Jujuy)</h3>
                            <div className="space-y-2 border-t border-primary/5 pt-4">
                                <div className="flex justify-between text-xs">
                                    <span className="text-secondary">Superficie</span>
                                    <span className="font-bold">25.000 m2</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-secondary">Alcance</span>
                                    <span className="font-bold uppercase">Instalación Integral</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="flex flex-col gap-6 mt-12 md:mt-0">
                        <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="interior view of a modern airport terminal showing intricate sprinkler and plumbing systems integrated into industrial ceiling architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRWfX4MAoAzvr_qylku0x6HUTgBcbem7x7EyfCZDGvo-hiKa7EgpdJz89_7BVRkbjWkEuuiQ2uZSVAvg7hcUn1orCdvwPznIWmQNuxOzXfEMo6gwa7Q-m8tkN75juKFDERQfOf5Q5S1oIdej6_UOyIBe__3GinTgNdD5AcKvWPC6DHZrf1lb9eHEzAUqShh21iC2YPZY_Ey42Cx7pQsvu3uwjtMzhzTCzc9v5ct93Bu8ZNMrBvflOYFqjBk-kF0W2ZOCgKRmEijZA" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Transporte</span>
                                <span className="text-[10px] font-mono text-primary">2023_INFRA</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-primary mb-4">Aeropuerto Internacional Rosario</h3>
                            <div className="space-y-2 border-t border-primary/5 pt-4">
                                <div className="flex justify-between text-xs">
                                    <span className="text-secondary">Protocolo</span>
                                    <span className="font-bold uppercase">Red NFPA</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-secondary">Capacidad</span>
                                    <span className="font-bold">Alta Complejidad</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="flex flex-col gap-6 mt-24 md:mt-0">
                        <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="sleek glass and steel corporate skyscraper in Rosario with sustainable green elements integrated into the facade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRN4QmsE3EvV3lljYTyE07CMI9n5xs7kCKkkFAPbLqojo_2siSJ2Yt7uhzfsMEtB-2BwPfVxtpCnh4Ama_etUOm4bH4XiBT4ieYExe5IvToiKaiFD_tWT45CIhiDIqYNuIFJ4RbUkmd7GGpqh5ZWu5QkWK23FziY2MQA4BnhsUsQdvUBluVR8YSAvgnbPfJJippOTzsjQvyAvJgzl8pr91_aV3a2tTnMmOvvKXYJ58oUq4u6XAz0v3mJezbW-vaMYXqZl9ga-Dsdw" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Corporativo</span>
                                <span className="text-[10px] font-mono text-primary">2021_CORP</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-primary mb-4">La Segunda Seguros</h3>
                            <div className="space-y-2 border-t border-primary/5 pt-4">
                                <div className="flex justify-between text-xs">
                                    <span className="text-secondary">Certificación</span>
                                    <span className="font-bold uppercase">LEED Platinum</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-secondary">Tipo</span>
                                    <span className="font-bold uppercase">Sustentabilidad</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-24 px-8 md:px-20 bg-surface border-y border-primary/5">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-16"
                >
                    <motion.div variants={fadeUpVariant} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-4">Confían en Nosotros</h2>
                        <p className="text-secondary text-lg">Alianzas estratégicas con las principales instituciones y empresas del país para el desarrollo de infraestructura crítica.</p>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
                        {/* Client Logos / Names */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-primary font-black text-xs tracking-tighter uppercase group-hover:opacity-100 transition-opacity">Aeropuertos Argentina 2000</span>
                            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-primary font-black text-xs tracking-tighter uppercase group-hover:opacity-100 transition-opacity">La Segunda Seguros</span>
                            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-primary font-black text-xs tracking-tighter uppercase group-hover:opacity-100 transition-opacity">Gobierno de Jujuy</span>
                            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-primary font-black text-xs tracking-tighter uppercase group-hover:opacity-100 transition-opacity">IRSA Propiedades</span>
                            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-primary font-black text-xs tracking-tighter uppercase group-hover:opacity-100 transition-opacity">Grupo Coto</span>
                            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-primary font-black text-xs tracking-tighter uppercase group-hover:opacity-100 transition-opacity">Sanatorio Parque</span>
                            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Operational Muscle Banner */}
            <section className="py-24 px-8 md:px-20 bg-primary-container relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <img className="w-full h-full object-cover" data-alt="industrial heavy machinery including a bobcat and scissor lift in a warehouse setting with sharp dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjNgAgLfrscGLo0vgmPWh_CXFQ7Yh3-SZj2fwqhqJvJc5FRLecV9O0ZXkI8xYI36YZbqbGMrFLgy_OEVqCdCdyTZZAs-4KZNR9jRfz4dW5u-KKmrG6Kfv2GjXrhyzbKnoOs51NJC5crywBfL5A5XMcyaZyqD6a8YK-KEJatvq6FSi_ONIbNTjsv5LXsrQBu6EugwTdAkoFp1VCBHZysreWEpP69VuvcbW7GJzv4eie7YLBdS-5aP8QB1g2LjFYAmDg8KB3ILlkogc" />
                </div>
                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">Músculo Operacional Propio</h2>
                        <p className="text-on-primary-container text-xl leading-relaxed mb-10">
                            Flota y Equipamiento Propio. Minicargadoras Bobcat, Plataformas Mantall, Tecnología Hilti.
                            <span className="text-white font-bold">Autonomía total sin tercerización excesiva.</span>
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-tertiary-fixed">precision_manufacturing</span>
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Flota Pesada</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-tertiary-fixed">architecture</span>
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Tecnología Hilti</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-8 border-l-4 border-tertiary-fixed">
                            <span className="text-white text-3xl font-black block mb-2">100%</span>
                            <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Autonomía Técnica</span>
                        </div>
                        <div className="bg-white/5 p-8 border-l-4 border-tertiary-fixed">
                            <span className="text-white text-3xl font-black block mb-2">M+50</span>
                            <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Unidades de Flota</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
        </>
    );
}
