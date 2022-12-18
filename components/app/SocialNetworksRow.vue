<script lang="ts" setup>
import { PropType } from "vue";
import ISocialNetworksItem from "~~/ts/interfaces/SocialNetworkItem";
const props = defineProps({
  data: {
    type: Object as PropType<ISocialNetworksItem[]>,
    required: true
  }
})

const {public: {iconSufix, website}} = useRuntimeConfig()
</script>
<template>
  <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <a 
      v-for="item in data"
      href="#" 
      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
      <img 
        :src="`${website.prefix}/svgs/${item.icon}-${iconSufix}.svg`" 
        :alt="`${item.name} icon`"
        class="w-5 h-5"/>
      <span class="sr-only">
        {{ item.name }}
      </span>
    </a>
  </div>
</template>
