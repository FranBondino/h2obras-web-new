import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col font-body bg-surface text-on-surface">
            <Header />
            <main className="flex-1 pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
