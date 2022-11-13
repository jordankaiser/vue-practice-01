<template>
  <div>
    <div>store count: {{ store.count }}</div>
    <div>store count doubled: {{ store.doubleCount }}</div>
    <button @click="store.increment()">increment store</button>
    <button @click="store.reset()">reset store</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>
