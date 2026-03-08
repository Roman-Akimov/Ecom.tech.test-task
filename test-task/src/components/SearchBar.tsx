import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { searchQuery, setSearchQuery } = useAppStore();

  return (
    <div className="group relative w-full max-w-md">
      <input
        className="w-full rounded-xl border border-black/10 bg-white/40 px-3 py-1.5 pr-8 text-sm text-slate-800 backdrop-blur-md transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-black/30 focus:bg-white/60 focus:ring-4 focus:ring-slate-900/5 sm:px-4 sm:py-2 sm:text-base"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('searchPlaceholder')}
      />

      {searchQuery && (
        <button
          className="hover:text-gray absolute top-1/2 right-3 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200/50 text-xs text-slate-500 transition-all duration-200 hover:bg-slate-900"
          onClick={() => setSearchQuery('')}
        >
          ✕
        </button>
      )}
    </div>
  );
};
