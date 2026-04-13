import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const navLinkClass = ({ isActive }) =>
        `relative font-['Space_Grotesk'] font-bold uppercase tracking-widest text-xs transition-colors py-2 ${isActive
            ? 'text-on-tertiary-container '
            : 'text-outline  hover:text-cyan-950 :text-primary'
        }`;

    const mobileNavLinkClass = ({ isActive }) =>
        `block w-full py-5 px-8 font-['Space_Grotesk'] font-bold uppercase tracking-widest text-xs border-b border-slate-200/50  transition-colors ${isActive
            ? 'text-on-tertiary-container  bg-cyan-50/50 '
            : 'text-slate-700  hover:bg-slate-50 :bg-surface-container-low/50'
        }`;

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'machined-glass shadow-sm' : 'bg-transparent py-2'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1920px] mx-auto">
                <Link to="/" className="flex items-center -ml-4 md:ml-0 group">
                    <div className="h-14 md:h-16 w-48 md:w-64 overflow-hidden flex items-center justify-start relative">
                        <img
                            src="/h2obras-web-new/logoh2o_clean.png"
                            alt="H2O Obras"
                            className={`h-full w-auto object-contain scale-[3.5] transform origin-left transition-all duration-500 group-hover:scale-[3.6] ${scrolled ? '' : 'mix-blend-multiply  brightness-200  invert '}`}
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10 items-center">
                    {['', 'portfolio', 'equipment', 'contact'].map((path) => {
                        const labels = { '': 'Empresa', 'portfolio': 'Portfolio', 'equipment': 'Equipamiento', 'contact': 'Contacto' };
                        return (
                            <NavLink key={path} to={`/${path}`} end={path === ''} className={navLinkClass}>
                                {({ isActive }) => (
                                    <>
                                        {labels[path]}
                                        {isActive && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-container "
                                            />
                                        )}
                                        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-container/10/20  scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Desktop CTA */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden md:block">
                    <Link
                        to="/contact"
                        className="bg-primary-container  text-primary  px-8 py-3 rounded-none font-headline font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                    >
                        Factibilidad Técnica
                    </Link>
                </motion.div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5 focus:outline-none z-50 relative"
                >
                    <span className={`block w-6 h-[2px] ${scrolled || menuOpen ? 'bg-primary-container/10 ' : 'bg-primary-container/10 '} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`block w-6 h-[2px] ${scrolled || menuOpen ? 'bg-primary-container/10 ' : 'bg-primary-container/10 '} transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] ${scrolled || menuOpen ? 'bg-primary-container/10 ' : 'bg-primary-container/10 '} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden bg-white/95  backdrop-blur-xl overflow-hidden shadow-2xl absolute w-full"
                    >
                        <div className="flex flex-col pt-4 pb-8">
                            <NavLink to="/" end className={mobileNavLinkClass}>Empresa</NavLink>
                            <NavLink to="/portfolio" className={mobileNavLinkClass}>Portfolio</NavLink>
                            <NavLink to="/equipment" className={mobileNavLinkClass}>Equipamiento</NavLink>
                            <NavLink to="/contact" className={mobileNavLinkClass}>Contacto</NavLink>

                            <div className="px-8 mt-8">
                                <Link
                                    to="/contact"
                                    className="block text-center bg-primary-container  text-primary  px-6 py-4 font-headline font-bold text-xs uppercase tracking-widest w-full"
                                >
                                    Solicitar Factibilidad
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!scrolled && <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/20  to-transparent"></div>}
        </motion.header>
    );
}
