import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <div>
          {/* Контакты */}
          <div>
            <h4>{t('contacts')}</h4>

            <ul>
              <li>
                <a href="mailto:roma_akimov_12@mail.ru">roma_akimov_12@mail.ru</a>
              </li>
              <li>
                <a href="https://t.me/purebloodedAryan" target="_blank" rel="noreferrer">
                  Telegram: @purebloodedAryan
                </a>
              </li>
              <li>
                <a href="https://vk.com/akmromka" target="_blank" rel="noreferrer">
                  VK: @akmromka
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
