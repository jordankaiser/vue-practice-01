<template>
  <div>
    <component-a />
    <component-b />
  </div>
</template>

<script setup>
import { storeCount } from '../stores/compApiStore'
import ComponentA from '../components/composition-api-store/componentA.vue';
import ComponentB from '../components/composition-api-store/componentB.vue';
</script>