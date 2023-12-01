<script setup>
const name = "Jose Miguel";
let active = ref(true);
const frutas = ["🍓", "🍐", "🍑", "🍅", "🍆"];
const dataFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
  },
];
const counter = ref(0);

const handlerActive = () => {
  console.log(`Hiciste click en boton ACTIVAR`);
  active.value = true;
};

const handlerInactive = () => {
  console.log(`Hiciste click en boton DESACTIVAR`);
  active.value = false;
};

const state = computed(() => {
  if (active.value === true) return "active";
  else return "inactive";
});

const handlerAumentar = () => counter.value++;

const handlerDisminuir = () => counter.value--;

const handlerReset = () => (counter.value = 0);

//se puede hacer un metodo pero elcputd se guarda en el cache.
const classCounter = computed(() => {
  if (counter.value === 0) return "neutro";
  else if (counter.value > 0) return "mayor";
  else return "menor";
});
</script>
<template>
  <h3 :class="state">
    {{ active ? "Estoy activo" : "Estoy inactivo" }}
  </h3>
  <!-- <h3 v-show="active" class="show">Estoy Activo</h3> -->
  <button v-on:click="handlerActive">ACTIVAR</button>
  <button @click="handlerInactive">DESACTIVAR</button>
  <!-- <h3 v-if="active === true">Estoy activo</h3>
  <h3 v-else-if="active === false">Estoy inactivo</h3> -->
  <!-- <h3 v-else>Estoy indeciso</h3> -->
  <hr />

  <ul>
    <li v-for="(fruta, index) in frutas" :key="index">
      Posicion {{ index }} = {{ fruta }}
    </li>
  </ul>
  <hr />
  <hr />

  <ul>
    <li v-for="({ name, description, price }, index) in dataFrutas" :key="name">
      {{ index }} - {{ name }} - Precio = {{ price }} > {{ description }}
    </li>
  </ul>
  <hr />

  <hr />

  <ul>
    <template
      v-for="({ name, description, price }, index) in dataFrutas"
      :key="name"
    >
      <li v-if="price >= '$2.00'">
        {{ index }} - {{ name }} - {{ description }}
      </li>
    </template>
  </ul>
  <hr />

  <hr />
  <h1>Contador</h1>
  <h2 :class="classCounter">{{ counter }}</h2>
  <button @click="handlerAumentar">AUMENTAR</button>
  <button @click="handlerDisminuir">DISMINUIR</button>
  <button @click="handlerReset">RESET</button>
  <hr />
  <hr />
  <hr />
  <hr />
</template>

<style>
.active {
  color: green;
}

.inactive {
  color: red;
}

.show {
  color: blue;
}
</style>
