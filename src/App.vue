<template>
  <div id="app">
    <Player></Player>
    <PlayList></PlayList>
    <ControlBar></ControlBar>
  </div>
</template>

<script>
import Player from './components/player'
import ControlBar from './components/controlBar'
import PlayList from './components/playList'
import {mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    Player,ControlBar,PlayList
  },
  data(){
    return{
      isPlaying: false
    }
  },
  mounted () {
    this.$nextTick(function(){
      this.getPlayList();
    })
  },
  methods:{
    ...mapActions([
      'getPlayList'
    ])
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  width: 100%;
  height: calc(100% - 60px);
  padding-top: 60px;
  position: relative;
  overflow: hidden;
}
</style>
