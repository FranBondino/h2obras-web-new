export default function Portfolio() {
    return (
        <>
            <button className="bg-primary-container text-white px-6 py-2 font-headline uppercase tracking-widest text-xs font-bold hover:bg-on-primary-fixed-variant transition-all">Portal Técnico</button>
            <div className="bg-gradient-to-r from-transparent via-[#5b5f61]/10 to-transparent h-[1px]"></div>
            <div className="flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:flex flex-col h-screen w-80 left-0 sticky top-[88px] bg-[#f8f9fa] dark:bg-[#0d2b45] py-10 px-4 space-y-2">
                    <div className="px-4 mb-8">
                        <h3 className="text-lg font-bold text-[#00162a] dark:text-[#f8f9fa] font-headline uppercase">Categorías de Proyectos</h3>
                        <p className="text-[10px] text-secondary tracking-[0.2em] uppercase font-label">Infraestructura a Escala Federal</p>
                    </div>
                    <nav className="flex flex-col space-y-1">
                        <a className="flex items-center gap-3 py-3 px-4 bg-[#0d2b45] dark:bg-[#f8f9fa] text-white dark:text-[#00162a] font-bold border-l-4 border-[#ffddba] transition-all duration-300" href="#">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Obras en Ejecución</span>
                        </a>
                        <a className="flex items-center gap-3 py-3 px-4 text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 transition-all duration-300" href="#">
                            <span className="material-symbols-outlined">medical_services</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Salud</span>
                        </a>
                        <a className="flex items-center gap-3 py-3 px-4 text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 transition-all duration-300" href="#">
                            <span className="material-symbols-outlined">gavel</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Centros Judiciales</span>
                        </a>
                        <a className="flex items-center gap-3 py-3 px-4 text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 transition-all duration-300" href="#">
                            <span className="material-symbols-outlined">flight_takeoff</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Aeropuertos</span>
                        </a>
                        <a className="flex items-center gap-3 py-3 px-4 text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 transition-all duration-300" href="#">
                            <span className="material-symbols-outlined">domain</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Residencial de Alta Gama</span>
                        </a>
                        <a className="flex items-center gap-3 py-3 px-4 text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 transition-all duration-300" href="#">
                            <span className="material-symbols-outlined">factory</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Industrial</span>
                        </a>
                        <a className="flex items-center gap-3 py-3 px-4 text-[#5b5f61] dark:text-[#f8f9fa]/60 hover:bg-[#5b5f61]/5 hover:pl-6 transition-all duration-300" href="#">
                            <span className="material-symbols-outlined">potted_plant</span>
                            <span className="font-['Inter'] text-sm tracking-wide uppercase">Sustentable (LEED)</span>
                        </a>
                    </nav>
                    <div className="mt-auto p-4 bg-surface-container-high rounded-sm">
                        <button className="w-full py-4 text-xs font-bold text-primary uppercase tracking-tighter border border-outline/20 hover:bg-primary hover:text-white transition-all">Solicitar Ficha Técnica</button>
                    </div>
                </aside>
                {/* Main Content Area */}
                <main className="flex-1 max-w-full overflow-hidden">
                    {/* Hero Banner */}
                    <section className="relative h-[614px] bg-primary flex items-center px-8 md:px-20">
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                            <img alt="Industrial construction" className="w-full h-full object-cover" data-alt="dramatic wide angle shot of a large scale civil engineering project site with steel structures and heavy machinery at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVgnCcJOXJbS1CPKSLW2YY7rrCKvOGonDzDLZKh99l1PWKa8CULPPUz0axyy9_XHd6EHNiiqId32pHdTyCNpAZ9aQlIS1cq_BRPUdwlRr7n1cJVdIncH7WmfO_N5-pSB0cihPmC0xrcQaY-gTgwH2ONESYYyekuTUWFlZekTQiSmD9rr_KLnzeynpzQnLIPydQuw6fX4bFXJ3BO3so6vu9E9Er3rUE543iyaiG1FAO7GyR3zamgefvhxL8LQwR5KLwZMsolOr_TehX" />
                        </div>
                        <div className="relative z-10 max-w-4xl">
                            <span className="text-tertiary-fixed text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Registro Institucional 2025</span>
                            <h1 className="text-white text-6xl md:text-8xl font-black font-headline tracking-tighter leading-none uppercase mb-6">
                                Infraestructura <br /> Soberana
                            </h1>
                            <p className="text-on-primary-container text-lg max-w-2xl font-light leading-relaxed">
                                Ingeniería de precisión para proyectos hidráulicos y civiles a escala federal. Un registro consolidado de absoluta rigurosidad técnica y autonomía en la infraestructura argentina.
                            </p>
                        </div>
                    </section>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Project Card 1 */}
                            <div className="bg-surface-container-lowest group relative overflow-hidden">
                                <div className="h-64 overflow-hidden relative">
                                    <img alt="Hospital project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Architectural exterior of a massive modern hospital facility with clean white walls and structured glass panels under clear daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEN2yfqxqEQIbxDe0bP-53Db2bDsXSoliagrMaiO2CWUzPEQ00sNHkdtYMutwN57bOjgFrRVeyY5act23MT53ftMGz7hjAYlS7mhj4mWgfk-af1HF3DlFVNYufdMVMCeDSglEFDy2E1OyGCIImty9i6MMmYsTkr4uSbgK6sKh0plvLrR-IfHP-RiZLfixM6TinFbB0YZ121DEn4Cev0ZqT0wnTkKuF10j0imLuHQmfqOk3SMk4F2K32EI0dzw2Z6lGztYN_N7wc8cT" />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">92% Completado</div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-headline font-extrabold uppercase text-primary mb-2">Hospital Regional Oscar Orias</h3>
                                    <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6">Ledesma, Jujuy | 25.000 m2 de Infraestructura</p>
                                    <div className="space-y-4 border-t border-outline-variant/15 pt-6">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-outline uppercase">Progreso Técnico</span>
                                            <span className="font-black text-primary">92%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-high h-1">
                                            <div className="bg-primary h-full" style={{ width: '92%' }}></div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2"><span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Proyecto Ejecutivo</span>
                                            <span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Sanitary &amp; Gas</span>
                                            <span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Fire &amp; Irrigation</span></div>
                                    </div>
                                </div>
                            </div>
                            {/* Project Card 2 */}
                            <div className="bg-surface-container-lowest group relative overflow-hidden">
                                <div className="h-64 overflow-hidden relative">
                                    <img alt="Fisherton Park" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Luxury residential complex with modern balconies and green integration designed by Carlos Ott in sunset lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdxS61_tfBcV9AIFPC6SGQsGVI663OHqAYwJUtFDFk_hrxZDzmuYqNsJQznJ3wQTW2Uk2QOvIBY2MeyEMskeXCR_eelPKWDumPAUvU6aBqKNCpHCrey8wEPik8-CY6pX4u5oe8Vo9UoVyQ9lgX9eehGrQ3z66ufSbAVwIWgwPSiUdsph1NgvLsN3HLuX55pEo9m1boRQ2VCKOuoSfge2xtokjwGWWZfgqpZCzsNEuMPkNXmfHRQcMCHg8IZzGJlqAa8tlLBf01zOu" />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">94% Completado</div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-headline font-extrabold uppercase text-primary mb-2">Fisherton Park</h3>
                                    <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6">Rosario | Arq. Carlos Ott | High-End Living</p>
                                    <div className="space-y-4 border-t border-outline-variant/15 pt-6">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-outline uppercase">Estado Mecánico</span>
                                            <span className="font-black text-primary">94%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-high h-1">
                                            <div className="bg-primary h-full" style={{ width: '94%' }}></div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2"><span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Thermomechanical</span>
                                            <span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Gas &amp; Sanitary</span>
                                            <span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Turnkey Project</span></div>
                                    </div>
                                </div>
                            </div>
                            {/* Project Card 3 */}
                            <div className="bg-surface-container-lowest group relative overflow-hidden">
                                <div className="h-64 overflow-hidden relative">
                                    <img alt="Rosario Airport" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Interior of a modern airport terminal showing complex steel ceiling structures and industrial design elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_bN1QTT4SJg9ygWthg4My8Xj7neR7hqntf3fThP7OCZ0AwRg7BhqHb4b0s6jsv5jIWf2zuthleCYXaRDbovMzZODlb7sY6eidzClBYYgI77Yywq23BDRtz5xNaRfKm1PNQehfJjOvGSYcYyI8A8fS2E7MnLGINlWZuhPolDfX6AC4onlF3hIiuHRT2Wf7FO6BpiNMkFBT9geU0IaJmsb9YnNOmjXZxOivAAtvn_844RBIlTHCVzQ-GNwk-Qk8nU3cPrz8DSHTYkdx" />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">90% Completado</div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-headline font-extrabold uppercase text-primary mb-2">Aeropuerto Int. Rosario</h3>
                                    <p className="text-xs text-secondary font-label uppercase tracking-widest mb-6">International Terminal | NFPA Compliance</p>
                                    <div className="space-y-4 border-t border-outline-variant/15 pt-6">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-outline uppercase">Integridad del Sistema de Incendio</span>
                                            <span className="font-black text-primary">90%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-high h-1">
                                            <div className="bg-primary h-full" style={{ width: '90%' }}></div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2"><span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">Grundfos Pumps</span>
                                            <span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">FM/UL Motobomb</span>
                                            <span className="bg-surface-container text-[10px] font-bold px-2 py-1 text-primary uppercase">NFPA Standards</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Secondary Execution List (Bento-style) */}
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-2 bg-primary p-10 text-white flex flex-col justify-between">
                                <div>
                                    <span className="text-tertiary-fixed text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block">Verticalidad Residencial</span>
                                    <h4 className="text-3xl font-headline font-black uppercase mb-4">Edificio Ewain I</h4>
                                    <p className="text-on-primary-container text-sm leading-relaxed mb-8">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-4xl font-headline font-black">15%</div>
                                    <div className="flex-1 bg-white/10 h-2">
                                        <div className="bg-tertiary-fixed h-full" style={{ width: '15%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-container-high p-10 flex flex-col justify-between">
                                <h4 className="text-xl font-headline font-black uppercase text-primary">Distrito Puerto Norte</h4>
                                <div className="space-y-2">
                                    <p className="text-xs text-secondary uppercase font-bold tracking-widest">Estado: Activo</p>
                                    <p className="text-sm font-label text-on-surface-variant">Ejecución técnica de tres torres para sistemas de distribución hidráulica y térmica.</p>
                                </div>
                                <div className="pt-4 border-t border-outline-variant">
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-primary">3 Torres Activas</span>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest p-10 flex flex-col justify-between border-r-4 border-primary-container">
                                <h4 className="text-xl font-headline font-black uppercase text-primary">Metra Rosario</h4>
                                <div className="space-y-2">
                                    <p className="text-xs text-success-container text-green-700 uppercase font-bold tracking-widest">Estado: Entregado 2023</p>
                                    <p className="text-sm font-label text-on-surface-variant">22 pisos de ingeniería residencial de alta complejidad.</p>
                                </div>
                                <div className="pt-4 border-t border-outline-variant">
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Ciclo de Vida Completo</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Sustainability / LEED Section */}
                    <section className="py-24 px-8 md:px-20 bg-[#00162a] text-white overflow-hidden relative">
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
                    </section>
                    {/* Institutional High-Tech Modules */}
                    <section className="py-20 px-8 md:px-20 bg-surface-container-low">
                        <div className="mb-16">
                            <h2 className="text-3xl font-headline font-black uppercase text-primary tracking-tighter">Infraestructura Especializada</h2>
                            <p className="text-secondary font-label uppercase tracking-widest text-[10px] mt-2">Gestión de Fluidos de Precisión y Seguridad contra Incendios</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Tech Item 1 */}
                            <div className="bg-surface p-6 border-l-2 border-primary">
                                <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Nuevo Hospital Nodal Venado Tuerto</h5>
                                <p className="text-xs text-secondary mb-4">Montantes de acero inoxidable, bombas presurizadas y colectores de alto rendimiento.</p>
                                <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">SANITARIO ELITE</span>
                            </div>
                            {/* Tech Item 2 */}
                            <div className="bg-surface p-6 border-l-2 border-primary">
                                <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">CEMAFE / Iturraspe</h5>
                                <p className="text-xs text-secondary mb-4">Dinámica de fluidos sanitarios y sistemas de seguridad de alta tecnología.</p>
                                <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">LOGÍSTICA HOSPITALARIA</span>
                            </div>
                            {/* Tech Item 3 */}
                            <div className="bg-surface p-6 border-l-2 border-primary">
                                <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Acuario Río Paraná</h5>
                                <p className="text-xs text-secondary mb-4">Sistemas de soporte vital (LSS), inyección de ozono y protocolos de O2.</p>
                                <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">TECNOLOGÍA BIOLÓGICA</span>
                            </div>
                            {/* Tech Item 4 */}
                            <div className="bg-surface p-6 border-l-2 border-primary">
                                <h5 className="font-headline font-bold uppercase text-primary mb-4 text-sm">Centro Justicia Penal</h5>
                                <p className="text-xs text-secondary mb-4">Infraestructura de agua a escala federal y sistemas institucionales de alta seguridad.</p>
                                <span className="text-[10px] font-black bg-surface-container-high px-2 py-1">JUDICIAL FEDERAL</span>
                            </div>
                        </div>
                    </section>
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
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Teatro Argentino La Plata</td>
                                        <td className="py-4 text-secondary">Institutional / Cultural</td>
                                        <td className="py-4 text-secondary">La Plata</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">Fire Suppression Elite</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Aeroparque Jorge Newbery</td>
                                        <td className="py-4 text-secondary">Aviation Infrastructure</td>
                                        <td className="py-4 text-secondary">CABA</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">Hydraulic Safety Compliance</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Casino Rosario (City Center)</td>
                                        <td className="py-4 text-secondary">Commercial High-Scale</td>
                                        <td className="py-4 text-secondary">Rosario</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">Complex Sanitary Nodes</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Hilton Garden Inn</td>
                                        <td className="py-4 text-secondary">Hospitality / Luxury</td>
                                        <td className="py-4 text-secondary">Rosario</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">NFPA Fire Network</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Campus UNRN</td>
                                        <td className="py-4 text-secondary">Educational / Federal</td>
                                        <td className="py-4 text-secondary">Bariloche</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">Fire System Thermal</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Edificio Bolsa de Comercio</td>
                                        <td className="py-4 text-secondary">Corporate Heritage</td>
                                        <td className="py-4 text-secondary">Rosario</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">SS Colector Replacement</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Maui Puerto Norte</td>
                                        <td className="py-4 text-secondary">Residential Towers</td>
                                        <td className="py-4 text-secondary">Rosario</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">Vertical Fluids</span></td>
                                    </tr>
                                    <tr className="border-b border-outline-variant/30 hover:bg-surface-container transition-colors">
                                        <td className="py-4 font-bold text-primary">Hospital Centenario Dialysis</td>
                                        <td className="py-4 text-secondary">Healthcare / Specialized</td>
                                        <td className="py-4 text-secondary">Rosario</td>
                                        <td className="py-4"><span className="text-[10px] font-black text-primary uppercase">Stainless Steel Loops</span></td>
                                    </tr>
                                    {/* More projects would be listed here */}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <button className="px-12 py-4 border border-primary text-primary font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                Cargar Archivo Histórico Completo (+42 Proyectos)
                            </button>
                        </div>
                    </section>
                </main>
            </div>
            {/* Footer Shell */}
        </>
    );
}
