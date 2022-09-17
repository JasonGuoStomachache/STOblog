<template>
  <div class="rowcardlist">
    <square-card
      v-for="(o, index) in info"
      :key="index"
      :divheight="divheight"
      :info="o"
    ></square-card>
  </div>
</template>
<script>
import squarecard from "@/components/datacard/squarecard.vue";
import { get } from "@/network/request.js";
export default {
  name: "rowcardlist",
  mounted() {
    get("/getpartitioncolume?id=" + this.requirepath).then((response) => {
      this.info = response.data;
    });
  },
  components: {
    "square-card": squarecard,
  },
  data() {
    return {
      info: [],
    };
  },
  props: {
    requirepath: {
      type: String,
      required: true,
    },
    divheight: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lscoped>
.rowcardlist {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
