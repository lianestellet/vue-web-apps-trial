<template>
    <div class="from-inline">
        <h3>Sign in</h3>
        <div class="form-group">
            <input 
                type="text"
                placeholder="email"
                class="form-control"
                v-model="email"
            />
            <input 
                type="password"
                placeholder="password"
                class="form-control"
                v-model="password"
            />
            <button class="btn btn-primary" @click="signIn">
                Sign in
            </button>
        </div>
        <br>
        <p class="text-danger">{{error.message}}</p>
        <br>
        <pre>
            {{error}}
        </pre>
    </div>
    
</template>


<script>
import { firebaseApp } from './../firebaseApp.js'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      console.log('click')
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
