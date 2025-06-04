<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Registro from './views/Registro.vue'
</script>

<template>
  <div>
    <!-- <Registro></Registro> -->
    <!-- <RouterLink to="/Login">Login</RouterLink> -->
  </div>
  <!-- <div class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500">
    <h1 class="text-3xl font-bold text-black dark:text-white mb-4">Hello World</h1>
    <button @click="toggleDark()" class="bg-blue-500 text-white px-4 py-2 rounded">
      
    </button>
  </div> -->
  <RouterView />
</template>
