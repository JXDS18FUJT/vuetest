<template>
  <div>
    <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page" width="100%"></canvas>
  </div>
</template>

<script>
  import PDFJS from 'pdfjs-dist'
  import { Base64 } from 'js-base64';
export default {
  name: 'pdf-component',
  data () {
    return {
      title: '查看产品',
      pdfDoc: null,
      pages: 0
    }
  },
  methods: {
    _renderPage (num) {
      this.pdfDoc.getPage(num).then((page) => {
        let canvas = document.getElementById('the-canvas' + num);
        let ctx = canvas.getContext('2d')
        let dpr = window.devicePixelRatio || 1
        let bsr = ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio || 1
        let ratio = dpr / bsr
        let viewport = page.getViewport(screen.availWidth / page.getViewport(1).width)
        canvas.width = viewport.width * ratio
        canvas.height = viewport.height * ratio
        canvas.style.width = viewport.width + 'px'
        canvas.style.height = viewport.height + 'px'
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        page.render(renderContext)
        if (this.pages > num) {
          this._renderPage(num + 1)
        }
      })
    },
    _loadFile (url) {
      PDFJS.getDocument(url).then((pdf) => {
        this.pdfDoc = pdf;
        this.pages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this._renderPage(1)
        })
      })
    }
  },
  mounted () {
    document.title = this.title;
    let url = Base64.decode(this.$route.query.url);
    this._loadFile(url)
  }
}
</script>

<style scoped>
canvas {
  width: 100% !important;
  display: block;
  border-bottom: 1px solid black;
    height: auto !important;
}
</style>
