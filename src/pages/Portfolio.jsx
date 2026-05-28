import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categoryHeroData = {
    all: {
        title: "Registro de <br /> Obras",
        subtitle: "Registro de proyectos, dirección y ejecución de instalaciones de alta complejidad, con plazos garantizados y rigurosidad técnica.",
        tag: "Obras y Proyectos"
    },
    Sanitarias: {
        title: "Instalaciones <br /> Sanitarias",
        subtitle: "Sistemas de distribución de agua potable, desagües cloacales y pluviales. Montajes de colectores en acero inoxidable y termofusión de alta presión.",
        tag: "Instalaciones Sanitarias"
    },
    Gas: {
        title: "Redes de <br /> Gas Natural",
        subtitle: "Instalaciones comerciales e industriales de media y alta presión. Habilitaciones y proyectos ejecutivos bajo normativas vigentes.",
        tag: "Redes de Gas"
    },
    Incendio: {
        title: "Sistemas <br /> Contra Incendio",
        subtitle: "Redes de protección hidráulica bajo normas NFPA. Salas de bombas con sellos de calidad FM/UL, motobombas y sistemas de rociadores.",
        tag: "Protección Hidráulica"
    },
    Termomecánica: {
        title: "Climatización <br /> y Calefacción",
        subtitle: "Sistemas de climatización centralizada, VRV y calefacción por piso radiante o radiadores mediante calderas individuales o centrales.",
        tag: "Termomecánica"
    },
    Especiales: {
        title: "Obras <br /> Especiales",
        subtitle: "Instalaciones industriales de piping, estaciones elevadoras de fluidos, plantas de tratamiento y sistemas de soporte de vida (LSS) para acuarios.",
        tag: "Instalaciones Especiales"
    }
};
const allProjectsData = [
    // Activos
    {
        id: 'a1',
        title: 'Hospital Regional Oscar Orias',
        category: 'Sanitarias',
        location: 'Ledesma, Jujuy',
        specs: 'Trabajos certificados al 92%',
        status: 'Entregado',
        fullSpecs: [
            "Hospital Regional de 25.000 m2",
            "Proyecto ejecutivo realizado entre Mayo y Julio de 2022",
            "Instalaciones sanitarias, de gas, riego e incendio",
            "Trabajos certificados al 92% en Octubre de 2025"
        ],
        client: "RIVA-ERG UT",
        contact: "Ing. Gustavo Cavolo",
        image: "/h2obras-web-new/hosp.png"
    },
    {
        id: 'a2',
        title: 'Fisherton Park',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Trabajos certificados al 94%',
        status: 'Entregado',
        fullSpecs: [
            "Condominio de categoría de 45 unidades funcionales",
            "Proyecto de arquitectura: Arq. Carlos Ott",
            "Proyecto y ejecución de instalaciones sanitarias, gas, incendio, riego, piscina y termomecánica con equipos Samsung multisplit bajo silueta",
            "Obra llave en mano",
            "Trabajos certificados al 94% en Octubre de 2025"
        ],
        client: "DIX DESARROLLADORA",
        contact: "Gabriel Pérez",
        image: "/h2obras-web-new/portfolio_fish_premium.png"
    },
    {
        id: 'a3',
        title: 'Aeropuerto Int. Rosario',
        category: 'Incendio',
        location: 'Rosario',
        specs: 'Trabajos certificados al 90%',
        status: 'Entregado',
        fullSpecs: [
            "Proyecto ejecutivo de instalaciones sanitarias",
            "Ejecución de Instalaciones de agua e incendio (proyecto de incendio de Miguel D'Adario)",
            "Red de agua con presurización para alimentación de tanques de reserva sanitaria y de incendio",
            "Sala de máquinas con provisión y montajes de equipos de presurización sanitaria (Grundfos) y sistema de bombas y motobomba con sello FM/UL y bajo requerimiento NFPA (Ruhrpumpen)",
            "Trabajos certificados al 90% en Octubre de 2025"
        ],
        client: "UT EDECA-DINALE-PECAM",
        contact: "Ing. Carlos Pellegrini",
        image: "/h2obras-web-new/portfolio/aerop.png"
    },
    {
        id: 'a4',
        title: 'Edificio Ewain I',
        category: 'Termomecánica',
        location: 'Rosario',
        specs: 'Ejecución al 15%',
        status: 'Entregado',
        fullSpecs: [
            "Proyecto ejecutivo de instalación de calefacción y agua caliente central (en asociación con CLIMA CONFORT 24 S.A.)",
            "Edificio de 75 unidades funcionales con sistema central de calderas Santero para generación de calefacción y agua caliente sanitaria centrales",
            "12 unidades funcionales por piso con distribución centralizada",
            "Mando y retorno de calefacción en acero inoxidable, control de temperatura por termostatos wifi con señal a cabezales termoeléctricos",
            "Ejecución al 15% en Octubre de 2025"
        ],
        client: "CIMBRA S.R.L. / CLIMA CONFORT",
        contact: "Arq. Sebastián Dinatale",
        image: "/h2obras-web-new/portfolio/ewain I.png"
    },
    {
        id: 'a5',
        title: 'Distrito Puerto Norte',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Instalaciones de servicios',
        status: 'Entregado',
        fullSpecs: [
            "Proyecto de instalación sanitaria, de gas, incendio, piscinas y riego",
            "Tres torres de 21 plantas con amenities y piscinas interiores y exteriores",
            "Ejecución de sistemas de riego, climatización e ionización en piscinas, riego por aspersión y goteo",
            "Sistemas de presurización sanitaria y de incendio con variadores de velocidad y tableros inteligentes"
        ],
        client: "GRUPO TRANSATLANTICA S.A.",
        contact: "Sebastián Rubino",
        image: "/h2obras-web-new/portfolio/distrito puerto norte.png"
    },
    {
        id: 'a6',
        title: 'Edificio La Segunda Seguros',
        category: 'Especiales',
        location: 'Rosario',
        specs: 'Certificación LEED Platinum',
        status: 'Entregado',
        fullSpecs: [
            "Proyecto ejecutivo de instalaciones sanitarias, gas, e incendio y especiales en Edificio corporativo LA SEGUNDA. Certificación LEED PLATINUM",
            "Energía Solar Termodinámica – colectores Heat Pipe",
            "Sistema de recupero y tratamiento de agua de lluvia y aguas grises para alimentación de descargas y riego",
            "Planta de tratamiento de efluentes cloacales compacta con proceso de barros activados y oxidación total",
            "Tratamiento de agua para remoción de arsénico",
            "Riego por goteo en terrazas verdes (700 m2)"
        ],
        client: "LA SEGUNDA Coop. Seg. Ltda.",
        contact: "Arq. Marcelo Ponzellini",
        image: "/h2obras-web-new/portfolio/laseg.png"
    },
    {
        id: 'a7',
        title: 'Nuevo Hospital Nodal Venado Tuerto',
        category: 'Sanitarias',
        location: 'Venado Tuerto',
        specs: 'ACS en Acero Inoxidable',
        status: 'Entregado',
        fullSpecs: [
            "Ejecución de Instalaciones de agua y servicios contra incendio en Obra NUEVO HOSPITAL REGIONAL VENADO TUERTO",
            "Colectores de distribución y montantes de ACS en cañería de Acero Inoxidable AISI 304 con soldadura TIG",
            "Redes de agua fría y caliente en termofusión",
            "Montajes de colectores principales en sala de máquinas",
            "Montaje de equipos presurizadores sanitarios y bombas de incendio"
        ],
        client: "DINALE – EDECA U.T.E.",
        contact: "Ing. Pedro Del Gerbo",
        image: "/h2obras-web-new/portfolio/itarruspe.png"
    },
    {
        id: 'a8',
        title: 'CEMAFE / Iturraspe',
        category: 'Sanitarias',
        location: 'Santa Fe',
        specs: 'Proyecto de Instalación',
        status: 'Entregado',
        fullSpecs: [
            "Proyecto ejecutivo de instalaciones sanitarias e incendio en Obra CEMAFE Santa Fe",
            "Montantes de incendio y de ACS en cañería de Acero Inoxidable AISI 304",
            "Colectores de sala de máquinas y tanques en AISI 304 con soldadura TIG",
            "Montaje de electrobombas sanitarias y red de incendio"
        ],
        client: "DINALE - PECAM – MUNDO UTE",
        contact: "Ing. Pedro Del Gerbo",
        image: "/h2obras-web-new/portfolio/cemafe.png"
    },
    {
        id: 'a9',
        title: 'Acuario Río Paraná',
        category: 'Especiales',
        location: 'Rosario',
        specs: 'Sistemas de Vida (LSS)',
        status: 'Entregado',
        fullSpecs: [
            "Ejecución de Sistema de Vida (LSS) - Acuario Río Paraná (en UTE con DINALE S.A.)",
            'Instalación de cañerías en diámetros desde 1/2" a 16" en PVC y PEAD con soldadura a tope, electrofusión y socket',
            'Montaje de equipos de filtrado, bombas especiales, sopladores, caudalímetros, sondas de medición de calidad de agua, válvulas y actuadores neumáticos',
            "Instalación de redes de aire comprimido en cañería de PEAD y galvanizada",
            "Instalación de equipos de Ozono y Oxígeno de emergencia",
            "Soportes y estructuras de fijación en acero inoxidable AISI 316 con soldadura TIG"
        ],
        client: "DINALE S.A.",
        contact: "Arq. Carolina Francione",
        image: "/h2obras-web-new/portfolio/acuario.png"
    },
    {
        id: 'a10',
        title: 'Centro Justicia Penal',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Instalaciones Sanitarias y Gas',
        status: 'Entregado',
        fullSpecs: [
            "Instalación Sanitaria y de Gas en la obra CENTRO DE JUSTICIA PENAL ROSARIO – Mitre y Virasoro",
            "Ejecución de redes cloacales, pluviales, agua fría y caliente",
            "Red de gas en cañería de acero con protección epoxi y soldaduras homologadas",
            "Finalización de obra en Agosto de 2017"
        ],
        client: "RIVA S.A.",
        contact: "Ing. Raúl Olguín",
        image: "/h2obras-web-new/portfolio/centro just rosario.png"
    },

    // Históricos
    {
        id: 'h1',
        title: 'Torre Metra (Puerto Norte)',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Instalación de gas e incendio',
        status: 'Historico',
        fullSpecs: [
            "Torre de 22 Pisos (156 unidades funcionales) - Torre Metra (Puerto Norte)",
            "Proyecto de instalación de desagües cloacales, pluviales, red de agua fría y caliente, e incendio",
            "Red de gas en acero con protección epoxi",
            "Obra entregada en Abril del 2023"
        ],
        client: "RIVA S.A.",
        contact: "Ing. Raúl Olguín",
        image: "/h2obras-web-new/portfolio/metra.png"
    },
    {
        id: 'h2',
        title: 'Campus UNRN Bariloche',
        category: 'Incendio',
        location: 'Bariloche, Río Negro',
        specs: 'Instalación de sala de máquinas',
        status: 'Historico',
        fullSpecs: [
            "Proyecto de instalaciones sanitarias y de incendio del Campus UNRN - Bariloche",
            "Ejecución de Sala de máquinas completa con equipos de presurización Grundfos e intercambiadores de calor",
            "Generación de ACS mediante bombas de calor (Heat Pump)"
        ],
        client: "UT DINALE-PECAM",
        contact: "Ing. Sebastián Balbi",
        image: "/h2obras-web-new/portfolio/campus unrn.png"
    },
    {
        id: 'h3',
        title: 'Fideicomiso Maui Puerto Norte',
        category: 'Termomecánica',
        location: 'Rosario',
        specs: 'Acumuladores y Piping ACS',
        status: 'Historico',
        fullSpecs: [
            "Ejecución de Piping de calderas e intercambiadores de calor",
            "Circuitos secundarios de acumuladores de ACS en cañería de Acero Inoxidable AISI 304 con soldadura TIG",
            "Provisión y montaje de equipos de presurización sanitaria y de bombas contra incendio"
        ],
        client: "FIDEICOMISO MAUI",
        contact: "Ing. Diego Bermudez",
        image: "/h2obras-web-new/portfolio/maui.png"
    },
    {
        id: 'h4',
        title: 'Hilton Garden Inn',
        category: 'Sanitarias',
        location: 'Santa Fe',
        specs: 'Proyecto de Instalaciones',
        status: 'Historico',
        fullSpecs: [
            "Proyecto de Instalaciones Sanitarias, Incendio, Riego y Piscinas",
            "HILTON GARDEN INN (Dique 2 - Santa Fe) y VIVIENDAS EN TORRE",
            "Criterios de sustentabilidad para certificación LEED y estándares técnicos de la marca Hilton"
        ],
        client: "DINALE S.A.",
        contact: "Estudio Costa Valenzuela"
    },
    {
        id: 'h5',
        title: 'Casino Rosario',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Gerenciamiento de Proyecto',
        status: 'Historico',
        fullSpecs: [
            "Gerenciamiento de Proyecto de Instalaciones Sanitarias en la obra CASINO ROSARIO",
            "Hotel, Casino y Centro de Convenciones de alta complejidad",
            "Contacto: Ing. Raúl Olguín – Cel. 0341- 155075667"
        ],
        client: "RIVA S.A.",
        contact: "Ing. Raúl Olguín",
        image: "/h2obras-web-new/portfolio/centro just rosario.png"
    },
    {
        id: 'h6',
        title: 'Centro Islámico King Fhad',
        category: 'Especiales',
        location: 'CABA',
        specs: 'Gerenciamiento de Obra',
        status: 'Historico',
        fullSpecs: [
            "Gerenciamiento y Dirección de obra de Instalaciones Sanitarias, Gas e Incendio",
            "Sistemas de riego por aspersión y fuentes ornamentales",
            "Instalaciones especiales en Acero Inoxidable AISI 304 con soldadura TIG",
            "Año de ejecución: 1999"
        ],
        client: "RIVA S.A.",
        contact: "Año 1999"
    },
    {
        id: 'h7',
        title: 'Estación Elevadora Aguadas',
        category: 'Sanitarias',
        location: 'Funes, Santa Fe',
        specs: 'Electromecánica e Impulsión',
        status: 'Historico',
        fullSpecs: [
            "Obra electromecánica de Estación Elevadora de agua potable en Las Aguadas (Funes)",
            "Montaje de cañerías de impulsión y succión en acero al carbono con recubrimiento epoxi",
            "Montaje de bombas elevadoras Grundfos",
            "Instalación de rejas mecánicas de limpieza y sistemas de izaje"
        ],
        client: "ASSA S.A.",
        contact: "Ing. Oscar Benvenuto"
    },
    {
        id: 'h25',
        title: 'Hospital Iturraspe',
        category: 'Sanitarias',
        location: 'Santa Fe',
        specs: 'Instalaciones Sanitarias',
        status: 'Historico',
        fullSpecs: [
            "Instalación Sanitaria e Incendio en la obra NUEVO HOSPITAL ITURRASPE – Santa Fe",
            "Montaje de colectores principales y salas de bombas",
            "Redes de distribución y montantes de agua y desagües pluviales"
        ],
        image: "/h2obras-web-new/portfolio/itarruspe.png"
    },
    {
        id: 'h26',
        title: 'PROYECTO FACA (FOSTER + PARTNERS)',
        category: 'Gas',
        location: 'Rosario',
        specs: 'Modelado y Diseño 3D',
        status: 'Historico',
        fullSpecs: [
            "PROYECTO FACA (FOSTER + PARTNERS) en coordinación con ESTUDIO FAURE, MALAMUD y ASOC.",
            "Diseño tridimensional (3D Piping) de salas de máquinas y colectores para manzanas C y D",
            "Proyecto ejecutivo de instalaciones sanitarias, gas, incendio, riego y piscinas del masterplan"
        ],
        client: "TGLT"
    },
    {
        id: 'h27',
        title: 'Recoleta’s House',
        category: 'Sanitarias',
        location: 'CABA',
        specs: 'Dirección e Instalaciones',
        status: 'Historico',
        fullSpecs: [
            "Proyecto ejecutivo y Dirección de obra de instalaciones sanitarias, gas e incendio",
            "Edificio de departamentos de alta categoría Recoleta's House (Ayacucho y Pacheco de Melo, CABA)",
            "Pliego de especificaciones técnicas y detalles constructivos"
        ],
        client: "ESTUDIO SANCHEZ ELIA & ASOCIADOS"
    },
    {
        id: 'h28',
        title: 'Teatro Argentino de La Plata',
        category: 'Incendio',
        location: 'La Plata',
        specs: 'Dirección Técnica',
        status: 'Historico',
        fullSpecs: [
            "Gerenciamiento de Proyecto y Dirección de obra de instalaciones sanitarias y de incendio",
            "Edificio monumental Teatro Argentino de La Plata (Sup. 60.000 m2)",
            "Montaje de salas de bombas e infraestructura de extinción en subsuelos",
            "Año de ejecución: 1999"
        ]
    },
    {
        id: 'h29',
        title: 'Hospital Blas Dubarry',
        category: 'Sanitarias',
        location: 'Mercedes, BS.AS.',
        specs: 'Proyecto de Instalaciones',
        status: 'Historico',
        fullSpecs: [
            "Proyecto de instalaciones sanitarias, gas e incendio en el Hospital Blas Dubarry (Mercedes, Prov. de Buenos Aires)",
            "Pliego de bases técnicas y diseño de redes principales"
        ],
        client: "ELEPRINT S.A."
    },
    {
        id: 'h30',
        title: 'Distrito Sur / Noroeste',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Reproyecto de Servicios',
        status: 'Historico',
        fullSpecs: [
            "Reproyecto y ejecución de instalaciones sanitarias, gas e incendio en Centros Municipales de Distrito (Rosario)",
            "Sistemas de desagües pluviales de gran superficie y redes presurizadas de agua potable"
        ],
        client: "PECAM S.A. / ESTUDIO BECHIS"
    },
    {
        id: 'h31',
        title: 'Condominios del Alto',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Asesoramiento Técnico',
        status: 'Historico',
        fullSpecs: [
            "Asesoramiento para proyecto ejecutivo de instalaciones sanitarias, de incendio, riego y piscina en Condominios del Alto (Etapas I, II y III)",
            "Proyecto y aprobación de regulación pluvial ante el Departamento de Hidráulica de la Municipalidad de Rosario"
        ]
    },
    {
        id: 'h32',
        title: 'Hotel Esplendor Savoy',
        category: 'Termomecánica',
        location: 'Rosario',
        specs: 'Sanitarias y Gastronómicas',
        status: 'Historico',
        fullSpecs: [
            "Proyecto, dirección y ejecución de instalaciones en Hotel Esplendor Savoy (Rosario)",
            "Instalaciones sanitarias, servicios contra incendio y redes de gas",
            "Sistemas de ventilación ambiental y montaje de equipamiento gastronómico de alta gama",
            "Ampliación ala norte (2da etapa): integración pluvial y de incendio con sistemas existentes"
        ]
    },
    {
        id: 'h33',
        title: 'Estadio N.O.B. Independencia',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Instalaciones Sanitarias y Gas',
        status: 'Historico',
        fullSpecs: [
            "Proyecto y dirección de obra de instalaciones sanitarias, gas e incendio en el Estadio de Newell's Old Boys",
            "Construcción de nuevas redes cloacales principales y desagües pluviales de tribunas"
        ],
        client: "CLUB ATLÉTICO NEWELL´S OLD BOYS"
    },
    {
        id: 'h34',
        title: 'Complejo Bella Vista (NOB)',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Riego Automatizado',
        status: 'Historico',
        fullSpecs: [
            "Proyecto y dirección de obra en el Complejo de Entrenamiento Bella Vista (N.O.B.)",
            "Instalaciones sanitarias y de gas en vestuarios de jugadores",
            "Sistema de riego presurizado automático para campos de juego"
        ],
        client: "CLUB ATLÉTICO NEWELL´S OLD BOYS"
    },
    {
        id: 'h35',
        title: 'La Gallega Supermercados',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Instalaciones Sanitarias',
        status: 'Historico',
        fullSpecs: [
            "Proyecto y dirección de obra en sucursales de Supermercados La Gallega",
            "Instalaciones sanitarias, gas e incendio con sistemas hidroneumáticos de presurización"
        ],
        client: "LA GALLEGA S.A."
    },
    {
        id: 'h36',
        title: 'Hipermercado Libertad',
        category: 'Sanitarias',
        location: 'Rosario',
        specs: 'Pluviales e Impulsión Cloacal',
        status: 'Historico',
        fullSpecs: [
            "Gerenciamiento de proyecto y Dirección de obra en Hipermercado Libertad (Rosario, Sup. 20.000 m2)",
            "Instalaciones sanitarias y red de gas",
            "Proyecto de desagües pluviales exteriores en predio de 8 hectáreas e impulsión cloacal urbana"
        ],
        client: "LIBERTAD S.A."
    }
];

const categories = [
    { id: 'all', label: 'Todos los Proyectos', icon: 'apps' },
    { id: 'Sanitarias', label: 'Sanitarias', icon: 'water_drop' },
    { id: 'Gas', label: 'Redes de Gas', icon: 'mode_fan' },
    { id: 'Incendio', label: 'Contra Incendio', icon: 'fire_extinguisher' },
    { id: 'Termomecánica', label: 'Climatización y Calefacción', icon: 'thermostat' },
    { id: 'Especiales', label: 'Obras Especiales', icon: 'settings_suggest' }
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
            whileHover={{ y: -12, scale: 1.01 }}
            onClick={() => onClick(project)}
            className="bg-surface group relative overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer shimmer-container shimmer-trigger"
        >
            <div className="h-64 overflow-hidden relative">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    src={imgUrl}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="shimmer-element opacity-20"></div>

            </div>
            <div className="p-6 md:p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-500"></div>
                    <span className="text-[10px] text-primary/70 font-bold uppercase tracking-[0.3em]">
                        {location}
                    </span>
                </div>
                <h3 className="text-lg md:text-xl font-headline font-black uppercase text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-500">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-2 border-t border-outline-variant/10 pt-6">
                    {(tags || (fullSpecs ? fullSpecs.slice(0, 2) : [])).map(tag => (
                        <span key={tag} className="bg-surface-container-high text-[9px] font-technical font-bold px-2 py-1 text-primary uppercase tracking-tight group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            {tag}
                        </span>
                    ))}
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
                            Vista de Obra
                        </span>
                    </div>
                </div>

                {/* Right Side: Engineering Datasheet */}
                <div className="w-full lg:w-2/5 p-10 md:p-16 overflow-y-auto bg-surface technical-grid-bg relative">
                    <div className="absolute inset-0 bg-surface/90 z-0"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-1 bg-accent"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Información Técnica</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-headline font-black uppercase text-primary mb-12 leading-[0.9] tracking-tighter">
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
                            {(project.progress || project.status) && (
                                <div className="border-l-2 border-outline-variant/20 pl-6">
                                    <p className="text-[10px] uppercase font-bold text-primary/60 tracking-[0.2em] mb-2">Estado / Avance</p>
                                    <p className="text-sm font-headline font-extrabold text-primary uppercase">
                                        {project.status} {project.progress ? `(${project.progress}%)` : ''}
                                    </p>
                                </div>
                            )}
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
        p.category === selectedCategory
    );

    const historicalProjects = allProjectsData.filter(p => p.status === 'Historico');

    const currentHero = categoryHeroData[selectedCategory] || categoryHeroData.all;

    return (
        <>
            <div className="flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:flex flex-col h-screen w-72 left-0 sticky top-0 bg-surface-container-low border-r border-outline-variant/10 pt-28 pb-6 px-6 space-y-4">
                    <div className="px-2 mt-6 mb-4">
                        <div className="w-8 h-1 bg-accent mb-3"></div>
                        <h3 className="text-lg font-headline font-black text-primary uppercase tracking-tighter">Especialidades de Obra</h3>
                        <p className="text-[9px] text-primary/60 tracking-[0.3em] uppercase font-technical mt-1">Instalaciones de gran envergadura y alcance federal</p>
                    </div>
                    <nav className="flex flex-col space-y-1 relative">
                        {categories.map(cat => {
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`relative flex items-center gap-4 py-3 px-4 w-full text-left transition-all duration-300 z-10 group ${isActive
                                        ? 'text-white'
                                        : 'text-primary/60 hover:text-primary hover:pl-5'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-primary shadow-lg border-l-4 border-accent z-[-1]"
                                            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                                        />
                                    )}
                                    <span className={`material-symbols-outlined text-base ${isActive ? 'text-accent' : 'opacity-40 group-hover:opacity-100 group-hover:text-primary'}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{cat.icon}</span>
                                    <span className="font-headline font-bold text-[10px] tracking-widest uppercase">{cat.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                    <div className="mt-auto p-2 pt-12">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 text-[9px] font-black text-white bg-primary uppercase tracking-[0.2em] shadow-xl hover:bg-accent hover:text-on-accent transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <span className="material-symbols-outlined text-xs">download_2</span>
                            Descargar Ficha Técnica
                        </motion.button>
                    </div>
                </aside>
                {/* Main Content Area */}
                <main ref={mainContentRef} className="flex-1 max-w-full overflow-hidden bg-surface pt-28">
                    {/* Hero Banner */}
                    <section className="relative min-h-[400px] md:h-[500px] bg-primary flex items-center pt-16 pb-16 md:pt-12 md:pb-0 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                alt="Technical background"
                                className="w-full h-full object-cover blur-3xl scale-110"
                                style={{ filter: 'grayscale(1) brightness(0.5)' }}
                                src="/h2obras-web-new/hero_industrial.png"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary"></div>
                        <div className="absolute inset-0 technical-grid opacity-30"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

                        <div className="container mx-auto px-8 md:px-24 relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCategory}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="w-16 h-1 bg-accent"></div>
                                        <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase">Registro de Obras</span>
                                    </div>
                                    <h1
                                        className="text-white text-4xl md:text-6xl lg:text-7xl font-black font-headline tracking-tighter leading-[0.85] uppercase mb-8"
                                        dangerouslySetInnerHTML={{ __html: currentHero.title }}
                                    />
                                    <p className="text-white text-lg md:text-xl max-w-3xl font-body leading-relaxed">
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

                    {/* Mobile Category Filter Bar */}
                    <div className="lg:hidden sticky top-20 z-30 bg-surface/95 backdrop-blur-md border-b border-outline-variant/10 shadow-sm">
                        <div className="flex overflow-x-auto scrollbar-hide gap-2 px-4 py-3">
                            {categories.map(cat => {
                                const isActive = selectedCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 shrink-0 ${
                                            isActive
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-surface-container text-primary/60 hover:text-primary hover:bg-surface-container-high'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{cat.icon}</span>
                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {selectedCategory === 'all' && (
                        <>
                            {/* Execution Status Tracker */}
                            <section className="py-20 bg-surface">
                              <div className="container mx-auto px-8 md:px-24">
                                <div className="flex justify-between items-end mb-16 border-l-4 border-primary pl-6">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-headline font-black uppercase text-primary tracking-tighter">Antecedentes de Obras</h2>
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
                                        className="lg:col-span-2 bg-primary relative overflow-hidden flex flex-col justify-between cursor-pointer group"
                                    >
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src="/h2obras-web-new/portfolio/ewain I.png"
                                                alt="Edificio Ewain I"
                                                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                                        </div>
                                        <div className="p-10 relative z-10 text-white">
                                            <h4 className="text-2xl md:text-3xl font-headline font-black uppercase mb-4 group-hover:text-tertiary-fixed transition-colors">Edificio Ewain I</h4>
                                            <p className="text-on-primary-container text-sm leading-relaxed mb-8 max-w-md">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                        </div>
                                        <div className="p-10 relative z-10 flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Calefacción y Agua Caliente Central</span>
                                            <span className="material-symbols-outlined text-white/20 group-hover:text-accent transition-colors">arrow_forward</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'a5'))}
                                        className="bg-surface-container-high relative overflow-hidden flex flex-col justify-between cursor-pointer group"
                                    >
                                        <div className="h-40 overflow-hidden">
                                            <img
                                                src="/h2obras-web-new/portfolio/distrito puerto norte.png"
                                                alt="Distrito Puerto Norte"
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <h4 className="text-xl font-headline font-black uppercase text-primary group-hover:text-cyan-700 transition-colors">Distrito Puerto Norte</h4>
                                            <div className="space-y-2 mt-4">
                                                <p className="text-xs text-primary/70 uppercase font-bold tracking-widest">Estado: Activo</p>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-8 flex items-end justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-tighter text-primary/40">Detalle Técnico</span>
                                            <span className="material-symbols-outlined text-primary/20 group-hover:text-accent transition-colors">arrow_forward</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'h1'))}
                                        className="bg-surface-container-lowest relative overflow-hidden flex flex-col justify-between border-r-4 border-primary-container cursor-pointer group"
                                    >
                                        <div className="h-40 overflow-hidden">
                                            <img
                                                src="/h2obras-web-new/portfolio/metra.png"
                                                alt="Metra Rosario"
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <h4 className="text-xl font-headline font-black uppercase text-primary group-hover:text-cyan-700 transition-colors">Metra Rosario</h4>
                                            <div className="space-y-2 mt-4">
                                                <p className="text-xs text-success-container text-green-700 uppercase font-bold tracking-widest">Estado: Entregado 2023</p>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-8 flex items-end justify-between">
                                            <span className="material-symbols-outlined text-primary/20 group-hover:text-accent transition-colors">arrow_forward</span>
                                        </div>
                                    </motion.div>
                                </motion.div >
                              </div>
                            </section >
                            {/* Sustainability / LEED Section */}
                            < section className="py-24 bg-[#00162a] text-white overflow-hidden relative" >
                                <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-highest/5 mask-gradient hidden lg:block"></div>
                                <div className="container mx-auto px-8 md:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-[2px] w-12 bg-tertiary-fixed"></div>
                                            <span className="text-tertiary-fixed text-sm font-bold tracking-[0.3em] uppercase">Liderazgo Sustentable</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-8 leading-none">Edificio La Segunda Seguros <br /><span className="text-tertiary-fixed">LEED Platinum</span></h2>
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
                                        <img alt="Edificio sustentable moderno" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" data-alt="Ultra modern glass office building with sustainable design features and green landscaping in early morning light" src="/h2obras-web-new/portfolio/laseg.png" />
                                    </div>
                                </div>
                            </section >
                            {/* Institutional High-Tech Modules */}
                            < section className="py-20 bg-surface-container-low" >
                              <div className="container mx-auto px-8 md:px-24">
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
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'a8'))}
                                        className="bg-surface relative overflow-hidden border-l-2 border-primary transition-colors cursor-pointer group"
                                    >
                                        <div className="h-32 overflow-hidden">
                                            <img
                                                src="/h2obras-web-new/portfolio/cemafe.png"
                                                alt="CEMAFE"
                                                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">CEMAFE / Iturraspe</h5>
                                            <p className="text-xs text-primary/70 mb-4">Dinámica de fluidos sanitarios y sistemas de seguridad de alta tecnología.</p>
                                            <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">LOGÍSTICA HOSPITALARIA</span>
                                        </div>
                                    </motion.div>
                                    {/* Tech Item 3 */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                                        onClick={() => setActiveProject(allProjectsData.find(p => p.id === 'a9'))}
                                        className="bg-surface relative overflow-hidden border-l-2 border-primary transition-colors cursor-pointer group"
                                    >
                                        <div className="h-32 overflow-hidden">
                                            <img
                                                src="/h2obras-web-new/portfolio/acuario.png"
                                                alt="Acuario"
                                                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Acuario Río Paraná</h5>
                                            <p className="text-xs text-primary/70 mb-4">Sistemas de soporte vital (LSS), inyección de ozono y protocolos de O2.</p>
                                            <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">TECNOLOGÍA BIOLÓGICA</span>
                                        </div>
                                    </motion.div>

                                </motion.div>
                              </div>
                            </section >
                        </>
                    )}

                    {
                        selectedCategory !== 'all' && (
                            <section className="py-20 bg-surface">
                              <div className="container mx-auto px-8 md:px-24">
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
                              </div>
                            </section>
                        )
                    }

                    {/* Massive Institutional Registry (The Grid) */}
                    <section className="py-20 bg-surface">
                      <div className="container mx-auto px-8 md:px-24">
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
                                            return p.category === selectedCategory;
                                        })
                                        .map(p => (
                                            <tr
                                                 key={p.id}
                                                 onClick={() => setActiveProject(p)}
                                                 className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors cursor-pointer group"
                                             >
                                                 <td className="py-4 font-bold text-primary group-hover:text-cyan-700 transition-colors duration-300">{p.title}</td>
                                                 <td className="py-4 text-primary/70">{p.category}</td>
                                                 <td className="py-4 text-primary/70">{p.location}</td>
                                                 <td className="py-4 md:flex items-center justify-between">
                                                     <span className="text-[10px] font-technical font-bold text-primary/60 uppercase tracking-wider group-hover:text-primary transition-colors duration-300">{p.specs}</span>
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
                      </div>
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
