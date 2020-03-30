<template>
    <div  style="background-color: #2259A1;height: auto;overflow: hidden" class="box">
        <div :style="{backgroundImage: 'url(' +imgs.locationUrl + ')'}" class="locationIcon"></div>
        <div>{{text[Number(this.getUrl.qid)].title}}</div>
        <div class="rankStar">{{text[Number(this.getUrl.qid)].rank}}</div>
        <div>{{text[Number(this.getUrl.qid)].profile}}</div>
        <div class="banner">
            <div :style="{backgroundImage:'url('+imgs.banner1+')'}"></div>
            <div :style="{backgroundImage:'url('+imgs.banner2+')'}"></div>
            <div :style="{backgroundImage:'url('+imgs.banner3+')'}"></div>
        </div>
        <div class="comment">
            {{text[Number(this.getUrl.qid)].mainText}}
        </div>
        <hr style="opacity: 0.5">
        <div class="serveHeader">
            <span class="last">逐小时预报</span>
        </div>
        <div class="prediction">
            <div class="prediction-children" v-for="hourMessage in hourMessages">
                <span>{{hourMessage.time}}</span>
                <img :src=hourMessage.weather alt="">
                <div>{{hourMessage.temp}}°</div>
                <img :src=hourMessage.windDir class="arrow">
                <div>{{hourMessage.windSpeed}}级</div>
            </div>
        </div>
        <div class="serveHeader">
            <span class="last">未来{{reportDays.length}}天预报</span>
            <hr style="margin-top: 0;opacity: 0">

        </div>

        <div class="future" v-for="reportDay in reportDays">
            <div class="data">
                <div>{{reportDay.day}}<br> {{reportDay.week}}</div>
            </div>
            <div class="future-daytime">
                <img :src=reportDay.dayWeather.weatherImg alt="">
                <div>{{reportDay.dayWeather.weather}}</div>
                <div style="margin-left: 20%">{{reportDay.dayWeather.temp}}°</div>
                <div style="margin-left: 45%">{{reportDay.windDir}}{{reportDay.windSpeed}}级</div>
            </div>
            <div class="future-night">
                <img :src=reportDay.nightWeather.weatherImg alt="">
                <div>{{reportDay.nightWeather.weather}}</div>
                <div style="margin-left: 20%">{{reportDay.nightWeather.temp}}°</div>
                <div style="margin-left: 45%">{{reportDay.windDir}}{{reportDay.windSpeed}}级</div>
            </div>
        </div>
    </div>



</template>
<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    data() {
      return {
        getUrl:"",
        reportDays:[{},{},{}],
        hourMessages:"",
        onlineInfo:{
          reportDays:""
        },
        text:[
          {},
          {
              no:"1",
              title:"仁爱团泊湖国际休闲博览园",
              mainText:"  位于静海区团泊新城内的仁爱团泊湖国际休博园是集生态休闲、\n" +
              "            商务会展、温泉度假和生态居住为一体的国家AAAA级景区。她是根据天\n" +
              "            津城市总体规划的定位，集中湖泊、河流、湿地等自然景观的最适宜人\n" +
              "            居的休闲新城。\n" +
              "            景区自2009年6月进入创建阶段，2009年10月成功申报\n" +
              "            国家AAAA级景区。仁爱集团引入世界先进的规划理念，引进参与了“迪拜”\n" +
              "            规划设计的澳大利亚迪生（dickson rothschilc）规划设计顾问公司、美国nbbj\n" +
              "            设计公司、美国泛亚国际设计公司及美国edsa设计公司的世界级先进设计理念，结\n" +
              "            合团泊新城城市功能整体的构建，对休博园进行科学的论证设计。并聘请中国驰名的\n" +
              "            “王志纲”工作室，北京大学旅游学院下属的“大地风景”旅游地产咨询机构，对休\n" +
              "            博园的运营，资源利用进行了极具前瞻性的研究论证。",
              rank:"AAAA",
              profile:"最适宜人居的休闲新城"
            },
          {
            no:"2",
            title:"萨马兰奇纪念馆",
            mainText:"萨马兰奇纪念馆，国家AAAA级景区，整体占地约14.4万平方米，" +
            "由1.9万平方米的主体建筑和奥林匹克雕塑公园组成，主体建筑呈现两个圆形交合效果，" +
            "一是以“8”的形状纪念2008年北京奥运会，二是“S”形状代表萨马兰奇名字“Samaranch”的第" +
            "一个字母，三是该形状象征着无限发展和永恒之意。萨马兰奇纪念馆现展示萨马兰奇先生生前收" +
            "藏的珍品及其私人用品共计16578件。纪念馆将延续萨马兰奇先生对体育、文化、艺术的追求，" +
            "成为集国际体育文物珍品展陈、文化艺术交流、大型会展会议论坛及旅游休闲于一体的国际级" +
            "高品质、多元化综合体。 ",
            rank:"AAAA",
            profile:"形形色色的展品中凝结着各种各样的往事"
          },
          {
            no:"3",
            title:" 西双塘民俗风景区",
            mainText:"  西双塘民俗风景区，国家AAA级景区，坐落于享有“中国十大魅力乡村”、" +
            "“中国乡村旅游模范村”称号的西双塘。拥有东五台寺、明清古街、中国农宅、荷花塘、凤" +
            "凰湖、“天下第一象”、凤凰湖黄金海岸海南风情水上乐园等景点。 ",
            rank:"AAA",
            profile:"中国十大魅力乡村"
          },
          {
            no:"4",
            title:"光合谷旅游度假区",
            mainText:"  国家AAAA级景区，位于静海素有“中国温泉之城”称号的团泊新城东区，距" +
            "天津中心城区16公里。度假区的温泉地热资源极其丰富，资源储量达84亿立方米，光合谷" +
            "汇聚当地特色和文化精髓，精准把握天然温泉区域的地理优势，精心规划建设庞大的休" +
            "闲区域，确立了青年文化、温泉酒店、生态湿地、有机种植为核心的四大体系。 ",
            rank:"AAAA",
            profile:"位于中国温泉之城"
          },
          {
            no:"5",
            title:"绿源生态园",
            mainText:"  绿源生态园,国家AA级景区，占地2200亩，地处京津都市圈，地理资源丰富，" +
            "天津九大河中的大清河、子牙河平行贯穿全镇，且地下资源丰富，土壤肥沃，树木成林，" +
            "是集餐饮、垂钓、采摘、农活体验、休闲度假为一体的大型综合性生态园。园区内按功能" +
            "分为特色种植采摘区及商务休闲区。",
            rank:"AA",
            profile:"大型综合性生态园"
          },
          {
            no:"6",
            title:"林海经济循环区",
            mainText:"  该区是被中国绿协等四部门命名的国家绿色农业示范区，2013年被国家林业局确定为20个首批" +
            "“国家林下经济示范基地”之一，成为天津市唯一获此殊荣的区县。规划面积134平方公里，位于静海西" +
            "北部，是以绿色为主打的生态园区。园区森林覆盖率较高，林区面积已达12万亩，共有树种134个、苗木1560" +
            "万株。区内苗木每年可吸收二氧化碳290余万吨，释放氧气210余万吨，消化吸收各类灰尘300余万吨，是" +
            "天津市西南部地区重要的生态屏障和天然氧吧。",
            rank:"",
            profile:"大型综合性生态园"
          },
          {
            no:"7",
            title:"大邱庄镇",
            mainText:"  大邱庄人早已抛弃“天下第一庄”之名，如今打着“中国焊管第一乡”的名号对外宣传" +
            "，并且，有数据显示这已经是个“以钢为纲”的乡镇，早在2006年时，钢铁的总产量达到了726万吨，" +
            "焊管产量达到370万吨，当之无愧是中国最大的生产基地。大邱庄镇主管宣传的杨主任在接受媒体采访时，" +
            "透露了下面的数据：从2002年下半年起，大邱庄的经济开始逐步复苏。2003年实现财政收入7200万，" +
            "2004年实现财政收入1.5亿元，2006年又攀升到了2.4亿元的高度，2007年基本达到3亿元，农民人均纯收入达" +
            "8500元。",
            rank:"",
            profile:"爱国主义教育基地"
          },

        ],
        imgs:{
          banner1:require('./../assets/slice/secaibi/jq1_1@2x.png'),
          banner2:require('./../assets/slice/secaibi/jq1_2@2x.png'),
          banner3:require('./../assets/slice/secaibi/jq1_3@2x.png'),
          arrowUrl:require('./../assets/slice0/arrow@2x.png'),
          locationUrl:require('./../assets/slice0/pin@2x.png'),
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
        futures:[{},{},{},{},{},{},{}]

      }
    },
    components:{
      Flexbox,
      FlexboxItem
    },
    mounted(){
      let $_GET = (function(){
        var url = window.document.location.href.toString();
        var u = url.split("?");
        if(typeof(u[1]) == "string"){
          u = u[1].split("&");
          var get = {};
          for(var i=0;i<u.length;i++){
            var j = u[i].split("=");
            get[j[0]] = j[1];
          }
          return get;
        } else {
          return {};
        }
      })();
      this.imgs.banner1 = require('./../assets/secaibi/lvyou'+$_GET.qid+'_1.jpg')
      this.imgs.banner2 = require('./../assets/secaibi/lvyou'+$_GET.qid+'_2.jpg')
      this.imgs.banner3 = require('./../assets/secaibi/lvyou'+$_GET.qid+'_3.jpg')
      this.getUrl = $_GET;

      console.log(this.getUrl);
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
      this.$http.get('http://jh.liangnutech.com//jh/public/report/weather/dayHourWeather?lon=' +
      $_GET.lon+'&lat='+$_GET.lat+'&date=2019-'+sunMonth+'-'+sunDay+'&type=1')
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
      this.$http.get('http://jh.liangnutech.com//jh/public/report/weather?lon=' +
          $_GET.lon+'&lat='+$_GET.lat +'&type=1')
          .then((response=>{
            const sunDate = new Date();
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
            this.reportDays = this.onlineInfo.reportDays
          })).catch((response)=>{
        console.log('无法',response);
      })

    }
  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .box{
        width: px2rem(375*4);
        height: auto;
        max-height: 999999px;
        hr{
            color: rgba(255,255,255,0.4);
            margin-top: px2rem(29*4);
        }
        .rankStar{
            margin-left: px2rem(104*4);
            border-radius: px2rem(2*4);
            background-color: #1DCB98;
            height: px2rem(16*4);
            line-height: px2rem(16*4);
            font-size: px2rem(12*4);
            color: #FFFFFF;
            display: inline-block;
            text-align: center;
        }
        .rankStar + div{
            font-size: px2rem(12*4);
            display: inline-block;
            color: white;
        }
        .banner{
            position: relative;
            width: px2rem(350*4);
            height: px2rem(112*4);
            padding-left: px2rem(12*4);
            padding-right: px2rem(12*4);
            top: px2rem(20*4);
            div{
                width: px2rem(112*4);
                height: px2rem(112*4);
                font-size: px2rem(0);
                display: inline-block;
                background-size: cover;
            }

        }
        .serveHeader{
            span {
                font-size: px2rem(12*4);
                color: #FFFFFF;
                display: inline-block;
                padding-left: px2rem(13*4);
                line-height: px2rem(40*4);
            }
            .last{
                font-size: px2rem(14*4);
            }
        }
        .prediction{
            border-top: px2rem(1*4) solid rgba(255,255,255,0.4);
            font-size: 0;
            border-bottom: px2rem(1*4) solid rgba(255,255,255,0.4);
            .prediction-children{
                display: inline-block;
                width: px2rem(53*4);
                height: px2rem(200*4);
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
                div{
                    display: inline-block;
                    width: px2rem(27*4);
                    height: px2rem(16*4);
                    position: absolute;
                    color: white;
                    font-size: px2rem(12*4);
                    left: px2rem(13*4);
                    top: px2rem(112*4);
                }
                img{
                    position: absolute;
                    top: px2rem(50*4);
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
            }

        }
        .future{
            width: px2rem(375*4);
            height: px2rem(100*4);
            font-size: 0;
            position: relative;
            margin-bottom: px2rem(10*4);
            .data{
                background-color: rgba(0,0,0,0.2);
                font-size: px2rem(14*4);
                color: white;
                width: px2rem(72*4);
                height: px2rem(100*4);
                padding-left: px2rem(15*4);
                display: inline-block;
                position: relative;
                div{
                    position: absolute;
                    top: px2rem(33*4);
                }
            }
            .future-daytime{
                width: px2rem(288*4);
                height: px2rem(50*4);
                display: inline-block;
                color: white;
                font-size: px2rem(14*4);
                position: absolute;
                background-color: rgba(255,255,255,0.1);
                img{
                    width: px2rem(14.4*15);
                    height: px2rem(11.2*15);
                }
               div:first-child{
                   width: px2rem(14.4*8);
                   height: px2rem(11.2*8);
                   display: inline-block;
                }
                div{
                    position: absolute;
                    top: px2rem(12*4);
                    height: px2rem(19*4);
                    width: px2rem(200*4);
                    display: inline-block;
                }
            }
            .future-night{
                width: px2rem(288*4);
                height: px2rem(50*4);
                display: inline-block;
                color: white;
                font-size: px2rem(14*4);
                position: absolute;
                top: px2rem(50*4);
                background-color: rgba(255,255,255,0.1);
                img{
                    width: px2rem(14.4*15);
                    height: px2rem(11.2*15);
                }
                div:first-child{
                    width: px2rem(14.4*8);
                    height: px2rem(11.2*8);
                    display: inline-block;
                }
                div{
                    position: absolute;
                    top: px2rem(12*4);
                    height: px2rem(19*4);
                    width: px2rem(200*4);
                    display: inline-block;
                }
            }
        }

        .comment{
            font-size: px2rem(12*4);
            margin-top: px2rem(35*4);
            width: px2rem(348*4);
            padding-left: px2rem(13*4);
            color: white;
            line-height: px2rem(17*4);

        }
    }

    .locationIcon{
        width: px2rem(10*4) ;
        height: px2rem(13*4);
        background-size: cover;
        margin-left: px2rem(94*4);
        margin-top: px2rem(24*4);
        display: inline-block;
    }
    .locationIcon + div{
        font-size: px2rem(16*4);
        display: inline-block;
        color: white;
        width: px2rem(250*4);
    }
</style>