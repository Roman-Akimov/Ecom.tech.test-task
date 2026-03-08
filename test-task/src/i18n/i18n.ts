import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      searchPlaceholder: 'Поиск товаров...',
      buy: 'Купить',
      price: 'Цена',
      notFound: 'Товары не найдены',
      close: 'Закрыть',
      category: 'Категория',
      loading: 'Загрузка...',
      error: 'Ошибка',
      contacts: 'Контакты:',
      main_page: 'Главная страница',
    },
  },
  en: {
    translation: {
      searchPlaceholder: 'Search products...',
      buy: 'Buy',
      price: 'Price',
      notFound: 'No products found',
      close: 'Close',
      category: 'Category',
      loading: 'Loading...',
      error: 'Error',
      contacts: 'Contacts:',
      main_page: 'Main page',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
