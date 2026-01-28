import { Pressable, Text, View } from "react-native";

import { useI18n } from "@/hooks/useI18n";

export default function ProfileScreen() {
  const { t } = useI18n();

  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <View className="flex-1 px-6 pt-8">
        {/* Avatar and name */}
        <View className="items-center">
          <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
            <Text className="text-4xl">👤</Text>
          </View>
          <Text className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {t("screens.profile.displayName")}
          </Text>
          <Text className="mt-1 text-base text-slate-500 dark:text-slate-400">
            {t("screens.profile.rolePlaceholder")}
          </Text>
        </View>

        {/* Options */}
        <View className="mt-8 gap-3">
          <Pressable className="flex-row items-center rounded-xl bg-slate-100 px-4 py-4 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700">
            <Text className="mr-3 text-xl">⚙️</Text>
            <Text className="flex-1 text-base font-medium text-slate-700 dark:text-slate-200">
              {t("screens.profile.settings")}
            </Text>
            <Text className="text-slate-400">›</Text>
          </Pressable>

          <Pressable className="flex-row items-center rounded-xl bg-red-50 px-4 py-4 active:bg-red-100 dark:bg-red-900/20 dark:active:bg-red-900/30">
            <Text className="mr-3 text-xl">🚪</Text>
            <Text className="text-base font-medium text-red-600 dark:text-red-400">
              {t("screens.profile.logout")}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
