<template>
    <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
            aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="deleteProduct">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
const { VITE_API, VITE_APIPATH } = import.meta.env
export default {
  props: ['tempProduct'],
  data () {
    return {
      delProductModal: ''
    }
  },
  methods: {
    // 刪除商品
    deleteProduct () {
      this.$http.delete(`${VITE_API}/api/${VITE_APIPATH}/admin/product/${this.tempProduct.id}`, { data: this.tempProduct })
        .then(res => {
          alert(res.data.message)
          this.delProductModal.hide()
          this.$emit('reloadPage')
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },

    showModal () {
      this.delProductModal.show()
    }
  },
  mounted () {
    // dom 生成後，再取得 model
    this.delProductModal = new Modal(this.$refs.delProductModal, { keyboard: false })
  }
}
</script>
