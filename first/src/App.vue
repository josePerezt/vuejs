<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";

// export default {
//   name: "app",
//   components: {
//     NavBar,
//     ContadorFav,
//   },
// };
</script>

<style scoped>
.container_app {
  width: 100%;
  height: 100vh;
}
</style>
