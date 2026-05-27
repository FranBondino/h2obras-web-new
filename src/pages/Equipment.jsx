import { motion } from 'framer-motion';

export default function Equipment() {
    return (
        <>
            <main className="bg-surface">
                {/* Hero Section */}
                <section className="relative min-h-[500px] md:h-[700px] flex items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-0 border-b border-outline-variant/10">
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.6 }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full h-full object-cover"
                            style={{ filter: 'brightness(0.8) contrast(1.1) saturate(0.9)' }}
                            src="/h2obras-web-new/hero_original_hd.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                        <div className="absolute inset-0 technical-grid opacity-10"></div>
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
                                    <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">Bienes de Uso</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase">
                                    CAPACIDAD <br /> OPERATIVA <br /> <span className="text-white/40">PROPIA</span>
                                </h1>
                                <div className="max-w-2xl border-l-4 border-accent pl-10 py-2">
                                    <p className="text-lg md:text-xl text-on-primary-container font-body leading-relaxed opacity-80">
                                        Infraestructura, logística y maquinaria pesada de última generación. Garantizamos autonomía operativa y excelencia en la ejecución sin subcontratación.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Floating Tech Label */}
                    <div className="absolute bottom-12 right-24 hidden lg:block text-right">
                        <span className="text-white/20 text-[10px] font-technical uppercase tracking-[0.5em] block mb-2">Ficha Técnica de Activos</span>
                        <div className="w-32 h-px bg-white/10 ml-auto"></div>
                    </div>
                </section>

                {/* Main Fleet Registry */}
                <section className="bg-surface py-20 relative overflow-hidden">
                    <div className="container mx-auto px-8 md:px-24 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter uppercase mb-6 leading-none">Matriz de Activos</h2>
                                <p className="text-primary/70 font-technical uppercase tracking-[0.3em] text-[10px]">Unidades de Movimiento y Herramental Específico</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <p className="text-[10px] font-technical text-primary/60 uppercase tracking-widest mb-1">Estado de Flota</p>
                                    <p className="text-2xl font-headline font-black text-primary uppercase">UNIDADES ACTIVAS</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Heavy Machinery */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-surface-container-low border border-outline-variant/10 p-10 group transition-all duration-500 shadow-sm hover:shadow-2xl rounded-sm"
                            >
                                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-12 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl group-hover:text-on-accent">precision_manufacturing</span>
                                </div>
                                <h3 className="text-2xl font-headline font-black text-primary mb-8 uppercase leading-tight tracking-tighter">Movimiento <br /> de Suelos</h3>
                                <ul className="space-y-6 mb-12">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">01</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">MINIRETRO BOBCAT E-26 <span className="block text-[10px] text-primary/60">S-SERIES V.2015</span></p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">02</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">MINIPALA BOBCAT S450 <span className="block text-[10px] text-primary/60">ACCESSORIES Z.2017</span></p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">03</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">VIBROAPISONADOR LISO <span className="block text-[10px] text-primary/60">SYSTEM P-CABRA 2020</span></p>
                                    </li>
                                </ul>
                                <div className="pt-8 border-t border-outline-variant/10 flex justify-between items-center">
                                    <span className="text-[10px] font-technical uppercase text-primary/60 tracking-widest">Maquinaria Pesada</span>
                                </div>
                            </motion.div>

                            {/* Card 2: Height Works */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-surface-container-low border border-outline-variant/10 p-10 group transition-all duration-500 shadow-sm hover:shadow-2xl rounded-sm"
                            >
                                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-12 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl group-hover:text-on-accent">height</span>
                                </div>
                                <h3 className="text-3xl font-headline font-black text-primary mb-8 uppercase leading-tight tracking-tighter">Trabajos <br /> en Altura</h3>
                                <ul className="space-y-6 mb-12">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">01</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">PLATAFORMA MANTALL <span className="block text-[10px] text-primary/60">MAX_REACH_16_MTS</span></p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">02</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">SISTEMA AUTOPROPULSADA <span className="block text-[10px] text-primary/60">V.SERIES 2018</span></p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">03</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">MONTAJES VERTICALES <span className="block text-[10px] text-primary/60">PRECISION_STABILIZED</span></p>
                                    </li>
                                </ul>
                                <div className="pt-8 border-t border-outline-variant/10 flex justify-between items-center">
                                    <span className="text-[10px] font-technical uppercase text-primary/60 tracking-widest">Sistemas de Elevación</span>
                                </div>
                            </motion.div>

                            {/* Card 3: Precise Drilling */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-surface-container-low border border-outline-variant/10 p-10 group transition-all duration-500 shadow-sm hover:shadow-2xl rounded-sm"
                            >
                                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-12 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl group-hover:text-on-accent">architecture</span>
                                </div>
                                <h3 className="text-3xl font-headline font-black text-primary mb-8 uppercase leading-tight tracking-tighter">Perforación <br /> Estratégica</h3>
                                <ul className="space-y-6 mb-12">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">01</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">HILTI D250 DIAMANTE <span className="block text-[10px] text-primary/60">REINFORCED_CONCRETE_SYS</span></p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">02</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">HILTI D160 PRECISION <span className="block text-[10px] text-primary/60">UP_TO_200MM_DIAM</span></p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-technical text-xs mt-1">03</span>
                                        <p className="text-primary/80 font-body font-bold text-sm uppercase tracking-tight">DEMOLICION Y ANCLAJES <span className="block text-[10px] text-primary/60">CHEMICAL_FASTENING_SYS</span></p>
                                    </li>
                                </ul>
                                <div className="pt-8 border-t border-outline-variant/10 flex justify-between items-center">
                                    <span className="text-[10px] font-technical uppercase text-primary/60 tracking-widest">Precisión Estructural</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Specialized Tech Modules */}
                <section className="py-20 bg-primary text-white relative overflow-hidden">
                    <div className="absolute inset-0 technical-grid opacity-10"></div>
                    <div className="container mx-auto px-8 md:px-24 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-headline font-black uppercase tracking-tighter leading-none mb-8">INGENIERÍA <br /> DE MONTAJE</h2>
                                <p className="text-white text-lg font-body leading-relaxed max-w-xl opacity-80">
                                    Operamos con altos estándares de integridad técnica. Nuestra tecnología de soldadura y termofusión garantiza un rendimiento crítico en sistemas hidráulicos de alta presión.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="aspect-video bg-white/5 border border-white/10 overflow-hidden group">
                                    <img className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700" data-alt="Technical blueprint and engineering lines overlapping industrial components" src="/h2obras-web-new/hero_industrial_v2.png" />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-accent p-6 hidden md:block">
                                    <p className="text-on-accent text-2xl font-headline font-black font-technical tracking-tighter">Estándar de Integridad</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
                            {[
                                {
                                    id: "01",
                                    label: "Instalación Crítica",
                                    items: ["2 Ranuradoras Victaulic", "Cortadora para acero inoxidable Ø 8”", "Copas bimetálicas", "Roscadoras de banco y manuales"],
                                    icon: "settings_input_component"
                                },
                                {
                                    id: "02",
                                    label: "Fusión y Soldadura",
                                    items: ["5 Unidades soldadoras TIG", "2 Electrofusión (Ø 600 mm)", "Cortadora de pavimento Dynapack", "Vibro-apisonadores"],
                                    icon: "heat_pump"
                                },
                                {
                                    id: "03",
                                    label: "Soporte de Obra",
                                    items: ["2 Contenedores de obra", "Acanaladora 9\" con aspiradora", "Andamios Metaltech (EEUU)", "Niveles ópticos y láser"],
                                    icon: "construction"
                                }
                            ].map((module, i) => (
                                <div key={i} className={`p-8 ${i !== 2 ? 'border-r border-white/10' : ''} hover:bg-white/5 transition-colors group`}>
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-accent font-technical text-[10px] tracking-[0.3em]">Módulo {module.id}</span>
                                        <span className="material-symbols-outlined text-accent/40 group-hover:text-accent transition-colors">{module.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-headline font-black uppercase mb-6 tracking-tighter">{module.label}</h4>
                                    <ul className="space-y-3">
                                        {module.items.map((item, j) => (
                                            <li key={j} className="text-xs font-body text-on-primary-container opacity-60 flex gap-3">
                                                <span className="text-accent">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tactical Logistics */}
                <section className="py-20 px-6 md:px-12 bg-surface">
                    <div className="container mx-auto px-8 md:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-5 order-2 lg:order-1">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-16 h-1 bg-primary"></div>
                                    <h3 className="text-3xl md:text-5xl font-headline font-black text-primary uppercase tracking-tighter">Poder Logístico <br /> / Office</h3>
                                </div>
                                <div className="space-y-10">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="material-symbols-outlined text-primary">local_shipping</span>
                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">Logística Pesada</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            {[
                                                "CAMION DFM 2023 - 14 TN (6M BOX)",
                                                "UTILITARIO LIFAN FOISON TRUCK (2017)",
                                                "UTILITARIO FOTON GRATOUR (2019)"
                                            ].map((truck, i) => (
                                                <div key={i} className="flex justify-between items-center py-4 border-b border-outline-variant/10 group">
                                                    <span className="text-[10px] font-technical text-primary/60">Unidad {i + 1}</span>
                                                    <span className="text-xs font-bold text-primary/80 uppercase tracking-tight group-hover:text-primary transition-colors">{truck}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="material-symbols-outlined text-primary">monitoring</span>
                                            <p className="text-sm font-black text-primary uppercase tracking-widest">Oficina Técnica</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            {[0, 1, 2].map((i) => {
                                                const techLabels = ["Plotter de alta velocidad / 4 Estaciones CAD i7", "Flota móvil de comunicación (12 unidades)", "Flujo de trabajo e integración BIM/REVIT"];
                                                return (
                                                    <div key={i} className="flex justify-between items-center py-4 border-b border-outline-variant/10 group">
                                                        <span className="text-[10px] font-technical text-primary/60">Tecnología {i + 1}</span>
                                                        <span className="text-xs font-bold text-primary/80 uppercase tracking-tight group-hover:text-primary transition-colors">{techLabels[i]}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <div className="grid grid-cols-12 gap-8">
                                    <div className="col-span-7 aspect-[4/5] overflow-hidden">
                                        <img className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-1000" data-alt="Modern high-tech logistics truck" src="/h2obras-web-new/hosp.png" />
                                    </div>
                                    <div className="col-span-5 aspect-[4/6] overflow-hidden self-end mb-12">
                                        <img className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-1000" data-alt="Technical office interior" src="/h2obras-web-new/portfolio_hosp.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Institutional CTA */}
                <section className="py-32 bg-primary-container technical-grid text-center overflow-hidden relative">
                    <div className="container mx-auto px-8 max-w-5xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-headline font-black text-white mb-12 uppercase tracking-tighter leading-[0.85]">
                                INFRAESTRUCTURA <br /> PARA GRANDES <br /> VISIONES
                            </h2>
                            <p className="text-xl md:text-2xl text-on-primary-container mb-16 max-w-3xl mx-auto font-body leading-relaxed">
                                Poseemos el herramental y el expertise táctico para transformar desafíos técnicos en activos operativas de alto rendimiento.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-16 py-8 bg-primary text-white font-headline font-black text-xl uppercase tracking-[0.2em] shadow-2xl hover:bg-accent hover:text-on-accent transition-all duration-300"
                            >
                                Solicitar Cotización
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Background Label */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        <span className="text-[20vw] font-black uppercase font-headline">H2OBRAS</span>
                    </div>
                </section>
            </main>
        </>
    );
}
