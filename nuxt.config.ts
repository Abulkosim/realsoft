// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  base: "/realsoft/",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
  modules: ["@vueuse/motion/nuxt"],
});
