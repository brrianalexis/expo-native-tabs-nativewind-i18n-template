import "@/i18n";
import "react-native-reanimated";
import "../global.css";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { QueryProvider } from "@/providers";

const isStorybook = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  if (isStorybook) {
    const StorybookUI = require("../.rnstorybook").default;

    return <StorybookUI />;
  }

  return (
    <QueryProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </QueryProvider>
  );
}
