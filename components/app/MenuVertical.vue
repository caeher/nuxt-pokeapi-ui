<script lang="ts" setup>
import { PropType } from 'vue';
import IListUrlItem  from '~~/ts/interfaces/ListUrlItem'
const props = defineProps({
  data: {
    type: Object as PropType<IListUrlItem>,
    required: true
  }
})
</script>
<template>
  <div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {{ data.name }}
    </h2>
    <ul class="text-gray-600 dark:text-gray-400">
      <li
        v-for="item in data.links" 
        class="mb-4">
        <a :href="item.url" class="hover:underline">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

