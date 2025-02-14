import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "myexpoplayground",
  slug: "myexpoplayground",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  splash: {
    image: "./assets/images/splash-icon.png",
    backgroundColor: "#ffffff",
  },
  scheme: "myexpoplayground",
  ios: {
    bundleIdentifier: "com.acunap.myexpoplayground",
    supportsTablet: true,
  },
  android: {
    package: "com.acunap.myexpoplayground",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    output: "server",
  },
  plugins: ["expo-router"],
  newArchEnabled: true,
  experiments: {
    typedRoutes: true,
  },
});
