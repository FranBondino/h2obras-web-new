import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md">
            <div className="flex justify-between items-center px-8 py-4 max-w-[1920px] mx-auto">
                <Link to="/" className="text-2xl font-black tracking-tighter text-cyan-950 dark:text-white font-headline">
                    H2O OBRAS
                </Link>
                <nav className="hidden md:flex gap-8 items-center">
                    <Link to="/" className="font-['Space_Grotesk'] font-bold uppercase tracking-tight text-sm text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400 pb-1">
                        Empresa
                    </Link>
                    <Link to="/portfolio" className="font-['Space_Grotesk'] font-bold uppercase tracking-tight text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-950 dark:hover:text-white transition-colors">
                        Portfolio
                    </Link>
                    <Link to="/equipment" className="font-['Space_Grotesk'] font-bold uppercase tracking-tight text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-950 dark:hover:text-white transition-colors">
                        Equipamiento
                    </Link>
                    <Link to="/contact" className="font-['Space_Grotesk'] font-bold uppercase tracking-tight text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-950 dark:hover:text-white transition-colors">
                        Contacto
                    </Link>
                </nav>
                <Link to="/contact" className="bg-primary-container text-white px-6 py-2.5 rounded-sm font-headline font-bold text-xs uppercase tracking-widest scale-[0.98] active:scale-95 transition-transform">
                    Solicitar Factibilidad Técnica
                </Link>
            </div>
            <div className="bg-slate-200/20 dark:bg-slate-800/20 h-[1px] w-full"></div>
        </header>
    );
}
