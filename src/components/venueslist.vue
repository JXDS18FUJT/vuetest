<template>
  <div class="box">
    <div v-for="(tab,index) in tabs" style="position: relative">
      <XImg :default-src="tab.imgUrl"></XImg>
        <!--<img src="./../assets/slice/bitmap1.png" alt="">-->
      <div class="mid-font">
        <div class="mid-font-1" v-text="tab.A"></div>
        <div class="mid-font-2" v-text="tab.B"></div>
        <div class="mid-font-3">比赛项目：{{tab.C}}</div>
          <a class="mid-font-4" :href="'#/VenuesWeather?qid='+(index+1)">天气</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { XImg } from 'vux'
  export default {
    data() {
      return {
        tabs:[
          {
            imgUrl:require("./../assets/slice/bitmap1.jpg"),
            A:"天津体育学院体育场",
            B:"天津市静海区团泊新城西区天津体育学院校内",
            C:"足球"
          },
          {
            imgUrl:require("./../assets/slice/bitmap2.jpg"),
            A:"天津中医药大学体育馆",
            B:"天津市静海区团泊新城西区天津中医药大学校内",
            C:"篮球"
          },
          {
            imgUrl:require("./../assets/slice/bitmap3.jpg"),
            A:"天津体育学院体育馆",
            B:"天津市静海区团泊新城西区天津体育学院校内",
            C:"击剑"
          },
          {
            imgUrl:require("./../assets/slice/bitmap4.jpg"),
            A:"团泊足球场",
            B:"天津市静海区团泊新城西区",
            C:"足球"
          },
          {
            imgUrl:require("./../assets/slice/bitmap5.jpg"),
            A:"静海区团泊体育大道",
            B:"天津市静海区团泊新城",
            C:"公路自行车"
          },
          {
            imgUrl:require("./../assets/slice/bitmap6.jpg"),
            A:"天津体育中心曲棍球场",
            B:"天津市静海区健康产业园",
            C:"曲棍球"
          },
          {
            imgUrl:require("./../assets/slice/bitmap7.jpg"),
            A:"天津体育中心棒球场",
            B:"天津市静海区健康产业园",
            C:"棒球"
          },
          {
            imgUrl:require("./../assets/slice/bitmap8.jpg"),
            A:"天津体育中心射击馆",
            B:"天津市静海区健康产业园",
            C:"射击"
          },
          {
            imgUrl:require("./../assets/slice/bitmap9.jpg"),
            A:"天津体育中心射箭场",
            B:"天津市静海区健康产业园",
            C:"射箭"
          },
          {
            imgUrl:require("./../assets/slice/bitmap10.jpg"),
            A:"天津体育中心小轮车场",
            B:"天津市静海区健康产业园",
            C:"小轮车"
          },
          {
            imgUrl:require("../assets/slice/bitmap11.jpg"),
            A:"天津体育中心足球场",
            B:"天津市静海区健康产业园",
            C:"足球"
          },
          {
            imgUrl:require("./../assets/slice/bitmap12.jpg"),
            A:"天津体育中心橄榄球场",
            B:"天津市静海区健康产业园",
            C:"橄榄球"
          },
          {
            imgUrl:require("../assets/slice/bitmap13.jpg"),
            A:"天津体育中心自行车馆",
            B:"天津市静海区健康产业园",
            C:"自行车"
          },
          {
            imgUrl:require("../assets/slice/bitmap14.jpg"),
            A:"天津国际网球中心",
            B:"天津市静海县团泊新城西区",
            C:"网球"
          },
        ]
      }
    },
    components: {
      XImg
    }
  }
</script>
<style scoped lang="scss" >
    @import "../lib/hotcss/px2rem.scss";
  .box{
    width: px2rem(750*2);
    height: auto;
  }
  .vux-x-img{
    width: px2rem(120*2*2);
    height: px2rem(90*2*2);
    margin-top: px2rem(20*2*2);
    margin-left: px2rem(16*2*2);

  }
  .mid-font{
    display: inline-block;
    position: absolute;
    left: px2rem(151*2*2);
    top: px2rem(22*2*2);
    font-size: px2rem(14*2*2);
  }
  .mid-font-1{
    line-height: px2rem(19*2*2);
    font-weight:bold;
      position: relative;
  }
  .mid-font-2{
      margin-top: px2rem(4*2*2);
      font-size: px2rem(12*2*2);
      color: #9B9B9B;
      line-height: px2rem(32*2);
      position: absolute;
      width: px2rem(199*4);

  }
  .mid-font-3{
      font-size: px2rem(12*2*2);
      color: #F5A623;
      width: px2rem(120*2*2);
      display: inline-block;
      line-height: px2rem(16*2*2);
      position: absolute;
      top: px2rem(64*4);
  }
  .mid-font-4{
      position: absolute;
      width:px2rem(61*2*2);
      height: px2rem(27*2*2);
      text-align: center;
      line-height: px2rem(27*2*2);
      border-radius:px2rem(4*2*2);
      border:1px solid rgba(40,186,243,1);
      z-index: 999;
      color: #28BAF3;
      left: px2rem(143*4);
      top: px2rem(60*4);
  }

  .box>div{
    height: px2rem(121*2*2);
    border-bottom: 1px solid #D8D8D8;
  }

</style>
