<template>
    <div>
        <div class="tarvel-box" v-for="(tab,index) in tabs">
            <div class="travel-box-1" v-text="tab.name"></div>
            <div class="travel-box-2" v-text="tab.rank" v-if="tab.needRank" ></div>
            <div class="travel-box-3" v-text="tab.comment" :class="{'travel-box-31':!tab.needRank}"></div>
            <a class="travel-box-4" :href="'#/TravelWeather?qid='+(index+1)+'&lon='+tab.lon+'&lat='+tab.lat">天气</a>
            <div class="travel-box-img">
                <div class="travel-box-img-1" :style="{backgroundImage: 'url(' +tab.bgone + ')'}"></div>
                <div class="travel-box-img-1" :style="{backgroundImage: 'url(' +tab.bgtwo + ')'}"></div>
                <div class="travel-box-img-1" :style="{backgroundImage: 'url(' +tab.bgthree + ')'}"></div>
            </div>

        </div>


    </div>


</template>
<script>
  export default {
    data() {
      return {
        tabs:[
          {
            bgone:require("./../assets/secaibi/lvyou1_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou1_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou1_3.jpg"),
            name:"仁爱团泊湖国际休闲博览园",
            rank:"AAAA",
            comment:"最适宜人居的休闲新城",
            needRank:true,
            lon:117.180524,
            lat:38.89548

          },
          {
            bgone:require("./../assets/secaibi/lvyou2_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou2_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou2_3.jpg"),
            name:"萨马兰奇纪念馆",
            rank:"AAAA",
            comment:"形形色色的展品中凝结着各种各样的往事",
            needRank:true,
            lon:117.090535,
            lat:38.973939

          },
          {
            bgone:require("./../assets/secaibi/lvyou3_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou3_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou3_3.jpg"),
            name:"西双塘民俗风景区",
            rank:"AAA",
            comment:"中国十大魅力乡村",
            needRank:true,
            lon:116.89877,
            lat:38.869588

          },
          {
            bgone:require("./../assets/secaibi/lvyou4_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou4_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou4_3.jpg"),
            name:"光合谷旅游度假区",
            rank:"AAAA",
            comment:"位于中国温泉之城",
            needRank:true,
            lon:117.180524,
            lat:38.89548

          },
          {
            bgone:require("./../assets/secaibi/lvyou5_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou5_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou5_3.jpg"),
            name:"绿源生态区",
            rank:"AA",
            comment:"大型综合性生态园",
            needRank:true,
            lon:116.814697,
            lat:39.01913

          },
          {
            bgone:require("./../assets/secaibi/lvyou6_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou6_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou6_3.jpg"),
            name:"林海循环经济区",
            rank:"AA",
            comment:"大型综合性生态园",
            needRank:false,
            lon:116.940816,
            lat:38.944119

          },
          {
            bgone:require("./../assets/secaibi/lvyou7_1.jpg"),
            bgtwo:require("./../assets/secaibi/lvyou7_2.jpg"),
            bgthree:require("./../assets/secaibi/lvyou7_3.jpg"),
            name:"大邱庄镇",
            rank:"AA",
            comment:"爱国主义教育基地",
            needRank:false,
            lon:117.071104,
            lat:38.837977

          }

        ]



      }
    }
  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .tarvel-box{
        height: px2rem(181*4);
        position: relative;
        .travel-box-1{
            margin-top: px2rem(19*4);
            margin-left: px2rem(13*4);
            font-size: px2rem(14*4);
            line-height: px2rem(20*4);
            font-weight: 600;
        }
        .travel-box-2{
            margin-left: px2rem(13*4);
            margin-top: px2rem(0*4);
            border-radius: px2rem(2*4);
            background-color: #1DCB98;
            width: px2rem(40*4);
            height: px2rem(16*4);
            line-height: px2rem(16*4);
            font-size: px2rem(12*4);
            color: #FFFFFF;
            display: inline-block;
            text-align: center;
        }

        .travel-box-3{
            display: inline-block;
            width: auto;
            height: px2rem(17*4);
            font-size: px2rem(12*4);
            color: #9B9B9B;
        }
        .travel-box-31{
            margin-left: px2rem(13*4);

        }
        .travel-box-4{
            position: absolute;
            left: px2rem(299*4);
            top: px2rem(12*4);
            display: inline-block;
            color: #28BAF3;
            width: px2rem(61*4);
            height: px2rem(27*4);
            font-size: px2rem(14*4);
            text-align: center;
            line-height: px2rem(27*4);
            border: px2rem(4*1.5) solid #28BAF3;
            border-radius: px2rem(4*4);
        }
        .travel-box-img{
            width: px2rem(358*4);
            height: px2rem(114*4);
            margin-left: px2rem(13*4);
            margin-left: auto;
            margin-right: auto;
            margin-top: px2rem(8*4);
            .travel-box-img-1{
                width: px2rem(114*4);
                height: px2rem(114*4);
                display: inline-block;
                background-repeat: no-repeat;
                background-size: cover;
            }
            
        }


    }

</style>