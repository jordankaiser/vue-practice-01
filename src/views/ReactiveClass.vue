<template>
  <div>
    <p :class="classObject">Lorem ipsum</p>
    <button @click="setOrange" class="orange">Orange text</button>
    <button @click="setPurple" class="purple">Purple text</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const classObject = reactive({
  orange: true,
  purple: false,
});
const setOrange = () => {
  classObject.orange = true;
  classObject.purple = false;
};
const setPurple = () => {
  classObject.orange = false;
  classObject.purple = true;
};
</script>
