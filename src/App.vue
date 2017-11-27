<template>
  <div id="app">
    <Player :isPlaying='isPlaying'/>
    <button class="playBtn" @click="isPlaying?pause():play()">播放</button>
  </div>
</template>

<script>
import Player from './components/player'

export default {
  name: 'app',
  components: {
    Player
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
#app {
  background-color: #eee;
  text-align: center;
  margin-top: 60px;
}
.playBtn{
  margin-top: 10px;
  background-color: #a78760;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 25px;
}
</style>
