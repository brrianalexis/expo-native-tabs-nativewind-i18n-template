# Expo Template – Native Tabs, NativeWind, i18n

A starter mobile app built with [Expo](https://expo.dev) and React Native. Includes Expo Router with native tabs, NativeWind, i18n, Zustand for state management, React Query for data fetching, and Zod for form validation. Clone this repo to kick off new projects without repeating the same setup.

## Using This Template

1. Clone the repository.
2. Run `bun install`.
3. Update `name`, `slug`, and `scheme` in `app.json`, and `name` in `package.json`, for your app.
4. Replace app icons and splash in `assets/images/` and adjust `app.json` branding as needed.
5. On GitHub you can use **Use this template** to create a new repo from this project.

## Project Structure

```
├── app/                    # App routes (file-based routing with expo-router)
│   ├── (tabs)/             # Tab navigation screens
│   │   ├── (home)/         # Home tab stack
│   │   ├── (explore)/      # Explore tab stack
│   │   ├── (profile)/      # Profile tab stack
│   │   └── _layout.tsx     # Tab bar configuration
│   ├── _layout.tsx         # Root layout configuration
│   └── +not-found.tsx      # 404 screen
├── assets/                 # Static assets (images, fonts)
├── components/             # Reusable UI components
│   ├── Button.tsx          # Button component with variants
│   ├── Input.tsx           # Input component with validation
│   ├── Typography.tsx      # Typography component
│   └── LoginForm.tsx       # Example form with validation
├── hooks/                  # Custom React hooks
│   └── useI18n.ts          # i18n hook wrapper
├── i18n/                   # Internationalization setup
│   ├── index.ts            # i18n configuration
│   └── locales/            # Translation files (en, es)
├── lib/                    # Utilities and schemas
│   └── schemas.ts          # Zod validation schemas (i18n-ready)
├── providers/              # React context providers
│   └── query.tsx           # React Query provider
├── stores/                 # Zustand state stores
│   └── auth.ts             # Authentication store
├── global.css              # Global styles with Tailwind
└── app.json                # Expo configuration
```

## Available Scripts

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `bun start`      | Start the Expo development server          |
| `bun ios`        | Run on iOS Simulator                       |
| `bun android`    | Run on Android Emulator                    |
| `bun web`        | Run in the web browser                     |
| `bun type-check` | Run TypeScript compiler in check-only mode |
| `bun lint`       | Run Biome linter                           |
| `bun lint:fix`   | Run Biome linter with auto-fix             |
| `bun validate`   | Run type-check and lint:fix in sequence    |

## Tech Stack

- **Framework**: [Expo SDK 54](https://expo.dev)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) with native tabs
- **Styling**: [NativeWind v5](https://www.nativewind.dev/)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Internationalization**: [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) + [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Language**: TypeScript
- **Linting**: [Biome](https://biomejs.dev/)

## Internationalization (i18n)

The app supports multiple languages using `i18next` and `react-i18next`. Translation files are in `i18n/locales/`:

- `en.json` – English
- `es.json` – Spanish (default fallback)

The app detects the device locale via `expo-localization`.

### Translation Keys Convention

All translation keys use `snake_case` for consistency:

```json
{
  "screens": {
    "profile": {
      "edit_username": "Edit Username",
      "display_name": "User"
    }
  },
  "validation": {
    "username": {
      "min": "Username must be at least 3 characters"
    }
  }
}
```

### Internationalized Validation Schemas

Zod validation schemas are factory functions that receive the `t` function from i18next, allowing error messages to be translated:

```tsx
import { useI18n } from "@/hooks/useI18n";
import { createUsernameSchema } from "@/lib/schemas";

function MyComponent() {
  const { t } = useI18n();
  const schema = createUsernameSchema(t);
  // Use with react-hook-form's zodResolver
}
```

## Styling with NativeWind

This project uses [NativeWind](https://www.nativewind.dev/) v5, which brings Tailwind CSS to React Native. Use Tailwind utility classes in your components:

```tsx
<View className="flex-1 items-center justify-center bg-white dark:bg-black">
  <Text className="text-xl font-bold text-gray-900 dark:text-white">Hello World</Text>
</View>
```

## State Management with Zustand

The app uses Zustand for lightweight state management. Stores are in the `stores/` directory:

```tsx
import { useAuthStore } from "@/stores";

function MyComponent() {
  const { user, login, logout } = useAuthStore();
}
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [i18next Documentation](https://www.i18next.com/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Zod Documentation](https://zod.dev/)
- [Biome Documentation](https://biomejs.dev/)

## License

MIT
