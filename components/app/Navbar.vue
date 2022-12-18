<script lang="ts" setup>
import { appConfigurationData } from '~~/utils/app'

const isNavbarOpen = ref(false)
const { public: { iconSufix , website} } = useRuntimeConfig()

</script>
<template>

  <nav class="p-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img :src="`${website.prefix}/svgs/${appConfigurationData.icon}-${iconSufix}.svg`" class="h-6 mr-3 sm:h-10" alt="Pokeapi Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          {{ appConfigurationData.name }}
        </span>
      </a>
      <button @click="isNavbarOpen = !isNavbarOpen" v-click-outside="() => isNavbarOpen = false" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class=" w-full md:block md:w-auto" id="navbar-multi-level" :class="[{ 'hidden': !isNavbarOpen }]">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NuxtLink
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page" to="/">Home</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>

</style>
