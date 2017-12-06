<template>
  <div class="control-bar">
    <div class="last-btn"><i class="iconfont icon-next"></i></div>
    <div class="play-btn"><i class="iconfont icon-play"></i></div>
    <div class="next-btn"><i class="iconfont icon-next"></i></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.control-bar{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    bottom: 0;
}
.last-btn,.play-btn,.next-btn{
    display: inline-block;
    vertical-align: middle;
    line-height: 25px;
    margin: 0 30px;
    cursor: pointer;
}
.last-btn{
    transform: rotate(180deg)
}
.last-btn i,.next-btn i,.play-btn i{
    color: #fff;
    vertical-align: middle;
}
.last-btn i,.next-btn i{
    font-size: 14px;
}
.play-btn i{
    font-size: 25px;
}
</style>
