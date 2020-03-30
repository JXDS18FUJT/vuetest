<template>
  <div>
    <button-tab>
      <button-tab-item>第一</button-tab-item>
      <button-tab-item>第二</button-tab-item>
      <button-tab-item>第三</button-tab-item>
    </button-tab>
    <Countup start-val='10' end-val='500' duration="5"></Countup>



    <div class="timeline-demo">
      <timeline>
        <timeline-item>
          <h4 class="recent">【广东】 广州市 已发出</h4>
          <p class="recent">2016-04-17 12:00:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
          <p>2016-04-16 10:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
      </timeline>
      <timeline>
        <timeline-item v-for="(i, index) in count" :key="index">
          <h4 :class="[i === 0 ? 'recent' : '']">Timeline Node {{i + 1}}</h4>
          <p :class="[i === 0 ? 'recent' : '']">index {{i + 1}}</p>
        </timeline-item>
      </timeline>
      <x-button type="primary" @click.native="count = 6"> Set to 6 nodes</x-button>
      <x-button type="primary" @click.native="count = 3"> Set to 3 nodes</x-button>
    </div>
    <div>
      <group :title="安卓">
        <x-switch :title="安徽" :value-map="['0', '1']" v-model="stringValue"></x-switch>
      </group>
    </div>
  </div>
</template>
<script>
  import { Countup } from 'vux'
  import { ButtonTab, ButtonTabItem } from 'vux'
  import { Timeline, TimelineItem, XButton } from 'vux'
  import { Actionsheet } from 'vux'
  import { XSwitch } from 'vux'
  import { Group } from 'vux'
  export default {
    data() {
      return {
        is:true,
      }
    },
    components: {
      ButtonTab,
      ButtonTabItem,
      Countup,
      Timeline,
      TimelineItem,
      XButton,
      Actionsheet,
      XSwitch,
      Group

    }
  }
</script>
<style scoped>
  .vux-button-group > a.vux-button-group-current{
    background-color: yellow;
    color: #ffff;

  }
  .vux-button-group > a{
    color: red;
  }
</style>
