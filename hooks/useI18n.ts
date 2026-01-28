import { useLocales } from "expo-localization";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import i18n, { type SupportedLanguage, supportedLanguages } from "@/i18n";

/**
 * Custom hook that extends react-i18next's useTranslation
 * with additional utilities for language management
 */
export function useI18n() {
  const { t, i18n: i18nInstance } = useTranslation();
  const deviceLocales = useLocales();

  const currentLanguage = i18nInstance.language as SupportedLanguage;

  const changeLanguage = useCallback(
    async (language: SupportedLanguage) => {
      await i18nInstance.changeLanguage(language);
    },
    [i18nInstance]
  );

  const isRTL = deviceLocales[0]?.textDirection === "rtl";

  return {
    t,
    i18n: i18nInstance,
    currentLanguage,
    changeLanguage,
    supportedLanguages,
    isRTL,
    deviceLocales,
  };
}

export { i18n };
