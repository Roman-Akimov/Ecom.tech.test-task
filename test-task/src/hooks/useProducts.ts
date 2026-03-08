import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'], // Ключ для кеша
    queryFn: getProducts, // функция запроса
  });
};
