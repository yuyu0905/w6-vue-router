<template>
    <VueLoading :active="isLoading"></VueLoading>
    <div class="container">
        <div class="mt-4">
            <table class="table align-middle">
                <thead>
                <tr>
                    <th width="120">訂單編號</th>
                    <th width="120">客戶名稱</th>
                    <th width="120">email</th>
                    <th width="120">電話</th>
                    <th width="120">總計</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.user.name }}</td>
                    <td>{{ order.user.email }}</td>
                    <td>{{ order.user.tel }}</td>
                    <td class="text-end">
                        {{ order.total }}
                    </td>
                  </tr>
                </tbody>
            </table>
            <!-- 分頁元件 -->
            <PaginationComponent :pagination="pagination" @change-page="getOrders"></PaginationComponent>
        </div>
    </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue'
const { VITE_API, VITE_APIPATH } = import.meta.env
export default {
  data () {
    return {
      isLoading: false,
      orders: [],
      pagination: {}
    }
  },
  methods: {
    // 購物車列表
    getOrders (pageNum = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_API}/api/${VITE_APIPATH}/admin/orders?page=${pageNum}`)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          alert(err.response.data.message)
          this.isLoading = false
        })
    }
  },
  components: {
    PaginationComponent
  },
  mounted () {
    this.getOrders()
  }
}
</script>
