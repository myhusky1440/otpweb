
<template>
  <div class="home">
    <ihead class="ihead"></ihead>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <bottom class="ibottom"></bottom>
  </div>
</template>
<script>
  import ihead from '../head/head.vue'
  import bottom from  '../bottom/bottom.vue'
  export default {
    components:{
        ihead,
        bottom
    }
  }
</script>
<style scoped>
  .home{
    height:100%;
  }
  .ihead{
    height:5%;
  }
  .layout-content{
    min-height: 800px;
    height: 87%;
    padding: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .ibottom{
    height: 5%;
  }

</style>
