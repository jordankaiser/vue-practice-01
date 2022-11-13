<template>
  <div>
    <button
      @click="storeCount.increment()"
      class="text--primary btn-bg--primary border-0 btn m-r-000 m-t-000 hvr"
    >
      Increment from componentA.vue: {{ storeCount.count }}
    </button>
  </div>
</template>

<script setup>
import { storeCount } from "../../stores/compApiStore";
</script>
