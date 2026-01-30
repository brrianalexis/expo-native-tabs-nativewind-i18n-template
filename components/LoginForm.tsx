import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import { useI18n } from "@/hooks/useI18n";
import { createLoginSchema, type LoginFormData } from "@/lib/schemas";

import { Button } from "./Button";
import { Input } from "./Input";

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const { t } = useI18n();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(createLoginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View className="gap-4">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label={t("screens.login.email_label")}
            placeholder={t("screens.login.email_placeholder")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label={t("screens.login.password_label")}
            placeholder={t("screens.login.password_placeholder")}
            secureTextEntry
            autoComplete="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.password?.message}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} disabled={isLoading} className="mt-2">
        {isLoading ? t("screens.login.submitting") : t("screens.login.submit")}
      </Button>
    </View>
  );
}
