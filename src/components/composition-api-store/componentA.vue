<template>
  <div>
    <button @click="storeCount.increment()">
      From A: {{ storeCount.count }}
    </button>
  </div>
</template>

<script setup>
import { storeCount } from '../../stores/compApiStore'
</script>