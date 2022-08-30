<template>
  <div class="index">
    <logo></logo>
    <director-profile></director-profile>
    <!-- <side-img></side-img> -->
    <router-view></router-view>
  </div>
</template>

<script>
import directorprofile from "@/components/directorprofile.vue";
import sideimg from "@/components/sideimg.vue";
import logo from "@/components/logo";

export default {
  name: "index",
  mounted() {},
  components: {
    "director-profile": directorprofile,
    "side-img": sideimg,
    logo: logo,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.index {
  height: 100%;
  width: 100%;
}
</style>
