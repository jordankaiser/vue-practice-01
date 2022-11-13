<template>
  <div>
    <component :is="activeComponent"></component>
    <div>
      <button @click="toggleComponent('component-a')">Component A</button>
      <button @click="toggleComponent('component-b')">Component B</button>
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";
import ComponentA from "../components/animate-component-transition/ComponentA.vue";
import ComponentB from "../components/animate-component-transition/ComponentB.vue";

// Using shallow ref because the argument is a component.
const activeComponent = shallowRef(ComponentA);

const toggleComponent = (component) => {
  switch (component) {
    case "component-a":
      activeComponent.value = ComponentA;
      break;
    case "component-b":
      activeComponent.value = ComponentB;
      break;
  }
};
</script>
