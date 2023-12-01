<script setup>
import router from "../router";
const handlerBack = () => {
  router.push("/fotos");
};
</script>
<template>
  <div class="container">
    <h2>Fotografia numero: {{ $route.params.id }}</h2>
    <button @click="handlerBack">Galeria</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}
</style>
