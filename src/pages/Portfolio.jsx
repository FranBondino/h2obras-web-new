import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEN2yfqxqEQIbxDe0bP-53Db2bDsXSoliagrMaiO2CWUzPEQ00sNHkdtYMutwN57bOjgFrRVeyY5act23MT53ftMGz7hjAYlS7mhj4mWgfk-af1HF3DlFVNYufdMVMCeDSglEFDy2E1OyGCIImty9i6MMmYsTkr4uSbgK6sKh0plvLrR-IfHP-RiZLfixM6TinFbB0YZ121DEn4Cev0ZqT0wnTkKuF10j0imLuHQmfqOk3SMk4F2K32EI0dzw2Z6lGztYN_N7wc8cT"
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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALdxS61_tfBcV9AIFPC6SGQsGVI663OHqAYwJUtFDFk_hrxZDzmuYqNsJQznJ3wQTW2Uk2QOvIBY2MeyEMskeXCR_eelPKWDumPAUvU6aBqKNCpHCrey8wEPik8-CY6pX4u5oe8Vo9UoVyQ9lgX9eehGrQ3z66ufSbAVwIWgwPSiUdsph1NgvLsN3HLuX55pEo9m1boRQ2VCKOuoSfge2xtokjwGWWZfgqpZCzsNEuMPkNXmfHRQcMCHg8IZzGJlqAa8tlLBf01zOu"
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
        category: 'Centros Judiciales',
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
    {
        id: 'h7',
        title: 'Estación Elevadora Aguadas',
        category: 'Infraestructura',
        location: 'Funes, Santa Fe',
        specs: 'Bombas Grundfos',
        status: 'Historico',
        fullSpecs: ["Obra completa de Estación Elevadora", "Electromecánica y Cañería de impulsión", "Instalación de Bombas Grundfos", "Sistema de Izaje y Reja Mecánica"],
        client: "ASSA S.A.",
        contact: "Ing. Oscar Benvenuto"
    },
    { id: 'h8', title: 'Torres Dolfines Guaraní', category: 'Residencial de Alta Gama', location: 'Rosario', specs: 'Presurización 40 Pisos', status: 'Historico' },
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

function ProjectCard({ project, onClick }) {
    const { title, location, progress, label, image, fullSpecs, tags } = project;
    const imgUrl = image || "https://images.unsplash.com/photo-1541888941259-7b9d9218d0bc?q=80&w=2070&auto=format&fit=crop";

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            onClick={() => onClick(project)}
            className="bg-surface-container-lowest group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            <div className="h-64 overflow-hidden relative">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={imgUrl}
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter z-10">
                    {label || project.status}
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-xl font-headline font-extrabold uppercase text-primary mb-2 group-hover:text-cyan-700 transition-colors">
                    {title}
                </h3>
                <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6">
                    {location}
                </p>
                <div className="space-y-4 border-t border-outline-variant/15 pt-6">
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-outline uppercase">Referencia Técnica</span>
                        <span className="font-black text-primary">{progress ? `${progress}%` : "Integrit"}</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: progress ? `${progress}%` : '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="bg-primary h-full"
                        ></motion.div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {(tags || (fullSpecs ? fullSpecs.slice(0, 2) : [])).map(tag => (
                            <span key={tag} className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-primary/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="bg-surface w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl flex flex-col md:flex-row relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-primary text-white p-2 rounded-full hover:bg-cyan-700 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-primary-container">
                    <img
                        src={project.image || "https://images.unsplash.com/photo-1541888941259-7b9d9218d0bc?q=80&w=2070&auto=format&fit=crop"}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* Right Side: Info */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-700 mb-2 block">Ficha Técnica de Obra</span>
                    <h2 className="text-3xl md:text-5xl font-headline font-black uppercase text-primary mb-6 leading-tight">
                        {project.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-6 mb-8 border-y border-outline-variant/20 py-6">
                        <div>
                            <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Ubicación</p>
                            <p className="text-sm font-label text-primary">{project.location}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Categoría</p>
                            <p className="text-sm font-label text-primary">{project.category}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Estado</p>
                            <p className="text-sm font-label text-primary">{project.status}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">Cliente</p>
                            <p className="text-sm font-label text-primary">{project.client || "Consolidado Federal"}</p>
                        </div>
                    </div>

                    <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Especificaciones del Sistema</h4>
                    <ul className="space-y-3 mb-8">
                        {(project.fullSpecs || [project.specs]).map((spec, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-secondary leading-relaxed">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <span>{spec}</span>
                            </li>
                        ))}
                    </ul>

                    {project.contact && (
                        <div className="bg-surface-container-high p-6 rounded-sm">
                            <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-2">Referencia Técnica del Proyecto</p>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">engineering</span>
                                <span className="text-sm font-bold text-primary">{project.contact}</span>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showAllHistory, setShowAllHistory] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

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
                <aside className="hidden lg:flex flex-col h-screen w-80 left-0 sticky top-[88px] bg-[#f8f9fa] dark:bg-[#0d2b45] py-10 px-4 space-y-2">
                    <div className="px-4 mb-8">
                        <h3 className="text-lg font-bold text-[#00162a] dark:text-[#f8f9fa] font-headline uppercase">Categorías de Proyectos</h3>
                        <p className="text-[10px] text-secondary tracking-[0.2em] uppercase font-label">Infraestructura a Escala Federal</p>
                    </div>
                    <nav className="flex flex-col space-y-1 relative">
                        {categories.map(cat => {
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`relative flex items-center gap-3 py-3 px-4 w-full text-left transition-all duration-300 z-10 ${isActive
                                        ? 'text-white dark:text-[#00162a] font-bold'
                                        : 'text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 text-sm'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-[#0d2b45] dark:bg-[#f8f9fa] border-l-4 border-[#ffddba] z-[-1]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{cat.icon}</span>
                                    <span className="font-['Inter'] text-sm tracking-wide uppercase">{cat.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                    <div className="mt-auto p-4 bg-surface-container-high rounded-sm">
                        <button className="w-full py-4 text-xs font-bold text-primary uppercase tracking-tighter border border-outline/20 hover:bg-primary hover:text-white transition-all">Solicitar Ficha Técnica</button>
                    </div>
                </aside>
                {/* Main Content Area */}
                <main className="flex-1 max-w-full overflow-hidden">
                    {/* Hero Banner */}
                    <section className="relative min-h-[400px] md:h-[614px] bg-primary flex items-center px-6 md:px-20 py-20 md:py-0 overflow-hidden">
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.4 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 mix-blend-overlay"
                        >
                            <img alt="Industrial construction" className="w-full h-full object-cover" data-alt="dramatic wide angle shot of a large scale civil engineering project site with steel structures and heavy machinery at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVgnCcJOXJbS1CPKSLW2YY7rrCKvOGonDzDLZKh99l1PWKa8CULPPUz0axyy9_XHd6EHNiiqId32pHdTyCNpAZ9aQlIS1cq_BRPUdwlRr7n1cJVdIncH7WmfO_N5-pSB0cihPmC0xrcQaY-gTgwH2ONESYYyekuTUWFlZekTQiSmD9rr_KLnzeynpzQnLIPydQuw6fX4bFXJ3BO3so6vu9E9Er3rUE543iyaiG1FAO7GyR3zamgefvhxL8LQwR5KLwZMsolOr_TehX" />
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
                                    <span className="text-tertiary-fixed text-sm font-bold tracking-[0.3em] uppercase mb-4 block">{currentHero.tag}</span>
                                    <h1
                                        className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-none uppercase mb-6"
                                        dangerouslySetInnerHTML={{ __html: currentHero.title }}
                                    />
                                    <p className="text-on-primary-container text-lg max-w-2xl font-light leading-relaxed">
                                        {currentHero.subtitle}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </section>
                    {selectedCategory === 'all' && (
                        <>
                            {/* Execution Status Tracker */}
                            <section className="py-20 px-8 md:px-20 bg-surface">
                                <div className="flex justify-between items-end mb-16 border-l-4 border-primary pl-6">
                                    <div>
                                        <h2 className="text-4xl font-headline font-black uppercase text-primary tracking-tighter">Antecedentes de Obras</h2>
                                        <p className="text-secondary font-label uppercase tracking-widest text-xs mt-2">Estado de Ejecución Activa: Octubre 2025</p>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <span className="text-6xl font-headline font-black text-primary-container/10">01</span>
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
                                        <h4 className="text-xl font-headline font-black uppercase text-primary group-hover:text-cyan-700 transition-colors">Distrito Puerto Norte</h4>
                                        <div className="space-y-2">
                                            <p className="text-xs text-secondary uppercase font-bold tracking-widest">Estado: Activo</p>
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
                                    <p className="text-secondary font-label uppercase tracking-widest text-[10px] mt-2">Gestión de Fluidos de Precisión y Seguridad contra Incendios</p>
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
                                        <p className="text-xs text-secondary mb-4">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">SANITARIO ELITE</span>
                                    </motion.div>
                                    {/* Tech Item 2 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        className="bg-surface p-6 border-l-2 border-primary transition-colors cursor-pointer"
                                    >
                                        <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">CEMAFE / Iturraspe</h5>
                                        <p className="text-xs text-secondary mb-4">Dinámica de fluidos sanitarios y sistemas de seguridad de alta tecnología.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">LOGÍSTICA HOSPITALARIA</span>
                                    </motion.div>
                                    {/* Tech Item 3 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        className="bg-surface p-6 border-l-2 border-primary transition-colors cursor-pointer"
                                    >
                                        <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Acuario Río Paraná</h5>
                                        <p className="text-xs text-secondary mb-4">Sistemas de soporte vital (LSS), inyección de ozono y protocolos de O2.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">TECNOLOGÍA BIOLÓGICA</span>
                                    </motion.div>
                                    {/* Tech Item 4 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        className="bg-surface p-6 border-l-2 border-primary transition-colors cursor-pointer"
                                    >
                                        <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Centro Justicia Penal</h5>
                                        <p className="text-xs text-secondary mb-4">Infraestructura de agua a escala federal y sistemas institucionales de alta seguridad.</p>
                                        <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">JUDICIAL FEDERAL</span>
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
                                    <p className="text-secondary font-label uppercase tracking-widest text-xs mt-2">Visión Filtrada del Portfolio</p>
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
                                                <p className="text-secondary font-label uppercase">No se encontraron proyectos activos bajo esta categoría.</p>
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
                                                <td className="py-4 text-secondary">{p.category}</td>
                                                <td className="py-4 text-secondary">{p.location}</td>
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
