import{e as c,q as m,j as w,o as _,c as g,w as r,v as u,i as t,a as s,s as v}from"./index.03c44043.js";const h=s("span",null,"账号：",-1),f=s("br",null,null,-1),k=s("span",null,"密码：",-1),b=s("br",null,null,-1),x=["disabled"],U={__name:"Login",setup(B){const a=c(!1),d=m(),n=w({username:"",password:""}),i=l=>{a.value=!0,v({method:"post",url:"/login",data:{username:l.username,password:l.password}}).then(e=>{a.value=!1,d.changeRole(l.username);const o=e.headers.get("auth");window.localStorage.setItem("token",o)}).catch(e=>{a.value=!1,console.log(e)})},p=()=>{window.localStorage.removeItem("token")};return(l,e)=>(_(),g("div",null,[h,r(s("input",{type:"text",name:"username","onUpdate:modelValue":e[0]||(e[0]=o=>t(n).username=o)},null,512),[[u,t(n).username]]),f,k,r(s("input",{type:"password",name:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t(n).password=o)},null,512),[[u,t(n).password]]),b,s("button",{onClick:e[2]||(e[2]=o=>i(t(n))),disabled:t(a)},"登录",8,x),s("button",{onClick:p},"注销")]))}};export{U as default};
