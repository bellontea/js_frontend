<template>
  <div class="info">
      <div id="photo">
        <img align="top" src="../assets/photo.jpg">      
      </div>
    <InfoCard/>
    <FormCard/>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import FormCard from '@/components/FormCard.vue'
export default {
  name: "InfoPage",
  components: {
    InfoCard,
    FormCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>