import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore';
import type { Product } from '../types/product';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  const setProduct = useAppStore((state) => state.setProduct);
  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handleOpenModal = () => {
    setProduct(product);
  };

  return (
    <article
      className="rounded-xl border border-gray-200 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md"
      onClick={handleOpenModal}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-white/50 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
        ></img>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <header>
          <small className="text-xs text-gray-500">{product.category}</small>

          <h3 className="text-sm font-semibold">{product.title}</h3>
        </header>
        <footer className="mt-4 flex items-center justify-between pt-2">
          <span className="text-base font-bold text-slate-900">{product.price.toLocaleString()} Руб</span>

          <button onClick={handleBuyClick} className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-200">
            {t('buy')}
          </button>
        </footer>
      </div>
    </article>
  );
};
