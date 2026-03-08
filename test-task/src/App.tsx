import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductModal } from './components/ProductModal';
import { ProductList } from './components/ProductsList';
import { useAppStore } from './store/useAppStore';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation(); // управление переводами
  const theme = useAppStore((state) => state.theme);
  const lang = useAppStore((state) => state.lang); // текущий язык из стора

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="flex-1">
        <ProductList />
      </main>
      <Footer />
      <ProductModal />
    </div>
  );
}
