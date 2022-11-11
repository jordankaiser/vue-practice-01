<template>
  <div>
    <button @click="storeCount.increment()">
      From B: {{ storeCount.count }}
    </button>
  </div>
</template>

<script setup>
import { storeCount } from '../../stores/compApiStore'
</script>