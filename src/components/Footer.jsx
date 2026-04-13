import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-slate-900 w-full border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <div className="h-16 md:h-24 overflow-hidden flex items-center justify-start">
                        <img
                            src="/h2obras-web-new/logoh2o_new.png"
                            alt="H2O Obras"
                            className="h-full w-auto object-contain dark:brightness-0 dark:invert transition-all scale-[3.5] transform origin-left"
                        />
                    </div>
                    <p className="font-['Inter'] text-xs tracking-wider leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs">
                        Sovereign Infrastructure Engineering. Proyectos complejos resueltos con precisión técnica y autonomía absoluta en todo el territorio nacional.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <h5 className="font-headline font-bold text-cyan-950 dark:text-white text-sm uppercase tracking-widest mb-2">Oficinas Centrales</h5>
                    <div className="space-y-2">
                        <p className="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs tracking-wider">
                            <span className="font-bold text-cyan-900 dark:text-cyan-100">Rosario:</span> Av. Pellegrini 1260
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs tracking-wider">
                            <span className="font-bold text-cyan-900 dark:text-cyan-100">CABA:</span> Austria 1951
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h5 className="font-headline font-bold text-cyan-950 dark:text-white text-sm uppercase tracking-widest mb-2">Legal &amp; Técnico</h5>
                    <nav className="flex flex-col gap-2">
                        <Link to="#" className="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs tracking-wider hover:text-cyan-600 dark:hover:text-cyan-300 underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Privacidad</Link>
                        <Link to="#" className="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs tracking-wider hover:text-cyan-600 dark:hover:text-cyan-300 underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Términos Técnicos</Link>
                        <Link to="#" className="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs tracking-wider hover:text-cyan-600 dark:hover:text-cyan-300 underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Certificaciones NFPA</Link>
                    </nav>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-12 pb-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="font-['Inter'] text-[10px] tracking-widest text-slate-400 uppercase">
                        © 2026 H2O OBRAS
                    </p>
                    <p className="font-['Inter'] text-[9px] tracking-[0.2em] text-slate-500/60 uppercase">
                        Desarrollado por <a href="https://funnagency.com" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors font-bold tracking-normal underline underline-offset-4 decoration-slate-400/30">FUNN Agency</a>
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-sm bg-cyan-950 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined text-white dark:text-cyan-950 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
                    </div>
                    <div className="w-8 h-8 rounded-sm bg-cyan-950 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined text-white dark:text-cyan-950 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                    </div>
                </div>
            </div>
        </footer >
    );
}
