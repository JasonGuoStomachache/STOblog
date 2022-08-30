<template>
  <div class="home">
    <director-header :isalwaystop="alwaystop"></director-header>
    <home-cover></home-cover>
    <div class="mainbody">
      <colume :columetitle="colume_1"
        ><img-card-list requirepath="nopath"></img-card-list
      ></colume>
    </div>
  </div>
</template>
<script>
import directorheader from "@/components/directorheader.vue";
import imgcardlist from "@/components/imgcardlist.vue";
import homecover from "@/components/homecover.vue";
import colume from "@/components/colume.vue";
export default {
  name: "home",
  components: {
    "director-header": directorheader,
    "home-cover": homecover,
    colume,
    "img-card-list": imgcardlist,
  },
  data() {
    return {
      colume_1: "START : DASH ! !",
      alwaystop: false,
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
