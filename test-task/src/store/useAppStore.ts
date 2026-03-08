import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  lang: 'ru' | 'en';
  toggleTheme: () => void;
  toggleLang: (lang: 'ru') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Начальные значения
      theme: 'light',
      lang: 'ru',

      // Переключение темы
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // Переключение языка
      toggleLang: () =>
        set((state) => ({
          lang: state.lang === 'ru' ? 'en' : 'ru',
        })),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
