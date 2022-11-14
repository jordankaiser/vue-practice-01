<template>
  <div>
    <button
      @click="storeCount.increment()"
      class="text--primary btn-bg--primary border-0 btn m-r-000 m-t-000"
    >
      Increment from Component A: {{ storeCount.count }}
    </button>
  </div>
</template>

<script setup>
import { storeCount } from "../../stores/compApiStore";
</script>
