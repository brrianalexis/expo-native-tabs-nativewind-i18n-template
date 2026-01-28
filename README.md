# Expo Template – Native Tabs, NativeWind, i18n

A starter mobile app built with [Expo](https://expo.dev) and React Native. Includes Expo Router with native tabs, NativeWind, and i18n. Clone this repo to kick off new projects without repeating the same setup.

## Getting Started

## Using This Template

1. Clone the repository.
2. Run `bun install`.
3. Update `name`, `slug`, and `scheme` in `app.json`, and `name` in `package.json`, for your app.
4. Replace app icons and splash in `assets/images/` and adjust `app.json` branding as needed.
5. On GitHub you can use **Use this template** to create a new repo from this project.

## Project Structure

```
├── app/                  # App routes (file-based routing with expo-router)
│   ├── (tabs)/           # Tab navigation screens
│   │   ├── _layout.tsx   # Tab bar configuration
│   │   ├── index.tsx     # Home
│   │   ├── explore.tsx   # Explore
│   │   └── profile.tsx   # Profile
│   ├── _layout.tsx       # Root layout configuration
│   ├── modal.tsx         # Modal screen
│   └── +not-found.tsx    # 404 screen
├── assets/               # Static assets (images, fonts)
├── components/           # Reusable UI components
├── constants/            # App constants and configuration
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization setup
│   ├── index.ts          # i18n configuration
│   └── locales/          # Translation files (en, es)
├── global.css            # Global styles with Tailwind
└── app.json              # Expo configuration
```

## Available Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `bun start`        | Start the Expo development server                |
| `bun ios`          | Run on iOS Simulator                             |
| `bun android`      | Run on Android Emulator                          |
| `bun web`          | Run in the web browser                           |
| `bun type-check`   | Run TypeScript compiler in check-only mode       |
| `bun lint`         | Run ESLint                                       |
| `bun lint:fix`     | Run ESLint with auto-fix                         |
| `bun format`       | Format code with Prettier                        |
| `bun format:check` | Check code formatting                            |
| `bun validate`     | Run type-check, lint:fix, and format in sequence |

## Tech Stack

- **Framework**: [Expo SDK 54](https://expo.dev)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Styling**: [NativeWind](https://www.nativewind.dev/)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Internationalization**: [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) + [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- **Language**: TypeScript
- **Linting**: ESLint + Prettier

## Internationalization (i18n)

The app supports multiple languages using `i18next` and `react-i18next`. Example translation files are in `i18n/locales/`:

- `en.json` – English
- `es.json` – Spanish

The app detects the device locale via `expo-localization`.

## Styling with NativeWind

This project uses [NativeWind](https://www.nativewind.dev/) v5, which brings Tailwind CSS to React Native. Use Tailwind utility classes in your components:

```tsx
<View className="flex-1 items-center justify-center bg-white dark:bg-black">
  <Text className="text-xl font-bold text-gray-900 dark:text-white">Hello World</Text>
</View>
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [i18next Documentation](https://www.i18next.com/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)

## License

MIT
