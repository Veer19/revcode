<template>
<div class="container">
    <div class="columns">
        <h1 class="title">
            LEVEL 2
        </h1>
    </div>
    <!-- <div class="column">
        <img class="ladderImage" :src="ladderImage"/>
    </div> -->
    <div class="columns questionContainer">  
      <div class="column">
        <QuestionCard v-if="!userData.level2.q1" :question = question1 />
        <AnsweredCard v-if="userData.level2.q1"/>
      </div>
      <div class="column">
        <QuestionCard v-if="!userData.level2.q2" :question = question2 />
        <AnsweredCard v-if="userData.level2.q2"/>
      </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import firebaseApp from '../firebaseConfig'
import QuestionCard from '@/components/QuestionCard.vue'
import AnsweredCard from '@/components/AnsweredCard.vue'
import ladderImage from '../assets/ladder.png'
export default {
    data : function(){
        return {
            userData : {},
            question1 : {
                number:"Question 1",
                instruction : "STUFF1"
            },
            question2 : {
                number:"Question 2",
                instruction : "STUFF2"
            },
            ladderImage:ladderImage
        }
    },
    beforeMount(){
        let uid = localStorage.getItem('uid')
        console.log(uid)
        firebaseApp.db.doc('users/'+uid).onSnapshot(snapshot=>{
            this.userData = snapshot.data()
            if(this.userData.level2.q1 || this.userData.level2.q2){
                this.$router.push('level3')
            }
        })
    },
    name: 'level2',
    components: {
        QuestionCard,
        AnsweredCard
    },
    methods:{

    }
  }

</script>
<style scoped>
.columns{
    background: #1d1d1d;
    padding: 50px;
}
.questionContainer {
    margin-top: -100px;
}
.title{
    padding: 60px;
    background: #1d1d1d;
    width: 100%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    color: #A32A29;
    font-size: 70px;
}
.ladderImage{
    
}
</style>