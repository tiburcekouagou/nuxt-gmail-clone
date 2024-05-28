<template>
  <header class="flex items-center p-2">
    <div class="flex items-center gap-4 min-w-60">
      <Icon name="mdi:menu" class="w-6 h-6" />
      <img src="~/assets/img/logo_gmail.png">
    </div>
    <div class="relative flex-1">
      <input type="search" class="focus:border-none focus:outline-none focus:bg-white focus:shadow-md p-3 pl-10 bg-slate-100 rounded-full w-full max-w-[600px]" placeholder="Search mail" />
      <Icon name="ic:baseline-search" class="w-6 h-6 absolute left-2 top-[50%] -translate-y-[50%]" />
    </div>
    <div class="flex gap-2 md:gap-4">
      <Icon name="ph:question" class="w-6 h-6" />
      <Icon name="material-symbols-light:settings-outline" class="w-6 h-6" />
      <Icon name="ic:sharp-apps" class="w-6 h-6" />
      <Icon name="carbon:user-avatar-filled-alt" class="w-6 h-6" />
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style>

</style>