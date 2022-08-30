<template>
  <div class="directorprofile">
    <div class="left">
      <input v-model="input" v-show="showsearch" placeholder="要查点什么吗？" />
    </div>
    <div class="right">
      <svg
        class="icon"
        aria-hidden="true"
        @click="showsearch = !showsearch"
        :class="{
          isactive: 100 === currentIndex,
          notactive: 100 !== currentIndex,
        }"
        @mouseover="currentIndex = 100"
        @mouseout="currentIndex = 999"
      >
        <use xlink:href="#icon-stosearch"></use>
      </svg>

      <svg
        class="icon"
        aria-hidden="true"
        :class="{
          isactive: 101 === currentIndex,
          notactive: 101 !== currentIndex,
        }"
        @mouseover="currentIndex = 101"
        @mouseout="currentIndex = 999"
      >
        <use xlink:href="#icon-stobussiness-man"></use>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "directorprofile",
  data() {
    return {
      currentIndex: 999,
      input: "",
      showsearch: false,
    };
  },
};
</script>
<style scoped>
.isactive {
  color: #f9957e;
}
.notactive {
  color: #7b7b7b;
}
.directorprofile {
  position: fixed;
  top: 18px;
  right: 3%;
  display: flex;
  justify-content: flex-end;
  width: 15%;
  height: 40px;
  z-index: 901;
}
.profile .left {
  display: flex;
  width: 70%;
}
.profile .right {
  display: flex;
  width: 30%;
  justify-content: center;
}

.icon {
  width: 2.5em;
  height: 2.5em;
}
</style>
