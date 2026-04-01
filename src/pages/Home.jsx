export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[921px] min-h-[700px] overflow-hidden technical-gradient flex items-center">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover mix-blend-overlay opacity-40" alt="Close-up of high-complexity industrial hydraulic pipes and steel valves in a modern facility with blue technical lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3oJNFOqYa2cSROKhW2cYuJZC5hZxXUJ7WlGidwVHoBi381GVyZ7dHj8UYrETkFCwTPBjoovw6sBMx8k_Wi8uhGJGejOmHIIbQ-4XoW3xENA0eYyO84IvNefTbOzNclGFw-0z1cay7i6zAeI2TsTLOsq2qVAAXY64DnftUTeSvJRXcplLFkA0p0obJbVNr2j6o4x-usIvfmAO4HkOWZ7xlWZmHQQTx-KYiDbxrLWTdhAsE-_9xWUYOQYhG0fqO8rrLk9OINa8hEfCi" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-on-primary-fixed-variant text-white px-3 py-1 text-[10px] tracking-[0.2em] font-headline font-bold uppercase mb-6 rounded-sm">Infraestructura Soberana</span>
                        <h1 className="text-white font-headline font-black text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-8">
                            H2O OBRAS: Ingeniería de Alta Complejidad y Autonomía Total
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <button className="bg-primary-fixed text-primary px-10 py-5 rounded-sm font-headline font-black text-sm uppercase tracking-wider hover:bg-white transition-colors">
                                Solicitar Factibilidad Técnica
                            </button>
                            <div className="flex items-center gap-4 text-white/60">
                                <span className="h-[1px] w-12 bg-white/30"></span>
                                <span className="font-label text-xs tracking-widest uppercase">Certificación Federal &amp; Normas NFPA</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Technical Data Overlay */}
                <div className="absolute bottom-12 right-12 hidden lg:block text-right">
                    <p className="font-headline font-bold text-white text-4xl mb-1 tracking-tighter">450k+</p>
                    <p className="font-label text-white/50 text-[10px] uppercase tracking-[0.2em]">Metros Cuadrados Intervenidos</p>
                </div>
            </section>

            {/* Portfolio Portfolio Grid (Asymmetric) */}
            <section className="py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="font-headline font-black text-5xl text-primary tracking-tighter mb-4">Proyectos de Escala Federal</h2>
                            <p className="text-secondary text-lg leading-relaxed">Ejecución de sistemas críticos en entornos de alta exigencia técnica y operativa.</p>
                        </div>
                        <div className="text-right">
                            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary/40 font-bold">Portfolio 2024</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Project 1 */}
                        <div className="md:col-span-8 group cursor-pointer overflow-hidden rounded-sm bg-surface-container-low relative aspect-video md:aspect-auto md:h-[600px]">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="Hospital complex" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2PnYfhFpD83puAvaHA27bKwp4jxlo--DUq4451xmEp0Z3cDe1uOXMIGU3-mENwmDdYPmRGTYYdK2e4SngsA1pULgaYDe4ZMe4QZF5PORzxIFVTSs_dY8MnTZeF0kM8XzSZ7FKywS4uYRzH1-aZjx2QKaye-TzRZuGLSVDaYVBmOgMZ0ONogsG92d-cLeaSSMQvLwLaxCz-An6bfSUt3z8tFpiYwx2HjgU2KWr4mbjgBEbglnOeTeZt1BMbnVeVUQflaZIncYk1FCY" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-12">
                                <span className="font-label text-[10px] text-primary-fixed uppercase tracking-widest font-bold mb-2">Sanidad &amp; Infraestructura</span>
                                <h3 className="text-white font-headline font-bold text-4xl tracking-tighter leading-none mb-4">Hospital Regional Oscar Orias</h3>
                                <p className="text-white/70 max-w-md font-body text-sm">25.000 m2. Ingeniería hidráulica integral y redes de gases medicinales. Libertador Gral. San Martín, Jujuy.</p>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-sm bg-surface-container-low relative h-[600px]">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="Airport terminal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2oUCHxxqAaH0tmb9q3u-kJ-oQOoiFHpgE-RhYHM3ylIYXrtoo2XS_vFtHw_yZ8M5mtR7buWv5HSya1F0UAgtc0oON1vsP9yDrCHCRyAU0hedllhVPylNcioQFCrKhuF3VCosCUkVUMb1RjvC-iR2uG6swaQ0BeZtuHvJLTTzQGKQc_jHbQ4EWdUIrvjOgymT0QKFcmJO26Le5UEznqUiKdIkVBXsqwjQfRDUSUarc3W5VQx0IdT6arRRwjMB4eaeMt7ficd4yqD_g" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                <span className="font-label text-[10px] text-primary-fixed uppercase tracking-widest font-bold mb-2">Seguridad Contra Incendios</span>
                                <h3 className="text-white font-headline font-bold text-2xl tracking-tighter leading-none mb-4">Aeropuerto Int. Rosario</h3>
                                <p className="text-white/70 font-body text-xs">Sistemas FM/UL y normativa NFPA para terminal aérea.</p>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-sm bg-surface-container-low relative h-[400px]">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="Edificio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVniuuJRZE0bAiEvBbFTxOhKDi6oiVECAZGNBNOZ2L93MGfFmS6rZzAjzIywHhvxEA87z1KcO7WoHjwGu2ahtjShih9Kkz6fNdHB44MWw63WuoK7OvCfLxxgZS-CjxYZw9j_WhMzbej4-eyvlnwsDlxIlq7bVEXoJqBChr2sy7PwxPpe4w3IWb4jJdZY20NB2kZON-tcbIOrJ21vLzgQUN4V1dpiNqmYiQxGQ050voHKtbsZ01nasUiERpWhbqDJXRwrR0e-mY8krM" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white font-headline font-bold text-xl tracking-tighter mb-2">Centro de Justicia Penal</h3>
                                <p className="text-white/70 font-body text-xs">Instalaciones sanitarias de alta seguridad. Rosario.</p>
                            </div>
                        </div>
                        {/* Project 4 */}
                        <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-sm bg-surface-container-low relative h-[400px]">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="Campus UNRN" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLkylvMEGY_K3gY76f3xaF_fFJqXSHiVpoK9BlgGQCQx6FbmKWYOr-jFRhBxhmleS8zU-1RSVywTHglZG7rmUcD9fv_V15M2eRHf41Vl_Cmqs3jWpRAvnb7mStwmfVYOBujdVwCewmZSZzQdTXlFTMXWuOrEFmmVOS_8PFc0ZbIOC9JIvHUvafncUhiYtBG5IpADB0sd_MaDZ_7W018zb3F3TlVMZniI6J1EL-x0D-TOHS5LoVld4IHMHIvox5YnzDkkjCAkBne3Zy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white font-headline font-bold text-xl tracking-tighter mb-2">Campus UNRN</h3>
                                <p className="text-white/70 font-body text-xs">Infraestructura educativa federal. San Carlos de Bariloche.</p>
                            </div>
                        </div>
                        {/* Project 5 */}
                        <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-sm bg-surface-container-low relative h-[400px]">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="Edificio Ewain I" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWQ9eprGVfub6pa0jbYXXNhzjA6GdmwSx0uDGs7Muiomkm4OIlhNH5o-2UgxGfEvb9ebX7kXrQJvJMMgsaOVPZnEnluJeS62tdMw6vmW37E2Yc7wIOpKfON37LEsd7VLhw_EG62RfGmTjAYx5m_9Xxh-ZaByGX8G24WagcFDGG3s1P2h8f0Vf-IDG16yPJIy2lirlDsPaZwxFNL27Ym_M8DjAphrjOYojzC2hsgI3z5nEvyfcPtii7YzSCfC58Iy1TqaEKkkpyj68O" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white font-headline font-bold text-xl tracking-tighter mb-2">Edificio Ewain I</h3>
                                <p className="text-white/70 font-body text-xs">Ingeniería en climas extremos. Ushuaia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Showcase (LEED PLATINUM) */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <circle cx="100" cy="50" fill="currentColor" r="50"></circle>
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-primary-fixed font-headline font-bold uppercase tracking-widest text-xs mb-6">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                                Sustentabilidad LEED PLATINUM
                            </span>
                            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter leading-none mb-8">
                                Edificio Núcleo Autopista Ros-Bs. As.
                            </h2>
                            <p className="text-on-primary-container text-xl leading-relaxed mb-12">
                                Proyecto insignia de La Segunda Seguros. H2O OBRAS ejecutó los sistemas de gestión hídrica y energía térmica para alcanzar el máximo estándar global de eficiencia.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-l-2 border-primary-fixed pl-6 py-2">
                                    <h4 className="font-headline font-bold text-lg mb-2">Energía Solar Térmica</h4>
                                    <p className="text-white/60 text-sm">Integración de sistemas de captación para agua caliente sanitaria a gran escala.</p>
                                </div>
                                <div className="border-l-2 border-primary-fixed pl-6 py-2">
                                    <h4 className="font-headline font-bold text-lg mb-2">Recupero de Aguas Grises</h4>
                                    <p className="text-white/60 text-sm">Circuitos cerrados de tratamiento para reutilización en servicios secundarios.</p>
                                </div>
                                <div className="border-l-2 border-primary-fixed pl-6 py-2">
                                    <h4 className="font-headline font-bold text-lg mb-2">Tratamiento Biológico</h4>
                                    <p className="text-white/60 text-sm">Plantas de tratamiento propias con vertido de residuo nulo al ecosistema.</p>
                                </div>
                                <div className="border-l-2 border-primary-fixed pl-6 py-2">
                                    <h4 className="font-headline font-bold text-lg mb-2">Certificación Federal</h4>
                                    <p className="text-white/60 text-sm">Documentación técnica auditada bajo estándares internacionales.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="rounded-sm w-full shadow-2xl relative z-10 grayscale-[30%]" alt="Modern sustainable architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNbDo9JYPxLLNo3Esp97ISEIIbqj4WxqQq6k-JBH2Y2l0x3ujgnlKdAcsqgIDxu5SYDvw1oWg5ObX6McQjTbH28t6fKbdv-F4jHMqL9uEhmDNwevhozWptpsfhb88fE9aX6GykznvQoU1BaszFiVR-u1T8nv7OFQDMht59rTw_Q3_b6hcxiQIUXHLcIksc1qM39vYg4I5jiZTy1wWo4nZ4UOUYkyESxA9SuhdeALis3u_h9gYynx5ET7lxJ_fEr-qYBSSX54oFf8nV" />
                            <div className="absolute -bottom-8 -left-8 bg-surface text-primary p-8 rounded-sm z-20 shadow-xl max-w-xs">
                                <p className="font-headline font-black text-4xl mb-1 tracking-tighter">LEED</p>
                                <p className="font-label text-[10px] uppercase tracking-widest font-bold opacity-60">Platinum Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Capacity Section (Machined-Plate style) */}
            <section className="py-32 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="font-headline font-black text-5xl text-primary tracking-tighter mb-4">Autonomía Operativa</h2>
                        <p className="text-secondary">Contamos con flota propia de maquinaria pesada y tecnología de punta, garantizando independencia total de subcontrataciones.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Machine 1 */}
                        <div className="bg-surface p-8 rounded-sm shadow-sm border border-outline-variant/10 group">
                            <div className="h-48 mb-8 overflow-hidden rounded-sm bg-surface-container-highest">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Bobcat excavator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcg9D1xbBov8FMdw-kqKmzhdM7Z_psxSrHWcJYKfSdhW8gd1UpGL4CS5rO5SDnCR7vOU1dTgFVk-rq0xWfNQI3mek6mkWlNEi7z6d6SuT65F0kcp0L8sQloTKtTZItymcYmhvB5XM3jAuGj6e2m1XGJGf9aNIldj7tOK116TDRJ6zIC_w2s-81BmIRt4J8tBUwYDIqQvHtCfpjl4MweXeBqth09ilWBg1dITy3UX-GXq9aNs2ZO5ix24Fy_JiZK95B9Z2p-hibFA4i" />
                            </div>
                            <span className="font-label text-[10px] text-tertiary-fixed-dim bg-tertiary px-2 py-1 rounded-sm mb-4 inline-block font-bold">Earthmoving</span>
                            <h3 className="font-headline font-bold text-xl mb-4">Bobcat E-26 &amp; S450</h3>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Mini-excavadora hidráulica</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Mini-cargadora compacta</li>
                            </ul>
                        </div>
                        {/* Machine 2 */}
                        <div className="bg-surface p-8 rounded-sm shadow-sm border border-outline-variant/10 group">
                            <div className="h-48 mb-8 overflow-hidden rounded-sm bg-surface-container-highest">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Scissor lift" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDueXdvmGtNV3nQ27xkQo-h-9d6C5PP0F8DBJ06CpnGE9nJkFqbBHTF2oq-rSx7ueXcIiebvsqJuSrPBZX3I5gbLaadoNE6gov8QD_vORxEvtFpsNILZNkqBkGMcs6Hp2Q7TO6Y7YPcKZw3A5Xy4B5JUkYIno8FQf_FvPBgCCF27YAkLUMUjVdiDG95h3jpGIWtcsofY9m-3GJbS6KVPOhlTbL8b_zCrx15aRNbspvTRrTyKrC4tSq10SCzPHpTVn0h0K6v8xg4eRxq" />
                            </div>
                            <span className="font-label text-[10px] text-tertiary-fixed-dim bg-tertiary px-2 py-1 rounded-sm mb-4 inline-block font-bold">Aerial Works</span>
                            <h3 className="font-headline font-bold text-xl mb-4">Plataforma Mantall</h3>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Elevación de 16 metros</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Motorización eléctrica silenciosa</li>
                            </ul>
                        </div>
                        {/* Machine 3 */}
                        <div className="bg-surface p-8 rounded-sm shadow-sm border border-outline-variant/10 group">
                            <div className="h-48 mb-8 overflow-hidden rounded-sm bg-surface-container-highest">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Hilti tool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4aEKoqLO6wWNZOdLsU6bJ1ClaXVGEmlCdN7hgGhkeiEdDt0fh3VJVJkZEu-khbD0QoZhQmYYRp74ziNya7Vm_z9vJMvws2Ia4o9TyCCE_JWWYkYTD9dgqaLP3CZmI1j7FvJEJqlAFZ30q0vdxoMwpIHsdFkpa8CameKpsKKJUk6wnTwd1TXng9NtXA01CxLJwQ8QEwvoPkd-U_rFOb4rzUvj67xNISOKNBaU69JLj3zpVlpr36EdhsIv4M-P0K8I8tHevsytnRda" />
                            </div>
                            <span className="font-label text-[10px] text-tertiary-fixed-dim bg-tertiary px-2 py-1 rounded-sm mb-4 inline-block font-bold">Precision Tools</span>
                            <h3 className="font-headline font-bold text-xl mb-4">Hilti &amp; Victaulic</h3>
                            <ul className="space-y-2 text-sm text-secondary">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Perforación diamante D250</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Soldadura TIG Inverter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section className="py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                        <div className="lg:col-span-1 p-12 bg-primary text-white">
                            <h2 className="font-headline font-black text-4xl tracking-tighter leading-none mb-6">Nuestras Especialidades</h2>
                            <p className="text-on-primary-container text-sm leading-relaxed">Sistemas certificados bajo estándares internacionales de seguridad e ingeniería.</p>
                        </div>
                        <div className="p-12 bg-surface-container-low hover:bg-primary-container hover:text-white transition-colors duration-300 group">
                            <span className="material-symbols-outlined text-4xl mb-8 group-hover:text-primary-fixed">plumbing</span>
                            <h4 className="font-headline font-bold text-lg mb-4">Instalaciones Sanitarias &amp; Gas</h4>
                            <p className="text-secondary group-hover:text-white/70 text-sm">Redes de alta presión y sistemas de distribución de fluidos industriales.</p>
                        </div>
                        <div className="p-12 bg-surface-container hover:bg-primary-container hover:text-white transition-colors duration-300 group">
                            <span className="material-symbols-outlined text-4xl mb-8 group-hover:text-primary-fixed">fire_extinguisher</span>
                            <h4 className="font-headline font-bold text-lg mb-4">Protección Contra Incendio</h4>
                            <p className="text-secondary group-hover:text-white/70 text-sm">Normativa NFPA, sistemas FM/UL, rociadores y redes de hidrantes.</p>
                        </div>
                        <div className="p-12 bg-surface-container-high hover:bg-primary-container hover:text-white transition-colors duration-300 group">
                            <span className="material-symbols-outlined text-4xl mb-8 group-hover:text-primary-fixed">pool</span>
                            <h4 className="font-headline font-bold text-lg mb-4">Piscinas de Alta Gama</h4>
                            <p className="text-secondary group-hover:text-white/70 text-sm">Ingeniería hidráulica recreativa y sistemas de filtrado inteligente.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
