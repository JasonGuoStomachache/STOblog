<template>
  <div class="directorcolume">
    <div
      class="colume"
      v-for="(m, index) in directorinfo"
      :class="{
        columeactive: index === currentIndex,
        notactive: index != currentIndex,
      }"
      @mouseover="currentIndex = index"
      @mouseout="currentIndex = 999"
      :key="index"
    >
      <span
        v-if="m.isdropdown"
        style="width: 100%; height: 100%; line-height: 76px"
      >
        <drop-down
          :dataList="m.childrencolume"
          @inul="currentindex = index"
          @outul="currentindex = 999"
        >
          <span
            :class="{
              columeactive: index === currentIndex,
              notactive: index != currentIndex,
            }"
            @click="redirect(m.linkto)"
          >
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="m.iconclass"></use>
            </svg>
            {{ m.name }}
          </span>
        </drop-down>
      </span>

      <span
        v-else
        :class="{
          columeactive: index === currentIndex,
          notactive: index != currentIndex,
        }"
        @click="redirect(m.linkto)"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="m.iconclass"></use>
        </svg>
        {{ m.name }}
      </span>
    </div>
  </div>
</template>
<script>
import dropdown from "@/components/tool/dropdown.vue";
export default {
  name: "directorcolume",
  components: {
    "drop-down": dropdown,
  },
  data() {
    return {
      currentIndex: 999,
      directorinfo: [
        {
          name: "主页",
          iconclass: "#icon-stohome",
          linkto: "/home",
          isdropdown: false,
        },
        {
          name: "归档",
          iconclass: "#icon-stomenu2",
          linkto: "/catalog",
          isdropdown: true,
          childrencolume: [
            {
              name: "极客",
              linkto: "/geek",
              id: 0,
            },
            {
              name: "文摘",
              linkto: "/bookreview",
              id: 1,
            },
            {
              name: "影评",
              linkto: "/filmreview",
              id: 2,
            },
            {
              name: "随想",
              linkto: "/comprehension",
              id: 3,
            },
            {
              name: "笔记",
              linkto: "/notes",
              id: 4,
            },
          ],
        },
        {
          name: "收集",
          iconclass: "#icon-stolocaloffer",
          linkto: "/collection",
          isdropdown: true,
          childrencolume: [
            {
              name: "极客",
              linkto: "/geek",
              id: 0,
            },
            {
              name: "文摘",
              linkto: "/bookreview",
              id: 1,
            },
            {
              name: "影评",
              linkto: "/filmreview",
              id: 2,
            },
            {
              name: "随想",
              linkto: "/comprehension",
              id: 3,
            },
            {
              name: "笔记",
              linkto: "/notes",
              id: 4,
            },
          ],
        },
        {
          name: "开发手册",
          iconclass: "#icon-stopaper",
          linkto: "/programming",
          isdropdown: false,
        },
        {
          name: "关于",
          iconclass: "#icon-stoauthority",
          linkto: "/about",
          isdropdown: false,
        },
      ],
    };
  },
  methods: {
    redirect(to) {
      this.$router.push(to);
    },
  },
};
</script>
<style scoped>
.columeactive {
  font-weight: 600;
  font-size: 20px;
  color: #f9957e;
  cursor: pointer;
}
.notactive {
  font-weight: 600;
  font-size: 20px;
  color: #7b7b7b;
}

.directorcolume {
  display: flex;
  width: 30%;
  height: 100%;
  margin: 0 35%;
  justify-content: space-between;
}
.colume {
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: inherit;
}
</style>
