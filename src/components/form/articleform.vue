<template>
  <div class="articleform">
    <el-row :gutter="15">
      <el-form
        ref="postnewblog"
        :model="formData"
        :rules="rules"
        size="large"
        label-width="100px"
        label-position="top"
        style="width: 100%"
      >
        <el-col :span="24">
          <el-form-item label="博客标题" prop="articleTitle">
            <el-input
              v-model="formData.articleTitle"
              placeholder="请输入博客标题"
              :maxlength="30"
              clearable
              prefix-icon="el-icon-document"
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="内容简介：" prop="articleIntroduction">
            <el-input
              v-model="formData.articleIntroduction"
              type="textarea"
              placeholder="请输入内容简介："
              :maxlength="300"
              :autosize="{ minRows: 4, maxRows: 4 }"
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-row :gutter="15">
          <el-col :span="12">
            <el-form-item label="博客分类：" prop="articleType">
              <el-select
                v-model="formData.articleType"
                placeholder="请选择博客分类："
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in articleTypeOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="博客格式：" prop="articleFormat">
              <el-select
                v-model="formData.articleFormat"
                placeholder="请选择博客格式："
                clearable
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="(item, index) in articleFormatOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="博客封面" prop="articleCover">
              <el-upload
                ref="articleCover"
                :file-list="articleCoverfileList"
                action
                :auto-upload="false"
                :on-change="onCoverChange"
                :before-upload="articleCoverBeforeUpload"
                list-type="picture-card"
                accept="image/*"
                name="articleCover"
                :limit="1"
                required
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="博客插图" prop="articleImgset">
              <el-upload
                ref="articleImgset"
                action
                :auto-upload="false"
                :on-change="onImgSetChange"
                :before-upload="articleImgsetBeforeUpload"
                list-type="picture-card"
                accept="image/*"
                :limit="10"
                multiple
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="博客文档" prop="articleFile">
              <el-upload
                ref="articleFile"
                :file-list="articleFilefileList"
                :auto-upload="false"
                :on-change="onFileChange"
                action
                :before-upload="articleFileBeforeUpload"
                accept=".md"
                name="articleFile"
                required
              >
                <el-button size="small" type="primary" icon="el-icon-upload"
                  >点击上传</el-button
                >
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2" class="centeredFlexHorizontal">
            <el-form-item
              size="large"
              class="centeredFlexHorizontal"
              style="margin: 0; padding: 0"
            >
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import { post } from "@/network/request.js";
import Axios from "axios";

export default {
  name: "articleform",
  components: {},
  props: [],
  data() {
    return {
      userInfo: null,
      articleCover: null,
      articleImgset: [],
      articleFile: null,
      formData: {
        articleTitle: "",
        articleIntroduction: "",
        articleType: "",
        articleFormat: "",
      },

      rules: {
        articleTitle: [
          {
            required: true,
            message: "请输入博客标题",
            trigger: "blur",
          },
        ],
        articleIntroduction: [
          {
            required: true,
            message: "请输入内容简介：",
            trigger: "blur",
          },
        ],
        articleType: [
          {
            required: true,
            message: "请选择博客分类：",
            trigger: "change",
          },
        ],
        articleFormat: [
          {
            required: true,
            message: "请选择博客格式：",
            trigger: "change",
          },
        ],
      },
      articleCoverAction: "",
      articleCoverfileList: [],
      articleImgsetAction: "",
      articleImgsetfileList: [],
      articleFileAction: "",
      articleFilefileList: [],
      articleTypeOptions: [
        {
          label: "极客",
          value: 0,
        },
        {
          label: "文摘",
          value: 1,
        },
        {
          label: "影评",
          value: 2,
        },
        {
          label: "随想",
          value: 3,
        },
        {
          label: "笔记",
          value: 4,
        },
      ],
      articleFormatOptions: [
        {
          label: "MD文档",
          value: 0,
        },
        {
          label: "PDF文档",
          value: 1,
        },
        {
          label: "文本文档",
          value: 2,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.userInfo = this.$store.state.user;
    console.log(this.$store.getters.getNowTimeforall);
  },
  methods: {
    submitForm() {
      this.$refs["postnewblog"].validate((valid) => {
        if (!valid) return;
        this.postAppendix();
      });
    },
    resetForm() {
      this.$refs["postnewblog"].resetFields();
    },
    articleCoverBeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 5;
      if (!isRightSize) {
        this.$message.error("文件大小超过 5MB");
      }
      let isAccept = new RegExp("image/*").test(file.type);
      if (!isAccept) {
        this.$message.error("应该选择image/*类型的文件");
      }
      return isRightSize && isAccept;
    },
    articleImgsetBeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 5;
      if (!isRightSize) {
        this.$message.error("文件大小超过 5MB");
      }
      let isAccept = new RegExp("image/*").test(file.type);
      if (!isAccept) {
        this.$message.error("应该选择image/*类型的文件");
      }
      return isRightSize && isAccept;
    },
    articleFileBeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 5;
      if (!isRightSize) {
        this.$message.error("文件大小超过 5MB");
      }
      // let isAccept = new RegExp(".pdf").test(file.type);
      // if (!isAccept) {
      //   this.$message.error("应该选择.pdf类型的文件");
      // }
      return isRightSize;
      //  && isAccept;
    },
    onCoverChange(file) {
      this.articleCover = file.raw;
    },
    onImgSetChange(uploadFile, uploadFiles) {
      this.articleImgset = uploadFiles.map((n) => {
        return n.raw;
      });
    },
    onFileChange(uploadFile) {
      this.articleFile = uploadFile.raw;
    },
    postAppendix() {
      let formData = new FormData();
      formData.append("articleInfo", this.userInfo.userID);
      formData.append("articleInfo", this.formData.articleTitle);
      formData.append("articleInfo", this.formData.articleIntroduction);
      formData.append("articleInfo", this.formData.articleType);
      formData.append("articleInfo", this.formData.articleFormat);
      formData.append("articleInfo", this.$store.getters.getNowTimeforall);
      formData.append("articleCover", this.articleCover);
      formData.append("articleFile", this.articleFile);
      let imgset = this.articleImgset;
      for (let index = 0; index < this.articleImgset.length; index++) {
        formData.append("articleImgSet", imgset[index]);
      }
      post("/postarticleappendix", formData)
        .then((response) => {
          if (response.status == "200") {
            alert("博客已成功提交！即将跳转至归档页面。");
            this.$router.push("/catalog");
          }
        })
        .catch((err) => {
          alert("提交出错，错误信息：" + err.message);
        });
    },
  },
};
</script>
<style scoped>
.el-upload__tip {
  line-height: 1.2;
}

.articleform {
  width: 100%;
}
</style>
