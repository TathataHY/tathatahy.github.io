import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tathatahy.github.io",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
