<template>
  <div class="hourlyForecast">
        <x-table>
          <tbody>
            <tr>
              <td v-for="(item,index) in hourReports">
                <div class="weatherSceneTdWrap">
                  <p class="weatherSceneTdText" style="margin-top:40%;margin-bottom:30%">{{item.time}}</p>
                  <img :src="item.weather" alt="weather" style="margin-bottom:20%">
                  <p class="weatherSceneTdText" style="margin-top:0%;margin-bottom:25%">{{item.temp}}C</p>
                  <img class="windDirection" :src="item.windDir" alt="weather" style="margin-top:0%;margin-bottom:25%">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">{{item.windSpeed}}风</p>
                </div>
              </td>
            </tr>
          </tbody>
        </x-table>
      </div>  
</template>
<script>
import { XTable } from 'vux'
  export default {
    data() {
      return {
        futures:[{},{},{},{},{},{},{}],
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

        }
      }
    },
    methods: {},
    mounted() {



    },
    components:{
      XTable
    },
    props:['hourReports']

  }
</script>
<style lang="scss">
   @import "../lib/hotcss/px2rem.scss";
.hourlyForecast{
    width: 100%;
    overflow: scroll;
    height: px2rem(200*4);
  }

  .weatherSceneTdWrap{
    width: px2rem(53*4);
  }
  .weatherSceneTdWrap img{
      width: px2rem(53.4*4);
      height:px2rem(40.6*4);
    }
  .weatherSceneTdWrap .windDirection{
    width: px2rem(14.4*4);
    height: px2rem(11.6*4);
  }
  .weatherSceneTdWrap p{
    margin: 0 0 px2rem(26*4) 0;
    color: #FFF;
    font-size: px2rem(12*4);/*px*/
  }
  .weatherSceneTdTextClose{
    margin:0px;
    height: px2rem(25*4);/*no*/
    line-height: px2rem(25*4);/*no*/
  }
  .vux-table td{
    padding-bottom: 20px;/*no*/
  }
</style>
<style scoped lang="scss">
//     @import "../lib/hotcss/px2rem.scss";
//     .prediction{
//         border-top: px2rem(1*4) solid rgba(255,255,255,0.4);
//         font-size: 0;
//         border-bottom: px2rem(1*4) solid rgba(255,255,255,0.4);
//     .prediction-children{
//         display: inline-block;
//         width: px2rem(53*4);
//         height: px2rem(200*4);
//         border-right: px2rem(0.5*4) solid rgba(255,255,255,0.4);
//         text-align: center;
//         position: relative;
//     span{
//         display: inline-block;
//         width: px2rem(27*4);
//         height: px2rem(16*4);
//         position: absolute;
//         color: white;
//         font-size: px2rem(12*4);
//         left: px2rem(13*4);
//         top: px2rem(18*4);
//     }
//     div{
//         display: inline-block;
//         width: px2rem(27*4);
//         height: px2rem(16*4);
//         position: absolute;
//         color: white;
//         font-size: px2rem(12*4);
//         left: px2rem(13*4);
//         top: px2rem(112*4);
//     }
//     img{
//         position: absolute;
//         top: px2rem(50*4);
//         left: px2rem(0*4);
//         width: px2rem(14.4*14);
//         height: px2rem(11.2*14);
//     }
//     .arrow{
//         position: absolute;
//         width: px2rem(15*4);
//         height: px2rem(15*4);
//         top: px2rem(137*4);
//         left: px2rem(17*4);
//     }
//     .arrow +div{
//         display: inline-block;
//         width: 100%;
//         height: auto;
//         left: 0;
//         text-align: center;
//         top: px2rem(165*4);
//     }
//     }
//     }
</style>