<template>
  <div
    class="home"
    :style="{
      backgroundImage:
        'linear-gradient(to top, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.1)),url(' +
        imgsrc +
        ')',
    }"
  >
    <director-header :isalwaystop="alwaystop"></director-header>
    <div class="mainbody">
      <colume :columetitle="colume_1"
        ><img-card-list :requirepath="requirepath"></img-card-list
      ></colume>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/director/directorheader.vue";
import imgcardlist from "@/components/datacard/imgcardlist.vue";
import colume from "@/components/colume.vue";
export default {
  name: "home",
  components: {
    "director-header": directorheader,
    colume,
    "img-card-list": imgcardlist,
  },
  data() {
    return {
      imgsrc: "/backgroundimgs/01.png",
      colume_1: "START : DASH ! !",
      alwaystop: false,
      requirepath: "/getAllArticleBlog",
    };
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-repeat: no-repeat;
  background-size: cover;
}
.mainbody {
  background-color: white;
  margin-top: 1000px;
  height: 2000px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
