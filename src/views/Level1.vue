<template>
<div class="container is-fluid">
    <div class="columns">
        <h1 class="title">
            {{ this.userData.name }} | LEVEL 1 | Score : {{points}}
        </h1>
    </div>
    <!-- <div class="column">
        <img class="ladderImage" :src="ladderImage"/>
    </div> -->
    <div class="columns questionContainer">  
      <div class="column">
        <QuestionCard v-if="!userData.questions['1']" :question = question1 />
        <AnsweredCard v-if="userData.questions['1']"/>
      </div>
      <div class="column">
        <QuestionCard v-if="!userData.questions['2']" :question = question2 />
        <AnsweredCard v-if="userData.questions['2']"/>
      </div>
      <div class="column">
        <QuestionCard v-if="!userData.questions['3']" :question = question3 />
        <AnsweredCard v-if="userData.questions['3']"/>
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
                instruction : "Enter a +ve integer"
            },
            question2 : {
                number:"Question 2",
                instruction : "Enter a +ve below 1000"
            },
            question3 : {
                number:"Question 3",
                instruction : "Enter a String (No Spaces)"
            },
            points:0
        }
    },
    beforeMount(){
        let uid = localStorage.getItem('uid')
        console.log(uid)
        firebaseApp.db.doc('users/'+uid).onSnapshot(snapshot=>{
            this.userData = snapshot.data()
            let points = 0
                Object.keys(this.userData.points).forEach(key=>{
                    if(this.userData.points[key])
                    points = points + 50
                })
            this.points = points
            if(this.userData.questions['1'] && this.userData.questions['2'] && this.userData.questions['3']){
                this.$router.push('level2')
            }
        })
        firebaseApp.db.doc('admin/controls').onSnapshot(snapshot=>{
            if(!snapshot.data().start){
                this.$router.push('home')
            }
        })
    },
    name: 'level1',
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