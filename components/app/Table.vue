<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
  header: {
    type: Array as PropType<string[]>,
    required: true
  },
  body: {
    type: Object as PropType<object[]>,
    required: true
  }
})

</script>
<template>

  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th 
            v-for="(h, index) of header"
            :key="index"
            scope="col" 
            class="py-3 px-6">
            {{ h }}
          </th>

        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(item, index) of body"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

          <td v-for="value of Object.values(item)" 
            class="py-4 px-6 capitalize">
            {{ value }}
          </td>
         
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>
