<template>
  <div class="catalog">
    <director-header :isalwaystop="alwaystop"></director-header>
    <page-cover></page-cover>
    <div class="mainbody">
      <colume :columetitle="colume_01"
        ><row-card-list divheight="150px" requirepath="nopath"></row-card-list
      ></colume>
      <colume :columetitle="colume_02"
        ><base-card-list requirepath="nopath"></base-card-list
      ></colume>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/director/directorheader.vue";
import pagecover from "@/components/pagecover.vue";
import colume from "@/components/colume.vue";
import basecardlist from "@/components/datacard/basecardlist.vue";
import rowcardlist from "@/components/datacard/rowcardlist.vue";
export default {
  name: "catalog",
  data() {
    return {
      alwaystop: true,
      colume_01: "目录",
      colume_02: "文章归档",
    };
  },
  components: {
    "director-header": directorheader,
    "page-cover": pagecover,
    colume,
    "base-card-list": basecardlist,
    "row-card-list": rowcardlist,
  },
};
</script>
<style scoped>
.catalog {
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
