import{_ as h,r as g,o as r,c as n,b as m,a as t,t as o,e as v,v as f,F as l,f as y}from"./index-eeada766.js";const{VITE_API:u,VITE_APIPATH:p}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"vue-hexschool-product-list",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{product:{},qty:1,isLoading:!1}},methods:{getProduct(){this.isLoading=!0;const{id:d}=this.$route.params;this.$http.get(`${u}/api/${p}/product/${d}`).then(e=>{this.product=e.data.product,this.isLoading=!1}).catch(e=>{alert(e.response.data.message),this.isLoading=!1})},addCart(d){this.isLoading=!0;const{id:e}=this.$route.params;this.$http.post(`${u}/api/${p}/cart`,{data:{product_id:e,qty:this.qty}}).then(c=>{alert(c.data.message),this.isLoading=!1}).catch(c=>{alert(c.response.data.message),this.isLoading=!1})}},mounted(){this.getProduct()}},V={class:"container mt-4"},P={class:"text-center"},b={class:"row mt-4"},E={class:"col-sm-6"},I=["src","alt"],q={class:"col-sm-6"},A={class:"badge bg-primary rounded-pill"},k={key:0,class:"h5"},x={key:1},T={class:"h6"},C={class:"h5"},D={class:"input-group"},B=["value"];function w(d,e,c,S,s,a){const _=g("VueLoading");return r(),n(l,null,[m(_,{active:s.isLoading},null,8,["active"]),t("div",V,[t("h2",P,o(s.product.title),1),t("div",b,[t("div",E,[t("img",{class:"img-fluid",src:s.product.imagesUrl,alt:s.product.title},null,8,I)]),t("div",q,[t("span",A,o(s.product.category),1),t("p",null,"商品描述："+o(s.product.description),1),t("p",null,"商品內容："+o(s.product.content),1),s.product.price==s.product.origin_price?(r(),n("div",k,o(s.product.origin_price)+" 元",1)):(r(),n("div",x,[t("del",T,"原價 "+o(s.product.origin_price)+" 元",1),t("div",C,"現在只要 "+o(s.product.price)+" 元",1)])),t("div",null,[t("div",D,[v(t("select",{class:"form-select","onUpdate:modelValue":e[0]||(e[0]=i=>s.qty=i)},[(r(),n(l,null,y(20,i=>t("option",{value:i,key:`${i}_qty`},o(i),9,B)),64))],512),[[f,s.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...i)=>a.addCart&&a.addCart(...i))},"加入購物車")])])])])])],64)}const F=h(L,[["render",w]]);export{F as default};
