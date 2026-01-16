# EMS App

A production-ready Expo (React Native) application built with TypeScript and Expo Router, configured for EAS cloud builds.

## Tech Stack

- **Expo SDK 52** - React Native framework
- **TypeScript** - Type-safe development
- **Expo Router 4** - File-based navigation
- **Supabase** - Authentication and backend
- **EAS Build** - Cloud-based build service

## Project Structure

```
emsapp/
├── app/                        # Expo Router pages
│   ├── (auth)/                # Unauthenticated routes
│   │   ├── _layout.tsx       # Auth layout with redirects
│   │   └── login.tsx         # Login screen
│   ├── (protected)/          # Protected routes
│   │   ├── _layout.tsx       # Protected layout with auth guards
│   │   └── index.tsx         # Home screen (protected)
│   ├── _layout.tsx           # Root layout
│   └── index.tsx             # Entry point with auth redirect
├── contexts/                 # React contexts
│   └── AuthContext.tsx      # Authentication context
├── lib/                      # Utilities
│   └── supabase.ts          # Supabase client configuration
├── assets/                   # Image assets
├── .env.example             # Environment variables template
├── app.json                 # Expo configuration
├── eas.json                 # EAS Build configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
└── babel.config.js          # Babel configuration
```

## Supabase Setup

This app uses Supabase for authentication. Follow these steps to configure it:

### 1. Create a Supabase Project

1. Go to https://app.supabase.com
2. Create a new project
3. Wait for the project to finish setting up

### 2. Configure Environment Variables

The app requires two environment variables from your Supabase project:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Get your Supabase credentials:
   - Go to your Supabase project settings
   - Navigate to **Settings > API**
   - Copy the **Project URL** (EXPO_PUBLIC_SUPABASE_URL)
   - Copy the **anon/public key** (EXPO_PUBLIC_SUPABASE_ANON_KEY)

3. Update your `.env` file with these values

### 3. Configure Environment Variables for EAS Build

For cloud builds with EAS, add your environment variables to EAS:

```bash
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_URL --value "your-project-url"
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value "your-anon-key"
```

Or add them through the Expo dashboard:
1. Go to https://expo.dev
2. Select your project
3. Navigate to **Secrets**
4. Add both environment variables

### 4. Enable Email Authentication in Supabase

1. In your Supabase project, go to **Authentication > Providers**
2. Enable **Email** provider
3. Configure email templates if needed (optional)

### Authentication Features

The app supports two authentication methods:

- **Email + Password**: Traditional sign up and sign in
- **Magic Link (OTP)**: Passwordless authentication via email

Users can toggle between these methods on the login screen.

## Getting Started with EAS Cloud Builds

This project is designed to be built entirely in the cloud using Expo Application Services (EAS).

### Prerequisites

1. Create an Expo account at https://expo.dev
2. Install EAS CLI globally (on your local machine or CI/CD):
   ```bash
   npm install -g eas-cli
   ```

### Setup Steps

1. **Link this repository to Expo**
   ```bash
   eas login
   eas init
   ```
   This will create a project in your Expo account and update `app.json` with your project ID.

2. **Configure builds**
   The project includes three build profiles in `eas.json`:
   - `development` - Development builds with debug tools
   - `preview` - Internal testing builds
   - `production` - Production-ready builds

3. **Run your first build**

   For Android APK (preview):
   ```bash
   eas build --platform android --profile preview
   ```

   For iOS (preview):
   ```bash
   eas build --platform ios --profile preview
   ```

   For production builds:
   ```bash
   eas build --platform all --profile production
   ```

4. **View build status**
   - Builds run entirely in the cloud
   - Monitor progress at https://expo.dev
   - Download completed builds from the Expo dashboard

### Running the App Locally (Optional)

If you want to run the app locally for development:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Use Expo Go app on your phone or run on a simulator

### EAS Update (Optional)

To push JavaScript updates without rebuilding:

```bash
eas update --branch production --message "Your update message"
```

## App Configuration

Key configuration files:

- **app.json** - Expo and EAS settings, bundle identifiers, app metadata
- **eas.json** - Build profiles and submission settings
- **package.json** - Dependencies and scripts

### Important Notes

- Bundle identifiers in `app.json`:
  - iOS: `com.emsapp.app`
  - Android: `com.emsapp.app`
- Update these if you need different identifiers

## Assets

Place the following assets in the `assets/` directory:
- `icon.png` (1024x1024px)
- `splash.png` (1284x2778px)
- `adaptive-icon.png` (1024x1024px)
- `favicon.png` (48x48px)

Expo will use default placeholders if these are not provided.

## Documentation

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)

## License

Proprietary
