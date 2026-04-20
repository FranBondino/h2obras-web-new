import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col font-body bg-surface text-on-surface transition-colors duration-300 relative">
            {/* Global Institutional Texture */}
            <div className="grain-overlay"></div>
            
            <Header />
            <main className="flex-1 pt-20 overflow-x-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
