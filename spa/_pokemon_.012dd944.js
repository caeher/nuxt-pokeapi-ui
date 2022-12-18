import{_ as V,u as j}from"./Badge.4729a806.js";import{f as E,o as s,b as o,e,F as h,i as x,t as n,s as F,q as M,x as O,D as P,u as r,h as d,z as k,B as w,c as R}from"./entry.5df0d2b7.js";const S={class:"overflow-x-auto relative shadow-md sm:rounded-lg"},L={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},X={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},G={class:"py-4 px-6 capitalize"},H=E({__name:"Table",props:{header:{type:Array,required:!0},body:{type:Object,required:!0}},setup(y){return(c,b)=>(s(),o("div",S,[e("table",L,[e("thead",X,[e("tr",null,[(s(!0),o(h,null,x(y.header,(i,_)=>(s(),o("th",{key:_,scope:"col",class:"py-3 px-6"},n(i),1))),128))])]),e("tbody",null,[(s(!0),o(h,null,x(y.body,(i,_)=>(s(),o("tr",{key:_,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[(s(!0),o(h,null,x(Object.values(i),t=>(s(),o("td",G,n(t),1))),256))]))),128))])])]))}}),I={class:"min-h-screen"},J={class:"my-12 px-3 sm:px-12 md:px-20 lg:px-32 xl:px-40"},K={class:"grid grid-cols-1 md:grid-cols-12 gap-3"},Q={class:"md:col-span-4"},U={class:"bg-slate-100 dark:bg-gray-800 dark:text-gray-100 p-3 rounded-lg drop-shadow"},W={class:"mx-auto"},Y=["src"],Z={class:"mt-3 bg-white dark:bg-gray-800 -mx-3 -mb-3 pb-3 rounded-b-lg px-3"},ee={class:"text-5xl text-center font-bold text-slate-900 pb-6 capitalize"},te={class:"grid grid-cols-2 grid-rows-2 gap-3"},se={class:"col-span-2"},oe={class:"mt-6 flex items-center gap-3"},ae=e("span",{class:"text-slate-500"},"XP",-1),ne={class:"flex-1"},re={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},le={class:"bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",style:{width:"100%"}},de={class:"mt-6 grid grid-cols-12 items-center"},ce={class:"block text-slate-500 col-span-3 capitalize"},ie={class:"col-span-9"},_e={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},ue={class:"bg-emerald-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",style:{width:"100%"}},pe={class:"md:col-span-8"},xe=E({__name:"[pokemon]",async setup(y){let c,b;const{params:i}=F(),{public:{pokeApi:_}}=M(),{data:t,error:T,pending:me}=([c,b]=O(()=>j("pokemon",async()=>$fetch(`${_}/pokemon/${i.pokemon.toString()}`))),c=await c,b(),c);if(T.value)throw P({statusCode:404,message:"Not found",fatal:!0});const $=[];return t.value&&t.value.moves!=null&&t.value.moves.every(v=>{var f;if(v.version_group_details!=null){const u=v.version_group_details.map(l=>{var p,m;return{learn_method:(p=l.move_learn_method)==null?void 0:p.name,version:(m=l.version_group)==null?void 0:m.name,level_learned:l.level_learned_at}});return{name:(f=v.move)==null?void 0:f.name,...u[0]}}}),console.log($),(v,f)=>{var l,p,m,B,C,z,D,N,q;const u=V,A=H;return s(),o("div",I,[e("div",J,[e("div",null,[e("div",K,[e("div",Q,[e("div",U,[e("figure",W,[e("img",{class:"mx-auto",src:(C=(B=(m=(p=(l=r(t))==null?void 0:l.sprites)==null?void 0:p.other)==null?void 0:m.home)==null?void 0:B.front_default)!=null?C:"",alt:""},null,8,Y)]),e("div",Z,[e("h1",ee,n((z=r(t))==null?void 0:z.name),1),e("div",te,[e("div",null,[e("p",null,[d(" height: "),k(u,{type:"success"},{default:w(()=>{var a;return[d(n((a=r(t))==null?void 0:a.height),1)]}),_:1})])]),e("div",null,[e("p",null,[d(" weight: "),k(u,{type:"info"},{default:w(()=>{var a;return[d(n((a=r(t))==null?void 0:a.weight),1)]}),_:1})])]),e("div",se,[d(" types: "),(s(!0),o(h,null,x((D=r(t))==null?void 0:D.types,a=>(s(),R(u,null,{default:w(()=>{var g;return[d(n((g=a.type)==null?void 0:g.name),1)]}),_:2},1024))),256))])]),e("div",oe,[ae,e("div",ne,[e("div",re,[e("div",le,n((N=r(t))==null?void 0:N.base_experience),1)])])]),(s(!0),o(h,null,x((q=r(t))==null?void 0:q.stats,a=>{var g;return s(),o("div",de,[e("span",ce,n((g=a.stat)==null?void 0:g.name),1),e("div",ie,[e("div",_e,[e("div",ue,n(a.base_stat),1)])])])}),256))])])]),e("div",pe,[e("div",null,[k(A,{header:["name","learn method","level learned","version"],body:$})])])])])])])}}});export{xe as default};