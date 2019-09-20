<template>
  <div class="questionCard">
    <div>
      <h1 class="title">{{ question.number }}</h1>
      <br>
      <h2>Enter Input</h2>
      <br>
      <div v-if="question.number == 'Final Question'" class="columns is-centered">
        <div class="column">
          <input class="inputField" type="text" v-model="finalInput.inputValue1" :placeholder="question.instruction">
        </div>
        <div class="column">
          <input class="inputField" type="text" v-model="finalInput.inputValue2" :placeholder="question.instruction">
        </div>
        <div class="column">
          <input class="inputField" type="text" v-model="finalInput.inputValue3" :placeholder="question.instruction">
        </div>
        <br>
      </div>
      <input v-else class="inputField" type="text" v-model="inputValue" :placeholder="question.instruction">
      <br>
      <br>
      <h2>Output : {{outputValue}}</h2>
      <br>
      <br>
      <br>
      <Button text="Get Output" @click.native="getOutput" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'QuestionCard',
  data: function(){
    return {
      inputValue: "",
      finalInput : {
        inputValue1 : '',
        inputValue2 : '',
        inputValue3 : ''
      },
      outputValue:""
    }
  },
  components: {
    Button
  },
  props: {
    question:{
      number:String,
      instruction:String
    }
  },
  methods:{
    outputFunction1(){
      let input = this.inputValue
      
      //CODE FOR QUESTION 1
      let answer = input
      return answer
    },
    outputFunction2(){
      let input = this.inputValue
      
      //CODE FOR QUESTION 2
      let answer = input
      return answer
    },
    outputFunction3(){
      let input = this.inputValue
      
      //CODE FOR QUESTION 3
      let answer = input
      return answer
    },
    outputFunction4(){
      let input = this.inputValue
      
      //CODE FOR QUESTION 4
      let answer = input
      return answer
    },
    outputFunction5(){
      let input = this.inputValue
      
      //CODE FOR QUESTION 5
      let answer = input
      return answer
    },
    outputFunction6(){
      let input1 = this.finalInput.inputValue1
      let input2 = this.finalInput.inputValue2
      let input3 = this.finalInput.inputValue3
      
      //CODE FOR QUESTION 6
      let answer = input1 + input2 + input3
      return answer
    },
    getOutput(){
      if(this.question.number == "Question 1")
        this.outputValue = this.outputFunction1()
      else if(this.question.number == "Question 2")
        this.outputValue = this.outputFunction2()
      else if(this.question.number == "Question 3")
        this.outputValue = this.outputFunction3()
      else if(this.question.number == "Question 4")
        this.outputValue = this.outputFunction4()
      else if(this.question.number == "Question 5")
        this.outputValue = this.outputFunction5()
      else if(this.question.number == "Final Question")
        this.outputValue = this.outputFunction6()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questionCard{
  text-align: center;
  padding: 50px;
  color: white;
  background: #1d1d1d;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.inputField{
  padding: 20px;
  font-size: 110%;
  background: #1d1d1d;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px #A32A29 solid;
  color: whitesmoke;
}
.button{
  border: none;
}
.title{
    padding: 30px;
    background: #1d1d1d;
    width: 100%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    color: whitesmoke;
}

</style>
