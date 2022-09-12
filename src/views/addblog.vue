<template>
  <div class="addblog">
    <director-header :isalwaystop="isalwaystop"></director-header>
    <page-cover></page-cover>
    <div class="mainbody">
      <colume :columetitle="colume_01">
        <author-card></author-card>
      </colume>
      <article-form></article-form>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/director/directorheader.vue";
import pagecover from "@/components/pagecover.vue";
import colume from "@/components/colume.vue";
import authorcard from "@/components/datacard/authorcard.vue";
import articleform from "@/components/form/articleform.vue";

export default {
  name: "addblog",
  data() {
    return {
      colume_01: "添加博客",
      isalwaystop: true,
    };
  },
  components: {
    "director-header": directorheader,
    "page-cover": pagecover,
    colume,
    "author-card": authorcard,
    "article-form": articleform,
  },
};
</script>
<style scoped src="@/assets/css/font.css"></style>
<style scoped>
.addblog {
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
