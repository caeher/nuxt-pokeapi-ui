<script lang="ts" setup>
import { socialNetwork } from '~~/utils/social-networks';
import { footer } from '~~/utils/footer';
import IWebsite from '~~/ts/interfaces/Website'
const {public: {website, iconSufix}} = useRuntimeConfig()

</script>
<template>

  <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img :src="`/svgs/${website.icon}-${iconSufix}.svg`" class="mr-3 h-8" :alt="`${website.name} Logo`" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ website.name }}</span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <template v-for="item in footer" >
          <AppMenuVertical :data="item"/>
        </template>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/"
          class="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
      <AppSocialNetworksRow :data="socialNetwork" />
    </div>
  </footer>

</template>

<style scoped>

</style>
