<script setup lang="ts">
import TheSidebar from './components/TheSidebar.vue';

</script>

<template>
   <div class="app-container">
    <div class="app-sidebar">
      <TheSidebar />
    </div>
    <main class="main">
    <router-view />
    </main>
   </div>
</template>

<style lang="scss">

  .main{
    margin-left: 255px;
  }

</style>
