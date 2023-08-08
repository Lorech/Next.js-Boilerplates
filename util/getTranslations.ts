/*eslint import/namespace: ['error', { allowComputed: true }]*/
import { MessageFormatElement } from 'react-intl';

import * as localizations from '@intl';

function getTranslationFile(
  locale: string,
): Record<string, string> | Record<string, MessageFormatElement[]> | undefined {
  return localizations[locale];
}

export default function getTranslations(
  locale: string,
  defaultLocale?: string,
): Record<string, string> | Record<string, MessageFormatElement[]> | undefined {
  const country = locale.split('-')[0];
  const region = locale.split('-')[1];

  // Attempt to get the most specific translation file possible based on the current locale.
  return (
    getTranslationFile(locale) || // Exact match of the current locale.
    (region && getTranslationFile(region)) || // Translations that match the requested region.
    getTranslationFile(country) || // Translations that match the requested country.
    (defaultLocale && getTranslationFile(defaultLocale)) || // Translations for the default locale.
    {} // No translations, use defaultMessage.
  );
}
