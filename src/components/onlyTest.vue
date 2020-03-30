<template>
    <div style="background-color: red">
        <a href="http://39.108.130.184/dl/2019PDF.pdf">下载pdf</a>
        <div @click="downTxt()">下载pdf</div>
        <refresh></refresh>
    </div>
</template>
<script>
    import refresh from '@/components/location-refresh';
  export default {
    data() {
      return {}
    },
    components:{
      refresh:refresh
    },
    methods:{
      downTxt(){
        var url = 'http://39.108.130.184/dl/2019PDF.pdf';
        window.open(url);

      },
      formDown(){
        var form = document.createElement('form');
        form.id = 'form';
        form.name = 'form'
        document.getElementById('file').appendChild (form)
        for (var obj in params) {
          if (params.hasOwnProperty(obj)) {
            var input = document.createElement('input')
            input.tpye='hidden';
            input.name = obj;
            input.value = params[obj]
            form.appendChild(input)
          }
        }
        form.method = "GET"; //请求方式
        form.action = 'http://39.108.130.184/dl/rainbow.jpg';
        form.submit();
        document.body.removeChild(form)
      }
    }
  }
</script>
<style scoped>
</style>