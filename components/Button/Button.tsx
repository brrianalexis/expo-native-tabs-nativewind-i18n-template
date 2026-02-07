import { Pressable, Text } from "react-native";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  accessibilityLabel?: string;
}

const variantClasses: Record<ButtonVariant, { container: string; text: string }> = {
  primary: {
    container: "bg-blue-600 active:bg-blue-700 dark:bg-blue-500 dark:active:bg-blue-600",
    text: "text-white",
  },
  secondary: {
    container: "bg-slate-200 active:bg-slate-300 dark:bg-slate-700 dark:active:bg-slate-600",
    text: "text-slate-900 dark:text-slate-100",
  },
  outline: {
    container:
      "bg-transparent active:bg-blue-50 dark:active:bg-blue-950 border-2 border-blue-600 dark:border-blue-400",
    text: "text-blue-600 dark:text-blue-400",
  },
  ghost: {
    container: "bg-transparent active:bg-slate-100 dark:active:bg-slate-800",
    text: "text-slate-900 dark:text-slate-100",
  },
};

const sizeClasses: Record<ButtonSize, { container: string; text: string }> = {
  sm: { container: "px-3 py-2 rounded-lg", text: "text-sm" },
  md: { container: "px-4 py-3 rounded-xl", text: "text-base" },
  lg: { container: "px-6 py-4 rounded-xl", text: "text-lg" },
};

export function Button({
  children,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  accessibilityLabel,
}: ButtonProps) {
  const variantStyle = variantClasses[variant];
  const sizeStyle = sizeClasses[size];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      className={`items-center justify-center ${sizeStyle.container} ${variantStyle.container} ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <Text className={`font-semibold ${sizeStyle.text} ${variantStyle.text}`}>{children}</Text>
    </Pressable>
  );
}
