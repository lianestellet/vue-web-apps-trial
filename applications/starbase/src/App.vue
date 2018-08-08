<template>
<div id="app">
  <h3>{{title}}</h3>
  <button class="btn btn-primary" @click="fetchCharacter">Test Fetch Character</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Generate your team'
    }
  },
  methods: {
    fetchCharacter() {
      fetch('http://swapi.co/api/people', {
        method: 'GET'
      }).then(response => response.json())
        .then(json => console.log(json))
    }
  }

}
</script>

<style scoped>

</style>
