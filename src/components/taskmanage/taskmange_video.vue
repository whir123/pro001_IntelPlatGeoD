<template>
  <div class="video_style">
    <div class="video1">
        <video ref="videoRefs" 
            controls 
            autoplay 
            muted>
        </video>
        <span>GNSS监控</span>
    </div>
    <div class="video2">
        <video ref="videoRefs" 
            controls 
            autoplay 
            muted>
        </video>
        <span>边坡位移监控</span>
    </div>
    <div class="video3">
        <video ref="videoRefs" 
            controls 
            autoplay 
            muted>
        </video>
        <span>裂缝监控</span>
    </div>
    <div class="video4">
        <video ref="videoRefs" 
            controls 
            autoplay 
            muted>
        </video>
        <span>表面应变计监控</span>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.video_style{
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  height: 300px;
  .video1{
    display: flex;
    text-align: center;
    flex-direction:column;
    video{
      height: 250px;
      width: 400px;
    }
    span{
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .video2{
    display: flex;
    text-align: center;
    flex-direction:column;
    margin-left: 35px;
    video{
      height: 250px;
      width: 400px;
    }
    span{
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .video3{
    display: flex;
    text-align: center;
    flex-direction:column;
    margin-left: 35px;
    video{
      height: 250px;
      width: 400px;
    }
    span{
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .video4{
    display: flex;
    text-align: center;
    flex-direction:column;
    margin-left: 35px;
    video{
      height: 250px;
      width: 400px;
    }
    span{
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>