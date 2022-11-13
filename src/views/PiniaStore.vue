<template>
  <div>
    <div>store count: {{ store.count }}</div>
    <div>store count doubled: {{ store.doubleCount }}</div>
    <button
      @click="store.increment()"
      class="text--primary btn-bg--primary border-0 btn m-r-000 m-t-000"
    >
      increment store
    </button>
    <button
      @click="store.reset()"
      class="text--secondary btn-bg--primary border-0 btn m-t-000"
    >
      reset store
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>
