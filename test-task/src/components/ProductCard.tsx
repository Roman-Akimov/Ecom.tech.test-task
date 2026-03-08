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
    <article onClick={handleOpenModal}>
      {/** Изображение */}
      <div>
        <img src={product.image} alt={product.title}></img>
      </div>
      {/** Контент */}
      <div>
        <header>
          <small>{product.category}</small>
          <h3>{product.title}</h3>
        </header>
        <footer>
          <span>{product.price.toLocaleString()} Р</span>
          <button onClick={handleBuyClick}>{t('buy')}</button>
        </footer>
      </div>
    </article>
  );
};
