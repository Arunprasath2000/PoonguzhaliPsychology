import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "net.ramrajcotton.poonguzhali",
  appName: "Poonguzhali Psychology",
  webDir: "dist",
  android: {
    allowMixedContent: false,
  },
  plugins: {
    // 100% offline and self-contained. No network/server config.
  },
};

export default config;
