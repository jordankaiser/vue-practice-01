<template>
  <div>
    <p :class="['transition', classObject]">■|■|■ Lorem ipsum ■|■|■</p>
    <div class="grid-2">
      <button
        @click="setOrange"
        class="text--primary btn-bg--primary border-0 btn m-r-000 m-t-000"
      >
        Orange text
      </button>
      <button
        @click="setPurple"
        class="text--secondary btn-bg--primary border-0 btn m-t-000"
      >
        Purple text
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const classObject = reactive({
  "text--primary": true,
  "text--secondary": false,
});
const setOrange = () => {
  classObject["text--primary"] = true;
  classObject["text--secondary"] = false;
};
const setPurple = () => {
  classObject["text--primary"] = false;
  classObject["text--secondary"] = true;
};
</script>
