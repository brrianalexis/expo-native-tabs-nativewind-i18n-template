import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";

// Get the user's preferred language from the device
const getDeviceLanguage = (): string => {
  const locales = getLocales();
  // Get the first locale's language code (e.g., "es", "en")
  const languageCode = locales[0]?.languageCode ?? "es";
  return languageCode;
};

// Supported languages
export const supportedLanguages = {
  es: { nativeName: "Español" },
  en: { nativeName: "English" },
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;

// Resources for each language
const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: "es",

  interpolation: {
    // React already protects from XSS
    escapeValue: false,
  },

  // Return key if translation is missing (useful for development)
  returnNull: false,
  returnEmptyString: false,
});

export default i18n;
