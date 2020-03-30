<!--雷达卫星-->
<template>
  <div>
    <!--<group>
      <popup-picker :title="title1" :data="list1" v-model="value2" @on-show="onShow" @on-hide="onHide" @on-change="onChange" ></popup-picker>
    </group>-->
    <div class="line"></div>
    <header>卫星云图-红外</header>
    <div class="satelliteInfraredChart imgblock">
      <img id="imgpath" alt="" :src="list[0]" onerror="this.onerror='';this.src='http://image.nmc.cn/static2/site/nmc/themes/basic/images/nodata.jpg';this.alt='图片不存在！'">
    </div>
    <div>
      <ul id="mycarousel" class="jcarousel-skin-tango">
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[0]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[1]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[2]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[3]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[4]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[5]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[6]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[7]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[8]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[9]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[10]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[11]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[12]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[13]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[14]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[15]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[16]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[17]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[18]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[19]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[20]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[21]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[22]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[23]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[24]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[25]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[26]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[27]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[28]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[29]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[30]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list[31]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
      </ul>
     </div>
    <div class="toolbar">
      <a href="#">
       <div class="firstpic" title="第一帧" v-on:click="firstpic"></div></a>
      <a href="#">
       <div class="prepic" title="上一帧" v-on:click="prepic"></div></a>
      <a href="#">
       <div id="tplay" class="tplay" title="播放" v-on:click="tplay"></div></a>
      <a href="#">
       <div class="nextpic" title="下一帧" v-on:click="nextpic"></div></a>
      <a href="#">
       <div class="lastpic" title="最后一帧" v-on:click="lastpic"></div></a>
    </div>
    <div class="divid"></div>
    <!--<group>
      <datetime
        :title="title"
        v-model="value1"
        :readonly="readonly"
        @on-change="change"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)">
      </datetime>-->
    </group>
    <div class="line"></div>
    <header>华北雷达单站组合反射率</header>
    <div class="satelliteInfraredChart imgblock">
      <img id="imgpath2" alt="" :src="list2[0]" onerror="this.onerror='';this.src='http://image.nmc.cn/static2/site/nmc/themes/basic/images/nodata.jpg';this.alt='图片不存在！'">
    </div>
    <div>
      <ul id="mycarousel2" class="jcarousel-skin-tango">
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[0]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[1]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[2]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[3]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[4]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[5]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[6]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[7]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[8]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[9]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[10]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[11]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[12]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[13]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[14]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[15]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[16]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[17]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[18]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[19]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[20]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[21]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[22]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[23]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[24]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[25]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[26]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[27]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
       <li v-on:click="changeImg2($event)"><p class="img actived"><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[28]" width="100" height="100" alt=""></p><p class="time">20190317 13:34</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[29]" width="100" height="100" alt=""></p><p class="time">20190317 13:30</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[30]" width="100" height="100" alt=""></p><p class="time">20190317 13:23</p></li>
       <li v-on:click="changeImg2($event)"><p class="img "><img src="http://image.nmc.cn/static2/site/nmc/themes/basic/images/grey.gif" :data-original="list2[31]" width="100" height="100" alt=""></p><p class="time">20190317 13:19</p></li>
      </ul>
     </div>
    <div class="toolbar">
      <a href="#">
       <div class="firstpic" title="第一帧" v-on:click="firstpic2"></div></a>
      <a href="#">
       <div class="prepic" title="上一帧" v-on:click="prepic2"></div></a>
      <a href="#">
       <div id="tplay2" class="tplay" title="播放" v-on:click="tplay2"></div></a>
      <a href="#">
       <div class="nextpic" title="下一帧" v-on:click="nextpic2"></div></a>
      <a href="#">
       <div class="lastpic" title="最后一帧" v-on:click="lastpic2"></div></a>
    </div>
  </div>
</template>

<style>
  body {
    background: #243753!important;
  }
  header{
    color: #FFF;
    font-size: 32px;/*px*/
    text-align: center;
    padding: 12px 0;
    font-family: 'FangSong', 'STFangsong', Arial, sans-serif;
    font-weight: bold;
  }
  .divid{
    width:100%;
    height:10px;/*no*/
    background:rgba(56,77,103,1);
  }
  .line{
    width: 100%;
    height: 15px;
  }
  .satelliteInfraredChart , .radarReflectivity{
    margin:0 25px;
  }
  .satelliteInfraredChart img , .radarReflectivity img{
    width: 100%;
    margin-bottom: 25px;/*no*/
    border-radius: 10px;
  }
  .weui-cells:before{
    border-top: 0px !important;
  }
  /*日期*/
  .vux-no-group-title{
    margin-top: 0px!important;
    background-color: #1A2940!important;
  }
  .vux-cell-value{
    margin-right: 10px!important;
  }
  .vux-datetime{
    color: #FFF!important;
    text-decoration: none;
  }
  .vux-datetime p{
    margin:0px;
  }
  /*end*/
  .toolbar{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  .toolbar .firstpic,.toolbar .prepic,.toolbar .tplay,.toolbar .tstop,.toolbar .nextpic,.toolbar .lastpic{
    margin: 0 8px;
    width:35px;
    height: 35px;
    line-height: 35px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-size: cover!important;
    }
  .toolbar .firstpic{
    background: url('./../../assets/animatButton/btn1@2x.png')
  }
  .toolbar .prepic{
    background: url('./../../assets/animatButton/btn2@2x.png')
  }
  .toolbar .tplay{
    background: url('./../../assets/animatButton/btn3@2x.png')
  }
  .toolbar .tstop{
    background: url('./../../assets/animatButton/btn4@2x.png')
  }
  .toolbar .nextpic{
    background: url('./../../assets/animatButton/btn5@2x.png')
  }
  .toolbar .lastpic{
    background: url('./../../assets/animatButton/btn6@2x.png')
  }
  .jcarousel-skin-tango{
    display: none;
  }
  /*下拉框*/

</style>

<script>
  import $ from 'jquery'
  import {XTable, Group, Datetime, PopupPicker } from 'vux'
  import axios from 'axios'
  // import {checkAuth, hostname} from '../utils/checkAuth.js';
  export default {
    components: {
      XTable,
      Group,
      Datetime,
      PopupPicker,
    },
    mounted () {
      this.total =  $('#mycarousel li').length
      this.total2 =  $('#mycarousel2 li').length
      axios.get('http://129.211.63.193/jh/public/capture.json?v='+new Date().getTime())
        .then(item => {
          this.sceneUrl = item.data.radar[0]
          this.list = item.data.sate
          this.list2 = item.data.radar
          //this.list2 = item.data.sate
          for (let i=32; i>=item.data.sate.length;i--) {
            $('#mycarousel li').eq(i).remove()
          }
          for (let i=32; i>=item.data.radar.length;i--) {
            $('#mycarousel2 li').eq(i).remove()
          }
        })
    },
    data () {
      return {
        value1: '2015-11-12',
        readonly: false,
        title:'日期选择',
        playMode : 2,
        playMode2 : 2,
        currentPlayIndex : 0,
        currentPlayIndex2 : 0,
        timeInterval : 1000,
        timer:null,
        timer2:null,
        sceneUrl:'',
        list:[],
        list2:[],
        title1: '日期选择',
        value2: ['2018年11月13日'],
        list1: [['2018年11月10日', '2018年11月13日', '2018年11月19日', '2018年11月23日', '2018年11月25日']],
      }
    },
    methods: {
        log (str1, str2 = '') {
          console.log(str1, str2)
        },
        onConfirm (val) {
          console.log('on-confirm arg', val)
          console.log('current value', this.value1)
        },
        change (value) {
          console.log('change', value)
        },
        onShow () {
          console.log('on show')
        },
        onHide (type) {
          console.log('on hide', type)
        },
        onChange (val) {
          console.log('val change', val)
        },
        changeImg(event){
          $('#imgpath').attr('src', $(event.target).find('img').attr('data-original').replace('small','medium'));
          $(event.target).find('.img').addClass('actived').parent().siblings().find('.img').removeClass('actived');
          var index = $(event.target).index('#mycarousel li');
          this.currentPlayIndex = $(event.target).index('#mycarousel li');
        },
        pre (){
          this.currentPlayIndex = (this.currentPlayIndex - 1) < 0 ? (this.total - 1) : (this.currentPlayIndex - 1);
          $('#mycarousel li').eq(this.currentPlayIndex).trigger('click');

        },
        next(){
          this.currentPlayIndex = (this.currentPlayIndex + 1) > (this.total - 1) ? 0 : (this.currentPlayIndex + 1);
          $('#mycarousel li').eq(this.currentPlayIndex).trigger('click');
        },
        firstpic(){
          $('#mycarousel li:first').trigger('click');
        },
        lastpic(){
          $('#mycarousel li:last').trigger('click');
        },
        prepic(){
          if(this.playMode == 1){
            this.$options.methods.next.bind(this)();
          } else {
            this.$options.methods.pre.bind(this)();
          }
        },
        nextpic(){
          if(this.playMode == 1){
            this.$options.methods.pre.bind(this)();
          } else {
            this.$options.methods.next.bind(this)();
          }
        },
        tplay (){
          if(this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            $('#tplay').attr('title','播放').removeClass('tstop').addClass('tplay');
          } else {
            $('#tplay').attr('title','暂停').removeClass('tplay').addClass('tstop');
            this.timer = setInterval(function(){
              if(this.playMode == 1){
                this.$options.methods.pre.bind(this)();
              } else {
                this.$options.methods.next.bind(this)();
              }
            }.bind(this),this.timeInterval);
          }
        },
        changeImg2(event){
          console.log($(event.target).find('img').attr('data-original'));
          $('#imgpath2').attr('src', $(event.target).find('img').attr('data-original').replace('small','medium'));
          $(event.target).find('.img').addClass('actived').parent().siblings().find('.img').removeClass('actived');
          var index = $(event.target).index('#mycarousel2 li');
          this.currentPlayIndex2 = $(event.target).index('#mycarousel2 li');
        },
        pre2 (){
          this.currentPlayIndex2 = (this.currentPlayIndex2 - 1) < 0 ? (this.total2 - 1) : (this.currentPlayIndex2 - 1);
          $('#mycarousel2 li').eq(this.currentPlayIndex2).trigger('click');

        },
        next2(){
          this.currentPlayIndex2 = (this.currentPlayIndex2 + 1) > (this.total2 - 1) ? 0 : (this.currentPlayIndex2 + 1);
          $('#mycarousel2 li').eq(this.currentPlayIndex2).trigger('click');
        },
        firstpic2(){
          $('#mycarousel2 li:first').trigger('click');
        },
        lastpic2(){
          $('#mycarousel2 li:last').trigger('click');
        },
        prepic2(){
          if(this.playMode2 == 1){
            this.$options.methods.next2.bind(this)();
          } else {
            this.$options.methods.pre2.bind(this)();
          }
        },
        nextpic2(){
          if(this.playMode2 == 1){
            this.$options.methods.pre2.bind(this)();
          } else {
            this.$options.methods.next2.bind(this)();
          }
        },
        tplay2 (){
          if(this.timer2 != null) {
            clearInterval(this.timer2);
            this.timer2 = null;
            $('#tplay2').attr('title','播放').removeClass('tstop').addClass('tplay');
          } else {
            $('#tplay2').attr('title','暂停').removeClass('tplay').addClass('tstop');
            this.timer2 = setInterval(function(){
              if(this.playMode2 == 1){
                this.$options.methods.pre2.bind(this)();
              } else {
                this.$options.methods.next2.bind(this)();
              }
            }.bind(this),this.timeInterval);
          }
        },
    }
  }

</script>
