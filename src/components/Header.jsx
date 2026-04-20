import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `font-headline font-bold uppercase tracking-tight text-sm transition-all duration-300 relative group px-2 ${isActive
            ? 'text-primary'
            : 'text-primary/60 hover:text-primary'
        }`;

    const mobileNavLinkClass = ({ isActive }) =>
        `block w-full py-4 px-8 font-headline font-bold uppercase tracking-tight text-sm border-b border-outline-variant/10 transition-colors ${isActive
            ? 'text-primary bg-primary/5'
            : 'text-on-surface/80 hover:bg-primary/5'
        }`;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 w-full z-50 machined-glass"
        >
            <div className="flex justify-between items-center px-6 md:px-12 h-28 max-w-[1920px] mx-auto">
                {/* Logo Section */}
                <Link to="/" className="flex items-center">
                    <div className="h-16 md:h-20 w-[300px] md:w-[500px] flex items-center justify-start overflow-hidden relative group">
                        <img
                            src="/h2obras-web-new/logoh2o_new.png"
                            alt="H2O Obras"
                            className="h-[350px] md:h-[400px] w-auto max-w-none object-contain absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 dark:brightness-0 dark:invert transition-all duration-500 group-hover:scale-105"
                            style={{ 
                                imageRendering: 'crisp-edges',
                                objectPosition: '0% 50%'
                            }}
                        />
                    </div>
                </Link>

                {/* Right Container */}
                <div className="flex items-center gap-8">
                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex gap-6 items-center">
                        <NavLink to="/" end className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    Empresa
                                    {isActive && <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/portfolio" className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    Portfolio
                                    {isActive && <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/equipment" className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    Equipamiento
                                    {isActive && <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    Contacto
                                    {isActive && <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />}
                                </>
                            )}
                        </NavLink>
                    </nav>

                    {/* Utils & CTA */}
                    <div className="hidden md:flex items-center gap-4 border-l border-outline-variant/20 pl-6 ml-2">
                        <ThemeToggle />
                        <Link
                            to="/contact"
                            className="bg-primary text-on-primary px-5 py-2 font-headline font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm hover:brightness-120 transition-all active:scale-95"
                        >
                            Solicitar Portal
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="flex xl:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
                        >
                            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`xl:hidden machined-glass overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Empresa</NavLink>
                <NavLink to="/portfolio" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
                <NavLink to="/equipment" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Equipamiento</NavLink>
                <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contacto</NavLink>
                <div className="p-8">
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block text-center bg-primary text-on-primary px-6 py-4 font-headline font-bold text-xs uppercase tracking-[0.2em] w-full"
                    >
                        Solicitar Presupuesto
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
