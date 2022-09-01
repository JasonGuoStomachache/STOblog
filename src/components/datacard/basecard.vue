<template>
  <div class="basecard">
    <div class="mycard">
      <div class="cardleft">
        <img
          class="basecardimg"
          alt="loading ! ! !"
          :src="article.articlecover"
        />
      </div>
      <div class="cardright">
        <div class="cardtitle">
          <p class="articletitile">{{ article.articletitile }}</p>
          <div class="articleinfo">
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-stomenu2"></use></svg
              >&nbsp;
              {{ article.colume }}
            </p>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-stoauthority"></use></svg
              >&nbsp;
              {{ article.articleauthor }}
            </p>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-stoontimeshipment"></use>
              </svg>
              &nbsp;{{ article.articletime.nowDate }}&nbsp;&nbsp;{{
                article.articletime.nowWeek
              }}
            </p>
          </div>
        </div>
        <hr class="horizonerow" style="width: 100%" />
        <div class="cardintroduction">
          <p class="articleintroduction">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              article.articleintroduction
            }}
          </p>
        </div>
      </div>
    </div>
    <hr class="horizonerow" style="width: 30%" />
  </div>
</template>
<script>
export default {
  name: "basecard",
  data() {
    return {};
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.basecard {
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
.basecardimg {
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
.articletitile {
  font-size: 25px;
  width: 75%;
  padding: 0 2%;
}
.articletitile:hover {
  color: #f9957e;
  cursor: pointer;
}
.articleinfo {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  font-size: 12px;
  font-weight: 100;
  color: #bebebe;
}
/* .articletime {
  text-align: right;
  font-size: 12px;
  font-weight: 100;
  color: #bebebe;
} */

.cardintroduction {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.articleintroduction {
  font-size: 12px;
  padding: 0 3% 0 3%;
}
</style>
