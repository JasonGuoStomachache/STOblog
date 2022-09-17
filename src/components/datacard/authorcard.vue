<template>
  <div class="authorcard">
    <div class="mycard">
      <div class="cardleft">
        <img
          class="authorcardimg"
          alt="loading ! ! !"
          :src="userInfo.avtorpath"
        />
      </div>
      <div class="cardright">
        <div class="cardtitle">
          <p class="authorname">
            <!-- <router-link :to="'/view/' + article.linkto">{{
              article.articletitile
            }}</router-link> -->
            AuthorName：{{ userInfo.nickname }}
          </p>

          <div class="writesvgimg">
            <svg
              class="icon"
              aria-hidden="true"
              style="width: 2em; height: 2em"
            >
              <use xlink:href="#icon-stochuangzuo"></use>
            </svg>
          </div>
          <div class="authorinfo">
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-stopaper"></use></svg
              >&nbsp;&nbsp;博客数量&nbsp;
              {{ userInfo.blogcount }}
            </p>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-stolocaloffer"></use></svg
              >&nbsp;&nbsp;集锦数量&nbsp;
              {{ userInfo.collectioncount }}
            </p>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-stodaohangdizhi"></use></svg
              >&nbsp;&nbsp;{{ userInfo.ip }}
            </p>
          </div>
        </div>
        <hr class="horizonerow" style="width: 100%" />
        <div class="cardintroduction">
          <p class="authormotto">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ userInfo.authormotto }}
          </p>
        </div>
      </div>
    </div>
    <hr class="horizonerow" style="width: 30%" />
  </div>
</template>
<script>
export default {
  name: "authorcard",
  data() {
    return {
      userInfo: this.$store.state.user,
    };
  },
  methods: {},
};
</script>
<style scoped>
.authorcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  margin: 20px 3%;
}
.mycard {
  width: 95%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
}
.horizonecolume {
  width: 1px;
  border: none;
  background-color: rgb(226, 226, 226);
}
.horizonerow {
  height: 1px;
  border: none;
  background-color: rgb(228, 227, 227);
}
.cardleft {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.authorcardimg {
  width: 100%;
  height: 88%;
  border-radius: 50%;
  object-fit: cover;
}
.cardright {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.cardtitle {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.authorname {
  font-weight: 600;
  font-size: 25px;
  color: #7b7b7b;
  width: 50%;
  padding: 0 2%;
}
.authorname:hover {
  color: #f9957e;
  cursor: pointer;
}
.authorinfo {
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  font-size: 12px;
  font-weight: 100;
  color: #bebebe;
}

/* c创作图标 */
.writesvgimg {
  width: 10%;
  color: #f9957e;
}

.cardintroduction {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.authormotto {
  font-size: 12px;
  color: #7b7b7b;
  padding: 0 3% 0 3%;
}
</style>
