import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `font-['Space_Grotesk'] font-bold uppercase tracking-tight text-sm transition-colors ${isActive
            ? 'text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400 pb-1'
            : 'text-slate-600 dark:text-slate-400 hover:text-cyan-950 dark:hover:text-white'
        }`;

    const mobileNavLinkClass = ({ isActive }) =>
        `block w-full py-4 px-6 font-['Space_Grotesk'] font-bold uppercase tracking-tight text-sm border-b border-slate-200 dark:border-slate-800 transition-colors ${isActive
            ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/20'
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
        }`;

    return (
        <header className="fixed top-0 w-full z-50 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md">
            <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-[1920px] mx-auto">
                <Link to="/" className="flex items-center -ml-4 md:ml-0">
                    <div className="h-16 md:h-24 w-64 md:w-96 overflow-hidden flex items-center justify-start md:justify-center">
                        <img
                            src="/h2obras-web-new/logoh2o_clean.png"
                            alt="H2O Obras"
                            className="h-full w-auto object-contain mix-blend-multiply scale-[3.5] transform origin-left md:origin-center"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <NavLink to="/" end className={navLinkClass}>Empresa</NavLink>
                    <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
                    <NavLink to="/equipment" className={navLinkClass}>Equipamiento</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contacto</NavLink>
                </nav>

                {/* Desktop CTA */}
                <Link
                    to="/contact"
                    className="hidden md:block bg-primary-container text-white px-6 py-2.5 rounded-sm font-headline font-bold text-xs uppercase tracking-widest scale-[0.98] active:scale-95 transition-transform"
                >
                    Solicitar Factibilidad Técnica
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
                >
                    <span className={`block w-6 h-0.5 bg-cyan-950 dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-cyan-950 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-cyan-950 dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden bg-slate-50 dark:bg-slate-950 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Empresa</NavLink>
                <NavLink to="/portfolio" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
                <NavLink to="/equipment" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Equipamiento</NavLink>
                <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contacto</NavLink>
                <div className="p-4">
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block text-center bg-primary-container text-white px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest w-full"
                    >
                        Solicitar Factibilidad Técnica
                    </Link>
                </div>
            </div>

            <div className="bg-slate-200/20 dark:bg-slate-800/20 h-[1px] w-full"></div>
        </header>
    );
}
