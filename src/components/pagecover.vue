<template>
  <div class="pagecover" style="width: 100%">
    <div
      class="coverimg"
      :style="{
        backgroundImage:
          'linear-gradient(to top, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.1)),url(' +
          imgsrc +
          ')',
      }"
    />
  </div>
</template>
<script>
export default {
  name: "pagecover",
  props: {
    imgsrc: {
      type: String,
      default: "/backgroundimgs/02.png",
    },
  },
};
</script>
<style scoped>
.coverimg {
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
