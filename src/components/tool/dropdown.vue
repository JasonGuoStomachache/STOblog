<template>
  <div
    class="dropdown-list"
    @mouseover="onDplOver($event)"
    @mouseout="onDplOut($event)"
  >
    <span><slot></slot></span>
    <ul v-show="false" @mousemove="mouseinul" @mouseout="mouseoutul">
      <li
        v-for="item in dataList"
        :key="item.id"
        @click="onLiClick(item.linkTo)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    dataList: {
      type: Array,
      default() {
        return [
          { name: "选项一", linkto: "/home", id: 0 },
          { name: "选项二", linkto: "/catalog", id: 1 },
        ];
      },
    },
  },
  methods: {
    onDplOver(event) {
      let ul = event.currentTarget.childNodes[1];
      ul.style.display = "block";
    },
    onDplOut(event) {
      let ul = event.currentTarget.childNodes[1];
      ul.style.display = "none";
    },
    onLiClick(linkto) {
      let path = event.path || (event.composedPath && event.composedPath()); //兼容火狐和safari
      path[1].style.display = "none";
      this.$router.push(linkto);
    },
    mouseinul() {
      this.$emit("inul", {});
    },
    mouseoutul() {
      this.$emit("outul", {});
    },
  },
};
</script>

<style scoped>
.dropdown-list {
  display: inline-block;
  position: relative;
}

.dropdown-list span {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.dropdown-list ul {
  min-width: 100px;
  position: absolute;
  top: 40px;
  left: -27px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: solid 1px #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
  color: #7b7b7b;
}

.dropdown-list ul li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: solid 1px #f1f1f1;
  background: #ffffff;
}
.dropdown-list ul li:last-child {
  border-bottom: none;
}
.dropdown-list ul li:hover {
  background: #f6f6f6;
  cursor: pointer;
}
</style>
