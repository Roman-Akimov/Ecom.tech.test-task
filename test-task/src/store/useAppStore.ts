import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '../types/product';
export type { Product } from '../types/product';

interface AppState {
  theme: 'light' | 'dark';
  lang: 'ru' | 'en';
  searchQuery: string;
  selectedProduct: Product | null;
  toggleTheme: () => void;
  toggleLang: (lang: 'ru') => void;
  setSearchQuery: (query: string) => void;
  setProduct: (product: Product | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      lang: 'ru',
      searchQuery: '',
      selectedProduct: null,

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      toggleLang: () =>
        set((state) => ({
          lang: state.lang === 'ru' ? 'en' : 'ru',
        })),

      setSearchQuery: (query) => set({ searchQuery: query }),

      setProduct: (product) =>
        set({
          selectedProduct: product,
        }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        lang: state.lang,
      }),
    }
  )
);
