<template>
<div class="container is-fluid">
    <div class="columns">
        <h1 class="title">
            {{ this.userData.name }} : LEVEL 2
        </h1>
    </div>
    <!-- <div class="column">
        <img class="ladderImage" :src="ladderImage"/>
    </div> -->
    <div class="columns questionContainer">  
      <div class="column">
        <QuestionCard v-if="!userData.questions['4']" :question = question4 />
        <AnsweredCard v-if="userData.questions['4']"/>
      </div>
      <div class="column">
        <QuestionCard v-if="!userData.questions['4']" :question = question5 />
        <AnsweredCard v-if="userData.questions['4']"/>
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
            question4 : {
                number:"Question 4",
                instruction : "Enter a +ve Integer below 1000"
            },
            question5 : {
                number:"Question 5",
                instruction : "Enter a String"
            },
            ladderImage:ladderImage
        }
    },
    beforeMount(){
        let uid = localStorage.getItem('uid')
        console.log(uid)
        firebaseApp.db.doc('users/'+uid).onSnapshot(snapshot=>{

            this.userData = snapshot.data()
            let questions = this.userData.questions
            if(!questions['1'] || !questions['2'] || !questions['3']){
                this.$router.push('level1')
            }
            if(questions['4']){
                this.$router.push('level3')
            }
        })
        firebaseApp.db.doc('admin/controls').onSnapshot(snapshot=>{
            if(!snapshot.data().start){
                this.$router.push('home')
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