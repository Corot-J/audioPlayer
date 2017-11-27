<template>
  <div class="play">
    <div class="rotate">
      <img class="cd" :class="isPlaying?'playing':'paused'" src="../assets/cd.png" alt="cd">
      <img class="head" :class="isPlaying?'playing':'paused'" src="../assets/tough.jpg" alt="head">
    </div>
    <img :class="isPlaying?'arm-play':'arm'" src="../assets/cd-arm.png" alt="cd-arm">
  </div>
</template>

<script>
export default {
  name: 'Play',
  props: ['isPlaying'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.play{
  width: 100%;
  height: 100px;
  position: relative;
  padding-top: 10px;
}
.rotate{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: relative;
}
.cd{
  width: 100%;
  height: 100%;
  animation: rotate 8s linear infinite;
}
.head{
  width: 60px;
  height: 60px;
  position: absolute;
  left: calc(50% - 30px);
  top: calc(50% - 30px);
  border-radius: 50%;
  animation: rotate 8s linear infinite;
}
.playing{
  animation-play-state: playing;
  -webkit-animation-play-state: playing;
}
@keyframes rotate{
  0%{
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate{
  0%{
    -webkit-transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
  }
}
.paused{
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}
.arm,.arm-play{
  width: 30px;
  position: absolute;
  top: 0;
  left: calc(50% + 45px);
  transition: transform 0.3s;
  transform-origin: 11.3px 11.2px;
}
.arm-play{
  transform: rotate(30deg)
}
</style>
