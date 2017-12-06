<template>
  <div class="play-list">
    <div v-for="audio in playList" v-bind:key="audio.name">
        {{audio.name}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playList: this.$store.getters.playList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
