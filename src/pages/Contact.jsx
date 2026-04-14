export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center bg-primary overflow-hidden py-28 md:py-0">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-80"></div>
                </div>
                <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-primary-fixed text-on-primary-fixed px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-widest mb-6 rounded-sm">Contacto</span>
                        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                            Consultas y <br /> Presupuestos
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-sm font-bold uppercase text-sm flex items-center gap-3 hover:bg-white transition-colors duration-150" href="#technical-form">
                                INICIAR CONSULTA
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Red de Infraestructura */}
            <section className="py-24 bg-surface">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left: Offices & Info */}
                        <div className="lg:col-span-5 space-y-20">
                            <div>
                                <div className="flex items-baseline gap-4 mb-10">
                                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">Oficinas</h2>
                                    <div className="flex-grow border-b border-outline-variant/30"></div>
                                </div>
                                <div className="space-y-12">
                                    <div className="group">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-headline font-bold text-lg text-primary tracking-tight">ROSARIO</h3>
                                            <span className="text-[0.65rem] font-bold text-on-primary-container px-2 bg-primary-fixed/50 rounded-sm">HUB PRINCIPAL</span>
                                        </div>
                                        <p className="text-on-surface-variant font-light leading-relaxed">Av. Pellegrini 1260 Piso 13 Dto. B<br />(2000) Rosario, Santa Fe.</p>
                                    </div>
                                    <div className="group">
                                        <h3 className="font-headline font-bold text-lg text-primary tracking-tight mb-2">CABA</h3>
                                        <p className="text-on-surface-variant font-light leading-relaxed">Austria 1951 Piso 6º C<br />Ciudad Autónoma de Buenos Aires.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-baseline gap-4 mb-10">
                                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">Información de Contacto</h2>
                                    <div className="flex-grow border-b border-outline-variant/30"></div>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-white rounded-sm">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <span className="block text-[0.6875rem] font-bold uppercase text-on-surface-variant tracking-widest mb-1">Central Telefónica</span>
                                            <p className="font-headline font-medium text-xl text-primary tracking-tight">0341- 4480566 / 154-680331</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-white rounded-sm">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <span className="block text-[0.6875rem] font-bold uppercase text-on-surface-variant tracking-widest mb-1">Correo</span>
                                            <p className="font-headline font-medium text-xl text-primary tracking-tight">ricardobondino@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Warehouses */}
                        <div className="lg:col-span-7 bg-surface-container-low p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="material-symbols-outlined text-8xl text-outline-variant/10 font-thin select-none">warehouse</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-baseline gap-4 mb-10">
                                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">Depósitos</h2>
                                    <div className="flex-grow border-b border-outline-variant/30"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-surface p-8 border-l-4 border-primary">
                                        <span className="block text-[0.6875rem] font-bold uppercase text-on-primary-container mb-4">Logística 01</span>
                                        <h3 className="font-headline font-bold text-xl mb-4 text-primary leading-tight">España 5281</h3>
                                        <p className="text-on-surface-variant text-sm mb-4">Esq. Regimiento 11<br />(2000) Rosario</p>
                                    </div>
                                    <div className="bg-surface p-8 border-l-4 border-primary">
                                        <span className="block text-[0.6875rem] font-bold uppercase text-on-primary-container mb-4">Logística 02</span>
                                        <h3 className="font-headline font-bold text-xl mb-4 text-primary leading-tight">Güemes 2798</h3>
                                        <p className="text-on-surface-variant text-sm mb-4">Esq. Ovidio Lagos<br />(2000) Rosario</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Form Section */}
            <section className="py-24 bg-primary" style={{ backgroundImage: "radial-gradient(circle, #c3c6ce 1px, transparent 1px)", backgroundSize: "40px 40px" }} id="technical-form">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="bg-surface p-1 shadow-2xl">
                        <div className="border-[0.5rem] border-primary p-8 md:p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                <div className="lg:col-span-4">
                                    <h2 className="font-headline text-4xl font-bold text-primary mb-8 leading-tight uppercase">Consulta de Obra</h2>
                                    <p className="text-on-surface-variant leading-relaxed mb-8">
                                        Complete el siguiente formulario para enviarnos su consulta sobre nuevos proyectos o pedidos de presupuesto.
                                    </p>
                                </div>
                                <div className="lg:col-span-8">
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Nombre Completo / Razón Social</label>
                                            <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary h-14 px-4 text-primary font-medium" placeholder="Ingrese entidad legal" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Correo Electrónico</label>
                                            <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary h-14 px-4 text-primary font-medium" placeholder="ejemplo@entidad.com" type="email" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Tipo de Proyecto</label>
                                            <select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary h-14 px-4 text-primary font-medium">
                                                <option>Instalaciones Sanitarias</option>
                                                <option>Instalaciones de Gas</option>
                                                <option>Incendio</option>
                                                <option>Riego / Piscinas</option>
                                                <option>Obras de Infraestructura</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Ubicación de Obra</label>
                                            <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary h-14 px-4 text-primary font-medium" placeholder="Ciudad / Provincia" type="text" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="block text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Especificaciones Técnicas</label>
                                            <textarea className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary p-4 text-primary font-medium" placeholder="Describa los alcances del proyecto..." rows="4"></textarea>
                                        </div>
                                        <div className="md:col-span-2">
                                            <button className="w-full md:w-auto bg-primary text-white font-bold uppercase py-5 px-12 text-sm tracking-[0.2em] hover:bg-primary-container transition-all flex items-center justify-center gap-4" type="submit">
                                                ENVIAR MENSAJE
                                                <span className="material-symbols-outlined">send</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
