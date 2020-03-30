<template>
    <div :style="{backgroundImage: 'url(' +bgclound + ')'}" style="display: inline-block;background-size: cover;color: white;height:2500px">
        <div style="width: 100%;height: auto" v-if="nowAlert.length>0">
            <div class="nothing"></div>
            <div class="mark">
                <img :src=nowAlert[0].eventImg alt="" class="img">
            </div>
            <span>{{nowAlert[0].eventTitle}}</span>
            <div class="text">{{nowAlert[0].description}}</div>
        </div>
        <div style="width: 100%;height: auto" v-if="nowAlert.length>1">
            <div class="nothing"></div>
            <div class="mark">
                <img :src=nowAlert[1].eventImg alt="" class="img">
            </div>
            <span>{{nowAlert[1].eventTitle}}</span>
            <div class="text">{{nowAlert[1].description}}</div>
        </div>
        <div v-if="nowAlert.length ==0">
            <img src="../assets/secaibi/wuyujing.png" alt="" style="margin-left:33%">
        </div>
        <hr>
        <div class="census">
            <span class="censusTitle">近一个月预警统计</span>
            <div v-for="countAlert in countAlerts" class="censusAlert">
                <img :src=countAlert.img alt="">
                <span style="display: inline-block;position: absolute;left: 15%" v-text="countAlert.typekey"></span>
                <span style="display: inline-block;position: absolute;left: 85%" v-text="countAlert.count">12次</span>
            </div>
        </div>

    </div>

</template>
<script>
  export default {
    data() {
      return {
        bgclound:require('./../assets/secaibi/bg_shikuan.jpg'),
        nowAlert:[],
        countAlerts:[]

      }
    },
    methods: {},
    mounted() {
      this.$http.get('http://jh.liangnutech.com//jh/public/report/alertinfo')
          .then((response)=>{
            this.nowAlert = response.data.nowAlert;
            console.log(response.data);
            this.countAlerts = response.data.statics;



          })

    }

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .census{
        margin-bottom: px2rem(10*4);
        .censusAlert{
            height: px2rem(40*4);
            position: relative;
            margin-bottom: px2rem(15);
            img{
                width: px2rem(24*4);
                height: px2rem(24*4);
                margin-top: px2rem(8*4);
                margin-left: px2rem(10*4);
            }
        }
        .censusTitle{
            width: px2rem(375*4);
            text-align: center;
            display: inline-block;
            font-size: px2rem(14*4);
            margin-bottom: px2rem(10*4);
        }
        div{
            background-color: rgba(34,89,161,0.8);
            width: px2rem(340*4);
            height: px2rem(40*4);
            margin-right: auto;
            margin-left: auto;
            border-radius: px2rem(10*4);

        }
        span{
            font-size: px2rem(14*4);
            line-height: px2rem(40*4);
        }

    }
    hr{
        color: white;
        height: px2rem(1*4);
        background-color: rgba(255,255,255,0.4);
        margin-top: px2rem(10*4);
    }
    .nothing{
        width: px2rem(375*4);
        height: px2rem(40*4);

    }
    .text{
        margin-left: px2rem(18*4);
        width: px2rem(340*4);
        font-size: px2rem(14*4);
    }
    .mark{
        width: px2rem(58*4);
        height: px2rem(50*4);
        display: inline-block;
        font-size: 0;
        margin-left: px2rem(22*4);
        div{
            display: inline-block;
            font-size: px2rem(12*4);
            display: inline-block;
        }
        .img{
            background-color: yellow;
            width: px2rem(52*4);
            height: px2rem(30*4);
            top: px2rem(51*4);

        }
    }
    .mark + span{
        font-size: px2rem(20*4);
        position: absolute;
        left: px2rem(106*4);

        /*color: white;*/
    }
</style>