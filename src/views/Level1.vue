<template>
<div class="container">
    <div class="columns">
        <h1 class="title">
            LEVEL 1
        </h1>
    </div>
    <!-- <div class="column">
        <img class="ladderImage" :src="ladderImage"/>
    </div> -->
    <div class="columns questionContainer">  
      <div class="column">
        <QuestionCard :question = question1 />
      </div>
      <div class="column">
        <QuestionCard :question = question2 />
      </div>
      <div class="column">
        <QuestionCard :question = question3 />
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard.vue'
import ladderImage from '../assets/ladder.png'
export default {
    data : function(){
        return {
            question1 : {
                number:"Question 1",
                instruction : "STUFF1"
            },
            question2 : {
                number:"Question 2",
                instruction : "STUFF2"
            },
            question3 : {
                number:"Question 3",
                instruction : "STUFF3"
            },
            ladderImage:ladderImage
        }
    },
 
    name: 'level1',
    components: {
        QuestionCard
    },
    methods:{
        start(){
        this.$router.push('level1')
    }
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
    color: #CD3F3E;
    font-size: 70px;
}
.ladderImage{
    
}
</style>