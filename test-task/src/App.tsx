import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductModal } from './components/ProductModal';
import { ProductList } from './components/ProductsList';
import { useAppStore } from './store/useAppStore';

export function App() {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ProductList />
        </main>
        <Footer />
        <ProductModal />
      </div>
    </div>
  );
}
