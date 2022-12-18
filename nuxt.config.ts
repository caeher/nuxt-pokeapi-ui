import { appConfigurationData } from "./utils/app"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            pokeApi: 'https://pokeapi.co/api/v2',
            // pokeSvg: 'https://veekun.com/dex/media/pokemon/dream-world',
            pokeSvg: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home',
            iconSufix: 'svgrepo-com',
            website: appConfigurationData
        }
    },
    routeRules: {
        '/**': { cors: true }
    },
    plugins: [
        '~/plugins/clickOutside.ts'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config'
    },
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        classPrefix: '',
        classSuffix: '',
    },
    app: {
        rootId: 'crisanto',
        baseURL: '/nuxt-pokeapi-ui/',
        buildAssetsDir: '/spa/'
    },
    experimental: {
        payloadExtraction: false
    }
})
