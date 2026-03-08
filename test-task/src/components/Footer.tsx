import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto border-t transition-colors dark:bg-slate-100/40">
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-6">
        <div className="grid grid-cols-1 gap-10 min-[480px]:grid-cols-2">
          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-gray-400">{t('contacts')}</h4>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400"
                  href="mailto:roma_akimov_12@mail.ru"
                >
                  roma_akimov_12@mail.ru
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400"
                  href="https://t.me/purebloodedAryan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram: <span className="font-medium">@purebloodedAryan</span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400"
                  href="https://vk.com/akmromka"
                  target="_blank"
                  rel="noreferrer"
                >
                  VK: <span className="font-medium">@akmromka</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
