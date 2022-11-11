<script setup>
import PokemonList from '../components/PokemonList.vue';
import { ref } from 'vue';
const pokemon = ref(['Pickachu', 'Charizard', 'Bulbasaur']);

const inputValue = ref('');

const pokemonInput = ref(null);

const addPokemon = () => {
  pokemon.value.push(pokemonInput.value.value);
  inputValue.value = '';
}

</script>

<template>
  <div>
    <PokemonList :pokemon="pokemon" />
    <input id="text" type="text" v-model="inputValue" ref="pokemonInput">
    <button @click="addPokemon">Add pokemon</button>
  </div>
</template>
