<template>
  <div class="formCard">
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
      <button id="submitBtn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'formCard',
      methods: {
        onFormSubmit($event) {
            console.warn($event);
        },
  },
}
</script>

<style>
.formCard {
  width:500px;
  height: 300px;
  background-color: rgb(180, 152, 152);
  border: rgb(180, 152, 152) 1px groove;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(80, 66, 66);
  display:inline-block;
  vertical-align: middle;
  margin-top: 100px;
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
</style>