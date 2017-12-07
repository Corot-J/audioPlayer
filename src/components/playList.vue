<template>
  <div class="play-list">
    <div v-for="audio in playList" v-bind:key="audio.name">
        {{audio.title}}
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'playList'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
