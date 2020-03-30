<template>
  <div @click="turnOff()">
    <div class="first">哦我的</div>
    <group>
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
    </group>
    加载中<InlineLoading></InlineLoading>
    <Loading :show="is" text="加载"></Loading>
  </div>
</template>
<script>
  import { Group } from 'vux'
  import { Cell } from 'vux'
  import { InlineLoading } from 'vux'
  import { Loading } from 'vux'
  import { Confirm } from 'vux'

  export default {
    data() {
      return {
        is:true
      }
    },
    components: {
      Group,
      Cell,
      InlineLoading,
      Loading,
      Confirm
    },
    methods:{
      turnOff(){
        this.is = !this.is;

      }


    }
  }
</script>
<style scoped>
  .first{
    font-size: 20px; /*px*/
    height: 100px;
    width: 200px;

  }
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
