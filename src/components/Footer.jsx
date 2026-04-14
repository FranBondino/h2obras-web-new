import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-surface border-t-4 border-primary w-full">
            {/* Main grid */}
            <div className="px-8 md:px-20 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="md:col-span-1 flex flex-col gap-4">
                    <div className="h-12 overflow-hidden flex items-center justify-start">
                        <img
                            src="/h2obras-web-new/logoh2o_new.png"
                            alt="H2O Obras"
                            className="h-full w-auto object-contain scale-[3.5] transform origin-left dark:brightness-0 dark:invert"
                        />
                    </div>
                    <p className="text-secondary text-sm font-body leading-relaxed max-w-[240px] mt-2">
                        Desde el 2009 aportando soluciones de ingeniería hidráulica y civil.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-3">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary/50 mb-3">Secciones</h5>
                    {[
                        { label: 'Empresa', to: '/' },
                        { label: 'Portfolio', to: '/portfolio' },
                        { label: 'Equipamiento', to: '/equipment' },
                        { label: 'Contacto', to: '/contact' },
                    ].map(link => (
                        <Link key={link.to} to={link.to} className="text-secondary text-sm font-body hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary/50 mb-3">Especialidades</h5>
                    {['Sanitarias & Gas', 'Contra Incendio', 'Termodinámica', 'LEED Platinum'].map(item => (
                        <span key={item} className="text-secondary text-sm font-body">{item}</span>
                    ))}
                </div>

                {/* Offices */}
                <div className="flex flex-col gap-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary/50 mb-3">Oficinas</h5>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-secondary/50 mb-1">Rosario</p>
                        <p className="text-sm text-secondary font-body">Av. Pellegrini 1260</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-secondary/50 mb-1">CABA</p>
                        <p className="text-sm text-secondary font-body">Austria 1951</p>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="px-8 md:px-20 py-5 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-3">
                <p className="text-secondary/60 text-xs uppercase tracking-widest font-body">
                    © 2026 H2O OBRAS
                </p>
                <p className="text-secondary/50 text-xs font-body">
                    NFPA · LEED Platinum · Sello FM/UL · Desarrollado por{' '}
                    <a
                        href="https://funnagency.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/70 font-bold transition-colors"
                    >
                        FUNN Agency
                    </a>
                </p>
            </div>
        </footer>
    );
}
