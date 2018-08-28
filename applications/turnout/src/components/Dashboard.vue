<template>
    <div>
        Dashboard Component {{$store.state}}

        <button class="btn btn-danger btn-sm signout-btn" @click="signOut">SignOut</button>
    </div>
</template>

<script>
import { firebaseApp } from './../firebaseApp.js'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}
</script>

<style>
.signout-btn {
  position: absolute;
  text-align: right;
  top: 60px;
  right: 40px;
}
</style>