import { Stack } from "expo-router/stack";

import { useI18n } from "@/hooks/useI18n";

export default function HomeLayout() {
  const { t } = useI18n();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: t("tabs.home"), headerLargeTitle: true }} />
    </Stack>
  );
}
