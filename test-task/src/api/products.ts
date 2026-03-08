import type { Product } from '../types/product';
import { MOCK_PRODUCTS } from './mockData';

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    // Сделал имитацию задержки
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 800);
  });
};
