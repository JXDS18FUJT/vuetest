<template>
    <div style="background-color: #2259A1;height: auto;overflow: hidden" class="box">
        <div :style="{backgroundImage: 'url(' +imgs.locationUrl + ')'}" class="locationIcon">

        </div>
        <div class="header" v-text="header"></div>
        <img :src=imgs.banner alt="网速不佳,请重试">
        <div class="comment" v-text="comment">
        </div>
        <hr>
        <div class="serverHeader">
            <span>服务产品</span>
            <div class="box-downArea-report" v-for="downArea in downAreas">
                <img :src=imgs.pdfImgUrl alt="">
                <div class="box-location">
                    <div class="title" @click="view(downArea.url)">{{downArea.title}}</div>
                    <div  style="margin-bottom: 3%;opacity: 0.5">{{downArea.time}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs:{
          locationUrl:require('./../assets/slice0/pin@2x.png'),
          banner:require('./../assets/slice/saishi-1.jpg'),
          pdfImgUrl:require('./../assets/slice0/pdf-iocn@2x.png')
        },
        downAreas:[{},{},{}],
        queryUrl:"",
        venuesMessage:{
          "1":"该场规划位于天津市静海区团泊新城西区天津体育学院校内，" +
          "占地29215平方米，建筑面积11436平方米，距全运村约26公里。比赛场" +
          "地长150米，宽90米；观众座席9282个；附属设施包括：运动员休息室、" +
          "裁判员休息室、兴奋剂检查站、贵宾室、新闻发布厅等。",

          "2":"该馆规划位于天津市静海区团泊新城西区天津中医药大学校内，占地59511" +
          "平方米，建筑面积17010平方米，距全运村约25公里。比赛场地长56.2米，宽36.2米，" +
          "高28米；观众固定座席3959个；活动座席1076个；主席台座位68个；附属设施包括" +
          "：运动员休息室、裁判员休息室、兴奋剂检查站、贵宾室、新闻发布厅等。赛前热身" +
          "馆场地长40米，宽33米。",

          "3":"该馆规划位于天津市静海区团泊新城西区天津中医药大学校内，占地59511平方米，" +
          "建筑面积17010平方米，距全运村约25公里。比赛场地长56.2米，宽36.2米，高28米；观众" +
          "固定座席3959个；活动座席1076个；主席台座位68个；附属设施包括：运动员休息室、裁判" +
          "员休息室、兴奋剂检查站、贵宾室、新闻发布厅等。赛前热身馆场地长40米，宽33米。",

          "4":"该场于2011年落成，占地16.3万平方米，位于天津市静海区团泊新城西区。距全运村约22公里，" +
          "承办过中国足球甲级联赛、东亚运动会足球比赛等重要赛事。比赛场地长105米，宽68米；观众座席21185个；" +
          "主席台座位和带桌记者席共120个；灯光照度1900勒克斯；图像屏幕2块。附属设施包括：运动员休息室、" +
          "裁判员休息室、兴奋剂检查站、贵宾室、新闻发布厅等，具备IT网络和电视转播条件。赛前热身场地三块。",

          "5":"该场地位于天津市静海区团泊新城，距全运村约22公里，承办过东亚运动会公路自行车比赛。团泊湖总面" +
          "积为60平方公里，其中水面为51平方公里，为市级候鸟栖息地自然保护区，风景秀美，气候宜人。环湖公路全程约" +
          "34公里，路面宽阔、平整。比赛赛道安排在环湖公路上骑行。",

          "6":"该场于2013年落成，位于天津市静海区健康产业园天津体育中心内，总用地面积52336.3平方米，" +
          "总建筑面积4751平方米。距全运村约23公里，承办过东亚运动会曲棍球比赛。比赛场地和训练场地均按照国" +
          "际曲棍球联盟要求标准建造，采用高密度人造草皮。比赛场地东北角设有9.6米×6.4米户外彩色电子显示屏" +
          "一块。曲棍球场看台建筑面积4568平方米，三层建筑，高17.83米。首层包括运动员休息区、裁判员休息区、" +
          "媒体区等附属用房。二层为观众区，设固定座席2100个。三层为贵宾休息区、技术代表办公区。",

          "7":"该场地于2013年落成，位于天津市静海区健康产业园天津体育中心，占地26390平方米，距全运村约23公里，" +
          "承办过东亚运动会棒球比赛。共有两块标准比赛场地，全部为人工草皮。比赛场地长100米，宽100米，主赛场将建" +
          "设固定观众座席4000个、记者席100个以及运动员休息室、裁判员休息室、兴奋剂检查站、贵宾休息室、新闻发布厅、" +
          "媒体工作间等附属房间。",

          "8":"该馆于2013年落成，位于天津市静海区健康产业园天津体育中心内，占地面积74800平方米，总建筑面积37996平方米，" +
          "距全运村约23公里，承办过东亚运动会射击比赛。比赛场地分为预赛馆和决赛馆。10米气枪预赛射击馆，射击位100个，" +
          "观众座席416个；决赛馆设有观众座席765个，射击位10个。附属设施包括：运动员休息区、裁判休息区、贵宾区、" +
          "媒体区等功能房间。具备IT网络和电视转播条件。",

          "9":"该场位于天津市健康产业园天津体育中心内，占地48000平方米，距全运村约24公里。比赛场地长170米，宽125米；" +
          "观众活动座席1100个；" +
          "主席台座位50个；记者席座位50个；附属设施包括：运动员休息室、裁判员休息室、兴奋剂检查站、贵宾室、新闻发布" +
          "厅等。附属热身场地长161米，宽39米。",

          "10":"该场规划位于天津市静海区健康产业园天津体育中心内，占地13000平方米，距全运村约24公里。比赛场地长90米，宽60米；" +
          "观众活动座席2000个；主席台座位50个；附属设施包括：运动员休息室、裁判员休息室、兴奋剂检查站、贵宾室、新闻发布厅等。",

          "11":"该场规划位于天津市静海区健康产业园天津体育中心内，占地21000平方米，距全运村约24公里。比赛场地长105米，宽68米；" +
          "观众固定座席2000个；主席台座位50个；附属设施包括：运动员休息室、裁判员休息室、兴奋剂检查站、贵宾室、新闻发布厅等。" +
          "附属热身场地长105米，宽68米。",

          "12":"该场规划位于天津市静海区健康产业园天津体育中心内，占地21000平方米，距全运村约24公里。比赛场地长136米，宽70米；" +
          "观众固定座席1900个；" +
          "主席台座位50个；记者席座位20个；附属设施包括：运动员休息室、裁判员休息室、兴奋剂检查站、贵宾室、新闻发布厅等。",

          "13":"该馆于2013年落成，该馆位于天津市静海区健康产业园天津体育中心内，总占地面积82000平方米，总建筑面积28200平方米，" +
          "距全运村约23公里，承办过东亚运动会场地自行车比赛。比赛场赛道周长250米，宽度为7.5米，高40米；观众固定座席1860个；" +
          "活动座席928个；主席台座席40个；灯光照度1000勒克斯；大屏幕2块，可显示图像。附属设施包括：运动员休息室、裁判员休息室、" +
          "兴奋剂检查站、贵宾室、新闻发布厅等，具备IT网络和电视转播条件。",

          "14":"天津国际网球中心始建于2010年6月，于2012年落成，占地19.5万平方米，位于天津市静海县团泊新城西区。总建筑面积99100" +
          "平方米，主要由中心赛场、半决赛场和体育会所三大部分组成。已承办了东亚运动会网球比赛及保龄球比赛、2013ITF国际男子网球" +
          "巡回赛、2014ITF国际女子网球巡回赛、2014天津WTA国际网球挑战赛、2014ITF国际青少年网球巡回赛等众多国际赛事。"
        },
        venuesHeader:{
          "1":"天津体育学院体育馆",
          "2":"天津体育学院体育馆",
          "3":"天津体育学院体育馆",
          "4":"团泊足球场",
          "5":"静海区团泊体育大道",
          "6":"天津体育中心曲棍球场",
          "7":"天津体育中心棒球场",
          "8":"天津体育中心射击馆",
          "9":"天津体育中心射箭场",
          "10":"天津体育中心小轮车场",
          "11":"天津体育中心足球场",
          "12":"天津体育中心橄榄球场",
          "13":"天津体育中心橄榄球场",
          "14":"天津国际网球中心"
        },
        comment:"",
        header:""

      }
    },
    methods:{
      view(url) {
        this.$router.push({ name: 'pdf', query: { url: Base64.encode(url) } })
      }
    },
    mounted(){
      var $_GET = (function(){
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
//      获取get传值的参数
      console.log($_GET.qid);
      this.queryUrl = $_GET.qid || '1';
      this.comment = this.venuesMessage[this.queryUrl];
      this.imgs.banner = require('./../assets/slice/saishi-'+this.queryUrl+'.jpg');
      this.header = this.venuesHeader[this.queryUrl]
//      根据参数的变化更改内容
      this.$http.get('http://jh.liangnutech.com//jh/public/product/productList?type=1').then((response)=>{
        this.downAreas = response.data;
        let arr=[];
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
    }

    .locationIcon{
        width: px2rem(10*4) ;
        height: px2rem(13*4);
        background-size: cover;
        margin-left: px2rem(115*4);
        margin-top: px2rem(24*4);
        display: inline-block;
    }
    .header{
        font-size: px2rem(14*4);
        display: inline-block;
        color: white;
        line-height: px2rem(20*4);
        margin-bottom: px2rem(6*4);
    }
    .header + img{
        width: px2rem(326*4);
        height: px2rem(274*4);
        margin-left: px2rem(24*4);

    }
    .comment{
        width: px2rem(348*4);
        font-size:px2rem(12*4);
        font-weight: 400;
        margin-left: auto;
        margin-right: auto;
        color: white;
        margin-bottom: px2rem(25*4);
        margin-top: px2rem(15*4);

    }
    .comment + hr{
        width: px2rem(375*4);
        height: 1px;
        color: white;
    }
    .serverHeader{
      height: px2rem(500*4);
      overflow: scroll;
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
            .title + div{
                font-size: px2rem(12*4);
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
    .serverHeader span{
        display: block;
        padding-left: px2rem(21*4);
        font-size: px2rem(14*4);
        color: white;
        height: px2rem(40*4);
        line-height: px2rem(40*4);
        border-bottom: px2rem(1*4) solid rgba(255,255,255,0.4);


    }

</style>