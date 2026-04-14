export default function Equipment() {
    return (
        <>
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[500px] md:h-[819px] flex items-center overflow-hidden py-28 md:py-0">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover grayscale opacity-40" data-alt="Close-up of a massive industrial excavator at a high-end construction site with cold blue atmospheric lighting and technical details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuEJIyi0KlXHGt7DY0cZJVgJFBYGaxz6t38fueyfnmhRvylXyvyOBlcMGK-9KUGu4dsJ8A2wlHSfXn3-Jrqc0J_XK_nS3zLi2ds0rE9h9VGRU2KCeMczOSAgTGfuCU254aeg44GhEiCslxUgoxxjiSP-Pa5XGhT8cf-t83plKxAgvFq0W3WXQZqlZs2peEelzcaqhWTfqZGXZJFjZ1fehhCXWoOfynLId1t9K4s7JCcxvkuuiF-WQM4ErJjUBJK4vQJ7n_MxVxBT4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 md:px-10 relative z-10 grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-8">
                            <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-headline font-bold text-xs uppercase tracking-[0.2em] mb-6">Proyecto y Ejecución de Instalaciones</span>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-black text-surface leading-[0.9] tracking-tighter mb-8 uppercase">
                                Equipamiento e <br /> Infraestructura <br /> Propia
                            </h1>
                            <div className="bg-surface-container-lowest/10 backdrop-blur-md border-l-4 border-tertiary-fixed p-8 max-w-2xl">
                                <p className="text-lg md:text-xl text-surface-variant font-light leading-relaxed">
                                    Infraestructura, logística y maquinaria pesada propia. Garantizamos ejecución ininterrumpida sin depender de subcontratación de terceros.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Technical Metadata Decoration */}
                </section>
                {/* Featured Fleet (Structural Grid) */}
                <section className="bg-surface py-24 technical-grid">
                    <div className="container mx-auto px-10">
                        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/20 pb-8">
                            <div>
                                <h2 className="text-4xl font-headline font-black text-primary tracking-tighter uppercase mb-2">Detalle de Nuestra Flota</h2>
                                <p className="text-secondary font-medium uppercase tracking-widest text-xs">Unidades de Movimiento y Herramental Específico</p>
                            </div>
                            <div className="mt-4 md:mt-0 text-right font-headline text-2xl font-bold text-primary tracking-tighter">
                                Capacidad Operativa
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {/* Movimiento de Suelos */}
                            <div className="bg-surface-container-lowest p-10 border-r border-outline-variant/10 group hover:bg-primary transition-colors duration-500">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed">precision_manufacturing</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-surface mb-4 uppercase leading-tight">Movimiento de Suelos y Zanjeo</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> MINIRETRO BOBCAT E-26 Modelo 2015
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> MINIPALA BOBCAT S450 Modelo 2017 + ACCESORIO ZANJADORA BOBCAT Modelo 2017
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> Accesorios: NIVELADORA y RODILLO VIBROAPISONADOR LISO Y PATA DE CABRA Modelo 2020
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-outline-variant/20">
                                    <p className="text-[10px] text-outline tracking-widest uppercase group-hover:text-surface-variant/50">Categoría de Activo: Movimiento de Suelos Móvil</p>
                                </div>
                            </div>
                            {/* Trabajos en Altura */}
                            <div className="bg-surface-container-low p-10 border-r border-outline-variant/10 group hover:bg-primary transition-colors duration-500">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed">height</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-surface mb-4 uppercase leading-tight">Trabajos en Altura</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> PLATAFORMA ELEVADORA MANTALL (16 MTS.)
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> SISTEMA AUTOPROPULSADA (Modelo 2018)
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> Montajes en altura y posicionamiento vertical
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-outline-variant/20">
                                    <p className="text-[10px] text-outline tracking-widest uppercase group-hover:text-surface-variant/50">Categoría de Activo: Elevación</p>
                                </div>
                            </div>
                            {/* Perforación */}
                            <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed">architecture</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-surface mb-4 uppercase leading-tight">Perforación y Anclajes</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> HILTI D250: Perforación en Hormigón con Diamante (Hasta Ø 500 mm)
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> HILTI D160: Perforación en Hormigón con Diamante (Hasta Ø 200 mm)
                                    </li>
                                    <li className="flex items-center text-secondary group-hover:text-surface-variant text-sm font-medium">
                                        <span className="material-symbols-outlined mr-3 text-xs">radio_button_checked</span> Equipos de Demolición y Anclajes Químicos HILTI
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-outline-variant/20">
                                    <p className="text-[10px] text-outline tracking-widest uppercase group-hover:text-surface-variant/50">Categoría de Activo: Precisión Estructural</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Specialized Tech Grid */}
                <section className="py-24 bg-primary text-surface relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <img className="w-full h-full object-cover" data-alt="Technical blueprint and engineering lines overlapping industrial components with a cold neon glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGaxTOMdLB4L9gvFdLSKSDLOn1660Irq_TFWrkGAdAkXLiBwLPf_OJ2O6Xrg-RwKN9k5liWzw7BQXXdgMjA0UHK7dXB8eKq0YFL6N-4kz3I1iHdffvQo3hfmNXEHxT9UWjlPp_-yyiKwLxmfj6qF6IjGvkib9AL32DayVdLqRApPbJ7QKho3Y7b83HtXrDnHw672pfGb6jk4NXKx9AK_J6GJRnj6CroAtYPtmHzD6j-yahJMMp4ctoWYcN9E_EB4F1MN0ub4tmhPo" />
                    </div>
                    <div className="container mx-auto px-10 relative z-10">
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-5xl font-headline font-black mb-6 uppercase tracking-tighter">Tecnología Especializada de Montaje</h2>
                            <p className="text-on-primary-container text-lg leading-relaxed">Operamos con estándares internacionales de termofusión y soldadura, utilizando herramental de alta gama para asegurar la integridad de sistemas hidráulicos complejos.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-on-primary-fixed-variant/30">
                            {/* Tech Item 1 */}
                            <div className="bg-primary p-12 hover:bg-primary-container transition-all">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-tertiary-fixed text-sm font-headline tracking-widest">MOD_01</span>
                                    <span className="material-symbols-outlined text-tertiary-fixed">settings_input_component</span>
                                </div>
                                <h4 className="text-2xl font-headline font-bold mb-4 uppercase">Instalación Crítica</h4>
                                <ul className="text-on-primary-container text-xs leading-relaxed mb-6 space-y-2">
                                    <li>• 2 RANURADORAS PARA SISTEMA VICTAULIC</li>
                                    <li>• CORTADORA PARA ACERO INOXIDABLE HASTA Ø 8”</li>
                                    <li>• AGUJEREADORA PARA COPAS BIMETALICAS (BOCA DE PESCADO)</li>
                                    <li>• ROSCADORAS DE BANCO Y MANUALES</li>
                                </ul>
                            </div>
                            {/* Tech Item 2 */}
                            <div className="bg-primary p-12 hover:bg-primary-container transition-all">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-tertiary-fixed text-sm font-headline tracking-widest">TECH_MOD.02</span>
                                    <span className="material-symbols-outlined text-tertiary-fixed">heat_pump</span>
                                </div>
                                <h4 className="text-2xl font-headline font-bold mb-4 uppercase">Fusión y Soldadura</h4>
                                <ul className="text-on-primary-container text-xs leading-relaxed mb-6 space-y-2">
                                    <li>• 5 EQUIPOS TIG INVERTER COMPLETOS - RECTIFICADORA</li>
                                    <li>• 2 ELECTROFUSIONADORAS HASTA Ø 600 mm</li>
                                    <li>• CORTADORA DE PAVIMENTO DYNAPACK - VIBROAPISONADORES</li>
                                </ul>
                            </div>
                            {/* Tech Item 3 */}
                            <div className="bg-primary p-12 hover:bg-primary-container transition-all">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-tertiary-fixed text-sm font-headline tracking-widest">TECH_MOD.03</span>
                                    <span className="material-symbols-outlined text-tertiary-fixed">construction</span>
                                </div>
                                <h4 className="text-2xl font-headline font-bold mb-4 uppercase">Soporte de Obra</h4>
                                <ul className="text-on-primary-container text-xs leading-relaxed mb-6 space-y-2">
                                    <li>• 2 CONTAINERS DE OBRA</li>
                                    <li>• ACANALADORA 9” CON ASPIRADORA</li>
                                    <li>• ANDAMIOS METALTECH (EEUU)</li>
                                    <li>• NIVELES OPTICOS Y LASER</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Logistics & Admin Callout */}
                <section className="py-24 bg-surface-container-low">
                    <div className="container mx-auto px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5">
                                <div className="bg-surface p-12 shadow-sm border-l-8 border-primary relative overflow-hidden">
                                    <h3 className="text-3xl font-headline font-black text-primary uppercase mb-6 tracking-tight">Poder Logístico <br /> y Técnico</h3>
                                    <p className="text-secondary mb-8 font-medium">Nuestra capacidad de respuesta federal se apoya en una flota logística pesada y una oficina técnica de alto rendimiento.</p>
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <span className="material-symbols-outlined text-primary mr-4">local_shipping</span>
                                            <div>
                                                <p className="text-sm font-bold text-primary uppercase">Logística Pesada</p>
                                                <ul className="text-[10px] text-secondary leading-tight mt-1">
                                                    <li>• CAMION DFM 2023 - 14 TN (CAJA 6M)</li>
                                                    <li>• UTILITARIO LIFAN FOISON TRUCK (2017)</li>
                                                    <li>• UTILITARIO FOTON GRATOUR (2019)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="material-symbols-outlined text-primary mr-4">monitoring</span>
                                            <div>
                                                <p className="text-sm font-bold text-primary uppercase">Oficina Técnica</p>
                                                <ul className="text-[10px] text-secondary leading-tight mt-1">
                                                    <li>• PLOTTER / 4 PC DISEÑO I7 / 3 NOTEBOOK I7</li>
                                                    <li>• FLOTA 12 CELULARES CLARO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
                                <div className="h-80 relative">
                                    <img className="w-full h-full object-cover grayscale brightness-75" data-alt="Modern high-tech logistics truck in a warehouse environment with dramatic industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl-fDbT0YCeajs693i6ABy4tpi6DRwMudTgd4kk7PO60kDNC60YBj8uCxR5V7f7EJz9jo9tCDfhA0XeYOzft1TXpMjQcktAmvIttpV7fdRymVxddpep7z5NEHcZAQkJIFcWF8_2zSsZEdzksL_XOYuTBnB4TqsFrPS8cKzMW5zBgfN4Uw1BHcRmWoiVuLbTjEqgueyQMnDI0bbNLuZZToLjjl-MLmgbj-fUIMxTtY1JFIXuf1UeNCVRDkF5L1JztjnB_gF0w9O-4E" />
                                </div>
                                <div className="h-80 relative mt-12">
                                    <img className="w-full h-full object-cover grayscale brightness-75" data-alt="Technical office interior with high-end computers and engineering blueprints in a professional industrial design office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx8BDL9Ue6VtSStHGKUjpscljbTnLPF2JkruntqlOewH8yBE96SEYwuhmvjEqomvlx8qXimSo75TE2bZUE74ObuUAEs6sndkuTBMKhUYvdNjAX0jjQUrLTXIeYUR8JxAWINgs05nMXWaWhob5qH_fHeTvhkIBxMGrnqXV9P4Hyh6lhrUplrdGv8Q9wAelPsJnT-K3NigyNXLreV-Y1OaaUJnWUaOiGOk6LDbs1kxD2twfHJShBeOfSLOKOK97v1rJqcg1wdy6HvGQ" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-32 bg-surface text-center">
                    <div className="container mx-auto px-10 max-w-4xl">
                        <h2 className="text-5xl font-headline font-black text-primary mb-8 uppercase tracking-tighter">¿Listo para escalar su <br /> infraestructura?</h2>
                        <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">Poseemos el equipamiento y el conocimiento para transformar grandes visiones en realidades operativas.</p>
                        <button className="px-12 py-6 bg-primary-container text-on-primary-container font-headline font-black text-lg uppercase tracking-widest hover:bg-primary hover:text-surface transition-all duration-300">
                            Solicitar Cotización de Obra
                        </button>
                    </div>
                </section>
            </main>
            {/* Footer */}
        </>
    );
}
