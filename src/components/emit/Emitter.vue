<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue','checkboxChecked'])
</script>

<template>
  <div>
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
    >
    <label for="checkbox">checkbox</label>
    <input @click="$emit('checkboxChecked', $event.target.checked)" id="checkbox" type="checkbox">
  </div>
</template>
