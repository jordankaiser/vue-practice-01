<template>
  <div>
    <component-a />
    <component-b />
    <p :class="['m-t-000', changeTextColor]">Text color change if count > 1</p>
    <button
      @click="storeCount.count = 0"
      class="text--secondary btn-bg--primary border-0 btn m-t-000 hvr"
    >
      Reset Count
    </button>
  </div>
</template>

<script setup>
import { storeCount } from "../stores/compApiStore";
import ComponentA from "../components/composition-api-store/componentA.vue";
import ComponentB from "../components/composition-api-store/componentB.vue";
import { computed } from "vue";

const changeTextColor = computed(() => {
  return {
    orange: storeCount.count > 1,
  };
});
</script>
