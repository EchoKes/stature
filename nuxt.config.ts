// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      titleTemplate: "%s - Stature Real Estate",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Stature Real Estate - Your trusted partner in property management and real estate services.",
        },
        { name: "author", content: "Stature Real Estate" },
        { property: "og:title", content: "Stature Real Estate" },
        {
          property: "og:description",
          content:
            "Stature Real Estate - Your trusted partner in property management and real estate services.",
        },
        { property: "og:image", content: "/images/stature-logo.png" },
        { property: "og:url", content: "https://stature.com.sg" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-gtag",
  ],
  site: {
    name: "Stature Real Estate",
    url: "https://stature.com.sg",
  },
  gtag: {
    id: "G-PBLR8FRX2W",
  },
});
