<template>
  <div class="directorheader" @mouseover="isshow = true" @mouseout="moveout">
    <div
      class="nav"
      :class="true == isshow || isalwaystop ? 'navBarShowed' : 'navBarHidden'"
    >
      <director-colume></director-colume>
    </div>
  </div>
</template>
<script>
import directorcolume from "@/components/director/directorcolume.vue";
export default {
  name: "directorheader",
  components: {
    "director-colume": directorcolume,
  },
  data() {
    return {
      isshow: false,
      isscroll: false,
    };
  },
  props: {
    isalwaystop: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll, true);
  },
  methods: {
    watchScroll(e) {
      let scrollY = document.documentElement.scrollTop;
      //  当滚动超过 90 时，实现吸顶效果
      if (scrollY > 90) {
        this.isshow = true;
        this.isscroll = true;
      } else {
        this.isshow = false;
        this.isscroll = false;
      }
    },
    moveout() {
      if (!this.isscroll) {
        this.isshow = false;
      }
    },
  },
};
</script>
<style scoped>
.directorheader {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 75px;
  align-items: center;
}
.nav {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0px 1px 30px #ababab;
  background-color: #ffffff;
  z-index: 900;
}
.navBarShowed {
  display: block;
  top: 0;
}
.navBarHidden {
  display: none;
  top: 0;
}
</style>
