import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      searchPlaceholder: 'Поиск товаров...',
      buy: 'Купить',
      price: 'Цена',
      notFound: 'Товары не найдены',
      loading: 'Загрузка...',
      error: 'Ошибка',
      contacts: 'Контакты:',
      main_page: 'Главная страница',
      not_found: 'По вашему запросу ничего не найдено',
    },
  },
  en: {
    translation: {
      searchPlaceholder: 'Search products...',
      buy: 'Buy',
      price: 'Price',
      notFound: 'No products found',
      loading: 'Loading...',
      error: 'Error',
      contacts: 'Contacts:',
      main_page: 'Main page',
      not_found: 'Nothing was found for your query',
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
