import{a as ne,o,b as a,e,f as z,r as w,t as n,w as le,u as t,h as p,F as v,i as y,j as k,k as ie,l as de,m as ce,p as ue,q as ge,s as pe,v as he,x as me,y as G,z as P,A as _e,c as C,B as q}from"./entry.c7e1538f.js";import{u as J,_ as xe}from"./Badge.a9cf3d8f.js";const fe={},be={class:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6"},ve=e("div",{class:"text-center"},[e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"},[e("span",{class:"block capitalize"},"Find your favorite pokemon."),e("span",{class:"block text-indigo-600 capitalize"},"catch them!")])],-1),ye=[ve];function ke(s,d){return o(),a("div",be,ye)}const we=ne(fe,[["render",ke]]),$e={class:"flex relative"},Se={for:"search-dropdown",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},Ce=e("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ze={key:0,class:"z-50 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700","data-popper-placement":"top",style:{position:"absolute",inset:"auto auto 0px 0px",margin:"0px"}},Be={class:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdown-button"},Ae=["onClick"],Ve={type:"button",class:"inline-flex w-full capitalize px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},Pe={class:"relative w-full"},qe=["value","onKeyup","placeholder"],Ne=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),Re=e("span",{class:"sr-only"},"Search",-1),Ee=[Ne,Re],Fe=z({__name:"SearchBar",props:{label:String,placeholder:String,options:{type:Array,required:!0},modelValue:String||Number},emits:["selectChange","search","update:modelValue"],setup(s,{emit:d}){const _=w(s.options[0]),h=w(!1);function u(i){_.value=i,h.value=!1,d("selectChange",i)}function f(){d("search")}function x(){f()}return(i,l)=>{const $=de("click-outside");return o(),a("div",$e,[e("label",Se,n(s.label),1),le((o(),a("button",{onClick:l[0]||(l[0]=r=>h.value=!t(h)),"data-dropdown-toggle":"dropdown",class:"flex-shrink-0 z-10 capitalize inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600",type:"button"},[p(n(t(_))+" ",1),Ce])),[[$,()=>h.value=!1]]),t(h)?(o(),a("div",ze,[e("ul",Be,[(o(!0),a(v,null,y(s.options,r=>(o(),a("li",{onClick:W=>u(r)},[e("button",Ve,n(r),1)],8,Ae))),256))])])):k("",!0),e("div",Pe,[e("input",{type:"search",id:"search-dropdown",value:s.modelValue,onInput:l[1]||(l[1]=r=>d("update:modelValue",r.target.value||"")),onKeyup:ie(x,["enter"]),class:"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",placeholder:`${s.placeholder} ${t(_)} (type a number)`,required:""},null,40,qe),e("button",{type:"submit",onClick:f,class:"absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},Ee)])])}}}),He={class:"max-w-sm pt-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"},Le=["src","alt"],Me={class:"p-5"},De=["href"],Te={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},Ke=["href"],je=e("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-2 -mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ie=z({__name:"Card",props:{image:{type:String,required:!0},title:{type:String,required:!0}},setup(s){return(d,b)=>(o(),a("div",He,[e("img",{class:"rounded-t-lg max-h-40 mx-auto",src:s.image,alt:`${s.title} image`},null,8,Le),e("div",Me,[e("a",{href:`/pokemon/${s.title}`},[e("h5",Te,n(s.title),1)],8,De),e("a",{href:`/pokemon/${s.title}`,class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[p(" Read more "),je],8,Ke)])]))}}),Q=ce("paginationCounter",()=>({count:0})),Oe={class:"flex flex-col items-center"},Ue={class:"text-sm text-gray-700 dark:text-gray-400"},Ge={class:"font-semibold text-gray-900 dark:text-white"},Je={class:"font-semibold text-gray-900 dark:text-white"},Qe={class:"font-semibold text-gray-900 dark:text-white"},We={class:"inline-flex mt-2 xs:mt-0"},Xe=e("svg",{"aria-hidden":"true",class:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"})],-1),Ye=e("svg",{"aria-hidden":"true",class:"w-5 h-5 ml-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ze=z({__name:"SimplePagination",props:{limit:{type:Number,required:!0},total:{type:Number,required:!0}},emits:["pagination"],setup(s,{emit:d}){const b=s,_=Q,h=ue(()=>b.limit+_.value.count*20);function u(f){d("pagination",f)}return(f,x)=>(o(),a("div",Oe,[e("span",Ue,[p(" Showing "),e("span",Ge,n(t(_).count*20),1),p(" to "),e("span",Je,n(t(h)),1),p(" of "),e("span",Qe,n(s.total),1),p(" Entries ")]),e("div",We,[e("button",{onClick:x[0]||(x[0]=i=>u("previous")),class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[Xe,p(" Prev ")]),e("button",{onClick:x[1]||(x[1]=i=>u("next")),class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[p(" Next "),Ye])])]))}}),et={class:"my-20"},tt={class:"px-3 sm:px-12 md:px-20 lg:px-32 xl:px-40"},ot={key:0,class:"my-12"},at={key:0,class:"bg-slate-100 dark:bg-gray-800 rounded-lg drop-shadow p-3"},st={class:"grid items-start grid-cols-12"},rt={class:"col-span-4"},nt=["src","alt"],lt={class:"col-span-8"},it={class:"text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-slate-900"},dt=e("p",{class:"mb-3"},"Types: ",-1),ct=e("p",{class:"my-3"},"Abilities: ",-1),ut={key:1,class:"bg-slate-100 dark:bg-gray-800 rounded-lg drop-shadow p-3 my-12"},gt={class:"text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-slate-900"},pt=e("p",{class:"mb-3"},"Flavors: ",-1),ht={key:2,class:"bg-slate-100 dark:bg-gray-800 rounded-lg drop-shadow p-3"},mt={class:""},_t={class:"flex items-center gap-x-3"},xt=["src","alt"],ft={class:"text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-slate-900"},bt={class:"mt-3"},vt={class:"mt-3"},yt={class:"my-12"},kt={key:0,class:"grid grid-cols-2 lg:grid-cols-4 gap-3"},wt={class:"mt-6"},zt=z({__name:"index",async setup(s){let d,b;const{public:{pokeApi:_,pokeSvg:h}}=ge(),u=w("pokemon"),{query:f}=pe(),{push:x}=he(),i=w(""),l=Q;f.page&&(l.value.count=parseInt(f.page.toString()));const $=w(`${_}/${u.value}?limit=20&offset=${l.value.count*20}`),{data:r,error:W,pending:$t,refresh:X}=([d,b]=me(()=>J("pokeapi",async()=>$fetch($.value))),d=await d,b(),d),Y=["pokemon","berry","item"];async function Z(g){r!=null&&r.value[g]&&(g=="next"&&l.value.count>=0?l.value.count++:l.value.count--,l.value.count==0?x("/"):x(`/?page=${l.value.count}`),$.value=r==null?void 0:r.value[g],await X())}function ee(g){return l.value.count==0?g+1:g+1+l.value.count*20}const m=G({data:{}}),N=G({data:{}});let B={};async function te(){if(i.value!=""){const{data:g,error:S,refresh:A,pending:R}=await J("search",async()=>$fetch(`${_}/${u.value}/${i.value}`));m.data=g,N.data=S,B=A}}async function oe(g){u.value=g,B instanceof Function&&B()}return(g,S)=>{var E,F,H,L,M,D,T,K,j,I,O,U;const A=we,R=Fe,V=xe,ae=Ie,se=Ze;return o(),a("div",null,[P(A),e("div",et,[e("div",tt,[P(R,{label:"Pokemon",placeholder:"Search",modelValue:t(i),"onUpdate:modelValue":S[0]||(S[0]=c=>_e(i)?i.value=c:null),options:Y,onSelectChange:oe,onSearch:te},null,8,["modelValue"]),t(N).data?k("",!0):(o(),a("div",ot,[t(u)=="pokemon"?(o(),a("div",at,[e("div",st,[e("figure",rt,[e("img",{src:`${t(h)}/${(E=t(m).data)==null?void 0:E.id}.png`,alt:t(i)},null,8,nt)]),e("div",lt,[e("h2",it,n((F=t(m).data)==null?void 0:F.name),1),dt,(o(!0),a(v,null,y((H=t(m).data)==null?void 0:H.types,c=>(o(),C(V,{class:"inline mr-3",type:"info"},{default:q(()=>[p(n(c.type.name),1)]),_:2},1024))),256)),ct,(o(!0),a(v,null,y((L=t(m).data)==null?void 0:L.abilities,c=>(o(),C(V,{class:"inline mr-3",type:"success"},{default:q(()=>[p(n(c.ability.name),1)]),_:2},1024))),256))])])])):k("",!0),t(u)=="berry"?(o(),a("div",ut,[e("h2",gt,n((M=t(m).data)==null?void 0:M.name),1),pt,(o(!0),a(v,null,y((D=t(m).data)==null?void 0:D.flavors,c=>(o(),C(V,{class:"inline mr-3",type:"info"},{default:q(()=>[p(n(c.flavor.name),1)]),_:2},1024))),256))])):k("",!0),t(u)=="item"?(o(),a("div",ht,[e("div",mt,[e("div",null,[e("figure",_t,[e("img",{class:"w-12 h-12",src:`${(K=(T=t(m).data)==null?void 0:T.sprites)==null?void 0:K.default}`,alt:t(i)},null,8,xt),e("h2",ft,n((j=t(m).data)==null?void 0:j.name),1)]),(o(!0),a(v,null,y((I=t(m).data)==null?void 0:I.effect_entries,c=>(o(),a("div",null,[e("p",bt,"Effect: "+n(c.effect),1),e("p",vt,"Short effect: "+n(c.short_effect),1)]))),256))])])])):k("",!0)])),e("div",yt,[t(r)?(o(),a("div",kt,[(o(!0),a(v,null,y((O=t(r))==null?void 0:O.results,(c,re)=>(o(),C(ae,{title:c.name,image:`${t(h)}/${ee(re)}.png`},null,8,["title","image"]))),256))])):k("",!0),e("div",wt,[P(se,{onPagination:Z,total:(U=t(r))==null?void 0:U.count,limit:20},null,8,["total"])])])])])])}}});export{zt as default};
