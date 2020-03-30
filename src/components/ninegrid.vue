<template>
    <x-table>
        <tbody>
        <tr>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-yifu@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[0].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[0].desc}}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-yanguang@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[3].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[3].desc}}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-ganmao@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[1].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[1].desc}}</p>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-xiche@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[4].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[4].desc}}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-diaoyu@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[8].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[8].desc}}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-yundong@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[2].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[2].desc}}</p>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-guomin@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[6].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[6].desc}}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-liangshai@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[7].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[7].desc}}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="liveCondition">
                    <img src="../assets/weatherScene/icon-kuosan@2x.png" alt="">
                    <div class="liveAdvice">
                        <p class="liveAdviceTitle">{{onlineInfo.lefeReport[5].type}}</p>
                        <p class="liveAdviceValue">{{onlineInfo.lefeReport[5].desc}}</p>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </x-table>

</template>
<script>
  import { XTable } from 'vux'
  export default {
    data() {
      return {
        onlineInfo:{
          lefeReport: [{
            'type':'穿衣',
            'desc':'厚毛衣'
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
      }
    },
    methods: {},
    mounted() {
    },
    components:{
      XTable
    },
    props:['onlineInfo']

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .vux-table td{
        padding: px2rem(15*4) 0!important;
    }
    .liveCondition{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: px2rem(-15*4);
    }
    .liveCondition img{
        width:px2rem(32*4);/*no*/
        height: px2rem(32*4)/*no*/
    }
    .liveAdvice{
        padding-left: px2rem(15*4);
    }
    .liveAdvice p{
        margin: 0;
        padding: 0;
    }
    .liveAdviceTitle{
        font-size: px2rem(12*4);/*px*/
        height: px2rem(16*4);
        line-height: px2rem(16*4);
        color: #FFFFFF;
        opacity: 0.5;
        margin-bottom: px2rem(3*4);
        width: px2rem(50*4);
        text-overflow: ellipsis
    }
    .liveAdviceValue{
        font-size: px2rem(14*4);/*px*/
        height: px2rem(19*4);
        line-height: px2rem(19*4);
        color: white;
    }
</style>