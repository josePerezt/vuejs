<script setup>
import { computed, ref } from "vue";

const numFav = ref(0);
const fav = ref([]);
const numInput = ref("");
const aumentar = () => numFav.value++;
const disminuir = () => numFav.value--;
const reset = () => (numFav.value = 0);

const agregar = () => fav.value.push(numFav.value);

const disable = () =>
  fav.value.includes(numFav.value) || fav.value.includes(numInput.value)
    ? true
    : false;

const classDisabled = computed(() => (disable() ? "disabled" : "btn"));

const classColorNum = computed(() => {
  const { value } = numFav;
  if (value === 0) return "neutro";
  else if (value > 0) return "mayor";
  else return "menor";
});

const colorNumFav = (num) => {
  if (Math.sign(num) === 0) return "neutro";
  else if (Math.sign(num) === -1) return "menor";
  else return "mayor";
};

const clear = () => {
  if (fav.value.length === 0) return true;
  fav.value = [];
  reset();
};

const numAdd = () => {
  if (fav.value.includes(numInput.value)) {
    numInput.value = "";
    return alert("El numero ya existe");
  }
  fav.value.push(numInput.value);
  numInput.value = "";
};
</script>

<template>
  <div class="container">
    <h1>Contador con VUE</h1>

    <div class="containerCounter">
      <h2>Agregar Favoritos</h2>

      <input
        type="text"
        placeholder="Ingresa tu numero favorito"
        v-model.number="numInput"
        @keyup.enter="numAdd"
      />
      <h3>
        Numero: <span :class="classColorNum">{{ numFav }}</span>
      </h3>
      <div class="container_button">
        <button class="btn" @click="aumentar">Aumentar</button>
        <button class="btn" @click="disminuir">Disminuir</button>
        <button class="btn" @click="reset">Reset</button>
        <button :class="classDisabled" @click="agregar" :disabled="disable()">
          Agregar
        </button>
        <button class="btn" @click="clear">elimiar</button>
      </div>
      <ul class="containerFav">
        <li v-for="(num, index) in fav" :key="index">
          <span class="start">⭐</span
          ><span :class="colorNumFav(num)">{{ num }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  border-radius: 8px;
  border: thin solid rgb(0, 153, 255);
  background-color: beige;
  font-weight: bold;
  color: rgb(81, 83, 85);
  padding: 8px;
  margin: 10px 0;
}
input:focus {
  border-color: rgb(0, 47, 255);
  outline: none;
}
h1 {
  margin: 15px 0;
  color: rgb(0, 153, 255);
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.containerCounter {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  width: 80%;
  box-shadow: 2px 4px 10px 4px rgb(0, 174, 255);
  margin: 30px;
}
h2 {
  color: rgb(34, 175, 175);
  margin: 5px 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.container_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 350px;
  height: 50px;
}
.btn {
  height: 30px;
  background-color: rgb(34, 175, 175);
  border-color: rgb(26, 212, 150);
  border-radius: 8px;
  font-weight: bold;
  padding: 5px;
  color: #fff;
  cursor: pointer;
}
.disabled {
  height: 30px;
  background-color: rgb(86, 87, 87);
  border-color: rgb(106, 107, 107);
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

.containerFav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  width: 350px;
  gap: 8px;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}
.start {
  cursor: pointer;
  font-size: 15px;
}
h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(34, 175, 175);
}

.mayor {
  color: rgb(0, 65, 0);
}
.menor {
  color: red;
}
.neutro {
  color: orange;
}
</style>
