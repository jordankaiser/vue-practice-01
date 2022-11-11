<script setup>
import { ref } from 'vue';
import Emitter from '../components/emit/Emitter.vue';

const searchText = ref('');

const handleCheck = (isChecked) => {
  checked.value = isChecked
}

const checked = ref(false);

const blah = () => {
  return 'blah123 assdf'
}
</script>

<template>
  <div>
    <p><strong>Emitted text</strong>: {{ searchText }}</p>
    <p><strong>Checkbox checked</strong>: {{ checked }}</p>
    <p>{{ blah() }}</p>
    <Emitter v-model="searchText" @checkbox-checked="handleCheck" />
  </div>
</template>
