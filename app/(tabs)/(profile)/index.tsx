import { router } from "expo-router";
import { ScrollView, View } from "react-native";

import { Button, Typography } from "@/components";
import { useI18n } from "@/hooks/useI18n";
import { useAuthStore } from "@/stores";

export default function ProfileScreen() {
  const { t } = useI18n();
  const { user, logout } = useAuthStore();

  const displayName = user?.name || t("screens.profile.display_name");

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-slate-900"
      contentContainerClassName="p-4 gap-6"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View className="items-center gap-2">
        <View className="h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
          <Typography variant="h1">👤</Typography>
        </View>
        <Typography variant="h3" weight="bold">
          {displayName}
        </Typography>
        <Typography variant="body" color="text-slate-500 dark:text-slate-400">
          {user?.email || t("screens.profile.role_placeholder")}
        </Typography>
      </View>

      <View className="gap-3">
        <Button variant="secondary" onPress={() => router.push("/edit-username")}>
          ✏️ {t("screens.profile.edit_username")}
        </Button>

        <Button variant="secondary" onPress={() => undefined}>
          ⚙️ {t("screens.profile.settings")}
        </Button>

        <Button
          variant="ghost"
          className="bg-red-50 active:bg-red-100 dark:bg-red-900/20"
          onPress={logout}
        >
          <Typography color="text-red-600 dark:text-red-400" weight="semibold">
            🚪 {t("screens.profile.logout")}
          </Typography>
        </Button>
      </View>
    </ScrollView>
  );
}
