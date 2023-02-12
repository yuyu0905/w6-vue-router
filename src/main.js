import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import { required, email, min, max } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// VeeValid
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

configure({
  generateMessage: localize({ zh_TW: zhTW })
//   validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
})

setLocale('zh_TW')

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.component('VueLoading', Loading)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
