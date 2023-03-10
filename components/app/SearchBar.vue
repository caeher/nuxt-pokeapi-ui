<script lang="ts" setup>
import { PropType } from 'vue';
const emit = defineEmits(['selectChange', 'search', 'update:modelValue'])
const props = defineProps({
  label: String as PropType<string>,
  placeholder: String as PropType<string>,
  options: {
    type: Array<String>,
    required: true
  }, 
  modelValue: String || Number
})


const select = ref(props.options[0])
const isOpenDropdown = ref(false)

function onSelectChange(selected: string) {
  select.value = selected
  isOpenDropdown.value = false
  emit('selectChange', selected)
}
function onSearch() {
  emit('search')
}
function onEnter() {
  onSearch()
}
</script>

<template>

    <div class="flex relative">
      <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {{ label }}
      </label>
      <button 
        @click="isOpenDropdown = !isOpenDropdown"
        v-click-outside="() => isOpenDropdown = false"
        data-dropdown-toggle="dropdown"
        class="flex-shrink-0 z-10 capitalize inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button">{{ select }}
        <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div 
        v-if="isOpenDropdown"  
        class="z-50 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        data-popper-placement="top"
        style="position: absolute; inset: auto auto 0px 0px; margin: 0px;;">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
          <li 
            v-for="s in options"
            @click="onSelectChange(s)">
            <button type="button"
              class="inline-flex w-full capitalize px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              {{ s }}
            </button>
          </li>
        </ul>
      </div>
      <div class="relative w-full">
        <input 
          type="search" 
          id="search-dropdown"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value || '')"
          v-on:keyup.enter="onEnter"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          :placeholder="`${placeholder} ${select} (type a number)`" required />
        <button 
          type="submit"
          @click="onSearch"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>

</template>
