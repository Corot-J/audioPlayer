<template>
  <div id="app">
    <Player :isPlaying='isPlaying'></Player>
    <ControlBar></ControlBar>
  </div>
</template>

<script>
import Player from './components/player'
import ControlBar from './components/controlBar'

export default {
  name: 'app',
  components: {
    Player,ControlBar
  },
  data(){
    return{
      isPlaying: false
    }
  },
  methods:{
    play:function(){
      this.isPlaying = true;
    },
    pause:function(){
      this.isPlaying = false;
    }
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
