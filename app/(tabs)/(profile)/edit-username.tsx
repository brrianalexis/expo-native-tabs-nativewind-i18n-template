import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, ScrollView, View } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { useI18n } from "@/hooks/useI18n";
import { createUsernameSchema, type UsernameFormData } from "@/lib/schemas";
import { useAuthStore } from "@/stores";

export default function EditUsernameScreen() {
  const { t } = useI18n();
  const { user, login } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UsernameFormData>({
    resolver: zodResolver(createUsernameSchema(t)),
    defaultValues: {
      username: user?.name ?? "",
    },
  });

  const onSubmit = (data: UsernameFormData) => {
    login({
      id: user?.id ?? "1",
      email: user?.email ?? "user@example.com",
      name: data.username,
    });

    Alert.alert(t("common.done"), t("screens.profile.edit_username_description"), [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-slate-900"
      contentContainerClassName="p-4 gap-6"
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
    >
      <Typography variant="body" color="text-slate-500 dark:text-slate-400">
        {t("screens.profile.edit_username_description")}
      </Typography>

      <View className="gap-4">
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={t("screens.profile.username")}
              placeholder={t("screens.profile.username_placeholder")}
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel={t("screens.profile.username")}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.username?.message}
            />
          )}
        />

        <View className="mt-4 gap-3">
          <Button onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
            {isSubmitting ? t("common.loading") : t("common.save")}
          </Button>
          <Button variant="ghost" onPress={() => router.back()}>
            {t("common.cancel")}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
