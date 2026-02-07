import { Text } from "react-native";

type TypographyVariant = "h1" | "h2" | "h3" | "body" | "caption" | "label";
type TypographyWeight = "normal" | "medium" | "semibold" | "bold";

interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  className?: string;
  color?: string;
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl",
  h2: "text-2xl",
  h3: "text-xl",
  body: "text-base",
  caption: "text-sm",
  label: "text-xs uppercase tracking-wide",
};

const weightClasses: Record<TypographyWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const defaultWeights: Record<TypographyVariant, TypographyWeight> = {
  h1: "bold",
  h2: "semibold",
  h3: "semibold",
  body: "normal",
  caption: "normal",
  label: "medium",
};

export function Typography({
  children,
  variant = "body",
  weight,
  className = "",
  color,
}: TypographyProps) {
  const resolvedWeight = weight ?? defaultWeights[variant];
  const colorClass = color ?? "text-slate-900 dark:text-slate-100";

  return (
    <Text
      className={`${variantClasses[variant]} ${weightClasses[resolvedWeight]} ${colorClass} ${className}`}
    >
      {children}
    </Text>
  );
}
