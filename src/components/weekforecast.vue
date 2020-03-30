<template>
    <div class="prediction">
        <canvas id="main" width="750" height="300"></canvas>
        <div class="prediction-children" v-for="(reportDay,index) in reportDays" 
        @click="changeOp(index)" :class="{active:op==index}">
            <span>{{reportDay.time}}</span>
            <span>{{reportDay.week}}</span>
            <img :src=reportDay.dayWeather.weatherImg alt="">
            <div>{{reportDay.dayWeather.weather}}</div>
            <div>{{reportDay.dayWeather.temp}}°</div>
            <div class="bottom">{{reportDay.nightWeather.temp}}°</div>
            <div class="bottom" style="top:65%">{{reportDay.nightWeather.weather}}</div>
            <img class="bottom-img" :src=reportDay.nightWeather.weatherImg>
            <div>{{reportDay.windDir}}</div>
            <div>{{reportDay.windSpeed}}级</div>
        </div>
    </div>
</template>
<script>
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    props:['reportDays'],
    data() {
      return {
        futures:[{},{},{},{},{},{},{}],
        // reportDays:[],
        imgs:{
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
        op:false
      }
    },
    watch:{
      reportDays(newValue,oldValue){
         let DayWeiDu = [];
      this.reportDays.forEach((item)=>{
        DayWeiDu.push(item.dayWeather.temp)
      });
      let NightWeiDu = [];
      this.reportDays.forEach((item)=>{
        NightWeiDu.push(item.nightWeather.temp)
      });
      var main=document.getElementById("main");
      let myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      var  option = {
        title: {
        },
       grid:{
          top:'15%',
          bottom:'10%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis:  {
          show:false,
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日'],
          splitLine:{
            show:false
          }

        },
        yAxis: {
          show:false,
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          },
          splitLine:{
            show:false
          }

        },
        series: [
          {
            name:'白天气温',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,
            data:DayWeiDu,
            itemStyle : {
              normal : {
                color:'#F9B632',
                lineStyle:{
                  width:12//设置线条粗细
                }
              }
            }
          },
          {
            name:'夜晚气温',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 16, //设定实心点的大小
            data:NightWeiDu,
            lineStyle:{
              color:'#00FF00'
            },
            itemStyle: {
              normal: {
                color: '#00ADEF',
                lineStyle:{
                  width:12,//设置线条粗细
                  borderWidth:0
                }
              }
            }
          }
        ]
      }
      myChart.setOption(option);
      this.reportDays = newValue;
    }


      },


    methods: {
     changeOp(index){
        this.op = index;
        this.$emit("index-click",this.op)
      },
      changeDate(){
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
          xAxis:  {
            show:false,
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            splitLine:{
              show:false
            }

          },
          series: [{
            // 根据名字对应到相应的系列
            name: '白天气温',
            type:'line',
            data: [15, 15, 15, 15, 15, 15, 15]
          }]
        });
      }
    },
    mounted() {
      let DayWeiDu = [];
          this.reportDays.forEach((item)=>{
            DayWeiDu.push(item.dayWeather.temp)
      });
      let NightWeiDu = [];
      this.reportDays.forEach((item)=>{
        NightWeiDu.push(item.nightWeather.temp)
      });
      var main=document.getElementById("main");
      let myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      var  option = {
        title: {
        },
        tooltip: {
          trigger: 'axis'
        },
        grid:{
          top:'15%',
          bottom:'10%'
        },
        xAxis:  {
          show:false,
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日'],
          splitLine:{
            show:false
          }

        },
        yAxis: {
          show:false,
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          },
          splitLine:{
            show:false
          }

        },
        series: [
          {
            name:'白天气温',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 18,
            data:DayWeiDu,
            itemStyle : {
              normal : {
                color:'#F9B632',
                lineStyle:{
                  width:4//设置线条粗细
                }
              }
            }
          },
          {
            name:'夜晚气温',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 18, //设定实心点的大小
            data:NightWeiDu,
            lineStyle:{
              color:'#00FF00'
            },
            itemStyle: {
              normal: {
                color: '#00ADEF',
                lineStyle:{
                  width:4,//设置线条粗细
                  borderWidth:0
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    updated(){
      let DayWeiDu = [];
      this.reportDays.forEach((item)=>{
        DayWeiDu.push(item.dayWeather.temp)
      });
      let NightWeiDu = [];
      this.reportDays.forEach((item)=>{
        NightWeiDu.push(item.nightWeather.temp)
      });
      var main=document.getElementById("main");
      let myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      var  option = {
        title: {
        },
        grid:{
          top:'15%',
          bottom:'10%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis:  {
          show:false,
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日'],
          splitLine:{
            show:false
          }

        },
        yAxis: {
          show:false,
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          },
          splitLine:{
            show:false
          }

        },
        series: [
          {
            name:'白天气温',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 18,
            data:DayWeiDu,
            itemStyle : {
              normal : {
                color:'#F9B632',
                lineStyle:{
                  width:4//设置线条粗细
                }
              }
            }
          },
          {
            name:'夜晚气温',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 18, //设定实心点的大小
            data:NightWeiDu,
            lineStyle:{
              color:'#00FF00'
            },
            itemStyle: {
              normal: {
                color: '#00ADEF',
                lineStyle:{
                  width:4,//设置线条粗细
                  borderWidth:0
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .prediction{
        border-top: px2rem(1*4) solid rgba(255,255,255,0.4);
        font-size: 0;
        border-bottom: px2rem(1*4) solid rgba(255,255,255,0.4);
        height: px2rem(460*4);
        position: relative;
        #main{
            height: px2rem(150*4);
            width: px2rem(375*4);
            position: absolute;
            top: px2rem(175*4);
        }
    .active{
      background-color: rgba(255, 255, 255,0.15);
    }
    .prediction-children{
        display: inline-block;
        width: px2rem(52.5*4);
        height: px2rem(460*4);
        border-right: px2rem(0.5*4) solid rgba(255,255,255,0.4);
        text-align: center;
        position: relative;
    span{
        display: inline-block;
        width: px2rem(27*4);
        height: px2rem(16*4);
        position: absolute;
        color: white;
        font-size: px2rem(12*4);
        left: px2rem(13*4);
        top: px2rem(18*4);
    }
        span+span{
            display: inline-block;
            width: px2rem(27*4);
            height: px2rem(16*4);
            position: absolute;
            color: white;
            font-size: px2rem(12*4);
            left: px2rem(13*4);
            top: px2rem(36*4);

        }
    div{
        display: inline-block;
        width: px2rem(53*4);
        height: px2rem(16*4);
        position: absolute;
        color: white;
        text-align: center;
        font-size: px2rem(12*4);
        left: px2rem(-0*4);
        top: px2rem(140*4);
    }

        div+div{
            display: inline-block;
            width: px2rem(27*4);
            height: px2rem(16*4);
            position: absolute;
            color: white;
            font-size: px2rem(12*4);
            left: px2rem(13*4);
            top: px2rem(170*4);


        }
    img{
        position: absolute;
        top: px2rem(90*4);
        left: px2rem(0*4);
        width: px2rem(14.4*14);
        height: px2rem(11.2*14);
    }
    .arrow{
        position: absolute;
        width: px2rem(15*4);
        height: px2rem(15*4);
        top: px2rem(137*4);
        left: px2rem(17*4);
    }
    .arrow +div{
        display: inline-block;
        width: 100%;
        height: auto;
        left: 0;
        text-align: center;
        top: px2rem(165*4);
    }
        .bottom{
            position: absolute;
            width: px2rem(53*4);
            left: 0;
            text-align: center;
            top: px2rem(269*4);
            .bottom .last{
                top: px2rem(294*4);
            }
        }
    .bottom-img{
        position: absolute;
        top: px2rem(336*4);
        width: px2rem(14.4*14);
        height: px2rem(11.2*14);

    }
        .bottom-img +div{
            position: absolute;
            top: px2rem(382*4);
            font-size: px2rem(12*4);
            width: px2rem(40*4);
            left: px2rem(5*4);

        }
        .bottom-img +div+div{
            position: absolute;
            top: px2rem(403*4);
            font-size: px2rem(12*4);
            width: px2rem(40*4);
            left: px2rem(5*4);

        }

    }
        .last{
            display: inline-block;
            width: px2rem(53*4);
            height: px2rem(460*4);
            border-right: px2rem(0.5*4) solid rgba(255,255,255,0.4);
            text-align: center;
            position: relative;

        }

    }
</style>