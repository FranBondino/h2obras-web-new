export default function Portfolio() {
    return (
        <div className="relative">
            {/* Sidebar Navigation */}
            <aside className="fixed left-0 top-0 h-full flex-col bg-surface w-64 pt-28 z-40 hidden lg:flex border-r border-outline-variant/20">
                <div className="px-8 mb-10">
                    <h2 className="text-lg font-black text-primary-container font-headline uppercase tracking-tight">Project Registry</h2>
                    <p className="text-[10px] tracking-[0.2em] text-secondary font-bold uppercase">Federal Infrastructure</p>
                </div>
                <nav className="flex flex-col gap-2">
                    <a className="flex items-center gap-4 py-4 font-body font-semibold text-xs tracking-widest uppercase text-primary border-l-4 border-primary-container pl-4 hover:bg-primary-container/5 transition-all group" href="#">
                        <span className="material-symbols-outlined text-lg">medical_services</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">Hospitals</span>
                    </a>
                    <a className="flex items-center gap-4 py-4 font-body font-semibold text-xs tracking-widest uppercase text-secondary pl-4 border-l-4 border-transparent hover:bg-primary-container/5 transition-all group" href="#">
                        <span className="material-symbols-outlined text-lg">flight_takeoff</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">Airports</span>
                    </a>
                    <a className="flex items-center gap-4 py-4 font-body font-semibold text-xs tracking-widest uppercase text-secondary pl-4 border-l-4 border-transparent hover:bg-primary-container/5 transition-all group" href="#">
                        <span className="material-symbols-outlined text-lg">gavel</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">Judicial Centers</span>
                    </a>
                    <a className="flex items-center gap-4 py-4 font-body font-semibold text-xs tracking-widest uppercase text-secondary pl-4 border-l-4 border-transparent hover:bg-primary-container/5 transition-all group" href="#">
                        <span className="material-symbols-outlined text-lg">school</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">Universities</span>
                    </a>
                    <a className="flex items-center gap-4 py-4 font-body font-semibold text-xs tracking-widest uppercase text-secondary pl-4 border-l-4 border-transparent hover:bg-primary-container/5 transition-all group" href="#">
                        <span className="material-symbols-outlined text-lg">energy_savings_leaf</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">LEED Certified</span>
                    </a>
                </nav>
                <div className="mt-auto p-8 opacity-40">
                    <div className="h-px bg-outline-variant w-full mb-4"></div>
                    <div className="text-[8px] uppercase tracking-widest leading-loose text-secondary">Engineering Division<br />Log 2024.01</div>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="lg:ml-64 min-h-screen pb-20 lg:pb-0">
                {/* Hero Section */}
                <section className="relative h-[614px] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-primary">
                        <img className="w-full h-full object-cover grayscale brightness-50 mix-blend-overlay opacity-80" alt="dramatic wide angle shot of a massive industrial water treatment plant with blue structural steel and heavy machinery at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdg9QL2x2wtwOew5fOwWQzg_Yp-_MfNpjyD9emjResdLy8U6kTqZvp97rHHVsBQaMjzUXiVRlJBGz41XslmuyroPedteQ8sTA_RHA0dk0JU-qYGJ2HP8ZyEN7nxTrY-6n2OtqxR7gOBcEWZOVglr5IlYiOUDlj5CAAkrIve47nPvH2mWwL-vqlOb5b2_ykRNwudCXGD88MkUBQy3iQ6fZyytd1m8uTFNisi1hegUmbi9iDg3J_twFEy3NM0E3ayHIpRmX5Ey-2uicx" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #5b5f61 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                    </div>
                    <div className="relative z-10 px-8 md:px-12 pb-20 max-w-6xl">
                        <div className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 inline-block font-headline text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded-sm">Strategic Infrastructure Portfolio</div>
                        <h1 className="text-5xl md:text-8xl font-headline font-extrabold text-white leading-[0.9] tracking-tighter uppercase mb-2">
                            Portfolio Federal:<br />Infraestructura de Escala
                        </h1>
                    </div>
                </section>

                {/* Project Grid (Asymmetric Bento Style) */}
                <section className="p-8 md:p-12 space-y-12 bg-surface">
                    {/* Featured Project 1: Jujuy */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-8 group relative overflow-hidden bg-surface-container-low border border-outline-variant/20 rounded-sm">
                            <div className="relative overflow-hidden aspect-video md:aspect-[16/9]">
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="high-tech modern medical facility facade with glass panels and surgical clean white concrete structures at twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkM8M2489RzoW7kDQFzvXrki7vWg1HTG9wNpbWdRyot7-U1UdvkUjvnDbFKa7k61Wj3mwabRXrKKTCl809ED-OFmRkPgEyWtBp6u-NFX55AgHndixsJZSan7ksQGEUanGyEthsf4upr7eD31xAKb5Bzzj81AyCQ7-CktolWnlTr9oZTKhqxLOp_X95I_DVYYcVFUxV_2hNBv_r9PafXKCOLGmMQzoV79CMjKbPXQQhRj3ixAgoSrNtHOYexH1qC-RLYLC-fQjwn1qa" />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
                            </div>
                            <div className="absolute top-8 right-8 flex flex-col gap-2 items-end z-20">
                                <span className="bg-primary-container text-white px-4 py-1 font-label text-[10px] font-black tracking-widest uppercase rounded-sm">25,000 m2</span>
                                <span className="bg-white/90 backdrop-blur-sm text-primary px-4 py-1 font-label text-[10px] font-black tracking-widest uppercase rounded-sm shadow-sm">Health Tech</span>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary uppercase tracking-tight">Hospital Regional Oscar Orias</h3>
                                        <p className="text-secondary font-label mt-2 text-xs uppercase tracking-widest font-semibold">Libertador Gral. San Martín, Jujuy</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-4xl hidden sm:block">architecture</span>
                                </div>
                                <p className="mt-6 text-on-surface-variant leading-relaxed max-w-2xl font-body">Integrated execution of high-complexity technical infrastructure. Focus on specialized fluid management and surgical grade atmospheric control for federal health coverage.</p>
                            </div>
                        </div>

                        {/* Secondary Projects Stack */}
                        <div className="lg:col-span-4 flex flex-col gap-10">
                            {/* Project 2: Rosario Airport */}
                            <div className="bg-surface-container-lowest p-8 flex flex-col h-full border-l-4 border-tertiary-fixed shadow-sm rounded-sm border-t border-r border-b border-outline-variant/20">
                                <div className="flex justify-between mb-6">
                                    <span className="material-symbols-outlined text-primary">local_fire_department</span>
                                    <span className="bg-primary text-[9px] text-white px-2 py-1 font-bold tracking-tighter uppercase rounded-sm">NFPA CERTIFIED</span>
                                </div>
                                <h4 className="text-xl font-headline font-bold text-primary uppercase">Aeropuerto Int. Rosario</h4>
                                <p className="text-[10px] text-secondary mt-2 font-bold tracking-widest uppercase">Fire Protection Systems</p>
                                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed font-body">Implementation of FM/UL standard suppression networks and specialized hydraulic infrastructure for international aeronautical logistics.</p>
                                <div className="mt-auto pt-8 flex items-center gap-4">
                                    <div className="h-[1px] bg-outline-variant flex-grow"></div>
                                    <span className="text-[10px] font-black uppercase text-outline">Ref. P-02</span>
                                </div>
                            </div>

                            {/* Project 3: Judicial Center */}
                            <div className="bg-primary p-8 text-white flex flex-col h-full relative overflow-hidden rounded-sm shadow-lg">
                                <div className="absolute -right-6 -bottom-6 opacity-10">
                                    <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                                </div>
                                <h4 className="text-2xl font-headline font-bold text-tertiary-fixed uppercase leading-tight">Centro de Justicia Penal</h4>
                                <p className="text-[10px] text-on-primary-container mt-2 font-bold tracking-widest uppercase mb-4">Rosario, Santa Fe</p>
                                <p className="mt-2 text-sm text-primary-fixed leading-relaxed font-body relative z-10">Maximum security hydraulic installations and technical precision modules for the province's primary judicial hub.</p>
                                <div className="mt-auto pt-8 relative z-10">
                                    <span className="bg-tertiary-fixed text-primary px-3 py-1 text-[9px] font-black tracking-widest uppercase rounded-sm">High Security Infrastructure</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LEED Highlight Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        <div className="bg-surface-container-high p-8 md:p-12 flex flex-col justify-center rounded-sm">
                            <div className="bg-white w-16 h-16 flex items-center justify-center mb-8 rounded-sm shadow-sm">
                                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-primary uppercase leading-[0.9] tracking-tighter mb-6">
                                Edificio Núcleo Autopista<br />Ros-Bs. As.
                            </h3>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="bg-primary text-white px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-sm">LEED PLATINUM</span>
                                <span className="border border-primary px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-sm text-primary">Sustainability Leader</span>
                            </div>
                            <ul className="space-y-4 font-body text-xs md:text-sm text-on-surface-variant uppercase tracking-wide font-medium">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Solar Energy Integration</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Water Recovery Systems</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Biological Treatment Plants</li>
                            </ul>
                        </div>
                        <div className="h-full min-h-[300px] md:min-h-[400px]">
                            <img className="w-full h-full object-cover rounded-sm shadow-sm grayscale-[20%]" alt="ultra-modern glass and steel sustainable office building with integrated solar panels and vertical greenery gardens on the highway side" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIc0ZHmJ7zg4zhqsXQXIBcP8TP8w16ODMXUyktQfKzArgfbmrIjN_MHyGvxWlUfCu_entGloLP5kht6xh5mqp0XQYHR_MQBVu7iMKJ5E1Jf8X1k16gFsxsfGutJO1gppJfX4Zu9EiSl6uGXmFWX47n9kRGSXBgtsEq-yT2Ze3US9QbMoykYCnBps3s4fdEiSwf4tRB8g5_CIlm9NP913oG_q93TaSSrPsnxY8IFWlDMEevCKblZ3LUh01od4Cqtj55TJwHCWMJ6A-o" />
                        </div>
                    </div>

                    {/* Regional Reach (Universities & Extreme Environments) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {/* Bariloche */}
                        <div className="bg-surface-container-low p-8 md:p-10 flex flex-col border-t-8 border-primary rounded-sm shadow-sm">
                            <span className="text-[10px] font-black uppercase text-outline mb-6 tracking-widest">Cold Climate Engineering</span>
                            <h4 className="text-2xl font-headline font-bold text-primary uppercase tracking-tight">Campus UNRN</h4>
                            <p className="text-[10px] text-secondary mt-2 font-bold tracking-widest uppercase">Bariloche, Río Negro</p>
                            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed flex-grow">Federal reach infrastructure designed for sub-zero performance and high-thermal efficiency fluid networks.</p>
                        </div>
                        {/* Ushuaia */}
                        <div className="bg-surface-container-low p-8 md:p-10 flex flex-col border-t-8 border-primary rounded-sm shadow-sm">
                            <span className="text-[10px] font-black uppercase text-outline mb-6 tracking-widest">High Complexity Environments</span>
                            <h4 className="text-2xl font-headline font-bold text-primary uppercase tracking-tight">Edificio Ewain I</h4>
                            <p className="text-[10px] text-secondary mt-2 font-bold tracking-widest uppercase">Ushuaia, Tierra del Fuego</p>
                            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed flex-grow">Engineering in extreme latitudes. Specialized plumbing and heating systems for the southernmost urban infrastructure projects.</p>
                        </div>
                        {/* Specialized Hospitals */}
                        <div className="bg-surface-container-low p-8 md:p-10 flex flex-col border-t-8 border-primary rounded-sm shadow-sm">
                            <span className="text-[10px] font-black uppercase text-outline mb-6 tracking-widest">Technical Health Registry</span>
                            <h4 className="text-2xl font-headline font-bold text-primary uppercase tracking-tight">Especialidades Médicas</h4>
                            <p className="text-[10px] text-secondary mt-2 font-bold tracking-widest uppercase">Santa Fe &amp; Regional</p>
                            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed flex-grow">Continuous execution of medical gas systems, sterile water loops, and specialized hospital logistics across the federal territory.</p>
                        </div>
                    </div>
                </section>

                {/* Technical Specs Ticker */}
                <div className="bg-primary-container py-12 border-y border-white/10 overflow-hidden">
                    <div className="flex whitespace-nowrap gap-16 animate-pulse">
                        <span className="text-primary-fixed-dim/30 font-headline font-black text-2xl md:text-4xl uppercase tracking-[0.2em]">NFPA COMPLIANT</span>
                        <span className="text-primary-fixed-dim/30 font-headline font-black text-2xl md:text-4xl uppercase tracking-[0.2em]">LEED PLATINUM STANDARD</span>
                        <span className="text-primary-fixed-dim/30 font-headline font-black text-2xl md:text-4xl uppercase tracking-[0.2em]">FEDERAL SCALE LOGISTICS</span>
                    </div>
                </div>
            </div>

            {/* BottomNavBar (Mobile Only) */}
            <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-surface-container-high flex justify-around items-center p-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <a className="flex flex-col items-center gap-1 text-primary" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest">Health</span>
                </a>
                <a className="flex flex-col items-center gap-1 text-secondary" href="#">
                    <span className="material-symbols-outlined">flight_takeoff</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest">Air</span>
                </a>
                <a className="flex flex-col items-center gap-1 text-secondary" href="#">
                    <span className="material-symbols-outlined">gavel</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest">Legal</span>
                </a>
                <a className="flex flex-col items-center gap-1 text-secondary" href="#">
                    <span className="material-symbols-outlined">energy_savings_leaf</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest">LEED</span>
                </a>
            </nav>
        </div>
    );
}
