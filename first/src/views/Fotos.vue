<script setup>
const fotos = [1, 2, 3];
</script>
<template>
  <div class="container_photo">
    <h1>GALERIA DE FOTOS:</h1>
    <RouterLink
      :to="{ name: 'foto', params: { id: items } }"
      v-for="(items, index) of fotos"
      :key="index"
    >
      <button>Foto {{ items }}</button>
    </RouterLink>
  </div>
</template>
<style scoped>
.container_photo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  color: #fff;
}
</style>
