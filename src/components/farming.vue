<script src="../../vue.config.js"></script>
<template>
    <div>
        <div class="box">
            <div class="box-header">·静海气候 ·静海地貌 ·河流湖泊 ·农业概况</div>
            <div class="box-banner" :style="{backgroundImage: 'url(' +bannerUrl + ')'}"></div>
            <div class="box-contain" v-text="contain1" ></div>
            <div v-text="contain2" class="box-contain"></div>
            <div class="box-contain"></div>
            <div class="box-downArea">
                <div class="box-downArea-header">服务产品</div>
                <div class="box-downArea-report" v-for="downArea in downAreas">
                    <img :src=pdfImgUrl alt="">
                    <div class="box-location">
                        <div v-text="downArea.title" class="title" @click="view(downArea.url)"></div>
                        <div class="title" style="margin-bottom: 3%;opacity: 0.5"  v-text="downArea.time">2019年02月17日</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import wx from 'weixin-js-sdk';
  import { Base64 } from 'js-base64';
  export default {
    data() {
      return {
        contain1:"静海属暖温带湿润大陆性季风气候。主要气候特征：季风显著，四季分明。" +
        "春季，冷空气势力明显衰退，气温回升较快，且冷暖多变，降水量较冬季偏多，较夏季偏少" +
        "，空气干燥，风速大，蒸发强，因而形成了“十年九旱”的气候特点。夏季，是全年温度最高季" +
        "节，气候闷热。受太平洋暖湿气团影响，盛行东南风，潮湿多雨，雨量高度集中，常有洪涝、" +
        "冰雹和短时大风等灾害性天气发生。秋季，暖空气势力减弱，气温明显下降，日光充足，昼夜温差" +
        "较大，盛行西北风，有着“一场天气一场寒”的气候特征。常出现冰雹、大风降温、霜冻等灾害性天气。" +
        "冬季，盛行偏北大风，空气干燥寒冷，晴朗少雪。大雾天气常给交通带来不便。 ",
        contain2: "林海循环经济示范区被林业部确定为国家林下经济示范基地。 50平方公里的龙海高效农业带正成为静" +
        "海农业产业的新亮点和农民增收的新基地。",
        pdfImgUrl:require("./../assets/slice0/pdf-iocn@2x.png"),
        downAreas:[{},{},{}],
        bannerUrl:require("./../assets/slice/nong@2x.png")
      }

    },
    methods:{
      view(url) {
        //console.log(url+'?v='+Math.random())
//        下载pdf的接口
        this.$router.push({ name: 'pdf', query: { url: Base64.encode(url) } })
      }
    },
    mounted(){
      console.log(wx);
      var suiji = +new Date();
      this.$http.get('http://jh.liangnutech.com//jh/public/product/productList?type=2&v='+suiji)
          .then((response)=>{
            this.downAreas=response.data;
            let arr = [];
            this.downAreas.forEach(item => {
              if (true) {
                let dateStr = new Date(item.time).toLocaleString().split(' ');
                let dateArr = dateStr[0].split('/');
                //console.log(dateArr)
                item.time = item.time.split(/\s+/)[0].split("-")[0]+"年"+
                item.time.split(/\s+/)[0].split("-")[1]+"月"+item.time.split(/\s+/)[0].split("-")[2]+"日";
                arr.push(item);
              }
            });
            this.downAreas = arr;
            console.log(arr);
//            for (var i=0;i<response.data.length;i++){
//              Number(response.data[i].time)
//            }
            console.log(response)
          }).catch((response)=>{
        console.log(response);
      })

    }



  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .box{
        background: -webkit-linear-gradient(#1e62b1,#3373ba);
        height: auto;
        overflow: hidden;
        width: px2rem(375*4);
    }
    .box-header{
        font-size: px2rem(16*4);
        line-height: px2rem(22*4);
        color: white;
        margin-left: px2rem(36*4);
        margin-top: px2rem(17*4);
        margin-bottom: px2rem(8*4);
        width: px2rem(304*4);
    }
    .box-banner{
        width:px2rem(326*4);
        height: px2rem(216*4);
        margin-left: px2rem(24*4);
        background-size: cover;
    }
    .box-contain{
        width: px2rem(330*4);
        margin-left: px2rem(24*4);
        font-size: px2rem(12*4);
        line-height:px2rem(17*4);
        color: white;
        margin-top: px2rem(16*4);
    }
    .box-downArea{
        width: px2rem(375*4);
        background-color: #2259A1;
        position: relative;
        height: px2rem(500*4);
        overflow: scroll;
        .box-downArea-header{
            font-size: px2rem(14*4);
            line-height: px2rem(19*4);
            padding-left: px2rem(21*4);
            color: white;
            height: px2rem(39*4);
            line-height: px2rem(39*4);
            border-top: 1px solid rgba(255,255,255, 0.5);
            border-bottom: 1px solid rgba(255,255,255, 0.5);
        }
        .box-downArea-report{
            border-bottom: 1px solid  rgba(255,255,255, 0.5);
            height: auto;
            position: relative;
            box-sizing: border-box;
            .img{
                margin-left:px2rem(27*4);
                margin-top: px2rem(17*4);
                width: px2rem(30*4);
                height: px2rem(36*4);
                display: inline-block;
                background-size: cover;

            }
            img{
                margin-left:px2rem(27*4);
                margin-top: px2rem(17*4);
                width: px2rem(30*4);
                height: px2rem(36*4);
                display: inline-block;
                background-size: cover;

            }
            .title{
                font-size: px2rem(16*4);
                color: white;
                display: block;
                width: px2rem(300*4);

            }
            span {
                font-size: px2rem(12*4);
                color: #FFFFFF;
                opacity: 0.5;
                display: inline-block;
            }
            .box-location{
                display: inline-block;
                top: px2rem(13*4);
                left: px2rem(69*4);
                height: auto;
            }


        }
    }
</style>