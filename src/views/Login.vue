<template>
<div class="columns">
  <div class="column">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <Button class="button" @click.native="login" text="Login"></Button>
  </div>
  <h1 @click="login">HEy</h1>
  
</div>

</template>
<script>
import Button from '@/components/Button.vue'
import firebase from 'firebase'
import firebaseApp from '../firebaseConfig'
export default {
  name: 'login',
  components: {
    Button
  },
  methods:{
    login(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebaseApp.auth.signInWithPopup(provider)
      .then(snapshot=>{
        let user = snapshot.user
        return firebaseApp.db.doc("users/"+ user.uid).set({
          name : user.displayName,
          level1 : {
            q1:false,
            q2:false,
            q3:false
          },
          level2 : {
            q1:false,
            q2:false
          },
          level3 : {
            q1:false
          }
        })
      })
      .then(()=>{
          this.$router.push('home')
      })
    }
  }
}

</script>
