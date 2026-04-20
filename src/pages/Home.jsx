import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const gridRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <div className="bg-surface">
            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-primary p-0">
                <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover mix-blend-overlay"
                        data-alt="dramatic wide shot of a massive industrial construction site with steel girders and heavy machinery under a moody deep teal and blue twilight sky"
                        src="/h2obras-web-new/hero_original_hd.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/60 to-transparent"></div>
                    <motion.div style={{ rotate: gridRotate }} className="absolute inset-0 technical-grid opacity-20"></motion.div>
                </motion.div>

                <div className="relative z-10 w-full px-6 md:px-12 grid md:grid-cols-12 gap-8 items-end pb-24 pt-32">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="md:col-span-10 lg:col-span-9"
                    >
                        <motion.div
                            variants={fadeUpVariant}
                            className="inline-block px-3 py-1 bg-accent/90 text-on-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
                        >
                            Proyecto y ejecución de instalaciones
                        </motion.div>
                        <motion.h1
                            variants={fadeUpVariant}
                            className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-headline uppercase mb-8 leading-[0.9] tracking-tighter"
                        >
                            Ingeniería de valor <br /> <span className="text-accent">a nivel federal</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUpVariant}
                            className="text-on-primary-container text-lg md:text-xl max-w-2xl font-body leading-relaxed mb-12 opacity-90"
                        >
                            Especialistas en instalaciones hidromecánicas, gas e incendio para obras de escala nacional y alta complejidad técnica.
                        </motion.p>
                        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                            <Link to="/portfolio">
                                <motion.button
                                    whileHover={{ y: -2, backgroundColor: "var(--color-accent)", color: "var(--color-on-accent)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white text-primary font-headline font-bold px-10 py-5 tracking-widest uppercase rounded-sm flex items-center gap-4 transition-all duration-300 group"
                                >
                                    Catálogo de Obras
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="md:col-span-2 lg:col-span-3 hidden md:block text-right pb-4 border-r border-white/10 pr-6"
                    >
                        <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase block mb-3 font-technical">Reg. S-Infrastructure</span>
                        <span className="text-white text-xs font-technical leading-loose opacity-60">
                            COORD: 32.94°S 60.63°W <br />
                            SCALE: NATIONAL <br />
                            OP: FEDERAL_SEC
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics Band - Technical Readouts */}
            <section className="bg-surface-container-low border-y border-outline-variant/10 py-16 px-12 md:px-24">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-none w-full"
                >
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 group">
                        <span className="text-primary text-5xl font-black font-headline tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">+25A</span>
                        <div className="h-px bg-outline-variant/30 w-full group-hover:bg-accent/50 transition-all duration-500"></div>
                        <span className="text-readout">Trayectoria Federal</span>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 group">
                        <span className="text-primary text-5xl font-black font-headline tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">LEED</span>
                        <div className="h-px bg-outline-variant/30 w-full group-hover:bg-accent/50 transition-all duration-500"></div>
                        <span className="text-readout">Eficiencia Sustentable</span>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 group">
                        <span className="text-primary text-5xl font-black font-headline tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">NFPA</span>
                        <div className="h-px bg-outline-variant/30 w-full group-hover:bg-accent/50 transition-all duration-500"></div>
                        <span className="text-readout">Protección FM/UL</span>
                    </motion.div>
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 group">
                        <span className="text-primary text-5xl font-black font-headline tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">+50</span>
                        <div className="h-px bg-outline-variant/30 w-full group-hover:bg-accent/50 transition-all duration-500"></div>
                        <span className="text-readout">Obras Ejecutadas</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section - Engineered Grid */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-surface overflow-hidden">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-20"
                    >
                        <motion.div variants={fadeUpVariant} className="max-w-4xl">
                            <div className="w-24 h-2 bg-primary mb-12"></div>
                            <h2 className="text-6xl md:text-8xl font-black text-primary font-headline uppercase tracking-tighter mb-8 leading-[0.85]">
                                Matriz de <br /> <span className="opacity-40">Especialidades</span>
                            </h2>
                            <p className="text-secondary text-xl md:text-2xl font-body leading-relaxed max-w-2xl opacity-80">
                                Un enfoque integral que abarca desde el diseño ejecutivo hasta la puesta en marcha de sistemas críticos.
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        {/* Service 01: Sanitarias & Gas */}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-8 bg-surface-container-low p-10 md:p-16 flex flex-col justify-between group relative overflow-hidden border border-outline-variant/10 shadow-sm"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-primary/5 font-headline font-black text-[180px] leading-none select-none">01</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-4xl md:text-5xl font-black text-primary font-headline uppercase tracking-tighter mb-8">Sanitarias <br /> &amp; Gas</h3>
                                <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 font-body leading-relaxed opacity-90">
                                    Instalaciones de gran envergadura, saneamiento federal y plantas de tratamiento de alta complejidad para entornos hospitalarios e industriales.
                                </p>
                            </div>

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/10">
                                <div className="p-8 bg-white dark:bg-primary-container flex flex-col gap-2">
                                    <span className="material-symbols-outlined text-primary mb-2">water_drop</span>
                                    <span className="text-primary font-headline font-bold text-xl uppercase tracking-tight">Plantas de Tratamiento</span>
                                    <span className="text-technical text-[9px] opacity-60">Sistemas de Efluentes</span>
                                </div>
                                <div className="p-8 bg-white dark:bg-primary-container flex flex-col gap-2">
                                    <span className="material-symbols-outlined text-primary mb-2">grid_view</span>
                                    <span className="text-primary font-headline font-bold text-xl uppercase tracking-tight">Redes de Alta Presión</span>
                                    <span className="text-technical text-[9px] opacity-60">Distribución Primaria</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 02: Sustentabilidad */}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-4 bg-primary p-10 md:p-14 flex flex-col justify-between text-white relative overflow-hidden group shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container z-0 opacity-90"></div>
                            <div className="absolute inset-0 technical-grid opacity-10"></div>

                            <div className="relative z-10">
                                <span className="text-white/10 font-headline font-black text-9xl leading-none block mb-8">02</span>
                                <h3 className="text-4xl font-headline font-black uppercase mb-8 tracking-tighter leading-none">Termodinámica <br /> &amp; LEED</h3>
                                <p className="text-on-primary-container text-lg font-body mb-12 leading-relaxed opacity-80">
                                    Ecoeficiencia hídrica y procesos térmicos diseñados para estándares internacionales de certificación sustentable.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover/item:border-accent transition-colors">
                                        <span className="material-symbols-outlined text-sm text-accent">energy_savings_leaf</span>
                                    </div>
                                    <span className="text-xs font-headline font-bold uppercase tracking-widest">Sistemas Solar-Térmicos</span>
                                </div>
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover/item:border-accent transition-colors">
                                        <span className="material-symbols-outlined text-sm text-accent">verified</span>
                                    </div>
                                    <span className="text-xs font-headline font-bold uppercase tracking-widest">Certificación Platinum</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 03: Contra Incendio */}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-12 bg-surface-container-lowest p-10 md:p-16 border border-outline-variant/10 flex flex-col lg:flex-row justify-between items-end group relative overflow-hidden shadow-sm"
                        >
                            <div className="relative z-10 max-w-3xl mb-12 lg:mb-0">
                                <div className="flex items-center gap-6 mb-8 group">
                                    <div className="w-16 h-16 bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                                        <span className="material-symbols-outlined text-white group-hover:text-on-accent text-3xl">local_fire_department</span>
                                    </div>
                                    <h3 className="text-5xl md:text-6xl font-black font-headline text-primary uppercase tracking-tighter leading-none">Sistemas <br /> Contra Incendio</h3>
                                </div>
                                <p className="text-on-surface-variant text-xl font-body leading-relaxed max-w-2xl opacity-80">
                                    Implementación de redes de extinción bajo normativa NFPA. Salas de bombas certificadas FM/UL para logística aeroportuaria e industrial.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full lg:w-auto">
                                <div className="flex flex-col gap-2">
                                    <span className="text-primary font-headline font-black text-4xl leading-none">FM/UL</span>
                                    <span className="text-technical text-[10px] opacity-60">Sello de Integridad</span>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-outline-variant/30"></div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-primary font-headline font-black text-4xl leading-none">NFPA</span>
                                    <span className="text-technical text-[10px] opacity-60">Estándar Global</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Portfolio - Asymmetric Layout */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low overflow-hidden">
                <div className="max-w-[1920px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-technical text-xs mb-6 block opacity-60">Federal Infrastructure Portfolio</span>
                            <h2 className="text-5xl md:text-7xl font-black text-primary font-headline uppercase leading-none tracking-tighter mb-4">
                                Proyectos de <br /> Escala Nacional
                            </h2>
                        </div>
                        <Link to="/portfolio" className="group">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-primary text-white font-headline font-bold px-10 py-5 tracking-widest uppercase rounded-sm flex items-center gap-4 shadow-xl transition-all duration-300"
                            >
                                Registro Completo
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </motion.button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                img: "/h2obras-web-new/hosp.png",
                                title: "Hospital Regional Oscar Orias",
                                meta: "Salud Pública · Jujuy",
                                size: "25.000 m2",
                                ref: "REG_2022_OP"
                            },
                            {
                                img: "/h2obras-web-new/aerop.png",
                                title: "Aeropuerto Int. Rosario",
                                meta: "Transporte/NFPA · Santa Fe",
                                size: "Alta Complejidad",
                                ref: "REG_2023_INFRA"
                            },
                            {
                                img: "/h2obras-web-new/laseg.png",
                                title: "Edificio La Segunda",
                                meta: "Corporativo/LEED · Rosario",
                                size: "Platinum Std",
                                ref: "REG_2021_CORP"
                            }
                        ].map((proj, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden mb-8 relative border border-outline-variant/10 shadow-sm">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={proj.img}
                                        alt={proj.title}
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="absolute bottom-6 right-6">
                                        <span className="bg-white px-3 py-1 font-technical text-[9px] uppercase tracking-widest text-primary shadow-lg">{proj.ref}</span>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-secondary font-headline font-bold text-[10px] uppercase tracking-widest opacity-60">{proj.meta}</span>
                                        <div className="w-12 h-px bg-outline-variant/30"></div>
                                    </div>
                                    <h3 className="text-2xl font-headline font-bold uppercase text-primary mb-6 transition-colors group-hover:text-accent duration-300">{proj.title}</h3>
                                    <div className="flex justify-between items-center py-4 border-t border-outline-variant/10">
                                        <span className="text-[10px] font-technical uppercase opacity-60">Escala Técnica</span>
                                        <span className="text-xs font-headline font-extrabold text-primary uppercase">{proj.size}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Muscle Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale"
                        data-alt="industrial heavy machinery including a bobcat and scissor lift in a warehouse setting with sharp dramatic lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjNgAgLfrscGLo0vgmPWh_CXFQ7Yh3-SZj2fwqhqJvJc5FRLecV9O0ZXkI8xYI36YZbqbGMrFLgy_OEVqCdCdyTZZAs-4KZNR9jRfz4dW5u-KKmrG6Kfv2GjXrhyzbKnoOs51NJC5crywBfL5A5XMcyaZyqD6a8YK-KEJatvq6FSi_ONIbNTjsv5LXsrQBu6EugwTdAkoFp1VCBHZysreWEpP69VuvcbW7GJzv4eie7YLBdS-5aP8QB1g2LjFYAmDg8KB3ILlkogc"
                    />
                    <div className="absolute inset-0 technical-grid opacity-10"></div>
                </div>

                <div className="relative z-10 max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="w-16 h-1 bg-accent mb-12"></div>
                        <h2 className="text-5xl md:text-7xl font-black text-white font-headline uppercase tracking-tighter mb-10 leading-[0.9]">
                            Potencia <br /> <span className="text-accent">Operativa Propia</span>
                        </h2>
                        <p className="text-on-primary-container text-xl md:text-2xl font-body leading-relaxed mb-12 opacity-80 max-w-2xl">
                            Infraestructura técnica sin dependencia de terceros. Flota pesada Bobcat, plataformas Mantall y tecnología Hilti para una ejecución sin interrupciones.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-accent text-2xl">precision_manufacturing</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-headline font-bold uppercase tracking-widest text-xs">M+50 Unidades</span>
                                    <span className="text-on-primary-container text-[10px] uppercase tracking-widest opacity-80">Logística de Despliegue</span>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-accent text-2xl">construction</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-headline font-bold uppercase tracking-widest text-xs">100% Autonomía</span>
                                    <span className="text-on-primary-container text-[10px] uppercase tracking-widest opacity-80">Control de Calidad Final</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 hover:bg-white/10 transition-all duration-500">
                            <span className="text-federal text-6xl md:text-8xl text-white block mb-6 transition-transform group-hover:scale-105 duration-500">100%</span>
                            <span className="text-technical text-xs uppercase opacity-70 text-white">Ejecución <br /> Directa</span>
                        </div>
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 hover:bg-white/10 transition-all duration-500 mt-12 md:mt-16">
                            <span className="text-federal text-6xl md:text-8xl text-accent block mb-6 transition-transform group-hover:scale-105 duration-500">FED</span>
                            <span className="text-technical text-xs uppercase opacity-70 text-white/80">Escala de <br /> Alcance</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
