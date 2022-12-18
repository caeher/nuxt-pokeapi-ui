<template>
  <div>
    <NuxtLayout>
      <ClientOnly>
        <NuxtPage />
      </ClientOnly>
    </NuxtLayout>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<style lang="postcss">
body {
  @apply dark:bg-slate-900;
}
</style>