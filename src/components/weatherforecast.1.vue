<template>
    <div style="display:inline-block;background-size: cover;width:100%" :style="{backgroundImage: 'url(' +imgs.bg + ')'}">
        <div class="changeLocation" v-if="showChangeLocation">
            <div>
                <span>切换位置</span>
                <span style="position: absolute;top: 13%;left: 40%;color: black" @click="showLocationList()">X</span>
                <div class="OptionalArea">
                    <div v-for="OptionalArea in OptionalAreas" @click="showLocationList();changeMessage(OptionalArea.placeLon,OptionalArea.placeLat,OptionalArea.placeName)">
                        {{OptionalArea.placeName}}
                    </div>
                </div>
                <hr>
                <div class="LastArea">
                    <div v-for="LastArea in LastAreas" @click="showLocationList()">{{LastArea.placeName}}</div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div :style="{backgroundImage: 'url(' +imgs.locationUrl + ')'}" alt="" class="location"></div>
            <div class="locationTip" @click="showLocationList()">{{this.locationTip}}</div>
            <!--<div class="pullDown" :style="{backgroundImage: 'url(' +imgs.pullDown + ')'}"></div>-->
            <div class="locationRenew">{{this.refresh.time}}更新</div>
            <div  :style="{backgroundImage: 'url(' +imgs.refresh + ')'}" class="refresh" @click="getMessage(nowLon,nowLat)"></div>
        </div>
        <div class="prediction-header" style="margin-top: 5%">
            &nbsp;&nbsp;最近12小时逐小时预报
        </div>
        <forecast :hourReports="onlineInfo.hourReports"></forecast>
        <div class="prediction-header">
            &nbsp;&nbsp;生活指数预报
        </div>
        <ninegrid :onlineInfo=onlineInfo></ninegrid>
        <div class="prediction-header">
            &nbsp;&nbsp;一周预报
        </div>
        <week :reportDays=onlineInfo.reportDays></week>
        <div class="timeList">
            <div v-for="hourMessage in hourMessages">&nbsp;&nbsp;{{hourMessage.time}}点</div>
        </div>
        <!--预报的地方-->
        <div class="hour">
            <div class="hourForecast" v-for="hourMessage in hourMessages">
                <img :src=hourMessage.weather alt="">
                <span>{{hourMessage.temp}}℃</span>
                <span class="dampness">{{hourMessage.pop}}%</span>
                <img :src=hourMessage.windDir alt="">
                <img :src=hourMessage.popImg alt="" class="pop">
                <div>{{hourMessage.windSpeed}}级</div>
            </div>
        </div>
    </div>
</template>
<script>
  import refresh from '@/components/location-refresh';
  import hourforecast from '@/components/hourforecast'
  import ninegrid from '@/components/ninegrid'
  import week from '@/components/weekforecast'
  import wx from 'weixin-js-sdk';
     var suiji = +new Date();
  export default {
    data() {
      return {
        nowLon:"116.917",
        nowLat:"38.917",
        showChangeLocation:false,
        locationTip:"静海站",
        imgs:{
          refresh:require('./../assets/slice0/refresh@2x.png'),
          bg:require('./../assets/slice/bg.jpg'),
          weatherIcon:{
            fine:require('./../assets/slice/weatherIcon/晴.png'),
            fineN:require('./../assets/slice/weatherIcon/晴n.png'),
            cloud:require('./../assets/slice/weatherIcon/多云.png'),
            cloudN:require('./../assets/slice/weatherIcon/多云n.png'),
            dark:require('./../assets/slice/weatherIcon/阴天.png'),
            smallRain:require('./../assets/slice/weatherIcon/小雨.png'),
            middleRain:require('./../assets/slice/weatherIcon/中雨.png'),
            southWind:require('./../assets/slice/weatherIcon/西北风.png')
          }
        },
        hourMessages:[{},{},{},{},{},{},{}],
        refresh:{
          name1:"北京",
          name2:"海淀",
          time:"12:40"
        },
        LastAreas:[{
          placeName:"北京",
          placeLon:"",
          placeLat:""
        },
          {
            placeName:"沧州",
            placeLon:"",
            placeLat:""
          },
          {
            placeName:"廊坊",
            placeLon:"",
            placeLat:""
          },
          {
            placeName:"保定",
            placeLon:"",
            placeLat:""
          }],
        OptionalAreas:[
          {
            placeName:"静海",
            placeLon:"116.917",
            placeLat:"38.917"
          },
          {
            placeName:"良王庄",
            placeLon:"116.968",
            placeLat:"39.023"
          },
          {
            placeName:"杨城庄",
            placeLon:"117.046",
            placeLat:"38.944"
          },
          {
            placeName:"王口",
            placeLon:"116.770",
            placeLat:"38.933"
          },
          {
            placeName:"中旺",
            placeLon:"117.091",
            placeLat:"38.648"
          },
          {
            placeName:"陈关屯",
            placeLon:"116.877",
            placeLat:"38.796"
          },
          {
            placeName:"台头",
            placeLon:"116.811",
            placeLat:"39.038"
          },
          {
            placeName:"子牙",
            placeLon:"116.789",
            placeLat:"38.957"
          },
          {
            placeName:"大邱庄",
            placeLon:"117.068",
            placeLat:"38.856"
          },
          {
            placeName:"蔡公庄",
            placeLon:"117.063",
            placeLat:"38.781"
          },
          {
            placeName:"梁头",
            placeLon:"116.861",
            placeLat:"38.941"
          },
          {
            placeName:"团泊",
            placeLon:"117.159",
            placeLat:"38.902"
          },
          {
            placeName:"双塘",
            placeLon:"116.902",
            placeLat:"38.872"
          },
          {
            placeName:"大丰堆",
            placeLon:"117.011",
            placeLat:"38.899"
          },
          {
            placeName:"沿庄",
            placeLon:"116.752",
            placeLat:"38.798"
          },
          {
            placeName:"西翟庄",
            placeLon:"117.004",
            placeLat:"38.773"
          },
          {
            placeName:"独流",
            placeLon:"116.912",
            placeLat:"39.047"
          },
          {
            placeName:"唐官屯",
            placeLon:"116.879",
            placeLat:"38.681"
          },

        ],
        onlineInfo:{
          reportDays:[],
          hourReports:[],
          lefeReport: [{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },{
            'type':'',
            'desc':''
          },]
        },
        times:["02","05","08","11","14","17","20","23"]
      }
    },
    methods: {
      getMessage(lon,lat) {
        let sunDate = new Date();
        this.refresh.time = sunDate.getHours()+":"+sunDate.getMinutes();
        let haomiao = +new Date;
        let sunMonth = sunDate.getMonth();
        let sunDay = sunDate.getDate();
        console.log(sunDate.getHours());
        if (Number(sunDate.getMonth())<10){
          sunMonth ='0'+(sunMonth);
        }else {

        }
        if (Number(sunDate.getDate())<10){
          sunDay='0'+(sunDay+1);
        }else {

        }
        this.$http.get('http://jh.liangnutech.com//jh/public/report/weather?lon='+lon+'&lat='+lat+'&v='+haomiao)
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
        this.$http.get('http://jh.liangnutech.com//jh/public/report/weather/dayHourWeather?lon='+lon+'&lat='+lat+'&date=2019-'+sunMonth+'-'+sunDay+'&v='+haomiao)
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

      },
      showLocationList(){
        this.showChangeLocation = ! this.showChangeLocation;
      },
      changeMessage(lon,lat,placename){
        let sunDate = new Date();
        let sunMonth = sunDate.getMonth();
        let sunDay = sunDate.getDate();
        console.log(sunDate.getHours());
        if (Number(sunDate.getMonth()+1)<10){
          sunMonth ='0'+(sunMonth+1);
        }else {

        }
        if (Number(sunDate.getDate())<10){
          sunDay='0'+sunDay;
        }else {

        }
        this.nowLon = lon;
        this.nowLat = lat;
     
        this.$http.get('http://jh.liangnutech.com//jh/public/report/weather?lon='+lon+'&lat='+lat+'&v='+suiji)
            .then((response=>{
              const sunDate = new Date();
              this.refresh.time = sunDate.getHours()+":"+sunDate.getMinutes();
              console.log(response.data);
              this.locationTip = placename;
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
        this.$http.get('http://jh.liangnutech.com//jh/public/report/weather/dayHourWeather?lon='+lon+'&lat='+lat+'&date=2019-'+sunMonth+'-'+sunDay+'&V='+suiji)
            .then((reponse)=>{
              let start =  sunDate.getHours();
//              let end = sunDate.getHours()+7>23?
              let getDate = reponse.data;
//              console.log("这是数据",getDate);
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
      let sunDate = new Date();
      let sunMonth = sunDate.getMonth();
      let sunDay = sunDate.getDate();
      console.log(sunDate.getHours());
      if (Number(sunDate.getMonth()+1)<10){
        sunMonth ='0'+(sunMonth+1);
      }else {

      }
      if (Number(sunDate.getDate())<10){
        sunDay='0'+sunDay;
      }else {

      }
//      处理时间参数的函数

      let mountLon = "";
      let mountLat = "";
//      该接口获取地址region;
      this.$http.get('http://jh.liangnutech.com//jh/public/report/weather?lon=117.0527400000&lat=38.9453300000')
          .then((response=>{
            const sunDate = new Date();
            this.refresh.time = sunDate.getHours()+":"+sunDate.getMinutes();
            console.log(response.data);
            let getDate = response.data;
            this.onlineInfo.lefeReport = getDate.lifeReport;
            this.onlineInfo.hourReports = getDate.hourReport;
            // this.onlineInfo.hourReports.push(getDate.hourReport[3]);
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
//      未来七天的天气情况的处理


      this.$http.get('http://jh.liangnutech.com//jh/public/report/weather/dayHourWeather?lon=117.0527400000&lat=38.9453300000&date=2019-'+sunMonth+'-'+sunDay)
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
//      逐小时预报的处理

    },
    components:{
      refresh,
      forecast:hourforecast,
      ninegrid,
      week

    }

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .changeLocation{
        position: absolute;
        height:100%;
        background-color: rgba(0,0,0,0.4);
        width: px2rem(375*4);
        z-index: 9999;
        padding-top: px2rem(104*4);
        .LastArea{
            width: px2rem(242*4);
            height: px2rem(52*4);
            div{
                width: px2rem(52*4);
                height: px2rem(30*4);
                display: inline-block;
                color: #2BADE8;
                margin-top: 0;
                font-size: px2rem(14*4);
                line-height: px2rem(30*4);
                text-align: center;
                border: px2rem(1*4) solid rgba(43,173,232,0.35);
                border-radius: px2rem(2*4);
                margin-left: px2rem(4*4);
            }
        }
        div{
            color:#2BADE8;
            width: px2rem(280*4);
            height: px2rem(330*4);
            margin-left: auto;
            margin-right: auto;
            background-color: white;
            hr{
                width: px2rem(280*4);
                height: px2rem(1*4);
                color: gray;
                opacity: 0.3;
                background-color: rgba(128,128,128,0.5);
                margin-top: px2rem(18*4);
                margin-bottom: px2rem(13*4);
            }
            span{
                display: inline-block;
                width: px2rem(280*4);
                height: auto;
                margin-top: px2rem(20*4);
                font-size: px2rem(16*4);
                color: #2BADE8;
                text-align: center;
            }
            .OptionalArea{
                width: px2rem(242*4);
                height: auto;
                margin-top: px2rem(10*4);
                div{
                    width: px2rem(54*4);
                    height: px2rem(30*4);
                    display: inline-block;
                    color: #2BADE8;
                    margin-top: 0;
                    font-size: px2rem(14*4);
                    line-height: px2rem(30*4);
                    text-align: center;
                    border: px2rem(1*4) solid rgba(43,173,232,0.35);
                    border-radius: px2rem(2*4);
                    margin-left: px2rem(4*4);
                }

            }
        }
    }
    .banner{
        width: px2rem(375*4);
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
    .prediction-header{
        width: px2rem(375*4);
        font-size: px2rem(14*4);
        line-height: px2rem(32*4);
        height: px2rem(32*4);
        background-color: rgba(0,0,0,0.2);
        border-top: px2rem(1*4) solid rgba(255,255,255,0.4);
        border-bottom: px2rem(1*4) solid rgba(255,255,255,0.4);
        color: white;
    }
    .hour{
        width: px2rem(375*4);
        height: px2rem(233*4);
    }
    .hourForecast{
        width: px2rem(53*4);
        height: px2rem(233*4);
        display: inline-block;
        font-size: 0;
        position: relative;
        div{
            position: absolute;
            font-size: px2rem(12*4);
            color: white;
            top: px2rem(202*4);
            width: px2rem(53*4);
            text-align: center;

        }
        .dampness{
            font-size: px2rem(12*4);
            width: px2rem(53*4);
            text-align: center;
            position: absolute;
            top: px2rem(136*4);
        }
        .dampness + img{
            width: px2rem(15*4);
            height: px2rem(15*4);
            position: absolute;
            top: px2rem(170*4);
            left: px2rem(19*4);

        }
        span{
            display: block;
            line-height: px2rem(16*4);
            height: px2rem(16*4);
            position: absolute;
            font-size: px2rem(12*4);
            top:px2rem(57*4);
            text-align: center;
            width: px2rem(53*4);
            color: white;

        }
        .pop{
            width: px2rem(17*4);
            height: px2rem(22*4);
            position: absolute;
            top: px2rem(94*4);
            left: px2rem(19*4);


        }
        img{
            position: absolute;
            top: px2rem(15*4);
            left: px2rem(0*4);
            width: px2rem(14.4*14);
            height: px2rem(11.2*14);
            z-index: 999;
        }

    }
    .timeList{
        width: px2rem(375*4);
        height: px2rem(32*4);
        font-size: 0;
        background-color: rgba(255,255,255,0.1);
        div{
            width: px2rem(53*4);
            height: px2rem(32*4);
            line-height: px2rem(32*4);
            display: inline-block;
            font-size: px2rem(12*4);
            text-align: center;
            overflow: hidden;
            color: white;

        }

    }


</style>