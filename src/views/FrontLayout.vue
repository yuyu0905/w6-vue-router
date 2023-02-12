<template>
  <header class="container mt-4">
    <h1 class="text-center">前台頁面</h1>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">前台產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">前台購物車</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
