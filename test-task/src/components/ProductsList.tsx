import { useTranslation } from 'react-i18next';
import { useProducts } from '../hooks/useProducts';
import { useAppStore } from '../store/useAppStore';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { t } = useTranslation();

  const { data: products, isError, isLoading } = useProducts();

  const searchQuery = useAppStore((store) => store.searchQuery);

  const filtered = products?.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return <div>{t('loading')}</div>;
  }
  if (isError) {
    return <div>{t('error')}</div>;
  }

  return (
    <div>
      {filtered?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
