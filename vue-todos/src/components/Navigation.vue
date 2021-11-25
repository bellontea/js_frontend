<template>
  <div id="nav">
    <div id="links">
      <router-link class="link" to="/">HOME</router-link>
      <router-link class="link" to="/info">INFO</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
#nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(78, 68, 68);
    box-shadow: 0 0 20px black;
    z-index: 1;
}
#links{
    margin: auto;
    width: 100%;
    max-width: 700px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
}
.link {
    color: rgb(88, 199, 162);
    margin-left: 16px;
    margin-right: 16px;
    font-size: 20px;
    text-decoration: none;
    text-shadow: 2px 2px 2px rgb(48, 48, 48);
}
.link:hover {
    color: white;
    text-decoration: underline;
}
.router-link-active{
    color: aquamarine;
}
</style>