import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      userID: "00000010",
      nickname: "Stomchache",
      avtorpath: "/backgroundimgs/03.png",
      authormotto:
        "如果怯懦是最大的罪恶，那么，狗在这方面大概没有什么可责备的。这只勇敢的狗，它唯一所惧怕的就是雷雨。不过，这有什么办法呢?谁要是爱，谁就应该与他所爱的人分担相同的遭遇。——布尔加科夫《大师和玛格丽特》",
      blogcount: 23,
      collectioncount: 20,
      ip: "陕西西安",
    },
  },
  getters: {
    getNowTimes(state) {
      //获取当前时间
      let myDate = new Date();
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      let nowDate = yy + "-" + mm + "-" + dd;
      let nowTime = hou + ":" + min + ":" + sec;
      let nowWeek = week;
      return [nowDate, nowTime, nowWeek];
    },
    getNowTimeforall() {
      let [nowDate, nowTime, nowWeek] = this.$store.getters.setNowTimes;
      return nowDate + " " + nowTime + " " + nowWeek;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
