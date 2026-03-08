import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { searchQuery, setSearchQuery } = useAppStore();
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder={t('searchPlaceholder')}
      ></input>
      {searchQuery && <button onClick={() => setSearchQuery('')}>X</button>}
    </div>
  );
};
