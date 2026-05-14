import { getRequestConfig } from 'next-intl/server';

const locales = ['de', 'en'] as const;
const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: (typeof locales)[number] = requested && locales.includes(requested as (typeof locales)[number])
    ? (requested as (typeof locales)[number])
    : defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});