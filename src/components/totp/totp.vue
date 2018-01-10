<template>
  <div class="totp">

    <div class="totpTit">
      <h1 >基于时间的OTP</h1>
    </div>
    <div class="totpContent">
      <div>
        <label>唯一码</label>
        <Input  v-model="totpNum" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
      <div>
        <label>生成码</label>
        <Input disabled v-model="temp" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
      <div>
        <label>时间</label>
        <Input  disabled v-model="now" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
      <div>
        <label>已经过去了</label>
        <Input disabled v-model="timeNum" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
      <div>
        <label>唯一值改变了</label>
        <Input disabled v-model="changeTime" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
    </div>
  </div>

</template>

<script>
    import {TOTP} from 'jsotp'
    export default {

      data () {
          return {
              totpNum:"BASE32ENCODEDSECRET",
              temp:"",
              now:"",
              timeNum:0,
              changeTime:0
          }
      },
      computed: {
        totp:function () {
          return TOTP(this.totpNum);
        }
      },
      watch:{
        totp:{
          handler: function (val,oldVal) {
            this.temp = val.now();
          },
          deep: true
        },
        temp:function (now,old) {
            if(now!=old){
              this.changeTime++

            }
        }
      },
      mounted(){
        var that  = this;

        setInterval(function () {
          that.now = Date.now();
          that.temp = that.totp.now();
          that.timeNum = that.timeNum+1
        },1000)
      }

    }
</script>

<style scoped lang="less">
  .totp{

    .totpTit{

      text-align: center;
    }
    .totpContent{
      margin-left: 40%;
    }
  }
</style>
