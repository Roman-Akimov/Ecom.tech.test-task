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
    return (
      <div className="flex h-64 items-center justify-center font-medium text-slate-500">
        <div className="animate-pulse">{t('loading')}...</div>
      </div>
    );
  }

  if (isError) {
    return <div className="flex h-64 items-center justify-center font-medium text-red-400">{t('error')}</div>;
  }

  return (
    <section className="container mx-auto px-6 py-5">
      <div className="mb-5 text-center md:mb-10">
        <h1 className="text-lg md:text-3xl">{t('main_page')}</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
        {filtered?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex h-64 items-center justify-center text-slate-500">{t('not_found')}</div>
      )}
    </section>
  );
};
