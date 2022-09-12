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
        v-if="m.isDropdown"
        style="width: 100%; height: 100%; line-height: 76px"
      >
        <drop-down
          :dataList="m.directorColumeChildrens"
          @inul="currentindex = index"
          @outul="currentindex = 999"
        >
          <span
            :class="{
              columeactive: index === currentIndex,
              notactive: index != currentIndex,
            }"
            @click="redirect(m.linkTo)"
          >
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="m.iconClass"></use>
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
        @click="redirect(m.linkTo)"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="m.iconClass"></use>
        </svg>
        {{ m.name }}
      </span>
    </div>
  </div>
</template>
<script>
import dropdown from "@/components/tool/dropdown.vue";
import { get } from "@/network/request.js";
export default {
  name: "directorcolume",
  mounted() {
    get("/getdirectorcolumes").then((response) => {
      this.directorinfo = response.data;
    });
  },
  components: {
    "drop-down": dropdown,
  },
  data() {
    return {
      currentIndex: 999,
      directorinfo: [],
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
