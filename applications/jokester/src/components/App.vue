<template>
  <div id="app">
      <h3>Got Jokes?</h3>
      <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add a Joke</button>
      <br>
      <br>
      <div class="col-md-12">
        <Joke
          v-for="(joke, index) in $store.state.jokes"
          v-bind:key="index"
          :joke="joke"
          :index="index"
        />
      </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>

