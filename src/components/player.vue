<template>
  <div class="play">
    <div class="rotate">
      <img class="cd" :class="isPlaying?'playing':'paused'" src="../assets/cd.png" alt="cd">
      <img class="head" :class="isPlaying?'playing':'paused'" src="../assets/tough.jpg" alt="head">
      <div class="control-btn"><i class="iconfont icon-play"></i></div>
    </div>
    <img :class="isPlaying?'arm-play':'arm'" src="../assets/cd-arm.png" alt="cd-arm">
  </div>
</template>

<script>
export default {
  name: 'Play',
  props: ['isPlaying']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.play{
  width: 100%;
  position: relative;
}
.rotate{
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  border: 4px solid #eee;
  border-radius:50%;
}
.cd{
  width: 100%;
  height: 100%;
  animation: rotate 8s linear infinite;
}
.head{
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  border-radius: 50%;
  animation: rotate 8s linear infinite;
}
.control-btn{
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  border-radius: 50%;
  background-color: rgba(0,0,0,0.3);
}
.control-btn i{
  vertical-align: middle;
  font-size: 20px;
  color: #fff;
}
.playing{
  animation-play-state: running;
}
@keyframes rotate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.paused{
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}
.arm,.arm-play{
  width: 40px;
  position: absolute;
  top: 0;
  left: calc(50% + 65px);
  transition: transform 0.3s;
  transform-origin: 11.18px 14.62px;
}
.arm-play{
  transform: rotate(30deg)
}
</style>
