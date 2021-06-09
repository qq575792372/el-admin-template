<template>
  <div class="app-container">
    <!-- header -->
    <div class="header-container"></div>
    <!-- main -->
    <div class="main-container">about</div>
    <!-- footer -->
    <div class="footer-container"></div>
  </div>
</template>

<script>
import { login } from '@/api/user.js'

export default {
  name: 'order',
  data() {
    return {
      // 列表查询分页
      list: [],
      listLoading: false,
      listTotal: 0,
      listQuery: {
        title: '',
        pageNo: 1,
        pageSize: 10,
      },

      // 详情弹框
      detailModal: false,
      detailObj: {},
    }
  },
  created() {
    this.handleLogin()
  },
  methods: {
    handleLogin() {
      login({
        username: 'admin',
        password: '123456'
      }).then(res => {
        if (res) {
          // success, do somethings
        } else {
          this.$message({
            type: 'error',
            message: '操作失败'
          })
        }
      }).catch(error => {
        this.$message({
          type: 'error',
          message: '操作失败'
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.app-container {
}
</style>

