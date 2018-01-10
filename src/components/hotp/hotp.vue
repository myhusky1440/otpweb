<template>
  <div class="hotp">

    <div class="hotpTit">
      <h1 >基于次数的OTP</h1>
    </div>
    <div class="hotpContent">
      <div>
        <label>唯一码</label>
        <Input v-model="hotpNum" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
      <div>
        <label>次数</label>
        <InputNumber :max="max" :min="min" v-model="time" :editable="false"></InputNumber>
      </div>
      <div>
        <label>生成码</label>
        <Input disabled v-model="temp" placeholder="Enter something..." style="width: 300px"></Input>
      </div>
      <div>
        <Button type="primary" @click="send()">登录</Button>
      </div>
    </div>
  </div>

</template>

<script>
  import {HOTP} from 'jsotp'
  export default {

    data () {
      return {
        hotpNum:"BASE32ENCODEDSECRET",

        time:0,
        hotp:{},
        max:50,
        min:0
      }
    },
    computed: {
      temp:function () {
        return HOTP(this.hotpNum).at(this.time);
      }
    },
    methods:{
        send(){
            var that = this;
            that.msg = this.$Message.loading({
              content: '发布服务中',
              duration: 0
            });

            this.$http.get(fdb_url+'/hotp/sendKey',{
              params:this.temp
            }).then(function (res) {
              //关闭loading
              setTimeout(this.msg, 0);

              if(res.status==200){
                this.$Message.success('服务发布成功');
              }else{
                this.$Message.error('服务发布失败');
              }

            })
        }
    },
    mounted(){

    }

  }
</script>

<style scoped lang="less">
  .hotp{

    .hotpTit{

      text-align: center;
    }
    .hotpContent{
      margin-left: 40%;
    }
  }
</style>
