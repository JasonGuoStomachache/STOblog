<template>
  <div class="imgcardlist">
    <img-card-left
      v-for="(item, index) in article"
      :key="index"
      :article="item"
    ></img-card-left>
    <img-card-right
      v-for="(item, index) in article"
      :key="index"
      :article="item"
    ></img-card-right>
  </div>
</template>
<script>
import imgcard_left from "@/components/datacard/imgcard_left";
import imgcard_right from "@/components/datacard/imgcard_right";
import { get } from "@/network/request.js";
export default {
  mounted() {
    get(this.requirepath)
      .then((response) => {
        this.article = response.data;
      })
      .catch((error) => {});
  },
  name: "imgcardlist",
  components: {
    "img-card-left": imgcard_left,
    "img-card-right": imgcard_right,
  },
  data() {
    return {
      article: [],
    };
  },
  props: {
    requirepath: {
      type: String,
      required: true,
    },
  },
};
</script>
<style socped>
.imgcardlist {
  width: 100%;
}
</style>
