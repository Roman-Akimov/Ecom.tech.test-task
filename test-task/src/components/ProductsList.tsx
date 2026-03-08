import { useTranslation } from 'react-i18next';
import { useProducts } from '../hooks/useProducts';
import { useAppStore } from '../store/useAppStore';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { t } = useTranslation();

  const { data: products, isError, isLoading } = useProducts();

  const searchQuery = useAppStore((store) => store.searchQuery);

  const uniqueProducts = Array.from(new Map(products?.map((item) => [item.id, item])).values());

  const filtered = uniqueProducts.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return <div>{t('loading')}</div>;
  }
  if (isError) {
    return <div>{t('error')}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-10 min-[480px]:grid-cols-2 min-[768px]:grid-cols-4">
      {filtered?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
