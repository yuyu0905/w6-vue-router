<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary" @click="openModal('create')">
            建立新的產品
          </button>
        </div>
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td class="text-end"> {{ product.origin_price }}</td>
              <td class="text-end"> {{ product.price }}</td>
              <td>
                <span class="text-success" v-if="product.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('modify', product)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', product)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁元件 -->
        <PaginationComponent :pagination="pagination" @change-page="getProducts"></PaginationComponent>
      </div>
      <!-- Modal -->
      <ProductModal ref="productModal" :temp-product="tempProduct" :operate-type="operateType" @reload-page="getProducts(pagination.current_page)"></ProductModal>
      <DelProductModal ref="delProductModal" :temp-product="tempProduct" @reload-page="getProducts"></DelProductModal>
      <!-- Modal -->
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue'
import ProductModal from '@/components/ProductModal.vue'
import DelProductModal from '@/components/DelProductModal.vue'
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      operateType: '',
      tempProduct: {
        imagesUrl: []
      },
      pagination: {}
    }
  },
  methods: {
    getProducts (pageNum = 1) { // 參數預設值
      this.isLoading = true
      this.$http.get(`${VITE_API}/api/${VITE_APIPATH}/admin/products?page=${pageNum}`)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(err => {
          alert(err.response.data.message)
          this.isLoading = false
        })
    },

    openModal (operateType, product) {
      this.operateType = operateType
      if (operateType === 'create') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.$refs.productModal.showModal()
      } else if (operateType === 'modify') {
        this.tempProduct = {
          ...product
        }
        this.$refs.productModal.showModal()
      } else if (operateType === 'delete') {
        this.tempProduct = {
          ...product
        }
        this.$refs.delProductModal.showModal()
      }
    }
  },
  components: {
    PaginationComponent,
    ProductModal,
    DelProductModal
  },
  mounted () {
    this.getProducts()
  }
}
</script>
