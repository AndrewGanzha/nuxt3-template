// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/fonts", "@nuxt/image", "nuxt-typed-router"],
  fonts: [{ name: "Montseratt", provider: "google" }],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_vars.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
