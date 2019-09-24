<template>
<div class="container">
    <div class="columns">
        <h1 class="title">
            {{ this.userData.name }} : LEVEL 3
        </h1>
    </div>
    <!-- <div class="column">
        <img class="ladderImage" :src="ladderImage"/>
    </div> -->
    <div class="columns questionContainer">  
      <div class="column">
        <QuestionCard v-if="!userData.questions['5']" :question = finalQuestion />
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
            finalQuestion : {
                number:"Final Question",
                instruction : "Enter a +ve Integer"
            },
            ladderImage:ladderImage
        }
    },
    beforeMount(){
        let uid = localStorage.getItem('uid')
        firebaseApp.db.doc('users/'+uid).onSnapshot(snapshot=>{
            this.userData = snapshot.data()
            let questions = this.userData.questions
            if(!questions['1'] || !questions['2'] || !questions['3'] || !questions['4']  ){
                this.$router.push('level1')
            }
            if(this.userData.questions['5']){
                this.$router.push('finish')
            }
        })
        firebaseApp.db.doc('admin/controls').onSnapshot(snapshot=>{
            if(!snapshot.data().start){
                this.$router.push('home')
            }
        })
    },
    name: 'level3',
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