<template>
  <div class="directorprofile">
    <svg class="icon search" aria-hidden="true">
      <use xlink:href="#icon-stosearch"></use>
    </svg>
    <router-link to="/writeblog"
      ><svg
        class="icon search"
        aria-hidden="true"
        style="width: 2.1em; height: 2.1em"
      >
        <use xlink:href="#icon-stochuangzuo"></use></svg
    ></router-link>
    <drop-down
      :dataList="info"
      @inul="currentindex = 100"
      @outul="currentindex = 999"
    >
      <svg
        class="icon"
        aria-hidden="true"
        @mousemove="currentindex = 100"
        @mouseout="currentindex = 999"
        :class="{
          isactive: 100 === currentindex,
          notactive: 100 !== currentindex,
        }"
      >
        <use xlink:href="#icon-stobussiness-man"></use>
      </svg>
    </drop-down>
  </div>
</template>
<script>
import dropdown from "@/components/tool/dropdown.vue";
export default {
  name: "directorprofile",
  components: {
    "drop-down": dropdown,
  },
  data() {
    return {
      info: [
        {
          name: "账户",
          linkto: "/profile",
          id: 0,
        },
        {
          name: "后台",
          linkto: "/workplace",
          id: 1,
        },
        {
          name: "登录",
          linkto: "/login",
          id: 2,
        },
        {
          name: "注销",
          linkto: "/checkout",
          id: 3,
        },
        {
          name: "博客森林",
          linkto: "/blogtree",
          id: 4,
        },
      ],
      currentindex: 999,
    };
  },
};
</script>
<style scoped>
.search:hover,
.isactive {
  color: #f9957e;
}
.search,
.notactive {
  color: #7b7b7b;
}

.directorprofile {
  position: fixed;
  top: 0px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
  height: 75px;
  z-index: 901;
}

.icon {
  width: 2.5em;
  height: 2.5em;
}
</style>
