<template>
  <div>
    <p class="m-t-000">Async data: <pre v-if="asyncData !== ''" class="inline code">{{ asyncData }}</pre></p>
    <button @click="getAsyncData" class="text--primary btn-bg--primary border-0 btn m-t-000">Get async data</button>
    <p class="m-t-000">Async data returns after 2 seconds.</p>
    <button @click="asyncData = ''" class="text--secondary btn-bg--primary border-0 btn m-t-000">Reset async data</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const asyncData = ref('');
const fakeAPI = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('api data');
    }, 2000);
  });
}
const getAsyncData = async () => {
  const result = await fakeAPI();
  asyncData.value = result
}
</script>