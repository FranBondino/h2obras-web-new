import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="group relative w-12 h-6 rounded-full bg-surface-container-low border border-outline-variant flex items-center px-1 transition-all duration-300 hover:bg-surface-container-high focus:outline-none"
            aria-label="Toggle theme"
        >
            <motion.div
                animate={{ x: isDark ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shadow-sm"
            >
                {isDark ? (
                    <span className="material-symbols-outlined text-[10px] text-on-primary">dark_mode</span>
                ) : (
                    <span className="material-symbols-outlined text-[10px] text-on-primary">light_mode</span>
                )}
            </motion.div>
        </button>
    );
}
