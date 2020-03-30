<template>
    <div class="banner">
        <div :style="{backgroundImage: 'url(' +imgs.locationUrl + ')'}" alt="" class="location"></div>
        <div class="locationTip">{{refresh.name1}}|{{refresh.name2}}</div>
        <!--<div class="pullDown" :style="{backgroundImage: 'url(' +imgs.pullDown + ')'}"></div>-->
        <div class="locationRenew">{{refresh.time}}更新</div>
        <div  :style="{backgroundImage: 'url(' +imgs.refresh + ')'}" class="refresh" @click="getMessage()"></div>
    </div>

</template>
<script>
  export default {
    data() {
      return {
        imgs:{
          locationUrl:require('./../assets/slice0/pin@2x.png'),
          pullDown:require('./../assets/slice0/arrow@2x.png'),
          refresh:require('./../assets/slice0/refresh@2x.png')
        }
      }
    },
    methods: {
      getMessage() {
        this.$http.get('/WeatherConditions/jh/public/report/weather?lon=117.0527400000&lat=38.9453300000')
            .then((response=>{
              const sunDate = new Date();
              this.refresh.time = sunDate.getHours()+":"+sunDate.getMinutes();
              console.log(response.data);
              let getDate = response.data;
              this.onlineInfo.lefeReport = getDate.lifeReport;
              this.onlineInfo.hourReports = getDate.hourReport;
              this.onlineInfo.hourReports.forEach((item)=>{
                item.windDir = require('./../assets/slice/weatherIcon/'+item.windDir+'.png');
              })
              this.onlineInfo.reportDays = getDate.reportDay;
              this.onlineInfo.reportDays.forEach((item)=>{
                item.week = item.week.replace("星期","周");

              })
              this.refresh.name1 = getDate.location.region
              this.refresh.name2 = getDate.location.address


            })).catch((response)=>{
          console.log('无法',response);
        })
        this.$http.get('/WeatherConditions/jh/public/report/weather/dayHourWeather?lon=117.0527400000&lat=38.9453300000&date=2019-06-06')
            .then((reponse)=>{
              let getDate = reponse.data.splice(0,7);
              console.log("这是数据",getDate);
              getDate.forEach((item)=>{
                item.windDir = require('./../assets/slice/weatherIcon/'+item.windDir+'.png')


              })
              this.hourMessages = getDate;




            }).catch((response)=>{
          console.log('无法',response);
        })

      }
    },
    mounted() {
    },
    props:['refresh']

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .banner{
        width: px2rem(375*4);
        height: auto;
        .location{
            width: px2rem(10*4);
            height: px2rem(13*4);
            margin-left: px2rem(12*4);
            margin-top: px2rem(23*4);
            display: inline-block;
            background-size: cover;

        }
        .locationTip{
            width: px2rem(240*4);
            height: px2rem(20*4);
            font-size: px2rem(14*4);
            display: inline-block;
            color: white;
            line-height: px2rem(20*4);
            font-weight:400;
            letter-spacing:px2rem(2*4)
        }
        .locationRenew{
            height: px2rem(20*4);
            font-size: px2rem(14*4);
            color: white;
            display: inline-block;
            line-height: px2rem(20*4);
        }
        .pullDown{
            display: inline-block;
            width: px2rem(8*4);
            height: px2rem(4*4);
            background-size: cover;
        }
        .refresh{
            width: px2rem(14*4);
            height: px2rem(14*4);
            background-size: cover;
            display: inline-block;
            margin-top: px2rem(4*4);
        }
        .numberShow{
            width:px2rem(72*4);
            height:px2rem(75*4);
            font-size:px2rem(64*4);
            color:rgba(255,255,255,1);
            line-height:px2rem(77*4);
            position: absolute;
            left: px2rem(143*4);
            top: px2rem(86*4);
        }
        .numberMark{
            width:px2rem(16*4);
            height:px2rem(16*4);
            color: white;
            position: absolute;
            top:px2rem(95*4) ;
            left: px2rem(218*4);
        }
        .weatherFont{
            width: auto;
            height: auto;
            font-size:px2rem(18*4);
            line-height: px2rem(24*4);
            color: white;
            position: absolute;
            top: px2rem(123*4);
            left: px2rem(224*4);
        }
        .changeImg{
            width: px2rem(300*4);
            height: px2rem(95*4);
            background-size: cover;
            margin-left: px2rem(37*4);
            margin-top: px2rem(215*4);
        }
        .sunUp{
            font-size: px2rem(14*4);
            line-height: px2rem(19*4);
            color: white;
            margin-left: px2rem(36*4);
            display: inline-block;
        }
        .sunDown{
            font-size: px2rem(14*4);
            line-height: px2rem(19*4);
            color: white;
            margin-left: px2rem(173*4);
            display: inline-block;

        }
    }

</style>