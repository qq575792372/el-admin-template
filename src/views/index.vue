<template>
  <div class="app-container">
    <div id="nav">
      <router-link to="/index/home">
        <el-button type="primary" size="mini"
          >首页
          <!-- 使用svg图标 -->
          <svg-icon icon-class="user" />
        </el-button>
      </router-link>
      <span style="padding: 0px 10px">|</span>
      <router-link to="/index/about">
        <el-button type="primary" size="mini">关于</el-button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { login } from "@/api/user.js";

export default {
  name: "home",
  data() {
    return {
      // 列表查询分页
      list: [],
      listLoading: false,
      listTotal: 0,
      listQuery: {
        title: "",
        pageNo: 1,
        pageSize: 10,
      },

      // 详情弹框
      detailModal: false,
      detailObj: {},
    };
  },
  created() {
    // this.handleLogin()
  },
  methods: {
    handleLogin() {
      login({
        username: "admin",
        password: "123456",
      })
        .then((res) => {
          if (res) {
            // success, do somethings
          } else {
            this.$message({
              type: "error",
              message: "操作失败",
            });
          }
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: "操作失败",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
}
</style>
