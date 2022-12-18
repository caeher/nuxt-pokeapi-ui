import { appConfigurationData } from "./utils/app"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,
    typescript: {
        strict: false,
    },
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
    buildModules: [
        '@nuxt/image'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config'
    },
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    }
})
