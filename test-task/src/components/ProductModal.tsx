import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore';
import { useEffect } from 'react';

export const ProductModal = () => {
  const { t } = useTranslation();
  const selectedProduct = useAppStore((store) => store.selectedProduct);
  const setProduct = useAppStore((store) => store.setProduct);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProduct(null);
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setProduct]);

  if (!selectedProduct) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={() => setProduct(null)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-xl bg-white p-4 shadow-xl transition-all duration-300 sm:max-w-lg sm:p-6 md:max-w-4xl"
      >
        <button
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black"
          onClick={() => setProduct(null)}
        >
          X
        </button>

        {/* Весь контент */}
        <div className="grid grid-cols-1 gap-6 min-[768px]:grid-cols-2">
          {/* картинка */}
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="overflow-hidden rounded-lg bg-gray-100"
            />
          </div>

          {/* Текст */}
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <small className="text-xs tracking-wide text-gray-500 uppercase">{selectedProduct.category}</small>

              <h2 className="text-lg leading-snug font-semibold">{selectedProduct.title}</h2>

              <p className="text-sm leading-relaxed text-gray-600">{selectedProduct.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">{selectedProduct.price.toLocaleString()} ₽</span>

              <button className="rounded-lg bg-gray-600 px-9 py-2 text-sm font-medium text-white transition hover:bg-gray-400">
                {t('buy')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
