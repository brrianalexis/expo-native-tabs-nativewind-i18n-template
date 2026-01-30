import { ScrollView, View } from "react-native";

import { Button, Typography } from "@/components";
import { useI18n } from "@/hooks/useI18n";

export default function ProfileScreen() {
  const { t } = useI18n();

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-slate-900"
      contentContainerClassName="px-4 pt-4"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="items-center">
        <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
          <Typography variant="h1">👤</Typography>
        </View>
        <Typography variant="h3" weight="bold">
          {t("screens.profile.displayName")}
        </Typography>
        <Typography variant="body" color="text-slate-500 dark:text-slate-400" className="mt-1">
          {t("screens.profile.rolePlaceholder")}
        </Typography>
      </View>

      <View className="mt-8 gap-3">
        <Button variant="secondary" onPress={() => undefined}>
          ⚙️ {t("screens.profile.settings")}
        </Button>
        <Button
          variant="ghost"
          className="bg-red-50 active:bg-red-100 dark:bg-red-900/20"
          onPress={() => undefined}
        >
          <Typography color="text-red-600 dark:text-red-400" weight="semibold">
            🚪 {t("screens.profile.logout")}
          </Typography>
        </Button>
      </View>
    </ScrollView>
  );
}
