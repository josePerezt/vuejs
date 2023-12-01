<script setup></script>

<template>
  <div class="container">
    <div class="container_title">
      <img src="@/assets/logo.svg" />
      <RouterLink to="/" class="logo">
        <h1>VUE</h1>
      </RouterLink>
    </div>

    <ul class="container_list">
      <RouterLink to="/" class="li">Home</RouterLink>
      <RouterLink to="/about" class="li">About</RouterLink>
      <RouterLink to="/counter" class="li">Counter</RouterLink>
      <RouterLink to="/fotos" class="li">Galeria</RouterLink>
    </ul>
  </div>
</template>

<style scoped>
.container {
  /* border: thin solid red; */
  display: flex;
  background-color: rgb(0, 255, 170);
  gap: 10px;
  justify-content: space-around;
  width: 100%;
  height: 50px;
}
.logo {
  text-decoration: none;
  color: rgb(0, 153, 255);
}
.logo:hover {
  color: rgb(0, 100, 255);
}
.container_title {
  /* border: thin solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(0, 153, 255);
  gap: 8px;
}
img {
  width: 30px;
  height: 30px;
}
.container_list {
  /* border: thin solid green; */
  list-style-type: none;
  /* text-decoration: none; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(0, 153, 255);
  width: 250px;
}
.li {
  text-decoration: none;
  color: rgb(0, 153, 255);
}

.li:hover {
  color: rgb(0, 100, 255);
}

/* .li:active, */
.li:focus {
  text-decoration: dotted;
  color: blue;
}
</style>
