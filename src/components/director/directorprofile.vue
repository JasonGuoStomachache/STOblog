<template>
  <div class="directorprofile">
    <svg class="icon search" aria-hidden="true">
      <use xlink:href="#icon-stosearch"></use>
    </svg>
    <drop-down :dataList="userinfo">
      <svg class="icon user" aria-hidden="true">
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
      userinfo: [
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
    };
  },
};
</script>
<style scoped>
.user:hover,
.search:hover {
  color: #f9957e;
}
.user,
.search {
  color: #7b7b7b;
}
.directorprofile {
  position: fixed;
  top: 0px;
  right: 0px;
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
