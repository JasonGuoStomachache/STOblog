<template>
  <div class="articleform">
    <h1 class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-stopaper"></use></svg
      >&nbsp;&nbsp;博客详情
    </h1>
    <hr class="horizonerow" style="width: 90%" />
    <form action="" class="dataform">
      <div class="articlecolume">
        <label for="articleName" class="formlabel">博客标题：</label>
        <input
          type="text"
          v-model="articleName"
          id="articleName"
          class="formcontent text"
        />
      </div>
      <div class="articlecolume">
        <label for="articleinfo" class="formlabel">内容简介：</label>
        <textarea
          v-model="articleInfo"
          class="formcontent"
          style="height: 70%"
          id="articleinfo"
        ></textarea>
      </div>
      <!-- <div>
        <label for="">爱好：</label>
        <input type="checkbox" id="basketball" value="1" v-model="hobby" /><span
          >篮球</span
        >
        <input type="checkbox" id="sing" value="2" v-model="hobby" /><span
          >唱歌</span
        >
        <input type="checkbox" id="code" value="3" v-model="hobby" /><span
          >敲代码</span
        >
      </div> -->
      <!-- 内容主题 -->
      <!-- <div>
        <label for="">内容主题：</label>
        <input type="radio" id="content" value="1" v-model="content" /><span
          >MD文档</span
        >
        <input type="radio" id="content" value="2" v-model="content" /><span
          >PDF文档</span
        >
        <input type="radio" id="content" value="3" v-model="content" /><span
          >文本文档</span
        >
      </div> -->
      <!-- 单选下拉框 -->
      <div class="select">
        <label for="articletype" class="formlabel">博客分类：</label>
        <select v-model="articleType" class="formcontent" id="articletype">
          <option value="0">请选择博客类型...</option>
          <option value="1">极客</option>
          <option value="2">文摘</option>
          <option value="3">影评</option>
          <option value="4">随想</option>
          <option value="5">笔记</option>
        </select>
      </div>

      <div class="select">
        <label for="articleformat" class="formlabel">博客格式：</label>
        <select v-model="articleFormat" class="formcontent" id="articleformat">
          <option value="0">请选择博客格式...</option>
          <option value="1">MD文档</option>
          <option value="2">PDF文档</option>
          <option value="3">文本文档</option>
        </select>
      </div>

      <div class="articlecolume" style="height: 300px">
        <input
          type="file"
          name="avatar"
          id="uppic"
          accept="image/gif,image/jpeg,image/jpg,image/png"
          @change="changeImage($event)"
          ref="avatarInput"
          class="formlabel"
        />
        <img :src="avatar" class="formcontent" style="height: 200px" />
      </div>

      <div v-show="articleFormat != 3">
        <label for="">博客文档</label>
        <input type="file" @change="getFiles($event)" />
      </div>
      <div>
        <!-- 使用prevent指令可以阻止默认提交表单行为 -->
        <input type="submit" @click.prevent="submitForm" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "articleform",
  data() {
    return {
      articleName: null,
      articleType: null,
      articleInfo: null,
      articleFormat: null,
      avatar: "",
    };
  },
  methods: {
    submitForm() {
      console.log(articlename);
      console.log(content);
      console.log(articleInfo);
    },
    getFiles(e) {
      console.log(e.target.files);
    },
    changeImage(e) {
      console.log(e.target.files);
      var file = e.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.avatar = this.result;
      };
    },
  },
};
</script>
<style scoped src="@/assets/css/inputstyle.css"></style>
<style scoped>
.articleform {
  width: 100%;
  height: 1000px;
  border: 2px solid #7b7b7b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.horizonecolume {
  width: 1px;
  border: none;
  background-color: rgb(226, 226, 226);
}
.horizonerow {
  height: 3px;
  border: none;
  background-color: rgb(228, 227, 227);
}
.title {
  text-align: center;
  color: #f9957e;
  margin: 30px 0;
}
.dataform {
  width: 90%;
  margin: 30px 0;
}
.formlabel {
  width: 20%;
  height: 100%;
  line-height: 80px;
}
.formcontent {
  width: 70%;
  height: 30%;
}
.articlecolume {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
>
