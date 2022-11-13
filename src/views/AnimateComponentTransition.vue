<template>
  <div>
    <div>
      <button
        @click="toggleComponent('component-a')"
        class="text--primary btn-bg--primary border-0 btn m-r-000 m-t-000 hvr"
      >
        Component A
      </button>
      <button
        @click="toggleComponent('component-b')"
        class="text--secondary btn-bg--primary border-0 btn m-t-000 hvr"
      >
        Component B
      </button>
    </div>
    <Transition @enter="onEnter" @leave="onLeave" mode="out-in" :css="false">
      <component :is="activeComponent"></component>
    </Transition>
    <hr />
    <h1>Parent component</h1>
    <p>
      Bibendum iaculis conubia leo ultricies ligula cum nunc, metus justo eros
      curae dui integer, sodales fringilla congue tortor dignissim commodo.
      Inceptos purus litora nulla aliquet commodo, aptent scelerisque cras
      lectus suspendisse duis, dictumst magna velit turpis. In nibh dis interdum
      tincidunt condimentum dui fames taciti adipiscing, faucibus ac himenaeos
      tempus eu eros dolor lectus sollicitudin, elit luctus sodales curabitur
      posuere massa ridiculus bibendum
    </p>
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
    .fromTo(el, { height: "0px" }, { height: "auto", duration: 0.5 })
    .fromTo(
      el.querySelector("h1"),
      { opacity: 0 },
      { opacity: 1, duration: 0.25 },
      "->=0.4"
    )
    .fromTo(
      el.querySelector("p"),
      { opacity: 0 },
      { opacity: 1, duration: 0.25 }
    );
}

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el, done) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  const tl = gsap
    .timeline({ onComplete: done })
    .fromTo(
      el.querySelector("p"),
      { opacity: 1 },
      { opacity: 0, duration: 0.25 }
    )
    .fromTo(
      el.querySelector("h1"),
      { opacity: 1 },
      { opacity: 0, duration: 0.25 }
    )
    .to(el, { height: "0px", duration: 0.5 }, "->=0.2");
}
</script>
