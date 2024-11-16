import{e as j,j as x,f as z,y as F,o as f,c as p,F as R,k as $,z as C,P as B,i as g,A as I,a as l,t as b,b as W,X as S,a5 as q}from"./index.03c44043.js";import{debounce as A}from"lodash-es";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";function D(a){return Number.isInteger(a)}function w(a,s){if(D(s))return Math.floor(a*Math.pow(10,s))/Math.pow(10,s);throw"Input is not a Integer"}const E={__name:"index",props:{request:Function,gap:{type:Number,default:10},itemMinWidth:{type:Number,default:250},columns:{type:Number,default:5},minColumns:{type:Number,default:2}},setup(a){const s=a,c=71.6,n=j(),i=x({totalList:[],totalListPos:[],showList:[]}),u=x({width:s.itemMinWidth,columns:s.columns}),M=()=>{const{itemMinWidth:e,columns:o,gap:t,minColumns:_}=s;if(n.value===null)return;const m=n.value.clientWidth;let d=e,h=_;for(let r=o;r>1;r--)if((e+t)*r-t<=m){d=w((m-t*(r-1))/r,2),h=r;break}console.log("realWidth: ",d),console.log("realColumns: ",h),Object.assign(u,{width:d,columns:h})};class P{constructor(o,t){this.positionQueue=new Array(o).fill(0),this.shortest=0,this.width=t}get x(){return this.shortest*(this.width+s.gap)}get y(){return this.positionQueue[this.shortest]}add(o){this.positionQueue[this.shortest]+=o,this.shortest=this._findMin()}_findMin(){let o=0,t=this.positionQueue.length-1;for(;o<t;)this.positionQueue[o]<=this.positionQueue[t]?t--:o++;return o}}const T=e=>e<.75?.75:e>4/3?4/3:e,k=(e,o,t)=>{const _=T(t/o);return w(_*e,2)},N=async()=>{const{data:{items:e}}=await s.request();Object.assign(i.totalList,e)},O=()=>{const e=new P(u.columns,u.width);for(let o of i.totalList){const{width:t,height:_}=o.note_card.cover,m=u.width,d=k(m,t,_),h=w(d+c,2),r=e.x,Q=e.y;e.add(h),Object.assign(o,{width:m,height:h,imgHeight:d,x:r,y:Q})}},v=new ResizeObserver(e=>y()),y=A(()=>{H()},10,{leading:!0});console.log(y);const H=()=>{M(),O()};return z(async()=>{await N(),v.observe(n.value)}),F(()=>{n.value&&v.unobserve(n.value)}),(e,o)=>(f(),p("div",{class:"water-fall",ref_key:"containerRef",ref:n},[(f(!0),p(R,null,$(g(i).totalList,t=>(f(),p("section",{class:"water-fall-item",key:t.id,style:C({width:t.width+"px",transform:`translate3d(${t.x}px, ${t.y}px, 0)`})},[B(e.$slots,"item",{itemInfo:t,itemConfig:g(u)},void 0,!0)],4))),128))],512))}},V=L(E,[["__scopeId","data-v-57759fb0"]]);const U={class:"card-container"},X={class:"footer"},G={href:"",class:"title"},J={class:"author-wrapper"},K={href:"",class:"author"},Y={__name:"index",props:{itemTotal:{type:Object}},setup(a){const s=a,c=I(()=>s.itemTotal.itemInfo.width),n=I(()=>s.itemTotal.itemInfo.imgHeight);return(i,u)=>(f(),p("div",U,[l("div",{class:"cover",style:C({width:g(c)+"px",height:g(n)+"px"})},null,4),l("div",X,[l("a",G,[l("span",null,b(s.itemTotal.itemInfo.note_card.display_title),1)]),l("div",J,[l("a",K,[l("span",null,b(s.itemTotal.itemInfo.note_card.user.nickname),1)])])])]))}},Z=L(Y,[["__scopeId","data-v-4a9d3813"]]),nt={__name:"WaterFall",setup(a){const s=()=>new Promise((c,n)=>{q(()=>import("./list.269c972c.js"),[]).then(i=>c(i)).catch(i=>n(i))});return(c,n)=>(f(),p("div",null,[W(V,{request:s},{item:S(i=>[W(Z,{itemTotal:i},null,8,["itemTotal"])]),_:1})]))}};export{nt as default};