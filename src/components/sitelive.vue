<template>
    <div style="display: inline-block;font-size: 0;background-size: cover;height:3600px" :style="{backgroundImage: 'url(' +imgs.bgclound + ')'}">
        <div class="icon" :class="{active:icClick==1}" @click="iconClick(1);changeAjax('PRE_3h')" >
            <img :src="imgs.forecastIcon.rain" alt="">
            <div>降水</div>
        </div>
        <div class="icon" :class="{active:icClick==2}" @click="iconClick(2);changeAjax('TEM')">
            <img :src=imgs.forecastIcon.temperature alt="">
            <div>气温</div>
        </div>
        <div class="icon" :class="{active:icClick==3}" @click="iconClick(3);changeAjax('RHU')">
            <img :src=imgs.forecastIcon.humidity alt="">
            <div>湿度</div>
        </div>
        <div class="icon" :class="{active:icClick==4}" @click="iconClick(4);changeAjax('WIN_S_Max')">
            <img :src=imgs.forecastIcon.wind alt="">
            <div>风</div>
        </div>
        <div class="icon" :class="{active:icClick==5}" @click="iconClick(5);changeAjax('PRS')">
            <img :src=imgs.forecastIcon.windPress alt="">
            <div>气压</div>
        </div>
        <div class="doubleBtn">
            <!--按钮地图和列表的地方-->
            <img :src=btnList?imgs.btnList:imgs.btnListActice alt="" class="switch" @click="switchBtn(1)">
            <img :src=btnGis?imgs.btnGis:imgs.btnGisActice alt=""  class="switch" style="margin-left: 7%" @click="switchBtn(2)">
        </div>

        <!--显示降水和湿度等等的页面-->
        <img :src=imgs.timeIcon alt="" v-show="showList">
        <div v-show="showList">观测时间：{{this.observes.observe_time}}</div>
        <div class="ObservationList" v-show="showList">
            <div class="observation">
                <div style="background-color: red;border-radius: 50%;">1</div>
                <span>{{this.no1_3[0].stationName}}</span>
                <span>{{this.no1_3[0].value}}</span>
            </div>
            <div class="observation">
                <div style="background-color: #F5A623;border-radius: 50%;">2</div>
                <span>{{this.no1_3[1].stationName}}</span>
                <span>{{this.no1_3[1].value}}</span>
            </div>
            <div class="observation">
                <div style="background-color:#F8E71C;border-radius: 50%;">3</div>
                <span>{{this.no1_3[2].stationName}}</span>
                <span>{{this.no1_3[2].value}}</span>
            </div>
            <div class="observation" v-for="(observe,index) in observes.observe_data">
                <div style="background-color:#03A4FF;border-radius: 50%;">{{index+4}}</div>
                <span>{{observe.stationName}}</span>
                <span>{{observe.value}}</span>
            </div>
        </div >
        <!--显示地图的页面-->
        <div class="mapList" v-show="showMap">
            <div class="map" v-if="icClick != 1">
              <div class="headerOne" v-if="icClick==2">静海气温色斑图</div>
              <div class="headerOne" v-if="icClick==3">静海温度色斑图</div>
              <div class="headerOne" v-if="icClick==4">静海风色斑图</div>
              <div class="headerOne" v-if="icClick==5">静海气压色斑图</div>
              <div class="seban">
                <iframe ref="initIframe" id="1" src="/water/index.html?type=PRE_1h"></iframe>
              </div>
            </div>            
            <div class="map" v-if="icClick == 1">
                <div class="mapTitle">
                    <div :class="{active:btnNo==1}" @click="isBtn(1)">过去1h</div>
                    <div :class="{active:btnNo==2}" @click="isBtn(2)">过去3h</div>
                    <div :class="{active:btnNo==3}" @click="isBtn(3)">过去6h</div>
                    <div :class="{active:btnNo==4}" @click="isBtn(4)">过去12h</div>
                </div>
                <div class="header" v-if="patch==1">静海过去一小时降水色斑图</div>
                <div class="header" v-if="patch==2">静海过去三小时降水色斑图</div>
                <div class="header" v-if="patch==3">静海过去六小时降水色斑图</div>
                <div class="header" v-if="patch==4">静海过去十二小时降水色斑图</div>
                <div class="seban">
                    <iframe ref="initIframe" v-if="patch==1" id="1" src="/water/index.html?type=PRE_1h"></iframe>
                    <iframe v-if="patch==2" id="2" src="/water/index.html?type=PRE_3h"></iframe>
                    <iframe v-if="patch==3" id="3" src="/water/index.html?type=PRE_6h"></iframe>
                    <iframe v-if="patch==4" id="4" src="/water/index.html?type=PRE_12h"></iframe>
                </div>
            </div>
            <img :src=imgs.tip alt="" class="tip" align="left">
        </div>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        showList:true,
        showMap:false,
        postfix:"",
        patch:1,
        no1_3:{},
        observes:{},
        btnNo:1,
        imgs:{
          forecastIcon:{
            rain:require('./../assets/slice0/forecast_ico2@2x.png'),
            temperature:require('./../assets/slice0/forecast_ico1@2x.png'),
            humidity:require('./../assets/slice0/forecast_ico3@2x.png'),
            wind:require('./../assets/slice0/forecast_ico4@2x.png'),
            windPress:require('./../assets/slice0/forecast_ico5@2x.png')
          },
          btnList:require('./../assets/slice0/btn_list@2x.png'),
          btnListActice:require('./../assets/slice0/btn_list_pressed@2x.png'),
          btnGis:require('./../assets/slice0/btn_gis@2x.png'),
          btnGisActice:require('./../assets/slice0/btn_gis_pressed@2x.png'),
          timeIcon:require('./../assets/slice0/time@2x.png'),
          bg:require('./../assets/secaibi/bg_yubao.jpg'),
          tip:require('./../assets/sebiao/tuli_1rain.png'),
          tips:{
            rain1:require('./../assets/sebiao/tuli_1rain.png'),
            rain3:require('./../assets/sebiao/tuli_3rain.png'),
            rain6:require('./../assets/sebiao/tuli_6rain.png'),
            rain12:require('./../assets/sebiao/tuli_12rain.png'),
            feng:require('./../assets/sebiao/tuli_feng.png'),
            qiya:require('./../assets/sebiao/tuli_qiya.png'),
            shidu:require('./../assets/sebiao/tuli_shidu.png'),
            wendu:require('./../assets/sebiao/tuli_wendu.png'),

          },
          bgclound:require('./../assets/secaibi/bg_shikuan.jpg')

        },
        icClick:1,
        btnList:false,
        btnGis:true
      }
    },
    methods: {
      iconClick(n){
        this.icClick = n
        if (this.icClick == 1 && this.showMap == true) {
          this.$refs.initIframe.src = "/water/index.html?type=PRE_1h"
          this.imgs.tip = this.imgs.tips.rain1
        } else if(this.icClick == 2 && this.showMap == true) {
          this.$refs.initIframe.src = "/water/index.html?type=TEM"
            this.imgs.tip = this.imgs.tips.wendu
        } else if(this.icClick == 3 && this.showMap == true) {
          this.$refs.initIframe.src = "/water/index.html?type=RHU"
            this.imgs.tip = this.imgs.tips.shidu
        } else if(this.icClick == 4 && this.showMap == true) {
          this.$refs.initIframe.src = "/water/index.html?type=WIN_S_Max"
            this.imgs.tip = this.imgs.tips.feng
        } else if(this.icClick == 5 && this.showMap == true) {
          this.$refs.initIframe.src = "/water/index.html?type=PRS"
            this.imgs.tip = this.imgs.tips.qiya
        }
      },
      isBtn(n){
        this.btnNo = n;
        this.patch = n;
        switch(this.patch){
          case 1:
            this.imgs.tip = this.imgs.tips.rain1
            break;
            case 2:
            this.imgs.tip = this.imgs.tips.rain3
            break;
            case 3:
            this.imgs.tip = this.imgs.tips.rain6
            break;
            case 4:
            this.imgs.tip = this.imgs.tips.rain12
            break;
        }
        
      },
      changeAjax(type){
//        this.$http.get('http://jh.liangnutech.com//jh/public/live/stationInfo?type='+type)
        this.$http.get('http://jh.liangnutech.com//jh/public/live/stationInfo',{params:{
          type:type
        }})
            .then((response)=>{
              console.log(response.data);
              this.observes = response.data;
              this.observes.observe_data.forEach((item,index)=> {
                if (true){
                  if (Number(item.value)> 9000 || item.value==0){
                    item.value = "0";
                    this.observes.observe_data.push(item);
                    this.observes.observe_data.shift();
                  }
                  else {
                    console.log(item.value);
                    switch (type){
                      case 'PRE_3h':
                        item.value = item.value + "mm";
                        break;
                      case 'TEM':
                        item.value = item.value + "℃";
                        break;
                      case 'RHU':
                        item.value = item.value + "%";
                        break;
                      case 'PRS':
                        item.value = item.value + "pa";
                        break;
                      case 'WIN_S_Max':
                        item.value = item.value + "m/s";
                        break;
                      default:
                        item.value = item.value + "mm";
                        break;
                    }

                  }
                }
                else {
                }

              })
              this.no1_3 = this.observes.observe_data.splice(0,3);
            }).catch((response)=>{
          console.log(response);
        })

      },
      switchBtn(e){
        if (e==1){
          this.btnList = false;
          this.btnGis = true;
          this.showList = true;
          this.showMap = false;

        }
        else {
          this.btnList = true;
          this.btnGis = false;
          this.showList = false;
          this.showMap = true;
          if (this.icClick == 1) {
            this.$refs.initIframe.src = "/water/index.html?type=PRE_1h"
          } else if(this.icClick == 2) {
            this.$refs.initIframe.src = "/water/index.html?type=TEM"
          } else if(this.icClick == 3) {
            this.$refs.initIframe.src = "/water/index.html?type=RHU"
          } else if(this.icClick == 4) {
            this.$refs.initIframe.src = "/water/index.html?type=WIN_S_Max"
          } else if(this.icClick == 5) {
            this.$refs.initIframe.src = "/water/index.html?type=PRS"
          }
        }
      }
    },
    mounted() {
      this.$http.get('http://jh.liangnutech.com//jh/public/live/stationInfo?type=PRE_3h')
          .then((response)=>{
        console.log(response.data);
        this.observes = response.data;
//         this.observes.observe_data.value.forEach(function (item) {
//           item.value= item.value+"mm";
//         })
            this.observes.observe_data.forEach((item,index)=> {
              if (item.value){
                if (Number(item.value)> 9000||Number(item.value)==0) {
                  item.value = "0";
                }
                else {
                  item.value = item.value + "mm";
                }
              }


            })
        console.log(this.observes.observe_data.splice(0,3));
        this.no1_3 = this.observes.observe_data.splice(0,3);
          }).catch((response)=>{
        console.log(response);
        
      })
    }

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .icon{
        width: px2rem(74*4);
        height: px2rem(86*4);
        background-color: rgba(0,0,0,0.4);
        display: inline-block;
        border-left: px2rem(1*4) solid rgba(255,255,255,0.1);
        img{
            width: px2rem(35*4);
            height: px2rem(35*4);
            margin-left: px2rem(18*4);
            margin-top: px2rem(7*4);
        }
        div{
            width: px2rem(74*4);
            font-size: px2rem(14*4);
            color: white;
            text-align: center;
            margin-top: px2rem(12*4);
        }
    }
    .icon.active{
        background-color: #28BAF3;

    }
    .mapList{
        width: px2rem(375*4);
        height: px2rem(447*4);
        .tip{
            margin-left: px2rem(42*4);
            margin-top: px2rem(6*4);
            width: px2rem(282*4);
            height: px2rem(27*4);
            display: inline-block;
            position: relative;
        }
        .tip + div{
            font-size: px2rem(14*4);
            color: white;
            display: inline-block;
            height: px2rem(20*4);
            margin-top: px2rem(10*4);
            margin-left: px2rem(10*4);
        }
        .map{
            width: px2rem(340*4);
            height: px2rem(415*4);
            background-color: rgba(34,89,161,0.8);
            margin-left: px2rem(18*4);
            margin-top: px2rem(15*4);
            overflow: hidden;
            .seban{
                width: 100%;
                height: px2rem(315*4);
                display: flex;
                justify-content: center;
                margin: 0;
                iframe{
                    width: px2rem(340*4);
                    height: px2rem(305*4);
                    margin: 0 auto;
                    border: 0;

                }
            }
            .header{
                width: px2rem(340*4);
                height: px2rem(20*4);
                line-height: px2rem(20*4);
                font-size: px2rem(14*4);
                text-align: center;
                color: white;
                margin-top: px2rem(25*4);
            }
            .headerOne{
                width: px2rem(340*4);
                height: px2rem(20*4);
                line-height: px2rem(20*4);
                font-size: px2rem(14*4);
                text-align: center;
                color: white;
                margin-top: px2rem(25*4);
                margin-bottom: px2rem(25*4);
            }
            .mapTitle{
                width: px2rem(375*4);
                height: px2rem(25*4);
                margin-left: px2rem(42*4);
                margin-top: px2rem(32*4);
                div{
                    width: px2rem(56*4);
                    height: px2rem(24*4);
                    background-color: rgba(255,255,255,0.2);
                    display: inline-block;
                    font-size: px2rem(12*4);
                    color: white;
                    line-height: px2rem(24*4);
                    text-align: center;
                    border-radius: 10%;
                    margin-left: px2rem(6*4);
                }
                div.active{
                    background-color: #28BAF3;
                }

            }
        }
    }
    .doubleBtn{
        .switch{
            width: px2rem(40*4);
            height: px2rem(40*4);
            margin-left: px2rem(138*4);
            margin-top: px2rem(15*4);
        }

    }
    .doubleBtn +img{
        width: px2rem(13*4);
        height: px2rem(13*4);
        font-size: px2rem(14*4);
        margin-left: px2rem(84*4);
        display: inline-block;
        margin-top: px2rem(15*4);
    }
    .doubleBtn +img +div{
        height: px2rem(20*4);
        font-size: px2rem(14*4);
        color: white;
        display: inline-block;
        margin-left: px2rem(6*4);
    }
    .ObservationList{
        display: inline-block;
        width: px2rem(375*4);
        height: auto;
        margin-top: px2rem(10*4);
        .observation{
            width: px2rem(340*4);
            margin-left: px2rem(17*4);
            height: px2rem(40*4);
            background-color: rgba(34,89,161,0.8);
            margin-bottom: px2rem(4*4);
            overflow: hidden;
            border-radius: 3%;

            div{
                width: px2rem(18*4);
                height: px2rem(18*4);
                margin-top: px2rem(10*4);
                margin-left: px2rem(6*4);
                color: white;
                font-size: px2rem(10*4);
                text-align: center;
                line-height: px2rem(18*4);
                display: inline-block;
            }
            span{
                width: px2rem(140*4);
                height: px2rem(20*4);
                display: inline-block;
                font-size: px2rem(14*4);
                line-height: px2rem(20*4);
                color: white;
                margin-top: px2rem(10*4);
                margin-left: px2rem(5*4);
            }
            span+span{
                width: auto;
                height: px2rem(20*4);
                display: inline-block;
                font-size: px2rem(14*4);
                line-height: px2rem(20*4);
                color: white;
                margin-top: px2rem(10*4);
                margin-left: px2rem(90*4);
            }
        }
    }







</style>