<template>
  <div>
    <Transition @enter="onEnter" @leave="onLeave" mode="out-in" :css="false">
      <component :is="activeComponent"></component>
    </Transition>
    <div>
      <button @click="toggleComponent('component-a')">Component A</button>
      <button @click="toggleComponent('component-b')">Component B</button>
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";
import ComponentA from "../components/animate-component-transition/ComponentA.vue";
import ComponentB from "../components/animate-component-transition/ComponentB.vue";
import { gsap } from "gsap";

// Using shallow ref because the argument is a component.
const activeComponent = shallowRef(ComponentA);

const toggleComponent = (component) => {
  switch (component) {
    case "component-a":
      activeComponent.value = ComponentA;
      break;
    case "component-b":
      activeComponent.value = ComponentB;
      break;
  }
};

// called one frame after the element is inserted.
// use this to start the entering animation.
function onEnter(el, done) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS

  const tl = gsap
    .timeline({ onComplete: done })
    .fromTo(el, { height: "0px" }, { height: "auto", duration: 1.5 });
}

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el, done) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  const tl = gsap
    .timeline({ onComplete: done })
    .to(el, { height: "0px", duration: 1.5 });
}
</script>
