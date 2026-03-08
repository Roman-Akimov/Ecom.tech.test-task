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

  if (!selectedProduct) {
    return null;
  }

  return (
    <div onClick={() => setProduct(null)}>
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setProduct(null)}>X</button>
        <div>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <div>
            <small>{selectedProduct.category}</small>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
          </div>

          <div>
            <span>{selectedProduct.price.toLocaleString()}</span>
            <button>{t('buy')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
