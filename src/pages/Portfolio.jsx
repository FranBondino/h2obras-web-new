import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categoryHeroData = {
    all: {
        title: "Portfolio de <br /> Ingeniería",
        subtitle: "Un registro consolidado de obras hidráulicas y civiles de alta complejidad. Compromiso con la rigurosidad técnica y la excelencia en la ejecución.",
        tag: "Obras y Proyectos"
    },
    "Obras en Ejecución": {
        title: "Obras en <br /> Ejecución",
        subtitle: "Monitoreo técnico de obras activas. Garantía de continuidad operativa y precisión en cada etapa del desarrollo.",
        tag: "Estado de Obra Activo"
    },
    Salud: {
        title: "Ingeniería <br /> Sanitaria",
        subtitle: "Sistemas críticos para entornos hospitalarios de alta complejidad. Gases medicinales, redes de fluidos y climatización con normativas técnicas de bioseguridad.",
        tag: "Especialidad: Salud"
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
        subtitle: "Soluciones de ingeniería para plantas de producción y procesamiento. Piping industrial y sistemas de presión para alta exigencia.",
        tag: "Potencia Industrial"
    },
    "Sustentable (LEED)": {
        title: "Eficiencia <br /> Sustentable",
        subtitle: "Liderazgo en certificaciones. Sistemas solares térmicos, recuperación pluvial y optimización de recursos para el futuro sostenible.",
        tag: "Certificación LEED"
    }
};
const allProjectsData = [
    // Activos
    // Activos
    {
        id: 'a1',
        title: 'Hospital Regional Oscar Orias',
        category: 'Salud',
        location: 'Ledesma, Jujuy',
        specs: 'Progreso Técnico 92%',
        status: 'En Ejecución',
        fullSpecs: ["Hospital Regional de 25.000 m2", "Proyecto ejecutivo integral (Mayo-Julio 2022)", "Instalaciones sanitarias, gas, riego e incendio", "Certificación técnica al 92%"],
        client: "RIVA-ERG UT",
        contact: "Ing. Gustavo Cavolo",
        image: "/h2obras-web-new/portfolio_hosp.png"
    },
    {
        id: 'a2',
        title: 'Fisherton Park',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: 'Estado Mecánico 94%',
        status: 'En Ejecución',
        fullSpecs: ["Condominio de categoría (45 unidades)", "Proyecto Arq. Carlos Ott", "Instalaciones sanitarias, gas, incendio y riego", "Piscina y termomecánica (Equipos Samsung Multisplit)", "Obra llave en mano"],
        client: "DIX DESARROLLADORA",
        contact: "Gabriel Pérez",
        image: "/h2obras-web-new/portfolio_fish_premium.png"
    },
    {
        id: 'a3',
        title: 'Aeropuerto Int. Rosario',
        category: 'Aeropuertos',
        location: 'Rosario',
        specs: 'Integridad 90%',
        status: 'En Ejecución',
        fullSpecs: ["Proyecto ejecutivo de instalaciones sanitarias", "Red de agua con presurización para tanques de reserva", "Sala de máquinas con equipos Grundfos", "Sistemas de motobombas con sello FM/UL (Normas NFPA - Ruhrpumpen)"],
        client: "UT EDECA-DINALE-PECAM",
        contact: "Ing. Carlos Pellegrini",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_bN1QTT4SJg9ygWthg4My8Xj7neR7hqntf3fThP7OCZ0AwRg7BhqHb4b0s6jsv5jIWf2zuthleCYXaRDbovMzZODlb7sY6eidzClBYYgI77Yywq23BDRtz5xNaRfKm1PNQehfJjOvGSYcYyI8A8fS2E7MnLGINlWZuhPolDfX6AC4onlF3hIiuHRT2Wf7FO6BpiNMkFBT9geU0IaJmsb9YnNOmjXZxOivAAtvn_844RBIlTHCVzQ-GNwk-Qk8nU3cPrz8DSHTYkdx"
    },
    {
        id: 'a4',
        title: 'Edificio Ewain I',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: 'Progreso 15%',
        status: 'En Ejecución',
        fullSpecs: ["Proyecto ejecutivo de calefacción y agua caliente central", "Edificio de 75 unidades funcionales", "Sistema central de calderas Santero", "Control por termostatos wifi y cabezales termoeléctricos"],
        client: "CIMBRA S.R.L. / CLIMA CONFORT",
        contact: "Arq. Sebastián Dinatale"
    },
    {
        id: 'a5',
        title: 'Distrito Puerto Norte',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: '3 Torres Activas',
        status: 'En Ejecución',
        fullSpecs: ["Instalación sanitaria, gas, incendio, piscinas y riego", "Tres torres de 21 plantas", "Sistemas de ionización en piscinas", "Riego por aspersión y goteo automatizado", "Presurización con variadores de velocidad"],
        client: "GRUPO TRANSATLANTICA S.A.",
        contact: "Sebastián Rubino"
    },
    {
        id: 'a6',
        title: 'Edificio La Segunda Seguros',
        category: 'Sustentable (LEED)',
        location: 'Rosario',
        specs: 'LEED Platinum',
        status: 'Entregado',
        fullSpecs: ["Certificación LEED PLATINUM", "Energía Solar Termodinámica y colectores Heat Pipe", "Sistema de recupero de aguas pluviales y grises", "Planta de tratamiento de efluentes con oxidación total", "Remoción de arsénico y terrazas verdes (700 m2)"],
        client: "LA SEGUNDA Coop. Seg. Ltda.",
        contact: "Arq. Marcelo Ponzellini",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEX9ZJE-01Buufgek7gAmXoL1YKgzXGdrM_BJRZ4oSaZOLU08zyLXm8ABsS6nihbSaSF2g1pIwj7jH4b-VQrTYmCMy_b6di3Iq1ml6nZMUgOel3YIhqFuIhvkrWiJzPcGCOe7-iFGwMGbSyIwj7Wyn8cMbLUbeOJKgpZYqCfYiZQCrVeEFNeraVNltVY9PwQsQwd8qbxUPQLgxklrX_9oPzwh4kpIwGgECS_evR-tR65pV4RCgtZgRMPJBsnwq2V7B9BslOFoCjTfm"
    },
    {
        id: 'a7',
        title: 'Nuevo Hospital Nodal Venado Tuerto',
        category: 'Salud',
        location: 'Venado Tuerto',
        specs: 'Sanitario Elite',
        status: 'Entregado',
        fullSpecs: ["Instalaciones de agua y servicios contra incendio", "Colectores y montantes ACS en Acero Inoxidable AISI 304", "Soldaduras TIG y sistemas Victaulic", "Montaje de sistemas presurizados y bombas de incendio"],
        client: "DINALE – EDECA U.T.E.",
        contact: "Ing. Pedro Del Gerbo"
    },
    {
        id: 'a8',
        title: 'CEMAFE / Iturraspe',
        category: 'Salud',
        location: 'Santa Fe',
        specs: 'Logística Hospitalaria',
        status: 'Entregado',
        fullSpecs: ["Proyecto ejecutivo de instalaciones sanitarias e incendio", "Montantes de incendio y ACS en Acero Inoxidable", "Colectores de sala de máquinas y tanques en AISI 304", "Electrobombas sanitarias de alta performance"],
        client: "DINALE - PECAM – MUNDO UTE",
        contact: "Ing. Pedro Del Gerbo"
    },
    {
        id: 'a9',
        title: 'Acuario Río Paraná',
        category: 'Institucional',
        location: 'Rosario',
        specs: 'Tecnología Biológica',
        status: 'Entregado',
        fullSpecs: ["Ejecución de Sistema de Vida (LSS)", "Sistemas de filtrado, caudalímetros, sondas y niveles", "Redes de Aire Comprimido y Actuadores Neumáticos", "Instalación de Ozono y Oxígeno de Emergencia", "Montajes íntegros en AISI 304L"],
        client: "DINALE S.A.",
        contact: "Arq. Carolina Francione"
    },
    {
        id: 'a10',
        title: 'Centro Justicia Penal',
        category: 'Institucional',
        location: 'Rosario',
        specs: 'Judicial Federal',
        status: 'Entregado',
        fullSpecs: ["Instalaciones Sanitarias y de Gas integrales", "Infraestructura para edificio institucional de alta seguridad", "Finalización de obra técnica: Agosto 2017"],
        client: "RIVA S.A.",
        contact: "Ing. Raúl Olguín"
    },

    // Históricos
    {
        id: 'h1',
        title: 'Torre Metra (Puerto Norte)',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: 'Entregado 2023',
        status: 'Historico',
        fullSpecs: ["Torre de 22 Pisos con 156 unidades funcionales", "Instalaciones sanitarias, de gas e incendio", "Proyecto y ejecución integral", "Obra Entregada en Abril del 2023"],
        client: "RIVA S.A.",
        contact: "Ing. Raúl Olguín"
    },
    {
        id: 'h2',
        title: 'Campus UNRN Bariloche',
        category: 'Institucional',
        location: 'Bariloche, Río Negro',
        specs: 'Equipos Grundfos',
        status: 'Historico',
        fullSpecs: ["Proyecto de instalaciones sanitarias y de incendio", "Ejecución de Sala de máquinas completa", "Equipos de presurización Grundfos", "Generación de ACS con equipos Heat Pump"],
        client: "UT DINALE-PECAM",
        contact: "Ing. Sebastián Balbi"
    },
    {
        id: 'h3',
        title: 'Fideicomiso Maui Puerto Norte',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: 'ACS en AISI304',
        status: 'Historico',
        fullSpecs: ["Ejecución de Piping de calderas e intercambiadores de calor", "Circuitos secundarios de acumuladores de ACS en AISI304", "Provisión y montaje de bombas y tableros contra incendio"],
        client: "FIDEICOMISO MAUI",
        contact: "Ing. Diego Bermudez"
    },
    {
        id: 'h4',
        title: 'Hilton Garden Inn',
        category: 'Residencial de Alta Gama',
        location: 'Santa Fe',
        specs: 'Legajo Completo',
        status: 'Historico',
        fullSpecs: ["HILTON GARDEN INN (Dique 2) y VIVIENDAS EN TORRE", "Proyecto de Instalaciones Sanitarias, Incendio, Riego y Piscinas", "Criterios sustentables y estándar de marca Hilton"],
        client: "DINALE S.A.",
        contact: "Estudio Costa Valenzuela"
    },
    {
        id: 'h5',
        title: 'Casino Rosario',
        category: 'Institucional',
        location: 'Rosario',
        specs: 'Alta Complejidad',
        status: 'Historico',
        fullSpecs: ["Hotel y Centro de Convenciones Casino Rosario", "Gerenciamiento de Proyecto de Instalaciones Sanitarias", "Instalaciones de alta complejidad en Battle y Ordoñez"],
        client: "RIVA S.A.",
        contact: "Ing. Raúl Olguín"
    },
    {
        id: 'h6',
        title: 'Centro Islámico King Fhad',
        category: 'Institucional',
        location: 'CABA',
        specs: 'Soldadura TIG AISI304',
        status: 'Historico',
        fullSpecs: ["Gerenciamiento y Dirección de obra", "Instalaciones Sanitarias, Gas e Incendio", "Riego y Fuentes ornamentales", "Instalaciones especiales en Acero Inoxidable AISI304 con soldaduras TIG"],
        client: "RIVA S.A.",
        contact: "Año 1999"
    },
    { id: 'h7', title: 'Estación Elevadora Aguadas', category: 'Infraestructura', location: 'Funes, Santa Fe', specs: 'Bombas Grundfos', status: 'Historico', fullSpecs: ["Obra completa de Estación Elevadora", "Electromecánica y Cañería de impulsión", "Instalación de Bombas Grundfos", "Sistema de Izaje y Reja Mecánica"], client: "ASSA S.A.", contact: "Ing. Oscar Benvenuto" },
    { id: 'h17', title: 'Planta de Biogas', category: 'Sustentable (LEED)', location: 'Venado Tuerto', specs: 'Saneamiento Total', status: 'Historico' },
    { id: 'h25', title: 'Hospital Iturraspe', category: 'Salud', location: 'Santa Fe', specs: 'Arquitectura Hospitalaria', status: 'Historico' },
    {
        id: 'h26',
        title: 'PROYECTO FACA (FOSTER + PARTNERS)',
        category: 'Industrial',
        location: 'Rosario',
        specs: 'Masterplan Maqueta',
        status: 'Historico',
        fullSpecs: ["MASTERPLAN MAQUETA - Barrancas del río Paraná", "3D PIPING SALA DE MAQUINAS MANZANAS C-D", "Proyecto de Instalación Sanitaria, Gas, Incendio, Riego y Piscinas"],
        client: "TGLT"
    },
    {
        id: 'h27',
        title: 'Recoleta’s House',
        category: 'Residencial de Alta Gama',
        location: 'CABA',
        specs: 'Dirección de Obra',
        status: 'Historico',
        fullSpecs: ["Ayacucho y Pacheco de Melo - Capital Federal", "Proyecto ejecutivo y Dirección de obra", "Instalaciones sanitarias, gas e incendio"],
        client: "ESTUDIO SANCHEZ ELIA & ASOCIADOS"
    },
    {
        id: 'h28',
        title: 'Teatro Argentino de La Plata',
        category: 'Institucional',
        location: 'La Plata',
        specs: 'Superficie 60.000 m2',
        status: 'Historico',
        fullSpecs: ["Calle 51 y 10 La Plata", "Gerenciamiento de Proyecto y Dirección de obra", "Instalaciones sanitarias y de incendio", "Año 1999"]
    },
    {
        id: 'h29',
        title: 'Hospital Blas Dubarry',
        category: 'Salud',
        location: 'Mercedes, BS.AS.',
        specs: 'Sanidad Institucional',
        status: 'Historico',
        fullSpecs: ["Mercedes - Provincia de Buenos Aires", "Proyecto de Instalaciones Sanitarias, Gas e Incendio"],
        client: "ELEPRINT S.A."
    },
    {
        id: 'h30',
        title: 'Distrito Sur / Noroeste',
        category: 'Institucional',
        location: 'Rosario',
        specs: 'Centros Municipales',
        status: 'Historico',
        fullSpecs: ["Centro Municipal Distrito Sur y Distrito Noroeste", "Reproyecto de instalaciones sanitarias, gas e incendio", "Cloacas, pluviales y red de agua"],
        client: "PECAM S.A. / ESTUDIO BECHIS"
    },
    {
        id: 'h31',
        title: 'Condominios del Alto',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: 'Etapas I, II y III',
        status: 'Historico',
        fullSpecs: ["Asesoramiento para proyecto ejecutivo", "Instalaciones Sanitarias, Incendio, Riego y Piscina", "Proyecto aprobado de Regulación Pluvial"]
    },
    {
        id: 'h32',
        title: 'Hotel Esplendor Savoy',
        category: 'Residencial de Alta Gama',
        location: 'Rosario',
        specs: 'Ampliación 2da Etapa',
        status: 'Historico',
        fullSpecs: ["San Lorenzo esq. San Martín - Rosario", "Instalación sanitaria y servicios contra incendio", "Ventilaciones ambientales y Gas", "Instalación de equipamiento gastronómico", "Sistema de filtrado e hidroterapia en piscina"]
    },
    {
        id: 'h33',
        title: 'Estadio N.O.B. Independencia',
        category: 'Institucional',
        location: 'Rosario',
        specs: 'Redes de Alta Presión',
        status: 'Historico',
        fullSpecs: ["Estadio Parque Independencia - Newell's Old Boys", "Red Cloacal y Desagües pluviales", "Instalaciones Sanitarias, Gas e Incendio"],
        client: "CLUB ATLÉTICO NEWELL´S OLD BOYS"
    },
    {
        id: 'h34',
        title: 'Complejo Bella Vista (NOB)',
        category: 'Institucional',
        location: 'Rosario',
        specs: 'Riego Presurizado',
        status: 'Historico',
        fullSpecs: ["Proyecto y Dirección", "Instalación sanitaria y gas en vestuarios", "Sistema de riego presurizado automático en canchas de entrenamiento"],
        client: "CLUB ATLÉTICO NEWELL´S OLD BOYS"
    },
    {
        id: 'h35',
        title: 'La Gallega Supermercados',
        category: 'Comercial',
        location: 'Rosario',
        specs: 'Sistemas Hidroneumáticos',
        status: 'Historico',
        fullSpecs: ["Sucursales: Mitre y Pellegrini, Balcarce 240, Mendoza 7000", "Instalación sanitaria, gas e incendio", "Provisión y montaje de equipos hidroneumáticos"],
        client: "LA GALLEGA S.A."
    },
    {
        id: 'h36',
        title: 'Hipermercado Libertad',
        category: 'Comercial',
        location: 'Rosario',
        specs: 'Nave de 20.000 m2',
        status: 'Historico',
        fullSpecs: ["Oroño 5960 - Rosario", "Instalación Sanitaria y Gas", "Proyecto de desagües pluviales exteriores y red de impulsión cloacal", "Año 2000"],
        client: "LIBERTAD S.A."
    }
];

const categories = [
    { id: 'all', label: 'Todos los Proyectos', icon: 'apps' },
    { id: 'Obras en Ejecución', label: 'Obras en Ejecución', icon: 'engineering' },
    { id: 'Salud', label: 'Salud', icon: 'medical_services' },

    { id: 'Aeropuertos', label: 'Aeropuertos', icon: 'flight_takeoff' },
    { id: 'Residencial de Alta Gama', label: 'Residencial de Alta Gama', icon: 'domain' },
    { id: 'Industrial', label: 'Industrial', icon: 'factory' },
    { id: 'Sustentable (LEED)', label: 'Sustentable (LEED)', icon: 'potted_plant' }
];

function ProjectCard({ project, onClick }) {
    const { title, location, progress, label, image, fullSpecs, tags } = project;
    const imgUrl = image || "https://images.unsplash.com/photo-1541888941259-7b9d9218d0bc?q=80&w=2070&auto=format&fit=crop";

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            whileHover={{ y: -8 }}
            onClick={() => onClick(project)}
            className="bg-surface group relative overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
            <div className="h-64 overflow-hidden relative">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={imgUrl}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-accent text-on-accent text-[9px] font-bold px-3 py-1 uppercase tracking-[0.2em] z-10 shadow-lg">
                    {label || project.status}
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="bg-primary backdrop-blur-md text-white text-[10px] font-technical px-2 py-1 uppercase tracking-widest border border-white/10">
                        Ref. Operativa: {project.id.toUpperCase()}
                    </span>
                </div>
            </div>
            <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-accent"></div>
                    <span className="text-[10px] text-primary/70 font-bold uppercase tracking-[0.3em]">
                        {location}
                    </span>
                </div>
                <h3 className="text-2xl font-headline font-black uppercase text-primary mb-6 leading-tight group-hover:text-secondary transition-colors duration-300">
                    {title}
                </h3>
                <div className="space-y-4 border-t border-outline-variant/10 pt-6">
                    <div className="flex justify-between items-center text-[10px] font-technical uppercase tracking-widest opacity-60">
                        <span>Estado del Sistema</span>
                        <span>{progress ? `${progress}%` : "Integridad"}</span>
                    </div>
                    <div className="w-full bg-surface-container h-1 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: progress ? `${progress}%` : '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-primary h-full"
                        ></motion.div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {(tags || (fullSpecs ? fullSpecs.slice(0, 2) : [])).map(tag => (
                            <span key={tag} className="bg-surface-container-high text-[9px] font-technical font-bold px-2 py-1 text-primary uppercase tracking-tight">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ProjectDetailModal({ project, onClose }) {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 lg:p-20 bg-primary/95 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 40, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="bg-surface w-full max-w-7xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative border border-white/10"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-30 bg-white text-primary w-12 h-12 flex items-center justify-center rounded-none hover:bg-accent hover:text-on-accent transition-all duration-300 shadow-xl group"
                >
                    <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">close</span>
                </button>

                {/* Left Side: Technical Visual */}
                <div className="w-full lg:w-3/5 h-64 lg:h-auto overflow-hidden relative group">
                    <img
                        src={project.image || "https://images.unsplash.com/photo-1541888941259-7b9d9218d0bc?q=80&w=2070&auto=format&fit=crop"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 technical-grid opacity-20"></div>

                    {/* Perspective Label */}
                    <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                        <span className="bg-accent text-on-accent text-[10px] font-black px-4 py-1 uppercase tracking-[0.4em] shadow-lg">
                            Vista Operativa
                        </span>
                        <span className="text-white/60 font-technical text-[9px] uppercase tracking-widest pl-1">
                            Ref. de Sistema: {project.id.toUpperCase()}_VOL_01
                        </span>
                    </div>
                </div>

                {/* Right Side: Engineering Datasheet */}
                <div className="w-full lg:w-2/5 p-10 md:p-16 overflow-y-auto bg-surface technical-grid-bg relative">
                    <div className="absolute inset-0 bg-surface/90 z-0"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-1 bg-accent"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Datasheet de Ingeniería</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-headline font-black uppercase text-primary mb-12 leading-[0.9] tracking-tighter">
                            {project.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
                            <div className="border-l-2 border-outline-variant/20 pl-6">
                                <p className="text-[10px] uppercase font-bold text-primary tracking-[0.2em] mb-2 opacity-60">Ubicación</p>
                                <p className="text-sm font-headline font-extrabold text-primary uppercase">{project.location}</p>
                            </div>
                            <div className="border-l-2 border-outline-variant/20 pl-6">
                                <p className="text-[10px] uppercase font-bold text-primary tracking-[0.2em] mb-2 opacity-60">Categoría</p>
                                <p className="text-sm font-headline font-extrabold text-primary uppercase">{project.category}</p>
                            </div>
                            <div className="border-l-2 border-outline-variant/20 pl-6">
                                <p className="text-[10px] uppercase font-bold text-primary/60 tracking-[0.2em] mb-2">Entidad / Cliente</p>
                                <p className="text-sm font-headline font-extrabold text-primary uppercase">{project.client || "Consolidado Nacional"}</p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-8 flex items-center gap-4">
                                <span className="material-symbols-outlined text-sm">settings_input_component</span>
                                Especificaciones del Sistema
                            </h4>
                            <ul className="space-y-6">
                                {(project.fullSpecs || [project.specs]).map((spec, i) => (
                                    <li key={i} className="flex gap-4 items-start text-sm text-primary/80 font-body leading-relaxed group">
                                        <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                                        <span className="opacity-80 group-hover:opacity-100 transition-opacity">{spec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {project.contact && (
                            <div className="bg-surface-container-low p-8 border border-outline-variant/10">
                                <p className="text-[10px] uppercase font-bold text-primary/60 tracking-[0.3em] mb-4">Validación de Obra</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">verified</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-headline font-black text-primary uppercase tracking-wider">{project.contact}</span>
                                        <span className="text-[9px] font-technical uppercase opacity-40">Responsable de Proyecto</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showAllHistory, setShowAllHistory] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const mainContentRef = useRef(null);

    // Scroll content to top when category changes
    useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedCategory]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeProject]);

    const filteredAll = allProjectsData.filter(p =>
        selectedCategory === 'all' ||
        (selectedCategory === 'Obras en Ejecución' && p.status === 'En Ejecución') ||
        p.category === selectedCategory
    );

    const historicalProjects = allProjectsData.filter(p => p.status === 'Historico');

    const currentHero = categoryHeroData[selectedCategory] || categoryHeroData.all;

    return (
        <>
            <div className="bg-gradient-to-r from-transparent via-[#5b5f61]/10 to-transparent h-[1px]"></div>
            <div className="flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:flex flex-col h-screen w-80 left-0 sticky top-[88px] bg-surface-container-low border-r border-outline-variant/10 py-12 px-6 space-y-4">
                    <div className="px-2 mb-10">
                        <div className="w-8 h-1 bg-accent mb-6"></div>
                        <h3 className="text-xl font-headline font-black text-primary uppercase tracking-tighter">Matriz de Obras</h3>
                        <p className="text-[10px] text-primary/60 tracking-[0.3em] uppercase font-technical mt-1">Estrategia de Infraestructura Nacional</p>
                    </div>
                    <nav className="flex flex-col space-y-1 relative">
                        {categories.map(cat => {
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`relative flex items-center gap-4 py-4 px-4 w-full text-left transition-all duration-300 z-10 group ${isActive
                                        ? 'text-white'
                                        : 'text-primary/60 hover:text-primary hover:pl-6'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-primary shadow-lg border-l-4 border-accent z-[-1]"
                                            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                                        />
                                    )}
                                    <span className={`material-symbols-outlined text-lg ${isActive ? 'text-accent' : 'opacity-40 group-hover:opacity-100 group-hover:text-primary'}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{cat.icon}</span>
                                    <span className="font-headline font-bold text-xs tracking-widest uppercase">{cat.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                    <div className="mt-auto p-2 pt-12">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 text-[10px] font-black text-white bg-primary uppercase tracking-[0.2em] shadow-xl hover:bg-accent hover:text-on-accent transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <span className="material-symbols-outlined text-sm">download_2</span>
                            Exportar Registro PDF
                        </motion.button>
                    </div>
                </aside>
                {/* Main Content Area */}
                <main ref={mainContentRef} className="flex-1 max-w-full overflow-hidden bg-surface">
                    {/* Hero Banner */}
                    <section className="relative min-h-[450px] md:h-[600px] bg-primary flex items-center py-24 md:py-0 overflow-hidden">
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.7 }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                        >
                            <img
                                alt="Industrial construction"
                                className="w-full h-full object-cover scale-105"
                                style={{ filter: 'brightness(0.7) contrast(1.1) saturate(0.8)' }}
                                src="https://images.unsplash.com/photo-1541888941259-7b9d9218d0bc?q=80&w=2070&auto=format&fit=crop"
                            />
                        </motion.div>
                        <div className="absolute inset-0 technical-grid opacity-20"></div>

                        <div className="container mx-auto px-8 md:px-24 relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCategory}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-1 bg-accent"></div>
                                        <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">Registro de Obras</span>
                                    </div>
                                    <h1
                                        className="text-white text-5xl md:text-8xl lg:text-9xl font-black font-headline tracking-tighter leading-[0.85] uppercase mb-10"
                                        dangerouslySetInnerHTML={{ __html: currentHero.title }}
                                    />
                                    <p className="text-white text-xl md:text-2xl max-w-3xl font-body leading-relaxed">
                                        {currentHero.subtitle}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Aesthetic Module Label */}
                        <div className="absolute bottom-12 right-12 hidden lg:block text-right">
                            <span className="text-white/60 text-[11px] font-technical uppercase tracking-[0.5em] block mb-2">Registro de Obras</span>
                            <div className="w-32 h-px bg-white/10 ml-auto"></div>
                        </div>
                    </section>
                    {selectedCategory === 'all' && (
                        <>
                            {/* Execution Status Tracker */}
                            <section className="py-20 px-8 md:px-20 bg-surface">
                                <div className="flex justify-between items-end mb-16 border-l-4 border-primary pl-6">
                                    <div>
                                        <h2 className="text-4xl font-headline font-black uppercase text-primary tracking-tighter">Antecedentes de Obras</h2>
                                        <p className="text-primary/70 font-label uppercase tracking-widest text-xs mt-2">Estado de Ejecución Activa: Octubre 2025</p>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <span className="text-6xl font-headline font-black text-primary-container/40">01</span>
                                    </div>
                                </div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1 } },
                                        hidden: {}
                                    }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {/* Project Card 1 */}
                                    <ProjectCard
                                        project={allProjectsData.find(p => p.id === 'a1')}
                                        onClick={setActiveProject}
                                    />
                                    {/* Project Card 2 */}
                                    <ProjectCard
                                        project={allProjectsData.find(p => p.id === 'a2')}
                                        onClick={setActiveProject}
                                    />
                                    {/* Project Card 3 */}
                                    <ProjectCard
                                        project={allProjectsData.find(p => p.id === 'a3')}
                                        onClick={setActiveProject}
                                    />
                                </motion.div>
                                {/* Secondary Execution List (Bento-style) */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }
                                    }
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                                    }}
                                    className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8"
                                >
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'a4'))}
                                        className="lg:col-span-2 bg-primary p-10 text-white flex flex-col justify-between cursor-pointer group"
                                    >
                                        <div>
                                            <span className="text-tertiary-fixed text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block">Verticalidad Residencial</span>
                                            <h4 className="text-3xl font-headline font-black uppercase mb-4 group-hover:text-tertiary-fixed transition-colors">Edificio Ewain I</h4>
                                            <p className="text-on-primary-container text-sm leading-relaxed mb-8">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-4xl font-headline font-black">15%</div>
                                            <div className="flex-1 bg-white/10 h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '15%' }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                                    className="bg-tertiary-fixed h-full"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'a5'))}
                                        className="bg-surface-container-high p-10 flex flex-col justify-between cursor-pointer group"
                                    >
                                        <p className="text-[10px] font-technical text-primary/60 uppercase tracking-widest mb-1 group-hover:text-accent/60 transition-colors">Ref. de Sistema</p>
                                        <h4 className="text-xl font-headline font-black uppercase text-primary group-hover:text-cyan-700 transition-colors">Distrito Puerto Norte</h4>
                                        <div className="space-y-2">
                                            <p className="text-xs text-primary/70 uppercase font-bold tracking-widest">Estado: Activo</p>
                                            <p className="text-sm font-label text-on-surface-variant">Ejecución técnica de tres torres para sistemas de distribución hidráulica y térmica.</p>
                                        </div>
                                        <div className="pt-4 border-t border-outline-variant">
                                            <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Detalle Técnico</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'h1'))}
                                        className="bg-surface-container-lowest p-10 flex flex-col justify-between border-r-4 border-primary-container cursor-pointer group"
                                    >
                                        <h4 className="text-xl font-headline font-black uppercase text-primary group-hover:text-cyan-700 transition-colors">Metra Rosario</h4>
                                        <div className="space-y-2">
                                            <p className="text-xs text-success-container text-green-700 uppercase font-bold tracking-widest">Estado: Entregado 2023</p>
                                            <p className="text-sm font-label text-on-surface-variant">22 pisos de ingeniería residencial de alta complejidad.</p>
                                        </div>
                                        <div className="pt-4 border-t border-outline-variant">
                                            <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Ciclo de Vida Completo</span>
                                        </div>
                                    </motion.div>
                                </motion.div >
                            </section >
                            {/* Sustainability / LEED Section */}
                            < section className="py-24 px-8 md:px-20 bg-[#00162a] text-white overflow-hidden relative" >
                                <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-highest/5 mask-gradient hidden lg:block"></div>
                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-[2px] w-12 bg-tertiary-fixed"></div>
                                            <span className="text-tertiary-fixed text-sm font-bold tracking-[0.3em] uppercase">Liderazgo Sustentable</span>
                                        </div>
                                        <h2 className="text-5xl font-headline font-black uppercase tracking-tighter mb-8 leading-none">Edificio La Segunda Seguros <br /><span className="text-tertiary-fixed">LEED Platinum</span></h2>
                                        <p className="text-on-primary-container text-lg mb-12 font-light leading-relaxed max-w-xl">La cima de la ingeniería corporativa sustentable en Rosario. Este proyecto con certificación LEED PLATINUM integra sistemas de alta eficiencia para el liderazgo ambiental.</p>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-tertiary-fixed">
                                                    <span className="material-symbols-outlined">wb_sunny</span>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">Solar Térmico</span>
                                                </div>
                                                <p className="text-xs text-on-primary-container font-label">Red de generación solar ACS de alta eficiencia.</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-tertiary-fixed">
                                                    <span className="material-symbols-outlined">water_drop</span>
                                                    <p className="text-[10px] font-technical text-white/40 uppercase tracking-widest mb-1">Ref. Operativa</p>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">Recuperación de Agua</span>
                                                </div>
                                                <p className="text-xs text-on-primary-container font-label">Eliminación avanzada de arsénico y recuperación pluvial.</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-tertiary-fixed">
                                                    <span className="material-symbols-outlined">biotech</span>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">Tratamiento Biológico</span>
                                                </div>
                                                <p className="text-xs text-on-primary-container font-label">Procesadores séptico-biológicos avanzados in situ.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative h-[500px]">
                                        <img alt="Edificio sustentable moderno" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" data-alt="Ultra modern glass office building with sustainable design features and green landscaping in early morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEX9ZJE-01Buufgek7gAmXoL1YKgzXGdrM_BJRZ4oSaZOLU08zyLXm8ABsS6nihbSaSF2g1pIwj7jH4b-VQrTYmCMy_b6di3Iq1ml6nZMUgOel3YIhqFuIhvkrWiJzPcGCOe7-iFGwMGbSyIwj7Wyn8cMbLUbeOJKgpZYqCfYiZQCrVeEFNeraVNltVY9PwQsQwd8qbxUPQLgxklrX_9oPzwh4kpIwGgECS_evR-tR65pV4RCgtZgRMPJBsnwq2V7B9BslOFoCjTfm" />
                                    </div>
                                </div>
                            </section >
                            {/* Institutional High-Tech Modules */}
                            < section className="py-20 px-8 md:px-20 bg-surface-container-low" >
                                <div className="mb-16">
                                    <h2 className="text-3xl font-headline font-black uppercase text-primary tracking-tighter">Infraestructura Especializada</h2>
                                    <p className="text-primary/70 font-label uppercase tracking-widest text-[10px] mt-2">Gestión de Fluidos de Precisión y Seguridad contra Incendios</p>
                                </div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1 } }
                                    }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                                >
                                    {/* Tech Item 1 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        className="bg-surface p-6 border-l-2 border-primary transition-colors cursor-pointer"
                                    >
                                        <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Nuevo Hospital Nodal Venado Tuerto</h5>
                                        <p className="text-xs text-primary/70 mb-4">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">SANITARIO ELITE</span>
                                    </motion.div>
                                    {/* Tech Item 2 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        className="bg-surface p-6 border-l-2 border-primary transition-colors cursor-pointer"
                                    >
                                        <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">CEMAFE / Iturraspe</h5>
                                        <p className="text-xs text-primary/70 mb-4">Dinámica de fluidos sanitarios y sistemas de seguridad de alta tecnología.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">LOGÍSTICA HOSPITALARIA</span>
                                    </motion.div>
                                    {/* Tech Item 3 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        className="bg-surface p-6 border-l-2 border-primary transition-colors cursor-pointer"
                                    >
                                        <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Acuario Río Paraná</h5>
                                        <p className="text-xs text-primary/70 mb-4">Sistemas de soporte vital (LSS), inyección de ozono y protocolos de O2.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">TECNOLOGÍA BIOLÓGICA</span>
                                    </motion.div>

                                </motion.div>
                            </section >
                        </>
                    )}

                    {
                        selectedCategory !== 'all' && (
                            <section className="py-20 px-8 md:px-20 bg-surface">
                                <div className="mb-12">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        key={`title-${selectedCategory}`}
                                        className="text-4xl font-headline font-black uppercase text-primary tracking-tighter"
                                    >
                                        Proyectos: {selectedCategory}
                                    </motion.h2>
                                    <p className="text-primary/70 font-label uppercase tracking-widest text-xs mt-2">Visión Filtrada del Portfolio</p>
                                </div>
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    <AnimatePresence mode="popLayout">
                                        {filteredAll.length === 0 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="col-span-full py-12 text-center border-2 border-dashed border-outline-variant"
                                            >
                                                <p className="text-primary/70 font-label uppercase">No se encontraron proyectos activos bajo esta categoría.</p>
                                            </motion.div>
                                        )}
                                        {filteredAll.map((p, index) => (
                                            <ProjectCard
                                                key={p.id}
                                                project={p}
                                                onClick={setActiveProject}
                                            />
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                            </section>
                        )
                    }

                    {/* Massive Institutional Registry (The Grid) */}
                    <section className="py-20 px-8 md:px-20 bg-surface">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-2xl font-headline font-black uppercase text-primary">Registro Integral de Proyectos</h2>
                            <div className="flex gap-4">
                                <button className="material-symbols-outlined p-2 border border-outline/20 hover:bg-primary hover:text-white transition-all">grid_view</button>
                                <button className="material-symbols-outlined p-2 border border-outline/20 bg-primary text-white">list</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-primary">
                                        <th className="py-4 font-headline uppercase text-xs font-black tracking-widest text-primary">Nombre del Proyecto</th>
                                        <th className="py-4 font-headline uppercase text-xs font-black tracking-widest text-primary">Categoría / Arquitectura</th>
                                        <th className="py-4 font-headline uppercase text-xs font-black tracking-widest text-primary">Ubicación</th>
                                        <th className="py-4 font-headline uppercase text-xs font-black tracking-widest text-primary">Especificaciones del Sistema</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-label">
                                    {allProjectsData
                                        .filter(p => {
                                            if (selectedCategory === 'all') {
                                                // Show featured active projects + history if requested
                                                return p.status !== 'Historico' || showAllHistory;
                                            }
                                            // Show everything in the specific category
                                            return p.category === selectedCategory || (selectedCategory === 'Obras en Ejecución' && p.status === 'En Ejecución');
                                        })
                                        .map(p => (
                                            <tr
                                                key={p.id}
                                                onClick={() => setActiveProject(p)}
                                                className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors cursor-pointer group"
                                            >
                                                <td className="py-4 font-bold text-primary group-hover:text-cyan-700">{p.title}</td>
                                                <td className="py-4 text-primary/70">{p.category}</td>
                                                <td className="py-4 text-primary/70">{p.location}</td>
                                                <td className="py-4 md:flex items-center justify-between">
                                                    <span className="text-[10px] font-black text-primary uppercase">{p.specs}</span>
                                                    <span className="material-symbols-outlined text-xs text-outline opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {(selectedCategory === 'all' && !showAllHistory) && (
                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={() => setShowAllHistory(true)}
                                    className="px-12 py-4 border border-primary text-primary font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all cursor-pointer">
                                    Cargar Archivo Histórico Completo (+42 Proyectos)
                                </button>
                            </div>
                        )}
                        {(selectedCategory === 'all' && showAllHistory) && (
                            <div className="mt-12 flex justify-center text-center">
                                <span className="px-6 py-3 bg-surface-container text-xs font-bold text-success-container text-green-700 uppercase tracking-widest">
                                    Archivo Histórico 100% Sincronizado
                                </span>
                            </div>
                        )}
                    </section>
                </main>
            </div>

            <AnimatePresence>
                {activeProject && (
                    <ProjectDetailModal
                        project={activeProject}
                        onClose={() => setActiveProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
