import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

import { useI18n } from "@/hooks/useI18n";

export default function NotFoundScreen() {
  const { t } = useI18n();

  return (
    <>
      <Stack.Screen options={{ title: t("screens.not_found.title") }} />
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-slate-900">
        <Text className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {t("screens.not_found.description")}
        </Text>

        <Link href="/" className="mt-4 py-4">
          <Text className="text-sm text-blue-500">{t("screens.not_found.go_home")}</Text>
        </Link>
      </View>
    </>
  );
}
