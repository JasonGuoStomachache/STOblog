<template>
  <div class="colume">
    <div class="introduction">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-stoice-cream"></use>
      </svg>
      <span>&nbsp;&nbsp;{{ columetitle }}</span>
    </div>
    <hr style="width: 95%" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "homestart",
  props: {
    columetitle: {
      type: String,
      required: true,
      default: "enter name please!",
    },
  },
};
</script>
<style scoped>
.colume {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 60px;
}
.introduction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #7b7b7b;
}
.icon {
  width: 1.5em;
  height: 1.5em;
}
</style>
