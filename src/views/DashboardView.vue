<template>
  <div class="container mt-4">
    <header>
      <h1 class="text-center text-primary">後台頁面</h1>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">回到前台</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/orders">後台訂單列表</router-link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" @click.prevent="logout">登出</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
const { VITE_API } = import.meta.env

export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      this.$http.post(`${VITE_API}/api/user/check`)
        .then(() => {
          // 驗證成功
          this.checkSuccess = true
        })
        .catch(err => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    logout () {
      document.cookie = 'w6-token=;expires=;'
      alert('登出成功')
      this.$router.push('/')
    }
  },
  mounted () {
    // 取出 cookie 的 token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)w6-token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 加入 header
    this.$http.defaults.headers.common.Authorization = token
    if (token) {
      this.checkLogin()
    } else {
      alert('您尚未登入')
      this.$router.push('/login')
    }
  }
}
</script>
