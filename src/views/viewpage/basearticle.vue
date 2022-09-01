<template>
  <div class="basearticle">
    <director-header isalwaystop="true"></director-header>
    <page-cover :imgsrc="article.articlecover"></page-cover>
    <div class="mainbody">
      <base-card :article="article"></base-card>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/director/directorheader.vue";
import pagecover from "@/components/pagecover.vue";
import basecard from "@/components/datacard/basecard.vue";
export default {
  name: "basearticle",
  mounted(){
    this.requireMarkdown(this.$route.params.articleid)
  },
  components: {
    "director-header": directorheader,
    "page-cover": pagecover,
    "base-card": basecard,
  },
  data() {
    return {
      article: {
        articletitile: "基于 SCSS mixin 的 flex gap polyfill",
        articletime: {
          nowWeek: "",
          nowDate: "",
          nowTime: "",
        },
        articleauthor: "Stomachache",
        colume: "geek",
        articleintroduction:
          "一直以来，习惯在 flex 布局中使用 gap这个属性设置间距，一直以来也都是在最新的 Chrome上调试，所以从来没有想在 flex gap在其他浏览器上存在兼容性问题。最近看了一下文档才反应过来，gap原来只是 grid 布局的属性，虽然近些年来主流浏览器都已经支持了",
        articlecover: "/backgroundimgs/03.png",
      },
      markdownvalue: {},
    };
  },
  computed: {
    articleid() {
      return this.$route.params.articleid; // 这里点后边的参数，要和route index.js中定义的冒号后边的参数相同
    },
  },
  methods: {
    requireMarkdown(articleid) {
      await import("/markdown/"+articleid+".md").then(mymodule=>{
        this.markdownvalue = mymodule;
      })
    },
  },
};
</script>
<style scoped>
.basearticle {
  width: 100%;
  height: 100%;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.mainbody {
  background-color: white;
  height: 2000px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
