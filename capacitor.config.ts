import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'infusions-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
