<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
    type: {
        type: String as PropType<string>,
        required: false,
        default: 'main'
    }
})
</script>

<template>
<span 
    class="text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
    :class="[type]">
    <slot />
</span>
</template>

<style scoped lang="postcss">
.main {
    @apply bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-200 dark:text-fuchsia-800;
}
.success {
    @apply bg-emerald-100 text-emerald-800 dark:bg-emerald-200 dark:text-emerald-800;
}
.info {
    @apply bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-800;
}
.danger {
    @apply bg-rose-100 text-rose-800 dark:bg-rose-200 dark:text-rose-800;
}
.warning {
    @apply bg-amber-100 text-amber-800 dark:bg-amber-200 dark:text-amber-800;
}
</style>
