import type { Preview } from "@storybook/react";
import { View } from "react-native";

const preview: Preview = {
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 16,
        }}
      >
        <Story />
      </View>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1e293b" },
      ],
    },
  },
};

export default preview;
