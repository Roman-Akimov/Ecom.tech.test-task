import { useAppStore } from '../store/useAppStore';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const { theme, toggleTheme, lang, toggleLang } = useAppStore();

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <img src="ecom.png" alt="Ecom.tech Logo" className="h-5 min-[480px]:h-6 min-[768px]:h-8" />

        <SearchBar />

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="rounded-lg bg-white/40 px-3 py-1 text-sm font-medium backdrop-blur-md transition hover:bg-white/60"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-lg bg-white/40 px-3 py-1 text-sm backdrop-blur-md transition hover:bg-white/60"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};
