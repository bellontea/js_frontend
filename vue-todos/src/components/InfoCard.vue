<template>
  <div class="infoCard">
    <div class="header">
      <h1>About me</h1>
    </div>
    <font size=4>
    <b>Full name:</b> Terenteva Tatyana Alekseevna<br>
    <br><b>Group:</b> BSBO-05-19<br>
    <br><b>Skills:</b> What are skills?<br>
    </font>
  </div>
</template>

<script>
export default {
    name: 'InfoCard',
}
</script>

<style>
.infoCard {
  width: 500px;
  height: 300px;
  background-color: rgba(245, 187, 187, 0.76);
  border: rgba(245, 187, 187, 0.76) 1px groove;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(124, 63, 63);
  display: inline-block;
  vertical-align: middle;
  margin-top: 100px;
}
.header {
  margin-top: 20px;
  margin-bottom: 45px;
}
</style>