import{_ as c,o as u,c as m,a as s,k as p,e as d,j as l}from"./index-eeada766.js";const{VITE_API:h}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"vue-hexschool-product-list",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${h}/admin/signin`,this.user).then(t=>{const{token:e,expired:n,message:a}=t.data;document.cookie=`w6-token=${e}; expires=${n}`,this.$http.defaults.headers.common.Authorization=e,alert(a),this.$router.push("/admin/products")}).catch(t=>{alert(t.response.data.message)})}}},f={class:"container mt-4"},w={class:"row justify-content-center"},g=s("h1",{class:"h3 mb-3 font-weight-normal text-center"}," 請先登入 ",-1),v={class:"col-8"},b={class:"form-floating mb-3"},x=s("label",{for:"username"},"Email address",-1),E={class:"form-floating"},V=s("label",{for:"password"},"Password",-1),P=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function k(t,e,n,a,r,i){return u(),m("div",f,[s("div",w,[g,s("div",v,[s("form",{id:"form",onSubmit:e[2]||(e[2]=p((...o)=>i.login&&i.login(...o),["prevent"]))},[s("div",b,[d(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o)},null,512),[[l,r.user.username]]),x]),s("div",E,[d(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o)},null,512),[[l,r.user.password]]),V]),P],32)])])])}const I=c(_,[["render",k]]);export{I as default};
