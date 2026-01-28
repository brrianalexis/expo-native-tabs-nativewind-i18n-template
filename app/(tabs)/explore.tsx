import { Text, View } from "react-native";

import { useI18n } from "@/hooks/useI18n";

export default function ExploreScreen() {
  const { t } = useI18n();

  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <View className="flex-1 items-center justify-center px-6">
        <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
          <Text className="text-4xl">🔍</Text>
        </View>
        <Text className="text-center text-xl font-semibold text-slate-800 dark:text-slate-100">
          {t("screens.explore.title")}
        </Text>
        <Text className="mt-2 text-center text-base text-slate-500 dark:text-slate-400">
          {t("screens.explore.empty")}
        </Text>
      </View>
    </View>
  );
}
