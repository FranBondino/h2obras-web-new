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
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.7) contrast(1.1) saturate(0.8)' }}
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-primary"></div>
                    <motion.div style={{ rotate: gridRotate }} className="absolute inset-0 technical-grid opacity-15"></motion.div>
                </motion.div>

                <div className="relative z-10 container mx-auto px-8 md:px-24 grid md:grid-cols-12 gap-8 items-end pb-24 pt-32">
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
                            className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-headline font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase"
                        >
                            Ingeniería y <br /> Ejecución
                        </motion.h1>
                        <motion.p
                            variants={fadeUpVariant}
                            className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-body mb-12 font-medium"
                        >
                            Especialistas en proyecto y ejecución de obras e instalaciones de gas y sistemas de incendio para obras de escala nacional y alta complejidad técnica.
                        </motion.p>
                        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                            <Link to="/portfolio" className="shimmer-container shimmer-trigger group">
                                <motion.button
                                    whileHover={{ y: -2, backgroundColor: "var(--color-accent)", color: "var(--color-on-accent)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative bg-white text-primary font-headline font-bold px-10 py-5 tracking-widest uppercase rounded-sm flex items-center gap-4 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-4">
                                        Catálogo de Obras
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </span>
                                    <div className="shimmer-element"></div>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="md:col-span-3 lg:col-span-3 hidden md:block text-right pb-6 border-r-2 border-accent pr-10"
                    >
                        <span className="text-white text-xs md:text-sm font-technical leading-loose font-bold opacity-80">
                            Sede Rosario <br />
                            Sede CABA <br />
                            Alcance Nacional
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics Band - Technical Readouts */}
            <section className="py-20 md:py-24 bg-surface-container-low border-y border-outline-variant/10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="container mx-auto px-8 md:px-24 grid grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 group">
                        <span className="text-primary text-4xl font-black font-headline tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">+25A</span>
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
                        <span className="text-primary text-5xl font-black font-headline tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">+30</span>
                        <div className="h-px bg-outline-variant/30 w-full group-hover:bg-accent/50 transition-all duration-500"></div>
                        <span className="text-readout">Obras Ejecutadas</span>
                    </motion.div>
                </motion.div>
            </section>

            <section className="py-24 md:py-32 bg-surface overflow-hidden">
                <div className="container mx-auto px-8 md:px-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-20"
                    >
                        <motion.div variants={fadeUpVariant} className="max-w-4xl">
                            <div className="w-24 h-2 bg-primary mb-12"></div>
                            <h2 className="text-5xl md:text-7xl font-black text-primary font-headline uppercase tracking-tighter mb-8 leading-[0.85] group-hover:text-secondary transition-colors duration-300">
                                Nuestras <br /> <span className="opacity-40 font-outline">Especialidades</span>
                            </h2>
                            <p className="text-secondary text-xl md:text-2xl font-body leading-relaxed max-w-2xl opacity-80">
                                Soluciones integrales desde el diseño ejecutivo hasta el montaje y puesta en marcha de sistemas críticos.
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        {/* Service 01: Sanitarias & Gas */}
                        <motion.div
                            variants={fadeUpVariant}
                            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                            viewport={{ once: true }}
                            className="lg:col-span-8 bg-surface-container-low p-10 md:p-16 flex flex-col justify-between group relative overflow-hidden border border-outline-variant/10 shadow-sm transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-primary/10 font-headline font-black text-[120px] leading-none select-none group-hover:text-primary/20 transition-colors duration-500">01</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-4xl md:text-5xl font-black text-primary font-headline uppercase tracking-tighter mb-8 group-hover:text-accent transition-colors duration-300">Sanitarias <br /> &amp; Gas</h3>
                                <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 font-body leading-relaxed opacity-90">
                                    Instalaciones de gran envergadura y saneamiento de alta complejidad para todo tipo de entornos.
                                </p>
                            </div>

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/10">
                                <div className="p-8 bg-white flex items-center gap-6 group/item hover:bg-accent/5 transition-colors">
                                    <div className="w-12 h-12 border border-primary/10 flex items-center justify-center shrink-0 group-hover/item:border-accent group-hover/item:bg-accent transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover/item:text-on-accent text-2xl">engineering</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary font-headline font-bold text-lg uppercase tracking-tight leading-none">Saneamiento Integral</span>
                                        <span className="text-technical text-[9px] opacity-60">Infraestructura Nacional</span>
                                    </div>
                                </div>
                                <div className="p-8 bg-white flex items-center gap-6 group/item hover:bg-accent/5 transition-colors">
                                    <div className="w-12 h-12 border border-primary/10 flex items-center justify-center shrink-0 group-hover/item:border-accent group-hover/item:bg-accent transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover/item:text-on-accent text-2xl">grid_view</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary font-headline font-bold text-lg uppercase tracking-tight leading-none">Redes de Alta Presión</span>
                                        <span className="text-technical text-[9px] opacity-60">Distribución Primaria</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 02: Sustentabilidad */}
                        <motion.div
                            variants={fadeUpVariant}
                            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,22,42,0.3)" }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 bg-primary p-10 md:p-14 flex flex-col justify-between text-white relative overflow-hidden group transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container z-0 opacity-90"></div>
                            <div className="absolute inset-0 technical-grid opacity-10"></div>

                            <div className="relative z-10">
                                <span className="text-white/10 font-headline font-black text-9xl leading-none block mb-8 group-hover:text-white/20 transition-colors duration-500">02</span>
                                <h3 className="text-4xl font-headline font-black uppercase mb-8 tracking-tighter leading-none group-hover:text-accent transition-colors duration-300">Eficiencia <br /> Energética</h3>
                                <p className="opacity-80 group-hover:opacity-100 transition-opacity">Instalaciones diseñadas bajo normativas LEED para optimizar el consumo de recursos y el rendimiento térmico.</p>
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
                            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                            viewport={{ once: true }}
                            className="lg:col-span-12 bg-surface-container-lowest p-10 md:p-16 border border-outline-variant/10 flex flex-col lg:flex-row justify-between items-end group relative overflow-hidden transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-primary/10 font-headline font-black text-[120px] leading-none select-none group-hover:text-primary/20 transition-colors duration-500">03</span>
                            </div>
                            <div className="relative z-10 max-w-3xl mb-12 lg:mb-0">
                                <div className="flex items-center gap-6 mb-8 group/title">
                                    <div className="w-16 h-16 bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                                        <span className="material-symbols-outlined text-white group-hover:text-on-accent text-3xl">local_fire_department</span>
                                    </div>
                                    <h3 className="text-5xl md:text-6xl font-black font-headline text-primary uppercase tracking-tighter leading-none group-hover/title:text-accent transition-colors duration-300">Sistemas <br /> Contra Incendio</h3>
                                </div>
                                <p className="text-on-surface-variant text-xl font-body leading-relaxed max-w-2xl opacity-80">
                                    Implementación de redes de extinción bajo normativa NFPA. Salas de bombas certificadas FM/UL para logística aeroportuaria e industrial.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-6 w-full lg:w-auto">
                                <div className="flex items-center gap-4 px-6 py-4 bg-surface-container-low border border-outline-variant/20 hover:border-primary/30 transition-all cursor-crosshair group/seal">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary font-headline font-black text-2xl leading-none group-hover/seal:text-accent transition-colors">FM/UL</span>
                                        <span className="text-technical text-[9px] font-bold opacity-60 uppercase tracking-widest">Aprobación de Calidad</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-6 py-4 bg-surface-container-low border border-outline-variant/20 hover:border-primary/30 transition-all cursor-crosshair group/seal">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary font-headline font-black text-2xl leading-none group-hover/seal:text-accent transition-colors">NFPA</span>
                                        <span className="text-technical text-[9px] font-bold opacity-60 uppercase tracking-widest">Estándar Global</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
                <div className="container mx-auto px-8 md:px-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-technical text-xs mb-6 block opacity-60">Portafolio de Obras e Infraestructura</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary font-headline uppercase leading-none tracking-tighter mb-4">
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
                                img: "/h2obras-web-new/portfolio/aerop.png",
                                title: "Aeropuerto Int. Rosario",
                                meta: "Transporte/NFPA · Santa Fe",
                                size: "Alta Complejidad",
                                ref: "REG_2023_INFRA"
                            },
                            {
                                img: "/h2obras-web-new/portfolio/laseg.png",
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
                                </div>
                                <div className="px-2">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-secondary font-headline font-bold text-[10px] uppercase tracking-widest opacity-60">{proj.meta}</span>
                                        <div className="w-12 h-px bg-outline-variant/30"></div>
                                    </div>
                                    <h3 className="text-2xl font-headline font-bold uppercase text-primary mb-6 transition-colors group-hover:text-secondary duration-300">{proj.title}</h3>
                                    <div className="flex justify-between items-center py-4 border-t border-outline-variant/10">
                                        <span className="text-[10px] font-technical uppercase text-primary/40 tracking-[0.4em]">Detalle de Obra</span>
                                        <span className="text-xs font-headline font-extrabold text-primary uppercase">{proj.size}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Muscle Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale"
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                    />
                    <div className="absolute inset-0 technical-grid opacity-10"></div>
                </div>

                <div className="relative z-10 container mx-auto px-8 md:px-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <div className="w-16 h-1 bg-accent mb-12"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-white font-headline uppercase tracking-tighter mb-10 leading-[0.9]">
                            Equipamiento y <br /> <span className="text-accent">Logística Propia</span>
                        </h2>
                        <p className="text-on-primary-container text-xl md:text-2xl font-body leading-relaxed mb-12 max-w-2xl">
                            Garantizamos el cumplimiento de plazos mediante una gestión de recursos 100% interna. Nuestra infraestructura técnica nos permite operar con total independencia, asegurando la excelencia en proyectos de alta complejidad.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-accent text-2xl">local_shipping</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-headline font-bold uppercase tracking-widest text-xs">Logística Federal</span>
                                    <span className="text-on-primary-container text-[11px] uppercase tracking-widest">Despliegue nacional propio</span>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-accent text-2xl">verified_user</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-headline font-bold uppercase tracking-widest text-xs">Control Técnico</span>
                                    <span className="text-on-primary-container text-[11px] uppercase tracking-widest">Garantía de ejecución</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {[
                            {
                                title: "Movimiento de Suelo",
                                desc: "Flota pesada Bobcat para logística, excavación y nivelación.",
                                icon: "engineering",
                                brand: "BOBCAT"
                            },
                            {
                                title: "Soluciones de Altura",
                                desc: "Plataformas Mantall para montajes e instalaciones elevadas.",
                                icon: "vertical_align_top",
                                brand: "MANTALL"
                            },
                            {
                                title: "Precisión Técnica",
                                desc: "Tecnología Hilti para perforación, anclaje y demolición.",
                                icon: "precision_manufacturing",
                                brand: "HILTI"
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex items-center gap-8 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl group-hover:text-accent">{item.icon}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-white text-xl font-headline font-black uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-on-primary-container text-xs opacity-60 font-body leading-tight max-w-xs">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
