<template>
<div>
  <div class="info_card_1">
    <div class="header">
      <h1>About me</h1>
    </div>
    <font size=4>
    <b>Full name:</b> Terenteva Tatyana Alekseevna<br>
    <br><b>Group:</b> BSBO-05-19<br>
    <br><b>Skills:</b> What are skills?<br>
    </font>
  </div>

  <div class="info_card_2">
    <h1>Feedback form</h1>
    <form @submit.prevent="onFormSubmit" method="get" id="form">
      <div class="form1">
        <label for="name">Your name: </label>
        <input type="text" name="name" id="name" required>
      </div>
      <div class="form2">
        <label for="email">Your email: </label>
        <input type="email" name="email" id="email" required>
      </div>
      <div class="form3">
        <label for="message">Your message:</label>
          <textarea id="message" name="message"
            rows="5" cols="35" required>
          </textarea>
      </div><br>
      <button @click="buttonHandler" id="button" type="submit">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    buttonHandler($event){
      console.warn($event);
    },
    onFormSubmit($event) {
      console.warn($event);
    }
  },
  props: {
    msg: String 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info_card_1 {
  width: 500px;
  height: 280px;
  background-color: rgba(245, 187, 187, 0.76);
  border: rgba(245, 187, 187, 0.76) 1px groove;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(124, 63, 63);
  margin: 20px auto;
}
.info_card_2 {
  width: 500px;
  height: 300px;
  background-color: rgb(180, 152, 152);
  border: rgb(180, 152, 152) 1px groove;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(80, 66, 66);
  margin: 30px auto;
}
.form1 {
  margin-bottom: 10px;
  margin-top: 10px;
}
.form2 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.form3 {
  margin-top: 10px;
}
#button {
  height: 30px;
  width: 150px;
  background: rgb(211, 188, 188);
  color: #4b0170;
  border-radius: 5px;
  border: 1px solid rgb(88, 88, 88);
  margin-bottom: 10px;
}
.header {
  margin-bottom: 45px;
}
</style>