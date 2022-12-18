import{C as w,y as $,L as C,f as _,r as k,q as b,l as N,o,b as n,e,u as t,t as l,w as v,K as A,z as m,B as S,h as f,M,F as x,i as y,m as D,N as L,c as R,a as j,J as B}from"./entry.8a5170c3.js";function F(){const a=w();return a._appConfig||(a._appConfig=$(C)),a._appConfig}const p={name:"Pokeapi",icon:"pokeball-pokemon",prefix:"/nuxt-pokeapi-ui"},V={class:"p-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"},z={class:"container flex flex-wrap items-center justify-between mx-auto"},P={href:"/",class:"flex items-center"},T=["src"],H={class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white"},O=e("span",{class:"sr-only"},"Open main menu",-1),q=e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),G=[O,q],E={class:"flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},I=_({__name:"Navbar",setup(a){const s=k(!1),{public:{iconSufix:i,website:c}}=b();return(d,r)=>{const h=M,g=N("click-outside");return o(),n("nav",V,[e("div",z,[e("a",P,[e("img",{src:`${t(c).prefix}/svgs/${t(p).icon}-${t(i)}.svg`,class:"h-6 mr-3 sm:h-10",alt:"Pokeapi Logo"},null,8,T),e("span",H,l(t(p).name),1)]),v((o(),n("button",{onClick:r[0]||(r[0]=u=>s.value=!t(s)),type:"button",class:"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-multi-level","aria-expanded":"false"},G)),[[g,()=>s.value=!1]]),e("div",{class:A(["w-full md:block md:w-auto",[{hidden:!t(s)}]]),id:"navbar-multi-level"},[e("ul",E,[e("li",null,[m(h,{class:"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent","aria-current":"page",to:"/"},{default:S(()=>[f("Home")]),_:1})])])],2)])])}}}),J={class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},K={class:"text-gray-600 dark:text-gray-400"},U=["href"],Y=_({__name:"MenuVertical",props:{data:{type:Object,required:!0}},setup(a){const s=k(0);return(i,c)=>(o(),n("div",null,[e("h2",J,l(a.data.name),1),e("ul",K,[(o(!0),n(x,null,y(a.data.links,d=>(o(),n("li",{key:d.key||++s.value,class:"mb-4"},[e("a",{href:d.url,class:"hover:underline"},l(d.name),9,U)]))),128))])]))}}),Q={class:"flex mt-4 space-x-6 sm:justify-center sm:mt-0"},W={href:"#",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},X=["src","alt"],Z={class:"sr-only"},ee=_({__name:"SocialNetworksRow",props:{data:{type:Object,required:!0}},setup(a){const{public:{iconSufix:s,website:i}}=b();return(c,d)=>(o(),n("div",Q,[(o(!0),n(x,null,y(a.data,r=>(o(),n("a",W,[e("img",{src:`${t(i).prefix}/svgs/${r.icon}-${t(s)}.svg`,alt:`${r.name} icon`,class:"w-5 h-5"},null,8,X),e("span",Z,l(r.name),1)]))),256))]))}}),te=()=>D("color-mode").value,se=[{name:"Facebook",url:"https://facebook.com",icon:"facebook",key:"facebook"},{name:"Linkedin",url:"https://linkedin.com/crisanto-escalante",icon:"linkedin",key:"linkedin"},{name:"Twitter",url:"https://twitter.com",icon:"twitter",key:"twitter"},{name:"TikTok",url:"https://tiktok.com",icon:"tiktok",key:"tiktok"},{name:"Instagram",url:"https://instagram.com",icon:"instagram",key:"instagram"},{name:"Github",url:"https://github.com/caeher",icon:"github",key:"github"}],ae=[{name:"Resources",links:[{name:"PokeApi",url:"https://pokeapi.co/"},{name:"Tailwind CSS",url:"https://tailwindcss.com",key:"tailwindcss"}]},{name:"Resources",links:[{name:"Discord",url:"#discord",key:"discord"},{name:"Github",url:"https://github.com/caeher",key:"github"}]},{name:"Legal",links:[{name:"PokeApi",url:"https://pokeapi.com",key:"pokeapi"},{name:"Privacy and policy",url:"#privacyandpolicy",key:"privacyandpolicy"}]}],oe={class:"p-4 bg-white sm:p-6 dark:bg-gray-900"},ne={class:"md:flex md:justify-between"},re={class:"mb-6 md:mb-0"},ie={href:"/",class:"flex items-center"},ce=["src","alt"],le={class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},de={class:"mt-6"},ue=e("option",{value:"light"},"Light",-1),me=e("option",{value:"dark"},"Dark",-1),pe=[ue,me],_e={class:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"},he=e("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),ge={class:"sm:flex sm:items-center sm:justify-between"},fe={class:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},ke={href:"https://flowbite.com/",class:"hover:underline"},be=_({__name:"Footer",setup(a){F();const{public:{website:s,iconSufix:i}}=b(),c=te();return k(!1),(d,r)=>{const h=Y,g=ee;return o(),n("footer",oe,[e("div",ne,[e("div",re,[e("a",ie,[e("img",{src:`${t(p).prefix}/svgs/${t(s).icon}-${t(i)}.svg`,class:"mr-3 h-8",alt:`${t(s).name} Logo`},null,8,ce),e("span",le,l(t(s).name),1)]),e("div",de,[v(e("select",{"onUpdate:modelValue":r[0]||(r[0]=u=>t(c).preference=u)},pe,512),[[L,t(c).preference]])])]),e("div",_e,[(o(!0),n(x,null,y(t(ae),u=>(o(),R(h,{data:u},null,8,["data"]))),256))])]),he,e("div",ge,[e("span",fe,[f("\xA9 "+l(new Date(Date.now()).getFullYear())+" ",1),e("a",ke,l(t(p).name)+"\u2122",1),f(". All Rights Reserved. ")]),m(g,{data:t(se)},null,8,["data"])])])}}}),xe={};function ye(a,s){const i=I,c=be;return o(),n("div",null,[m(i),B(a.$slots,"default"),m(c)])}const we=j(xe,[["render",ye]]);export{we as default};