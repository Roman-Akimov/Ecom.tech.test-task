import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductModal } from './components/ProductModal';
import { ProductList } from './components/ProductsList';

export function App() {
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
