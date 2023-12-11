<script setup>
  import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
      <Sidebar />
  <main class="font-sans bg-secondary">
    <div class="flex-1 overflow-x-hidden overflow-y-auto p-4 m-5 md:ml-64">
      <h2 class="text-2xl font-semibold mb-4">Page Title?!</h2>
      <RouterView />

    </div>
  </main>
  
</template>

<style scoped>

</style>
