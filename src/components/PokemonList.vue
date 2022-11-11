<script setup>
  const props = defineProps({
    pokemon: { type: Array, default: ['Mime'] }
  })
</script>

<template>
  <div>
    <ul>
      <li v-for="poke in pokemon" :key="poke">{{ poke }}</li>
    </ul>
  </div>
</template>
