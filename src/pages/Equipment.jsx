export default function Equipment() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[819px] flex items-center overflow-hidden industrial-gradient">
                <div className="absolute inset-0 opacity-40">
                    <img className="w-full h-full object-cover" alt="high-angle industrial site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB04NzDlpMOGT1xInOSFsdGyfOxllFEr9a8DmvfrqK6gc5UAkU3cTuuNe7zxeq9_VIXJnmneBCIHT1xE-nnqzWtJTYL-lxyfcpF2SRK0L_jVSDU55EIvBd7vk7JCUQEBGSRiiiQUTa2rNGS-IL_7HjdbKOyvFC-qS6t5nk2WIHjqkJvOqgenPQtT9BUi-qPpmJenr9q5CWJXnzd7_6mbV8jj94ycQQg1VZYexTxXPwiiB3Qunuvy7Wmyw40RtOXq8Y1HUSQrzQMEImc" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="material-symbols-outlined text-sm">verified</span> Operational Excellence
                        </div>
                        <h1 className="text-6xl md:text-8xl font-headline font-black text-white leading-none tracking-tighter mb-8">
                            CAPACIDAD OPERATIVA <br />
                            <span className="text-on-primary-container">Y AUTONOMÍA TOTAL</span>
                        </h1>
                        <p className="text-xl text-surface-variant max-w-2xl font-light leading-relaxed border-l-4 border-tertiary-fixed pl-6">
                            Infraestructura técnica de escala federal. Eliminamos la dependencia de terceros mediante una inversión masiva en equipamiento propio de última generación.
                        </p>
                    </div>
                </div>
                {/* Technical Overlay */}
                <div className="absolute bottom-0 right-0 p-8 hidden lg:block">
                    <div className="machined-glass p-6 border-t-2 border-tertiary-fixed flex flex-col gap-4">
                        <div className="flex justify-between items-end gap-12">
                            <div>
                                <span className="block text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Asset Readiness</span>
                                <span className="text-4xl font-headline font-bold text-primary">100%</span>
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Fleet Capacity</span>
                                <span className="text-4xl font-headline font-bold text-primary">450T</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maquinaria Pesada Section */}
            <section className="py-24 bg-surface px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-primary uppercase">Maquinaria Pesada</h2>
                        <div className="h-1 w-24 bg-primary mt-4"></div>
                    </div>
                    <p className="text-secondary max-w-md text-sm font-medium leading-relaxed italic">
                        Unidades de alta maniobrabilidad para entornos hidráulicos complejos y obras civiles de precisión.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Unit 1 */}
                    <div className="bg-surface-container-low group overflow-hidden">
                        <div className="h-64 overflow-hidden relative">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Bobcat E-26" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC8pfgKy8gusNifWqxTOxIjgE0M2UEmZKnkm49bVg1AMs2s-jvbcxi00jwRNXrrptfN7uQMr6nJbPwah7NVt6ZH4oxj8HbGTPkiKz4bgXrJ1IfyMbW3xE6etNOgDHkhrRF4eq9I8B_4PwAuORtNyvuSOXAJZWVnhCw9OpNcfEYDdbJA78DGOj9VPNjtf3GFV1h7JzQ-149rvuAVViyrB3HkeXhrl9dxw73Eoe5qcWX1JikCBwEs8ClsZCYba0LtOdlsRDb2P77KyKv" />
                            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-[10px] font-bold font-label">ASSET_2015_E26</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-headline font-bold text-primary mb-2">Bobcat E-26</h3>
                            <p className="text-sm text-secondary mb-6">Excavadora compacta de giro de voladizo mínimo, ideal para trabajos de precisión hidráulica.</p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs border-b border-outline-variant/30 pb-2">
                                    <span className="text-secondary font-semibold uppercase">Potencia</span>
                                    <span className="text-primary font-bold">18.5 kW</span>
                                </div>
                                <div className="flex justify-between items-center text-xs border-b border-outline-variant/30 pb-2">
                                    <span className="text-secondary font-semibold uppercase">Profundidad</span>
                                    <span className="text-primary font-bold">2,582 mm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Unit 2 */}
                    <div className="bg-primary text-white group overflow-hidden">
                        <div className="h-64 overflow-hidden relative">
                            <img className="w-full h-full object-cover opacity-80" alt="Bobcat S450" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACrQ1W2dJ5lMGSJr-QQMp13KQvqbbzUR8fPFyU2eU6h8BCgFKjfQBKcb6z2VdolrXEREuSABdcWAtuP5MbOHbaKvmvlenDD1LIj7FWFQNoYBYtvug9ux3QSQG8oFR1R5dLO9i-2nTU_niipXfutenLVtL4cfkiAqWTgJO6r2yqaAYHfBHEcrs6wciTMQO4Ic0Nx_qcIOgZg8uyLQNsIkHICkEBxiv192Xwibz6CTgOkS0y33mWyDvsPd2MtmTQ-u0rAQNvlGSmdN3t" />
                            <div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 text-[10px] font-bold font-label uppercase">Multi-Purpose</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-headline font-bold mb-2">Bobcat S450 (2017)</h3>
                            <p className="text-sm text-on-primary-container mb-6">Cargador versátil equipado con sistema de acople rápido para diversos frentes de obra.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 bg-on-primary-fixed-variant text-[9px] font-bold uppercase tracking-wider">Zanjadora</span>
                                <span className="px-2 py-1 bg-on-primary-fixed-variant text-[9px] font-bold uppercase tracking-wider">Niveladora</span>
                                <span className="px-2 py-1 bg-on-primary-fixed-variant text-[9px] font-bold uppercase tracking-wider">Rodillo</span>
                            </div>
                            <button className="w-full py-3 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Technical Sheet</button>
                        </div>
                    </div>
                    {/* Unit 3 */}
                    <div className="bg-surface-container-low group overflow-hidden">
                        <div className="h-64 overflow-hidden relative">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Mantall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNFFbnYccKfL2eFckmCXEDKM_LXlTmHeNCoEqqbah0koDKpJPJpDu3mZjY0rVARFCR1txfqIznCff0zhcUcagh17LSF_sJPX5ycm0wm5exVxmfGhhcC4T3mprMhXRACNpFZBID5_9ZBB_WiaRKKPqNWUY1RO-RRpHrEoEop7fgREc_fWnCRrZ8_XUVMYzC5Ezl10WDMc1PpcZOrPMvnWx7NVLEOPk2qy9DP3uWCS9qTrpPbWhhU16nTNVdb4S1k-mauee1FBBYy4MQ" />
                            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-[10px] font-bold font-label">ASSET_2018_P16</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-headline font-bold text-primary mb-2">Plataforma Mantall</h3>
                            <p className="text-sm text-secondary mb-6">Elevación de 16 metros para montajes de infraestructura y mantenimiento técnico en altura.</p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs border-b border-outline-variant/30 pb-2">
                                    <span className="text-secondary font-semibold uppercase">Altura Trabajo</span>
                                    <span className="text-primary font-bold">16.0 m</span>
                                </div>
                                <div className="flex justify-between items-center text-xs border-b border-outline-variant/30 pb-2">
                                    <span className="text-secondary font-semibold uppercase">Carga Máx</span>
                                    <span className="text-primary font-bold">230 kg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flota Logística Section */}
            <section className="py-24 bg-surface-container-low px-8 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="h-[2px] w-12 bg-primary"></span>
                        <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-primary uppercase">Flota Logística Propia</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Truck */}
                        <div className="lg:col-span-7 bg-white p-2 border border-outline-variant/20 relative group">
                            <div className="h-[400px] overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Truck DFM" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv7Zl9MYQqCNwTGK-kvLWJMonVFTMqU8OAUmvBT1UdOhOmVdxeOs9yUt1ZCIe49SjsQHUX7WJdEnULKwUEJFOnrDBwNWUVyDFfasVUH43EI1B-h5RGOtT65gdTgyO6TDlkHSbsnNySL5MLXKaGGqVXQa_4Fk1NB59CD6u115DYGfZU4rn8nleRnRZGKw27mcZ9TivrPS-zC-m5huHFNZS_fxi1-o2Ix4JVYs45KQD2uNN5zx0ttvV9sqeiQrZSRonaCAV5N7eIb0ft" />
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 machined-glass p-8 shadow-xl">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-2">Unidad de Gran Tonelaje</h4>
                                        <h3 className="text-3xl font-headline font-bold text-primary">Camión DFM 14 Tons</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-bold text-tertiary-container bg-tertiary-fixed px-3 py-1">MODEL 2023</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-12">
                                    <div>
                                        <span className="block text-[10px] text-secondary font-bold uppercase mb-1">Capacidad</span>
                                        <span className="text-lg font-headline font-bold text-primary">14.000 KG</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-secondary font-bold uppercase mb-1">Motorización</span>
                                        <span className="text-lg font-headline font-bold text-primary">CUMMINS ISB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Secondary Fleet */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div className="bg-primary p-8 flex justify-between items-center group cursor-pointer hover:bg-on-primary-fixed-variant transition-all">
                                <div>
                                    <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight">Lifan Foison Truck</h3>
                                    <p className="text-xs text-on-primary-container mt-1">Logística urbana y materiales ligeros.</p>
                                </div>
                                <span className="material-symbols-outlined text-tertiary-fixed text-4xl">local_shipping</span>
                            </div>
                            <div className="bg-white border border-outline-variant/20 p-8 flex justify-between items-center group cursor-pointer hover:border-primary transition-all">
                                <div>
                                    <h3 className="text-xl font-headline font-bold text-primary uppercase tracking-tight">Foton Gratour</h3>
                                    <p className="text-xs text-secondary mt-1">Doble cabina para transporte de cuadrillas técnicas.</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-4xl">groups</span>
                            </div>
                            <div className="flex-grow bg-surface-container-highest border-l-4 border-tertiary-fixed p-8">
                                <p className="text-sm font-medium text-primary italic leading-relaxed">
                                    "Nuestra logística interna garantiza que los plazos de obra no dependan de terceros, asegurando una cadena de suministro ininterrumpida."
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Seguimiento GPS 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tecnología de Precisión Section */}
            <section className="py-24 bg-white px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-headline font-black tracking-tighter text-primary uppercase">Tecnología de Precisión</h2>
                        <p className="text-secondary mt-4 font-label uppercase tracking-[0.4em] text-[10px]">Industrial Diamond &amp; Fusion Standards</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-surface-container p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-tertiary-fixed flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                            </div>
                            <h4 className="font-headline font-bold text-primary text-lg">Hilti D250</h4>
                            <p className="text-[10px] text-secondary uppercase mt-1 mb-4">Diamond Drilling System</p>
                            <p className="text-xs text-on-surface-variant leading-relaxed">Perforación de alto rendimiento en hormigón armado.</p>
                        </div>
                        <div className="bg-surface-container p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-tertiary-fixed flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">build</span>
                            </div>
                            <h4 className="font-headline font-bold text-primary text-lg">Hilti D160</h4>
                            <p className="text-[10px] text-secondary uppercase mt-1 mb-4">Core Drill Platform</p>
                            <p className="text-xs text-on-surface-variant leading-relaxed">Precisión extrema para anclajes químicos y mecánicos.</p>
                        </div>
                        {/* Victaulic */}
                        <div className="bg-primary text-white p-6 flex flex-col items-center text-center lg:col-span-2 row-span-2 justify-center border-b-4 border-tertiary-fixed">
                            <img className="w-32 h-32 object-cover rounded-full mb-8 border-2 border-tertiary-fixed p-1" alt="Victaulic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcS2E8AJLMICSBPjDdBy99aUPdbj2Qnm1aTvdR8pTStq1-Lg-Dx-D8DE9nEU6GeRtwk1HvLM-5m40Tvr72QbIldzx51LE9Q9jx3gBL4RsuhTLYrOTMSb8BcdS-Er0AFNTE1wyDM5i6aEEUw5XY4Ck-a6ou0v2YYFEUAqbLk78oYIBoZSMauvH9F1pLr44wL2Qcko80S60r7Z7BKYvzT4SVP1UacBrhYoT-v5uUewWG1ss1i1u1_jOY0yjGN_IDL7uzkFVnpTZMX4H" />
                            <h4 className="font-headline font-bold text-2xl">Sistemas Victaulic</h4>
                            <p className="text-[10px] text-on-primary-container uppercase tracking-widest mt-2 mb-6">Ranurado de Alta Presión</p>
                            <p className="text-sm text-surface-variant max-w-xs leading-relaxed mb-8">Capacidad operativa total para sistemas contraincendios y redes industriales de gran escala.</p>
                            <div className="grid grid-cols-2 gap-4 w-full text-left">
                                <div className="border-l border-on-primary-fixed-variant pl-3">
                                    <span className="block text-[9px] font-bold text-tertiary-fixed uppercase">Electrofusion</span>
                                    <span className="text-xs">Up to 600mm</span>
                                </div>
                                <div className="border-l border-on-primary-fixed-variant pl-3">
                                    <span className="block text-[9px] font-bold text-tertiary-fixed uppercase">Corte Inox</span>
                                    <span className="text-xs">Stainless Cutters</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-tertiary-fixed flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">bolt</span>
                            </div>
                            <h4 className="font-headline font-bold text-primary text-lg">Inversoras TIG</h4>
                            <p className="text-[10px] text-secondary uppercase mt-1 mb-4">Precision Welding</p>
                            <p className="text-xs text-on-surface-variant leading-relaxed">Soldadura de alta calidad para aleaciones especiales.</p>
                        </div>
                        <div className="bg-surface-container p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-tertiary-fixed flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">settings_input_component</span>
                            </div>
                            <h4 className="font-headline font-bold text-primary text-lg">Electrofusion 600</h4>
                            <p className="text-[10px] text-secondary uppercase mt-1 mb-4">HDPE Redes</p>
                            <p className="text-xs text-on-surface-variant leading-relaxed">Sistemas de termofusión controlada por microprocesador.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infraestructura & Diseño Section */}
            <section className="py-24 bg-surface-container-low px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-headline font-black text-primary leading-none uppercase mb-8">Infraestructura <br /> Digital &amp; Diseño</h2>
                            <p className="text-secondary text-sm leading-relaxed mb-12">
                                El cerebro de la operación. Estaciones de trabajo de alto rendimiento para el desarrollo de ingeniería, modelado 3D y administración federal de proyectos.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-container flex items-center justify-center text-white shrink-0">
                                        <span className="material-symbols-outlined">print</span>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-primary">Ploteo Industrial</h5>
                                        <p className="text-xs text-secondary">Salida de planos técnicos de gran formato in-situ.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-container flex items-center justify-center text-white shrink-0">
                                        <span className="material-symbols-outlined">terminal</span>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-primary">Estaciones de Trabajo</h5>
                                        <p className="text-xs text-secondary">Procesamiento I7 para cálculo estructural y renderizado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-8 border-r-4 border-primary">
                                <div className="text-[10px] font-bold text-tertiary-container mb-4">ADMIN &amp; DESIGN CORE</div>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                                        <span className="text-xs font-semibold text-secondary">Macbook Pro I7</span>
                                        <span className="text-xs font-bold text-primary">Design Lead</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                                        <span className="text-xs font-semibold text-secondary">Workstations I7 (x3)</span>
                                        <span className="text-xs font-bold text-primary">Project Mgmt</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                                        <span className="text-xs font-semibold text-secondary">HP Notebooks I7</span>
                                        <span className="text-xs font-bold text-primary">Field Ops</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Office desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMeQcOQNT-t12iWzN-QFP4tT9D2NjdHJJt_0Cz0ToDkc8SsbsumXYlNSNWe7Ec2t6rb55TZF240e5UHo0i2dPMmu9IeItJ2LqXYZ94VoMujjA_awSdhzRtk3yx_7acRrVHoHFOTrM63ZOJzfMxToAPvfH4dIdpUfALMmmq8QB5lWrH50oRug2xryQdc3WCQebOhfQpP3mcdg0UmISk8hZpg1mGhw72cCHXJRzoi0P4fp9K8QaW8FY8roeJAWY6uxLux295f3enSSvA" />
                                <div className="absolute inset-0 bg-primary/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Otros & Complementarios Section */}
            <section className="py-24 bg-white px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
                        <div className="md:col-span-2 md:row-span-2 bg-surface-container-low p-12 flex flex-col justify-end relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img className="w-full h-full object-cover" alt="Containers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSi8UNQVLcozVCRGowFdiwI6-aTBDnukWicRtJyduxEbmvl64Vg7wHrjW7bSEIT0cjX7YAo4J8f7iXW-7j4bQnSSKpB12cNkdYB6QlhGIdMjbGQmtpFXPHg892ATEvvnGsgQreKcpW5oRAys7vwbb58aOVVQDgHSc0E1nvhV3gqlHomZAepZPnF3aUJPhyOKwNFTYhVBT0ydyNWPMunETf0-85yaaVjtkz8VJAZ774_ibuIA3lPLXyN_8kkGPVfHp6PYJ21OMyPTHq" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-headline font-black text-primary uppercase mb-4 leading-none">Containers <br />&amp; Logística Móvil</h3>
                                <p className="text-sm text-secondary max-w-sm">Módulos habitacionales y de almacenamiento para despliegue inmediato en cualquier punto geográfico.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 bg-primary p-8 flex items-center justify-between group overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-headline font-bold text-white uppercase mb-2">Andamiaje Metaltech</h3>
                                <p className="text-xs text-on-primary-container">Sistemas certificados de alta seguridad.</p>
                            </div>
                            <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-tertiary-fixed transition-colors">foundation</span>
                        </div>
                        <div className="bg-tertiary-fixed p-8 flex flex-col justify-between">
                            <span className="material-symbols-outlined text-primary text-3xl">blur_on</span>
                            <div>
                                <h4 className="font-headline font-bold text-primary">Niveles Láser</h4>
                                <p className="text-[10px] text-tertiary-container font-bold uppercase mt-1">Calibración Milimétrica</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-highest p-8 flex flex-col justify-between">
                            <span className="material-symbols-outlined text-primary text-3xl">construction</span>
                            <div>
                                <h4 className="font-headline font-bold text-primary">Herramental</h4>
                                <p className="text-[10px] text-secondary font-bold uppercase mt-1">Kit Completo de Obra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
