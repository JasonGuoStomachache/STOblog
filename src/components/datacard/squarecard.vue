<template>
  <div
    class="squarecard"
    :style="{
      backgroundImage: 'url(' + info.imgSrc + ')',
    }"
  >
    <router-link :to="info.linkTo">
      <div class="content">
        {{ info.name }}
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "squarecard",
  props: {
    info: {
      type: Object,
      required: true,
    },
    divheight: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.squarecard {
  width: v-bind(divheight);
  height: v-bind(divheight);
  margin: 20px 2%;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  width: v-bind(divheight);
  height: v-bind(divheight);
  line-height: v-bind(divheight);
  color: #7b7b7b;
  font-size: 25px;
}

.content:hover {
  color: #f9957e;
}
</style>
