import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}; const allProjectsData = [
    // Activos
    { id: 'a1', title: 'Hospital Regional Oscar Orias', category: 'Salud', location: 'Ledesma, Jujuy', specs: 'Progreso Técnico 92%', status: 'En Ejecución' },
    { id: 'a2', title: 'Fisherton Park', category: 'Residencial de Alta Gama', location: 'Rosario', specs: 'Estado Mecánico 94%', status: 'En Ejecución' },
    { id: 'a3', title: 'Aeropuerto Int. Rosario', category: 'Aeropuertos', location: 'Rosario', specs: 'Integridad 90%', status: 'En Ejecución' },
    { id: 'a4', title: 'Edificio Ewain I', category: 'Residencial de Alta Gama', location: 'Rosario', specs: 'Progreso 15%', status: 'En Ejecución' },
    { id: 'a5', title: 'Distrito Puerto Norte', category: 'Residencial de Alta Gama', location: 'Rosario', specs: '3 Torres Activas', status: 'En Ejecución' },
    { id: 'a6', title: 'Edificio La Segunda Seguros', category: 'Sustentable (LEED)', location: 'Rosario', specs: 'LEED Platinum', status: 'Entregado' },
    { id: 'a7', title: 'Nuevo Hospital Nodal Venado Tuerto', category: 'Salud', location: 'Venado Tuerto', specs: 'Sanitario Elite', status: 'Entregado' },
    { id: 'a8', title: 'CEMAFE / Iturraspe', category: 'Salud', location: 'Santa Fe', specs: 'Logística Hospitalaria', status: 'Entregado' },
    { id: 'a9', title: 'Acuario Río Paraná', category: 'Institucional', location: 'Rosario', specs: 'Tecnología Biológica', status: 'Entregado' },
    { id: 'a10', title: 'Centro Justicia Penal', category: 'Centros Judiciales', location: 'Rosario', specs: 'Judicial Federal', status: 'Entregado' },

    // Históricos
    { id: 'h1', title: 'Hospital Privado Rosario', category: 'Salud', location: 'Rosario', specs: 'Tendido de Gases Médicos', status: 'Historico' },
    { id: 'h2', title: 'Ezeiza Terminal C', category: 'Aeropuertos', location: 'CABA', specs: 'Red Anti-Incendio Integral', status: 'Historico' },
    { id: 'h3', title: 'Planta Industrial Unilever', category: 'Industrial', location: 'Villa Gobernador Gálvez', specs: 'Tratamiento de Efluentes', status: 'Historico' },
    { id: 'h4', title: 'Laboratorios Roemmers', category: 'Industrial', location: 'Capital Federal', specs: 'Salas Limpias ISO', status: 'Historico' },
    { id: 'h5', title: 'Foro Misiones', category: 'Centros Judiciales', location: 'Posadas', specs: 'Climatización Central', status: 'Historico' },
    { id: 'h6', title: 'Sanatorio Parque Nuevo Centro', category: 'Salud', location: 'Rosario', specs: 'Complejo Quirúrgico', status: 'Historico' },
    { id: 'h7', title: 'Torres Dolfines Guaraní', category: 'Residencial de Alta Gama', location: 'Rosario', specs: 'Presurización 40 Pisos', status: 'Historico' },
    { id: 'h8', title: 'Planta Arauco', category: 'Industrial', location: 'Puerto Esperanza', specs: 'Industrial Piping', status: 'Historico' },
    { id: 'h9', title: 'Edificio Corporativo Sancor', category: 'Sustentable (LEED)', location: 'Sunchales', specs: 'Reutilización Pluvial', status: 'Historico' },
    { id: 'h10', title: 'Hospital de Emergencias (HECA)', category: 'Salud', location: 'Rosario', specs: 'Emergencias Hidrosanitarias', status: 'Historico' },
    { id: 'h11', title: 'Quilmes Cervecería', category: 'Industrial', location: 'Zárate', specs: 'Procesos de Frio', status: 'Historico' },
    { id: 'h12', title: 'Polo Tecnológico Zona Sur', category: 'Institucional', location: 'Rosario', specs: 'Red de Enfriamiento', status: 'Historico' },
    { id: 'h13', title: 'Juzgados Federales', category: 'Centros Judiciales', location: 'San Lorenzo', specs: 'Sistema Integral', status: 'Historico' },
    { id: 'h14', title: 'Torre Aqualina', category: 'Residencial de Alta Gama', location: 'Rosario', specs: 'Calderas Centrales', status: 'Historico' },
    { id: 'h15', title: 'Centro Comercial Alto Rosario', category: 'Comercial', location: 'Rosario', specs: 'Red Contra Incendios', status: 'Historico' },
    { id: 'h16', title: 'Aeropuerto de Córdoba', category: 'Aeropuertos', location: 'Córdoba', specs: 'Motobombas NFPA', status: 'Historico' },
    { id: 'h17', title: 'Planta de Biogas', category: 'Sustentable (LEED)', location: 'Venado Tuerto', specs: 'Saneamiento Total', status: 'Historico' },
    { id: 'h18', title: 'Sanatorio de Niños', category: 'Salud', location: 'Rosario', specs: 'Neonatología Gases', status: 'Historico' },
    { id: 'h19', title: 'Complejo Fórum Puerto Norte', category: 'Residencial de Alta Gama', location: 'Rosario', specs: 'Redes Termomecánicas', status: 'Historico' },
    { id: 'h20', title: 'Planta General Motors', category: 'Industrial', location: 'Alvear', specs: 'Líneas de Presión', status: 'Historico' },
    { id: 'h21', title: 'Edificio Aduana', category: 'Institucional', location: 'Rosario', specs: 'Restauración Sanitaria', status: 'Historico' },
    { id: 'h22', title: 'Planta Cargill', category: 'Industrial', location: 'Puerto San Martín', specs: 'Sistemas Antiexplosión', status: 'Historico' },
    { id: 'h23', title: 'Ciudad Judicial', category: 'Centros Judiciales', location: 'Santa Fe', specs: 'Ingeniería Sanitaria Compleja', status: 'Historico' },
    { id: 'h24', title: 'Terminal Puerto Rosario', category: 'Industrial', location: 'Rosario', specs: 'Redes Hídricas Acero', status: 'Historico' },
    { id: 'h25', title: 'Hospital Iturraspe', category: 'Salud', location: 'Santa Fe', specs: 'Arquitectura Hospitalaria', status: 'Historico' }
];

const categories = [
    { id: 'all', label: 'Todos los Proyectos', icon: 'apps' },
    { id: 'Obras en Ejecución', label: 'Obras en Ejecución', icon: 'engineering' },
    { id: 'Salud', label: 'Salud', icon: 'medical_services' },
    { id: 'Centros Judiciales', label: 'Centros Judiciales', icon: 'gavel' },
    { id: 'Aeropuertos', label: 'Aeropuertos', icon: 'flight_takeoff' },
    { id: 'Residencial de Alta Gama', label: 'Residencial de Alta Gama', icon: 'domain' },
    { id: 'Industrial', label: 'Industrial', icon: 'factory' },
    { id: 'Sustentable (LEED)', label: 'Sustentable (LEED)', icon: 'potted_plant' }
];

const categoryHeroData = {
    all: {
        title: "Infraestructura <br /> Soberana",
        subtitle: "Ingeniería de precisión para proyectos hidráulicos y civiles a escala federal. Un registro consolidado de absoluta rigurosidad técnica y autonomía en la infraestructura argentina.",
        tag: "Registro Institucional 2026"
    },
    "Obras en Ejecución": {
        title: "Ejecución <br /> Federal",
        subtitle: "Monitoreo técnico en tiempo real de obras de alta complejidad. Garantía de continuidad operativa y precisión en cada etapa del desarrollo infraestructural.",
        tag: "Estado de Obra Activo"
    },
    Salud: {
        title: "Ingeniería <br /> Sanitaria",
        subtitle: "Sistemas críticos para entornos hospitalarios de alta complejidad. Gases medicinales, redes de fluidos y climatización con estándares internacionales de bioseguridad.",
        tag: "Especialidad: Salud"
    },
    "Centros Judiciales": {
        title: "Centros de <br /> Justicia",
        subtitle: "Sistemas integrales para edificios institucionales de máxima seguridad. Ingeniería hidráulica y civil para el soporte de la operatividad judicial.",
        tag: "Infraestructura Institucional"
    },
    Aeropuertos: {
        title: "Logística <br /> Aeroportuaria",
        subtitle: "Instalaciones especializadas para terminales aéreas bajo normas NFPA. Redes contra incendio, bombeo de alta presión y sistemas de soporte logístico.",
        tag: "Estándares Aeronáuticos"
    },
    "Residencial de Alta Gama": {
        title: "Hábitat <br /> de Alta Gama",
        subtitle: "Desarrollo de infraestructura vertical premium. Ingeniería térmica, sanitaria y hidráulica para los proyectos arquitectónicos más ambiciosos del país.",
        tag: "Arquitectura Vertical"
    },
    Industrial: {
        title: "Procesos <br /> Industriales",
        subtitle: "Soluciones de ingeniería para plantas de producción y procesamiento. Piping industrial, tratamiento de efluentes y sistemas de presión para alta exigencia.",
        tag: "Potencia Industrial"
    },
    "Sustentable (LEED)": {
        title: "Eficiencia <br /> Sustentable",
        subtitle: "Liderazgo en certificaciones internacionales. Sistemas solares térmicos, recuperación pluvial y optimización de recursos para el futuro sostenible.",
        tag: "Certificación LEED"
    }
};

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showAllHistory, setShowAllHistory] = useState(false);

    const filteredAll = allProjectsData.filter(p =>
        selectedCategory === 'all' ||
        (selectedCategory === 'Obras en Ejecución' && p.status === 'En Ejecución') ||
        p.category === selectedCategory
    );

    const historicalProjects = allProjectsData.filter(p => p.status === 'Historico');

    const currentHero = categoryHeroData[selectedCategory] || categoryHeroData.all;

    return (
        <main className="bg-background flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:flex flex-col h-screen w-80 sticky top-[88px] bg-surface-container-low border-r border-outline-variant py-10 px-4 space-y-2 z-20">
                <div className="px-4 mb-8">
                    <h3 className="text-lg font-bold text-primary font-headline uppercase tracking-tighter">Categorías de Proyectos</h3>
                    <p className="text-[10px] text-on-tertiary-container tracking-[0.2em] uppercase font-label">Infraestructura a Escala Federal</p>
                </div>
                <nav className="flex flex-col space-y-1">
                    {categories.map(cat => {
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-3 py-3 px-4 w-full text-left transition-all duration-300 ${isActive
                                    ? 'bg-background text-tertiary-fixed-dim font-bold border-l-4 border-primary'
                                    : 'text-secondary hover:text-cyan-300 hover:bg-surface-container/50 hover:pl-6'
                                    }`}
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{cat.icon}</span>
                                <span className="font-['Inter'] text-sm tracking-wide uppercase">{cat.label}</span>
                            </button>
                        );
                    })}
                </nav>
                <div className="mt-auto p-4 bg-surface-container-low/50 rounded-sm">
                    <button className="w-full py-4 text-xs font-bold text-tertiary-fixed-dim uppercase tracking-tighter border border-primary/30 hover:bg-primary-container hover:text-primary hover:border-primary-container transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]">Solicitar Ficha Técnica</button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 max-w-full overflow-hidden">
                {/* Hero Banner */}
                <section className="relative min-h-[400px] md:h-[614px] bg-background flex items-center px-6 md:px-20 py-20 md:py-0 overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img alt="Industrial construction" className="w-full h-full object-cover filter brightness-[0.25] grayscale" data-alt="dramatic wide angle shot of a large scale civil engineering project site with steel structures and heavy machinery at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVgnCcJOXJbS1CPKSLW2YY7rrCKvOGonDzDLZKh99l1PWKa8CULPPUz0axyy9_XHd6EHNiiqId32pHdTyCNpAZ9aQlIS1cq_BRPUdwlRr7n1cJVdIncH7WmfO_N5-pSB0cihPmC0xrcQaY-gTgwH2ONESYYyekuTUWFlZekTQiSmD9rr_KLnzeynpzQnLIPydQuw6fX4bFXJ3BO3so6vu9E9Er3rUE543iyaiG1FAO7GyR3zamgefvhxL8LQwR5KLwZMsolOr_TehX" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
                    </motion.div>

                    <div className="relative z-10 max-w-4xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <motion.span
                                    className="bg-primary-container/10/50 border border-primary/30 text-tertiary-fixed-dim px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-widest mb-6 rounded-sm backdrop-blur-sm inline-block shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                                >
                                    {currentHero.tag}
                                </motion.span>
                                <motion.h1
                                    className="text-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-none uppercase mb-6 text-gradient-primary"
                                    dangerouslySetInnerHTML={{ __html: currentHero.title }}
                                />
                                <motion.p
                                    className="text-secondary text-lg max-w-2xl font-light leading-relaxed"
                                >
                                    {currentHero.subtitle}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
                {selectedCategory === 'all' && (
                    <>
                        {/* Execution Status Tracker */}
                        <section className="py-20 px-8 md:px-20 bg-surface-container-low border-b border-outline-variant">
                            <div className="flex justify-between items-end mb-16 border-l-4 border-primary pl-6">
                                <div>
                                    <h2 className="text-4xl font-headline font-black uppercase text-primary tracking-tighter">Antecedentes de Obras</h2>
                                    <p className="text-secondary font-label uppercase tracking-widest text-xs mt-2">Estado de Ejecución Activa: Octubre 2026</p>
                                </div>
                                <div className="text-right hidden md:block">
                                    <span className="text-6xl font-headline font-black text-slate-800">01</span>
                                </div>
                            </div>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {/* Project Card 1 */}
                                <motion.a href="#" variants={fadeUpVariant} className="block cursor-pointer machined-glass group relative overflow-hidden rounded-xl">
                                    <div className="h-64 overflow-hidden relative">
                                        <img alt="Hospital project" className="w-full h-full object-cover filter brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEN2yfqxqEQIbxDe0bP-53Db2bDsXSoliagrMaiO2CWUzPEQ00sNHkdtYMutwN57bOjgFrRVeyY5act23MT53ftMGz7hjAYlS7mhj4mWgfk-af1HF3DlFVNYufdMVMCeDSglEFDy2E1OyGCIImty9i6MMmYsTkr4uSbgK6sKh0plvLrR-IfHP-RiZLfixM6TinFbB0YZ121DEn4Cev0ZqT0wnTkKuF10j0imLuHQmfqOk3SMk4F2K32EI0dzw2Z6lGztYN_N7wc8cT" />
                                        <div className="absolute top-4 right-4 bg-primary-container text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-sm backdrop-blur-sm">92% Completado</div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-headline font-bold uppercase text-primary mb-2">Hospital Regional Oscar Orias</h3>
                                        <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6 border-b border-outline/50 pb-4">Ledesma, Jujuy | 25.000 m2 de Infraestructura</p>
                                        <div className="space-y-4 pt-2">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-on-surface-variant uppercase font-bold tracking-widest">Progreso Técnico</span>
                                                <span className="font-black text-tertiary-fixed-dim">92%</span>
                                            </div>
                                            <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1, delay: 0.2 }} className="bg-tertiary-fixed h-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></motion.div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <span className="bg-surface-container/50 text-[10px] font-bold px-2 py-1 text-tertiary-fixed-dim uppercase rounded-sm border border-outline/50">Proyecto Ejecutivo</span>
                                                <span className="bg-surface-container/50 text-[10px] font-bold px-2 py-1 text-tertiary-fixed-dim uppercase rounded-sm border border-outline/50">Sanitario y Gas</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                                {/* Project Card 2 */}
                                <motion.a href="#" variants={fadeUpVariant} className="block cursor-pointer machined-glass group relative overflow-hidden rounded-xl">
                                    <div className="h-64 overflow-hidden relative">
                                        <img alt="Fisherton Park" className="w-full h-full object-cover filter brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdxS61_tfBcV9AIFPC6SGQsGVI663OHqAYwJUtFDFk_hrxZDzmuYqNsJQznJ3wQTW2Uk2QOvIBY2MeyEMskeXCR_eelPKWDumPAUvU6aBqKNCpHCrey8wEPik8-CY6pX4u5oe8Vo9UoVyQ9lgX9eehGrQ3z66ufSbAVwIWgwPSiUdsph1NgvLsN3HLuX55pEo9m1boRQ2VCKOuoSfge2xtokjwGWWZfgqpZCzsNEuMPkNXmfHRQcMCHg8IZzGJlqAa8tlLBf01zOu" />
                                        <div className="absolute top-4 right-4 bg-primary-container text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-sm backdrop-blur-sm">94% Completado</div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-headline font-bold uppercase text-primary mb-2">Fisherton Park</h3>
                                        <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6 border-b border-outline/50 pb-4">Rosario | Arq. Carlos Ott | Residencia Premium</p>
                                        <div className="space-y-4 pt-2">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-on-surface-variant uppercase font-bold tracking-widest">Estado Mecánico</span>
                                                <span className="font-black text-tertiary-fixed-dim">94%</span>
                                            </div>
                                            <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: '94%' }} transition={{ duration: 1, delay: 0.3 }} className="bg-tertiary-fixed h-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></motion.div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <span className="bg-surface-container/50 text-[10px] font-bold px-2 py-1 text-tertiary-fixed-dim uppercase rounded-sm border border-outline/50">Termomecánico</span>
                                                <span className="bg-surface-container/50 text-[10px] font-bold px-2 py-1 text-tertiary-fixed-dim uppercase rounded-sm border border-outline/50">Gas y Sanitarios</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                                {/* Project Card 3 */}
                                <motion.a href="#" variants={fadeUpVariant} className="block cursor-pointer machined-glass group relative overflow-hidden rounded-xl">
                                    <div className="h-64 overflow-hidden relative">
                                        <img alt="Rosario Airport" className="w-full h-full object-cover filter brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_bN1QTT4SJg9ygWthg4My8Xj7neR7hqntf3fThP7OCZ0AwRg7BhqHb4b0s6jsv5jIWf2zuthleCYXaRDbovMzZODlb7sY6eidzClBYYgI77Yywq23BDRtz5xNaRfKm1PNQehfJjOvGSYcYyI8A8fS2E7MnLGINlWZuhPolDfX6AC4onlF3hIiuHRT2Wf7FO6BpiNMkFBT9geU0IaJmsb9YnNOmjXZxOivAAtvn_844RBIlTHCVzQ-GNwk-Qk8nU3cPrz8DSHTYkdx" />
                                        <div className="absolute top-4 right-4 bg-primary-container text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-sm backdrop-blur-sm">90% Completado</div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-headline font-bold uppercase text-primary mb-2">Aeropuerto Int. Rosario</h3>
                                        <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6 border-b border-outline/50 pb-4">Terminal Internacional | Normativas NFPA</p>
                                        <div className="space-y-4 pt-2">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-on-surface-variant uppercase font-bold tracking-widest">Integridad Sistema Incendio</span>
                                                <span className="font-black text-tertiary-fixed-dim">90%</span>
                                            </div>
                                            <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.4 }} className="bg-tertiary-fixed h-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></motion.div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <span className="bg-surface-container/50 text-[10px] font-bold px-2 py-1 text-tertiary-fixed-dim uppercase rounded-sm border border-outline/50">Bombas Grundfos</span>
                                                <span className="bg-surface-container/50 text-[10px] font-bold px-2 py-1 text-tertiary-fixed-dim uppercase rounded-sm border border-outline/50">Estándares NFPA</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            </motion.div>

                            {/* Secondary Execution List (Bento-style) */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8"
                            >
                                <motion.div variants={fadeUpVariant} className="lg:col-span-2 bg-surface-container-low border border-outline-variant rounded-xl p-10 text-primary flex flex-col justify-between relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent"></div>
                                    <div className="relative z-10">
                                        <span className="text-on-tertiary-container text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block inline-block bg-primary-container/10/50 px-2 py-1 rounded-sm border border-primary/20">Verticalidad Residencial</span>
                                        <h4 className="text-3xl font-headline font-bold uppercase mb-4 text-primary">Edificio Ewain I</h4>
                                        <p className="text-secondary text-sm leading-relaxed mb-8 max-w-md">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                    </div>
                                    <div className="flex items-center gap-6 relative z-10">
                                        <div className="text-4xl font-headline font-black text-tertiary-fixed-dim">15%</div>
                                        <div className="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: '15%' }} transition={{ duration: 1 }} className="bg-tertiary-fixed h-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div variants={fadeUpVariant} className="bg-surface-container-low border border-outline-variant rounded-xl p-10 flex flex-col justify-between group hover:bg-surface-container/50 transition-colors">
                                    <h4 className="text-xl font-headline font-bold uppercase text-primary">Distrito Puerto Norte</h4>
                                    <div className="space-y-2">
                                        <p className="text-xs text-on-tertiary-container uppercase font-bold tracking-widest flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span> Estado: Activo</p>
                                        <p className="text-sm font-label text-secondary">Ejecución técnica de tres torres para sistemas de distribución hidráulica y térmica.</p>
                                    </div>
                                    <div className="pt-4 border-t border-outline-variant">
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-tertiary-fixed-dim bg-primary-container/10/30 px-2 py-1 rounded-sm border border-primary/50">3 Torres Activas</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={fadeUpVariant} className="bg-surface-container-low border border-outline-variant rounded-xl p-10 flex flex-col justify-between group hover:bg-surface-container/50 transition-colors">
                                    <h4 className="text-xl font-headline font-bold uppercase text-primary">Metra Rosario</h4>
                                    <div className="space-y-2">
                                        <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-600"></span> Estado: Entregado 2023</p>
                                        <p className="text-sm font-label text-secondary">22 pisos de ingeniería residencial de alta complejidad.</p>
                                    </div>
                                    <div className="pt-4 border-t border-outline-variant">
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-secondary bg-surface-container px-2 py-1 rounded-sm border border-outline">Ciclo de Vida Completo</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </section>

                        {/* Sustainability / LEED Section */}
                        <section className="py-24 px-8 md:px-20 bg-background text-primary overflow-hidden relative border-b border-outline-variant">
                            <div className="absolute right-0 top-0 w-1/3 h-full bg-tertiary-fixed/5 mask-gradient hidden lg:block filter blur-3xl"></div>
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-[2px] w-12 bg-tertiary-fixed shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                                        <span className="text-on-tertiary-container text-sm font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]">Liderazgo Sustentable</span>
                                    </div>
                                    <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter mb-8 leading-none text-primary">Edificio La Segunda Seguros <br /><span className="text-gradient-primary block mt-2">LEED Platinum</span></h2>
                                    <p className="text-secondary text-lg mb-12 font-light leading-relaxed max-w-xl">La cima de la ingeniería corporativa sustentable en Rosario. Este proyecto con certificación LEED PLATINUM integra sistemas de alta eficiencia para el liderazgo ambiental.</p>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <div className="flex items-center gap-2 text-tertiary-fixed-dim">
                                                <span className="material-symbols-outlined text-lg group-hover:animate-pulse">wb_sunny</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Solar Térmico</span>
                                            </div>
                                            <p className="text-xs text-on-surface-variant font-label">Red de generación solar ACS de alta eficiencia.</p>
                                        </div>
                                        <div className="space-y-2 group">
                                            <div className="flex items-center gap-2 text-tertiary-fixed-dim">
                                                <span className="material-symbols-outlined text-lg group-hover:animate-bounce">water_drop</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Recuperación</span>
                                            </div>
                                            <p className="text-xs text-on-surface-variant font-label">Eliminación avanzada de arsénico y reuso pluvial.</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative h-[500px]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 mix-blend-multiply"></div>
                                    <img alt="Edificio sustentable moderno" className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-[0_0_40px_rgba(6,182,212,0.15)]" data-alt="Ultra modern glass office building with sustainable design features and green landscaping in early morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEX9ZJE-01Buufgek7gAmXoL1YKgzXGdrM_BJRZ4oSaZOLU08zyLXm8ABsS6nihbSaSF2g1pIwj7jH4b-VQrTYmCMy_b6di3Iq1ml6nZMUgOel3YIhqFuIhvkrWiJzPcGCOe7-iFGwMGbSyIwj7Wyn8cMbLUbeOJKgpZYqCfYiZQCrVeEFNeraVNltVY9PwQsQwd8qbxUPQLgxklrX_9oPzwh4kpIwGgECS_evR-tR65pV4RCgtZgRMPJBsnwq2V7B9BslOFoCjTfm" />
                                </motion.div>
                            </div>
                        </section>

                        {/* Institutional High-Tech Modules */}
                        <section className="py-20 px-8 md:px-20 bg-surface-container-low border-b border-outline-variant">
                            <div className="mb-16">
                                <h2 className="text-3xl font-headline font-bold uppercase text-primary tracking-tighter">Infraestructura Especializada</h2>
                                <p className="text-on-surface-variant font-label uppercase tracking-widest text-[10px] mt-2">Gestión de Fluidos de Precisión y Seguridad contra Incendios</p>
                            </div>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {/* Tech Item 1 */}
                                <motion.div variants={fadeUpVariant} className="machined-glass p-6 border-l-2 border-primary hover:-translate-y-1 transition-transform rounded-sm">
                                    <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Nuevo Hospital Nodal Venado Tuerto</h5>
                                    <p className="text-xs text-secondary mb-6">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                    <span className="text-[10px] font-black bg-primary-container/10/50 border border-primary/20 text-tertiary-fixed-dim px-2 py-1 rounded-sm">SANITARIO ELITE</span>
                                </motion.div>
                                {/* Tech Item 2 */}
                                <motion.div variants={fadeUpVariant} className="machined-glass p-6 border-l-2 border-primary-container hover:-translate-y-1 transition-transform rounded-sm">
                                    <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">CEMAFE / Iturraspe</h5>
                                    <p className="text-xs text-secondary mb-6">Dinámica de fluidos sanitarios y sistemas de seguridad de alta tecnología.</p>
                                    <span className="text-[10px] font-black bg-primary-container/10/50 border border-primary/20 text-tertiary-fixed-dim px-2 py-1 rounded-sm">LOGÍSTICA HOSPITALARIA</span>
                                </motion.div>
                                {/* Tech Item 3 */}
                                <motion.div variants={fadeUpVariant} className="machined-glass p-6 border-l-2 border-primary hover:-translate-y-1 transition-transform rounded-sm">
                                    <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Acuario Río Paraná</h5>
                                    <p className="text-xs text-secondary mb-6">Sistemas de soporte vital (LSS), inyección de ozono y protocolos de O2.</p>
                                    <span className="text-[10px] font-black bg-primary-container/10/50 border border-primary/20 text-tertiary-fixed-dim px-2 py-1 rounded-sm">TECNOLOGÍA BIOLÓGICA</span>
                                </motion.div>
                                {/* Tech Item 4 */}
                                <motion.div variants={fadeUpVariant} className="machined-glass p-6 border-l-2 border-primary hover:-translate-y-1 transition-transform rounded-sm">
                                    <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Centro Justicia Penal</h5>
                                    <p className="text-xs text-secondary mb-6">Infraestructura de agua a escala federal y sistemas institucionales de alta seguridad.</p>
                                    <span className="text-[10px] font-black bg-primary-container/10/50 border border-primary/20 text-tertiary-fixed-dim px-2 py-1 rounded-sm">JUDICIAL FEDERAL</span>
                                </motion.div>
                            </motion.div>
                        </section>
                    </>
                )}

                {selectedCategory !== 'all' && (
                    <section className="py-20 px-8 md:px-20 bg-background border-b border-outline-variant">
                        <div className="mb-12 border-l-4 border-primary pl-6">
                            <h2 className="text-4xl font-headline font-bold uppercase text-primary tracking-tighter">Proyectos: {selectedCategory}</h2>
                            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs mt-2">Visión Filtrada del Portfolio</p>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {/* If nothing matches, show a placeholder */}
                            {filteredAll.length === 0 && (
                                <motion.div variants={fadeUpVariant} className="col-span-full py-12 text-center border-2 border-dashed border-outline-variant rounded-xl">
                                    <p className="text-on-surface-variant font-label uppercase">No se encontraron proyectos activos bajo esta categoría.</p>
                                </motion.div>
                            )}
                            {filteredAll.map(p => (
                                <motion.a href={`#project-${p.id}`} variants={fadeUpVariant} key={p.id} className="block machined-glass p-8 border-l-4 border-primary-container shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all rounded-xl group hover:-translate-y-1 cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest bg-primary-container/10/80 border border-primary text-tertiary-fixed-dim px-2 py-1 rounded-sm">{p.category}</span>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${p.status === 'En Ejecución' ? 'bg-primary-container/20/40 text-cyan-200' : 'bg-surface-container text-secondary'}`}>{p.status}</span>
                                    </div>
                                    <h3 className="text-lg font-headline font-bold uppercase text-primary mb-2 line-clamp-2 min-h-[50px]">{p.title}</h3>
                                    <p className="text-xs text-secondary font-label uppercase tracking-widest mb-4 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                                        {p.location}
                                    </p>
                                    <div className="pt-4 border-t border-outline-variant/50 flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-on-tertiary-container opacity-80 group-hover:opacity-100 transition-opacity">{p.specs}</span>
                                        <span className="material-symbols-outlined text-outline text-sm group-hover:text-tertiary-fixed-dim transition-colors">arrow_outward</span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </section>
                )}

                {/* Massive Institutional Registry (The Grid) */}
                <section className="py-20 px-8 md:px-20 bg-surface-container-low">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-2xl font-headline font-bold uppercase text-primary tracking-tighter shadow-sm">Registro Integral de Proyectos</h2>
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined p-2 border border-outline bg-surface-container text-tertiary-fixed-dim rounded-sm">list</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto border border-outline-variant rounded-xl bg-background/50 p-1">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-primary/50 bg-surface-container-low/80">
                                    <th className="py-4 px-4 font-headline uppercase text-xs font-black tracking-widest text-on-tertiary-container">Nombre del Proyecto</th>
                                    <th className="py-4 px-4 font-headline uppercase text-xs font-black tracking-widest text-on-tertiary-container">Categoría / Arquitectura</th>
                                    <th className="py-4 px-4 font-headline uppercase text-xs font-black tracking-widest text-on-tertiary-container">Ubicación</th>
                                    <th className="py-4 px-4 font-headline uppercase text-xs font-black tracking-widest text-on-tertiary-container">Especificaciones Técnicas</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-label">
                                <AnimatePresence>
                                    {allProjectsData
                                        .filter(p => {
                                            if (selectedCategory === 'all') {
                                                return p.status !== 'Historico' || showAllHistory;
                                            }
                                            return p.category === selectedCategory || (selectedCategory === 'Obras en Ejecución' && p.status === 'En Ejecución');
                                        })
                                        .map((p, index) => (
                                            <motion.tr
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                                key={p.id}
                                                className="border-b border-outline-variant hover:bg-surface-container/40 transition-colors cursor-pointer group"
                                            >
                                                <td className="py-4 px-4 font-bold text-primary group-hover:text-tertiary-fixed-dim transition-colors flex items-center gap-3">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${p.status === 'En Ejecución' ? 'bg-tertiary-fixed' : 'bg-slate-600'}`}></div>
                                                    {p.title}
                                                </td>
                                                <td className="py-4 px-4 text-secondary">{p.category}</td>
                                                <td className="py-4 px-4 text-secondary">{p.location}</td>
                                                <td className="py-4 px-4"><span className="text-[10px] font-black text-on-tertiary-container uppercase">{p.specs}</span></td>
                                            </motion.tr>
                                        ))
                                    }
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                    {(selectedCategory === 'all' && !showAllHistory) && (
                        <div className="mt-12 flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowAllHistory(true)}
                                className="px-12 py-4 border border-primary text-tertiary-fixed-dim font-headline font-bold uppercase tracking-widest hover:bg-primary-container hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer rounded-sm flex items-center gap-3"
                            >
                                <span className="material-symbols-outlined">history</span>
                                Cargar Archivo Histórico Completo (+42 Proyectos)
                            </motion.button>
                        </div>
                    )}
                    {(selectedCategory === 'all' && showAllHistory) && (
                        <div className="mt-12 flex justify-center text-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="px-6 py-3 machined-glass text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest rounded-full border border-primary/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">cloud_done</span>
                                Archivo Histórico 100% Sincronizado
                            </motion.span>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
