<template>
    <div>
        <div class="changeLocation" v-if="showChangeLocation">
            <div>
                <span>切换位置</span>
                <span class="X" @click="showLocationList()">X</span>
                <div class="OptionalArea">
                    <div v-for="OptionalArea in OptionalAreas" @click="showLocationList();changeMessage(OptionalArea.placeLon,OptionalArea.placeLat,OptionalArea.placeName)">
                        {{OptionalArea.placeName}}</div>
                </div>
                <hr>
                <div class="LastArea">
                    <div v-for="LastArea in LastAreas" @click="showLocationList();changeMessage(LastArea.placeLon,LastArea.placeLat,LastArea.placeName)">{{LastArea.placeName}}</div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div :style="{backgroundImage: 'url(' +imgs.locationUrl + ')'}" alt="" class="location"></div>
            <div class="locationTip" @click="showLocationList()">
                {{this.locationTip}}
            </div>
            <!--<div class="pullDown" :style="{backgroundImage: 'url(' +imgs.pullDown + ')'}"></div>-->
            <div class="locationRenew">{{ajaxDate}}更新</div>
            <div  :style="{backgroundImage: 'url(' +imgs.refresh + ')'}" class="refresh" @click="replace(nowLon,nowLat)"></div>
            <div style="position: relative">
                <div class="numberShow">{{this.location.temp}}</div>
                <div class="numberMark">℃</div>
                <div class="weatherFont">{{this.location.weather}}</div>
            </div>
            <div class="changeImg"  :style="{backgroundImage: 'url(' +imgs.changeImg + ')'}"></div>
            <div class="sunUp">日出{{this.location.sunInfo.sunRise}}</div>
            <div class="sunDown">日落{{this.location.sunInfo.sunDown}}</div>
        </div>
        <div class="bannerBg" :style="{backgroundImage: 'url(' +imgs.bgImg + ')'}"></div>
        <div class="message" :style="{backgroundImage: 'url(' +imgs.bgColor + ')'}">
            <div class="messageWind">
                <div  :style="{backgroundImage:'url(' +imgs.windCar + ')'}" class="windCar"></div>
                <div class="font1">风向&nbsp;{{this.location.windDir}}</div>
                <div class="font2">风力&nbsp;{{this.location.windSpeed}}</div>
            </div>
            <div class="messageMoisture">
                <div class="icon-shidu" :style="{backgroundImage: 'url(' +imgs.iconMoisture + ')'}"></div>
                <div class="messageMoisture-font">湿度：{{this.location.rh}}</div>
            </div>
            <div class="messageAir">
                <div class="icon-air" :style="{backgroundImage: 'url(' +imgs.iconAir + ')'}"></div>
                <div class="messageAir-font">空气：{{api.aqi}}&nbsp;{{api.level}}</div>
            </div>
        </div>
        <div :style="{backgroundImage: 'url(' +imgs.bgColor + ')'}" class="areaWeather">
            <div class="header">
                周边地区
            </div>
            <div class="weatherArea" v-for="tab in tabs">
                <div class="long">
                    <div v-text="tab.city"></div>
                    <div>{{tab.tmp_min}}/{{tab.tmp_max}}℃</div>
                    <!--<div :style="{backgroundImage: 'url(' +imgs.weatherAreaIcon1 + ')'}"></div>-->
                    <img :src=tab.d alt="">
                    <img :src=tab.n alt="" class="otherImg">
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  import wx from 'weixin-js-sdk';
    import axios from 'axios';
  export default {
    data() {
      return {
        nowLon:"116.917",
        nowLat:"38.917",
        showChangeLocation:false,
        locationTip:"静海站",
        imgs:{
          locationUrl:require('./../assets/slice0/pin@2x.png'),
          pullDown:require('./../assets/slice0/arrow@2x.png'),
          refresh:require('./../assets/slice0/refresh@2x.png'),
          bgImg:require('./../assets/slice/bg.jpg'),
          changeImg:require('./../assets/slice0/sun5_7@2x.png'),
          iconMoisture:require('./../assets/slice0/icon-shidu@2x.png'),
          bgColor:require('./../assets/slice/bgcolor.jpg'),
          iconAir:require('./../assets/slice0/icon-aqi@2x.png'),
          windCar:require('./../assets/slice/风车.gif'),
          weatherAreaIcon1:require('./../assets/slice/weatherIcon/多云.png'),
          weatherAreaIcon2:require('./../assets/slice/weatherIcon/晴.png')
        },
        changes:{
          one:require('./../assets/slice0/sun5_7@2x.png'),
          two:require('./../assets/slice0/sun7_9@2x.png'),
          three:require('./../assets/slice0/sun9_11@2x.png'),
          four:require('./../assets/slice0/sun11_13@2x.png'),
          five:require('./../assets/slice0/sun13_15@2x.png'),
          six:require('./../assets/slice0/sun15_17@2x.png'),
          seven:require('./../assets/slice0/sun17_19@2x.png')
        },
        tabs:[{},{},{},{}],
        location:"",
        api:"",
        ajaxDate:"09:24",
        LastAreas:[{
          placeName:"北京",
          placeLon:"116.40",
          placeLat:"39.90"
        },
          {
            placeName:"沧州",
            placeLon:"116.83",
            placeLat:"38.30"
          },
          {
            placeName:"廊坊",
            placeLon:"116.70",
            placeLat:"39.52"
          },
          {
            placeName:"保定",
            placeLon:"115.47",
            placeLat:"38.87"
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

        ]




      }
    },
    methods:{
      showLocationList(name){
        this.showChangeLocation = ! this.showChangeLocation;
      },
      replace(lon,lat){
        const sunDate = new Date();
        const sunDateHours = sunDate.getHours();
        let haomiao = +new Date()
        this.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon='+lon+'&lat='+lat+'&v='+haomiao+'&type=2')
        //      this.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon=117.0527400000&lat=38.9453300000')
            .then((response)=>{
              this.location=response.data;
              console.log(response.data.closeCitys);
              this.tabs = response.data.closeCitys;
              this.tabs.forEach(
                  (tab,index)=> {
                    this.tabs[index]["d"] = tab.cond_txt_d;
                    this.tabs[index]["d"] = require('./../assets/slice/weatherIcon/'+ this.tabs[index]["d"] +'.png');
                    this.tabs[index]["n"] = tab.cond_txt_n;
                    this.tabs[index]["n"] = require('./../assets/slice/weatherIcon/'+ this.tabs[index]["n"] +'.png');
                    console.log(tab.cond_txt_n,index);
                  }
              )
              this.ajaxDate = sunDate.getHours()+":"+sunDate.getMinutes();
              //                  处理了closeCity的数据
              this.api= this.location.aiqInfo;
              console.log(this.location)
            }).catch((response)=>{
          console.log(response);
        })

//        处理日出日落图的方法

        switch (Math.floor((sunDateHours + 1) / 2)) {
          case 3:
            this.imgs.changeImg = this.changes.one;
            break;
          case 4:
            this.imgs.changeImg = this.changes.two;
            break;
          case 5:
            this.imgs.changeImg = this.changes.three;
            break;
          case 6:
            this.imgs.changeImg = this.changes.four;
            break;
          case 7:
            this.imgs.changeImg = this.changes.five;
            break;
          case 8:
            this.imgs.changeImg = this.changes.six;
            break;
          case 9:
            this.imgs.changeImg = this.changes.seven;
            break;
          default:
            this.imgs.changeImg = this.changes.seven;
            break;
        };



      },
      changeMessage(lon,lat,placename){
        this.nowLon = lon;
        this.nowLat = lat;
        let that = this;
        const sunDate = new Date();
        const sunDateHours = sunDate.getHours();
        this.locationTip = placename;
        this.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon='+lon+'&lat='+lat+'&type=1')
        //      this.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon=117.0527400000&lat=38.9453300000')
            .then((response)=>{
              this.location=response.data;
              console.log(response.data.closeCitys);
              this.tabs = response.data.closeCitys;
              this.tabs.forEach(
                  (tab,index)=> {
                    this.tabs[index]["d"] = tab.cond_txt_d;
                    this.tabs[index]["d"] = require('./../assets/slice/weatherIcon/'+ this.tabs[index]["d"] +'.png');
                    this.tabs[index]["n"] = tab.cond_txt_n;
                    this.tabs[index]["n"] = require('./../assets/slice/weatherIcon/'+ this.tabs[index]["n"] +'.png');
                    console.log(tab.cond_txt_n,index);
                  }
              )
              this.ajaxDate = sunDate.getHours()+":"+sunDate.getMinutes();
              //                  处理了closeCity的数据
              this.api= this.location.aiqInfo;
              console.log(this.location)
            }).catch((response)=>{
          console.log(response);
        })

//      处理日出日落图的方法
        switch (Math.floor((sunDateHours + 1) / 2)) {
          case 3:
            this.imgs.changeImg = this.changes.one;
            break;
          case 4:
            this.imgs.changeImg = this.changes.two;
            break;
          case 5:
            this.imgs.changeImg = this.changes.three;
            break;
          case 6:
            this.imgs.changeImg = this.changes.four;
            break;
          case 7:
            this.imgs.changeImg = this.changes.five;
            break;
          case 8:
            this.imgs.changeImg = this.changes.six;
            break;
          case 9:
            this.imgs.changeImg = this.changes.seven;
            break;
          default:
            this.imgs.changeImg = this.changes.seven;
            break;
        };
      }

    },
    mounted() {
      const sunDate = new Date();
      const sunDateHours = sunDate.getHours();
      let mountLon = "";
      let mountLat = "";
      let sunMonth = sunDate.getMonth();
      let sunDay = sunDate.getDate();
      let that = this
      console.log(sunDate.getHours());
      if (Number(sunDate.getMonth()+1)<10){
        sunMonth ='0'+(sunMonth+1);
      }else {

      }
      if (Number(sunDate.getDate())<10){
        sunDay='0'+sunDay;
      }else {

      }

      switch (Math.floor((sunDateHours + 1) / 2)) {
        case 3:
          that.imgs.changeImg = that.changes.one;
          break;
        case 4:
          that.imgs.changeImg = that.changes.two;
          break;
        case 5:
          that.imgs.changeImg = that.changes.three;
          break;
        case 6:
          that.imgs.changeImg = that.changes.four;
          break;
        case 7:
          that.imgs.changeImg = that.changes.five;
          break;
        case 8:
          that.imgs.changeImg = that.changes.six;
          break;
        case 9:
          that.imgs.changeImg = that.changes.seven;
          break;
        default:
          that.imgs.changeImg = that.changes.seven;
          break;
      };
         

//      处理时间参数的函数
//      该接口获取地址region;

//     获取用户当前的地理位置
      axios.get('http://132.232.85.47/sanming/public/script/getsignature.php').then(
        (response=>{
          console.log(response.data)
          let wxDate = response.data;
          wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wxDate.appId, // 必填，公众号的唯一标识
                timestamp: Number(wxDate.timestamp), // 必填，生成签名的时间戳
                nonceStr: wxDate.nonceStr, // 必填，生成签名的随机串
                signature: wxDate.signature,// 必填，签名
                jsApiList: ['getLocation','openLocation'] // 必填，需要使用的JS接口列表
});
             wx.ready(function(){
            console.log('接口配置成功');

            wx.checkJsApi({
            jsApiList: ['checkJsApi','openLocation'],
            success: function (res) {}
        });

              wx.getLocation({
                type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: res=> {
                    var latitude = res.latitude;   //纬度，浮点数
                    var longitude = res.longitude; //经度，浮点数
                    //以下这部分内容就是再通过异步操作逆地理编码获取真实的地址信息
                    // getLocationBylatlng(latitude, longitude);
                    // document.write( getLocationBylatlng(latitude, longitude))
                    that.nowLat = latitude
                    that.nowLon = longitude
                    console.log('当前的',that)

                    that.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon='+that.nowLon + '&lat='+that.nowLat+'&type=2')
          .then((response)=>{
            that.location=response.data;
            console.log(response.data.closeCitys);
            that.tabs = response.data.closeCitys;
            that.tabs.forEach(
                (tab,index)=> {
                  that.tabs[index]["d"] = tab.cond_txt_d;
                  that.tabs[index]["d"] = require('./../assets/slice/weatherIcon/'+ that.tabs[index]["d"] +'.png');
                  that.tabs[index]["n"] = tab.cond_txt_n;
                  that.tabs[index]["n"] = require('./../assets/slice/weatherIcon/'+ that.tabs[index]["n"] +'.png');
                  console.log(tab.cond_txt_n,index);
                }
            )
            that.ajaxDate = sunDate.getHours()+":"+sunDate.getMinutes();
            //                  处理了closeCity的数据
             that.api= that.location.aiqInfo;
             that.locationTip = response.data.location.address
            console.log(that.location)
          }).catch((response)=>{
        console.log(response);
      })
     处理日出日落图的方法
//      未来七天的天气情况的处理
                    console.log(res)
                },
                fail:that.changeMessage(116.917,38.917,'静海')
            });

            });


            wx.error(function(res){
          console.log(res);
          
      });


        })
      )


//      定义微信端获取到的经纬度数据
      //      该接口获取地址region;
//       that.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon='+this.nowLon + '&lat='+this.nowLat)
// //      this.$http.get('http://jh.liangnutech.com//jh/public/live/weather?lon=117.0527400000&lat=38.9453300000')
//           .then((response)=>{
//             that.location=response.data;
//             console.log(response.data.closeCitys);
//             that.tabs = response.data.closeCitys;
//             that.tabs.forEach(
//                 (tab,index)=> {
//                   that.tabs[index]["d"] = tab.cond_txt_d;
//                   that.tabs[index]["d"] = require('./../assets/slice/weatherIcon/'+ that.tabs[index]["d"] +'.png');
//                   that.tabs[index]["n"] = tab.cond_txt_n;
//                   that.tabs[index]["n"] = require('./../assets/slice/weatherIcon/'+ that.tabs[index]["n"] +'.png');
//                   console.log(tab.cond_txt_n,index);
//                 }
//             )
//             that.ajaxDate = sunDate.getHours()+":"+sunDate.getMinutes();
//             //                  处理了closeCity的数据
//              that.api= that.location.aiqInfo;
//             console.log(that.location)
//           }).catch((response)=>{
//         console.log(response);
//       })
//      处理日出日落图的方法
      // switch (Math.floor((sunDateHours + 1) / 2)) {
      //   case 3:
      //     that.imgs.changeImg = that.changes.one;
      //     break;
      //   case 4:
      //     that.imgs.changeImg = that.changes.two;
      //     break;
      //   case 5:
      //     that.imgs.changeImg = that.changes.three;
      //     break;
      //   case 6:
      //     that.imgs.changeImg = that.changes.four;
      //     break;
      //   case 7:
      //     that.imgs.changeImg = that.changes.five;
      //     break;
      //   case 8:
      //     that.imgs.changeImg = that.changes.six;
      //     break;
      //   case 9:
      //     that.imgs.changeImg = that.changes.seven;
      //     break;
      //   default:
      //     that.imgs.changeImg = that.changes.seven;
      //     break;
      // };
   
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
        .X{
          position: absolute;
          top: px2rem(100*4);
          font-size: px2rem(12*4);
          left:px2rem(150*4);
          color: #4A4A4A;
        }
        .LastArea{
            width: px2rem(280*4);
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
                margin-left: px2rem(6*4);
    
            }
            div:nth-child(1){
              margin-left: 8%;
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
                height: px2rem(0.5*4);
                color: gray;
                background-color: rgba(128,128,128,0.5);
                margin-top: px2rem(18*4);
                margin-bottom: px2rem(13*4);
                opacity: 0.3;
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
                    margin-bottom:px2rem(6*4);
                    font-size: px2rem(14*4);
                    line-height: px2rem(30*4);
                    text-align: center;
                    border: px2rem(1*4) solid rgba(43,173,232,0.35);
                    border-radius: px2rem(2*4);
                    margin-left: px2rem(4*4);
                    margin-right: px2rem(0*4);
                }

            }
        }
    }
    .bannerBg{
        width: px2rem(375*4);
        height: px2rem(398*4);
        background-size: cover;

    }
    .banner{
        width: px2rem(375*4);
        height: px2rem(398*4);
        position: absolute;
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
    .message{
        background:rgba(0,0,0,0.0981);
        width: px2rem(375*4);
        height: px2rem(146*4);
        position: relative;
        background-size: cover;
        border-bottom: px2rem(1*4) solid rgba(255,255,255,0.5);
        border-top: px2rem(1*4) solid rgba(255,255,255,0.5);
        .messageWind{
            width: px2rem(187*4);
            height: px2rem(144*4);
            display:inline-block;
            position: absolute;
            border-right: px2rem(1*4) solid rgba(255,255,255,0.5);
            .windCar{
                width: px2rem(63*4);
                height: px2rem(83*4);
                background-size: cover;
                margin-top:px2rem(25*4);
                display: inline-block;
            }
            .font1{
                width: auto;
                font-size: px2rem(14*4);
                line-height: px2rem(24*4);
                color: white;
                position: relative;
                top:px2rem(-76*4);
                left: px2rem(80*4);
            }
            .font2{
                width: auto;
                font-size: px2rem(14*4);
                line-height: px2rem(24*4);
                color: white;
                position: relative;
                top:px2rem(-66*4);
                left: px2rem(80*4);

            }

        }
        .messageMoisture{
            width: px2rem(187*4);
            height: px2rem(72*4);
            position: absolute;
            left: px2rem(187*4);
            border-bottom: px2rem(1*4) solid rgba(255,255,255,0.5);
            .icon-shidu{
                background-size: cover;
                width: px2rem(32*4);
                height: px2rem(32*4);
                display: inline-block;
                margin-top: px2rem(20*4);
                margin-left: px2rem(20*4);
            }
            .messageMoisture-font{
                display: inline-block;
                color: white;
                font-size: px2rem(13*4);
                line-height: px2rem(19*4);
                position: relative;
                top: px2rem(-10*4);
            }
        }
        .messageAir{
            width: px2rem(187*4);
            height: px2rem(72*4);
            position: absolute;
            left: px2rem(187*4);
            top: px2rem(72*4);
            .icon-air{
                background-size: cover;
                width: px2rem(32*4);
                height: px2rem(32*4);
                display: inline-block;
                margin-top: px2rem(20*4);
                margin-left: px2rem(20*4);
            }
            .messageAir-font{
                width: px2rem(120*4);
                display: inline-block;
                color: white;
                font-size: px2rem(13*4);
                line-height: px2rem(19*4);
                position: relative;
                top: px2rem(-10*4);

            }
        }

    }
    .areaWeather{
        width: px2rem(375*4);
        background-size: cover;
        position: relative;
        .header{
            color:white;
            font-size: px2rem(14*4);
            line-height: px2rem(39*4);
            height: px2rem(39*4);
            border-bottom: px2rem(1*4) solid rgba(255,255,255,0.3);
            padding-left: px2rem(12*4);
        }
        .weatherArea{
            height: px2rem(56*4);
            border-bottom: px2rem(1*4) solid rgba(255,255,255,0.3);
            position: relative;
            .long{
                height: px2rem(56*4);
                font-size: px2rem(16*4);
                line-height:px2rem(56*4) ;
                color: white;
                div{
                    display: inline-block;
                    margin-left: px2rem(31*4);
                    line-height:px2rem(56*4) ;
                }
                img{
                    position: absolute;
                    width: px2rem(14.4*15);
                    height: px2rem(11.2*15);
                    top: px2rem(8*4);
                    left: px2rem(236*4);
                }
                    .otherImg{
                        left: px2rem(308*4);
                }
            }
        }

    }




</style>