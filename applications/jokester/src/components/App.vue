<template>
  <div id="app">
      <h3>Got Jokes?</h3>
      <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
      <div class="">

      </div>

      {{$store.state}}
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'initJokes'
  ])
}
</script>

