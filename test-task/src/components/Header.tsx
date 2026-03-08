//import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore';
import { SearchBar } from './SearchBar';

export const Header = () => {
  //const { t } = useTranslation();
  const { theme, toggleTheme, lang, toggleLang } = useAppStore();

  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '20px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold' }}>Ecom.tech</div>

        <SearchBar />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={toggleLang}>{lang.toUpperCase()}</button>

          <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
        </div>
      </div>
    </header>
  );
};
