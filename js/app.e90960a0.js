(function(){"use strict";var t={3682:function(t,e,o){var n=o(9242),i=o(3396);function r(t,e){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var a=o(89);const c={},l=(0,a.Z)(c,[["render",r]]);var s=l,d=o(678);function u(t,e,o,n,r,a){const c=(0,i.up)("ToDoList");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c)])}const m={class:"todolist"},f={class:"todolist__content"};function p(t,e,o,n,r,a){const c=(0,i.up)("NewItem"),l=(0,i.up)("ToDoItem"),s=(0,i.up)("ToDoAction");return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",f,[(0,i.Wm)(c),(0,i.Wm)(l),(0,i.Wm)(s)])])}var g=o(7139);const h=["onClick"],v={class:"todo-item__text"},I={key:0,class:"todo-item__empty"};function _(t,e,o,n,r,a){const c=(0,i.up)("MdiIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.items(t.filter),(e=>((0,i.wg)(),(0,i.iD)("div",{class:"todo-item",key:e.id,onClick:o=>t.changeStatus(e)},[(0,i.Wm)(c,{class:(0,g.C_)(["todo-item__check",e.status]),iconpath:r.mdiCheck,iconcolor:"completed"===e.status?"green":"gray"},null,8,["iconpath","class","iconcolor"]),(0,i._)("div",v,(0,g.zw)(e.text),1)],8,h)))),128)),0===t.items(t.filter).length?((0,i.wg)(),(0,i.iD)("div",I," Ничего не найдено! ")):(0,i.kq)("",!0)],64)}var w=o(6526);const b=["width","height"],y=["fill","d"];function T(t,e,o,n,r,a){return(0,i.wg)(),(0,i.iD)("svg",{class:"icon",fill:"currentColor",width:o.iconwidth,height:o.iconheight,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{class:"icon__path",fill:o.iconcolor,d:o.iconpath},null,8,y)],8,b)}var S={name:"MdiIcon",props:{iconpath:{type:String,required:!0},iconwidth:{type:String,default:"24"},iconheight:{type:String,default:"24"},iconcolor:{type:String,default:"#000000"}}};const k=(0,a.Z)(S,[["render",T]]);var D=k,F=o(65),C={name:"ToDoItem",components:{MdiIcon:D},data(){return{mdiCheck:w.oL1}},computed:{...(0,F.Se)({items:"getFilteredItems",filter:"getTodoFilter"})},methods:{...(0,F.OI)({changeStatus:"changeStatus"})}};const O=(0,a.Z)(C,[["render",_],["__scopeId","data-v-ddc68ffa"]]);var L=O;const j={class:"new-item"};function x(t,e,o,r,a,c){const l=(0,i.up)("MdiIcon");return(0,i.wg)(),(0,i.iD)("div",j,[(0,i.wy)((0,i._)("input",{class:"new-item__input",type:"text",placeholder:"Новая задача","onUpdate:modelValue":e[0]||(e[0]=t=>a.inputData=t),onKeyup:e[1]||(e[1]=(0,n.D2)((t=>c.createItem()),["enter"]))},null,544),[[n.nr,a.inputData,void 0,{trim:!0}]]),(0,i.Wm)(l,{class:"new-item__enter",iconpath:a.mdiKeyboardReturn,iconcolor:"gray",onClick:e[2]||(e[2]=t=>c.createItem())},null,8,["iconpath"])])}var N={name:"NewItem",components:{MdiIcon:D},data(){return{mdiKeyboardReturn:w.xbx,inputData:""}},methods:{...(0,F.OI)({newItem:"newItem"}),createItem(){0!==this.inputData.length&&(this.newItem(this.inputData),this.inputData="")}}};const W=(0,a.Z)(N,[["render",x],["__scopeId","data-v-3fdbe98a"]]);var A=W;const M={class:"todo-action"},Z={class:"todo-action__counter"},B={class:"todo-action__filters"},P=(0,i.Uk)("Все"),E=(0,i.Uk)("Активные"),U=(0,i.Uk)("Выполненные"),J={class:"todo-action__clear"},K=(0,i.Uk)("Очистить выполненные");function q(t,e,o,n,r,a){const c=(0,i.up)("ToDoBtn");return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("div",Z," Осталось: "+(0,g.zw)(t.filteredItems("active").length),1),(0,i._)("div",B,[(0,i.Wm)(c,{class:"todo-action__btn",onClick:e[0]||(e[0]=t=>a.changeFilter("all")),active:"all"===t.filter},{default:(0,i.w5)((()=>[P])),_:1},8,["active"]),(0,i.Wm)(c,{class:"todo-action__btn",onClick:e[1]||(e[1]=t=>a.changeFilter("active")),active:"active"===t.filter},{default:(0,i.w5)((()=>[E])),_:1},8,["active"]),(0,i.Wm)(c,{class:"todo-action__btn",onClick:e[2]||(e[2]=t=>a.changeFilter("completed")),active:"completed"===t.filter},{default:(0,i.w5)((()=>[U])),_:1},8,["active"])]),(0,i._)("div",J,[(0,i.Wm)(c,{class:"todo-action__btn",onClick:e[3]||(e[3]=e=>t.clearCompleted()),active:!0,disable:a.isDisabled},{default:(0,i.w5)((()=>[K])),_:1},8,["disable"])])])}const H=["disabled"],z=(0,i.Uk)("Кнопка");function R(t,e,o,n,r,a){return(0,i.wg)(),(0,i.iD)("button",{class:(0,g.C_)(["todo-btn",o.active?"active":""]),disabled:o.disable},[(0,i.WI)(t.$slots,"default",{},(()=>[z]),!0)],10,H)}var V={name:"ToDoBtn",props:{active:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}}};const Y=(0,a.Z)(V,[["render",R],["__scopeId","data-v-1a7143bc"]]);var $=Y,G={name:"NewItem",components:{ToDoBtn:$},data(){return{disableClear:!0}},computed:{...(0,F.Se)({filter:"getTodoFilter",allItems:"getAllItems",filteredItems:"getFilteredItems"}),isDisabled(){return!(this.allItems.length>0)||!this.allItems.find((t=>"completed"===t.status))}},methods:{...(0,F.OI)({setFilter:"changeFilter",clearCompleted:"clearCompleted"}),changeFilter(t){this.setFilter(t)}}};const Q=(0,a.Z)(G,[["render",q],["__scopeId","data-v-ea51d708"]]);var X=Q,tt={components:{ToDoItem:L,NewItem:A,ToDoAction:X},name:"ToDoList",watch:{filter(){this.writeToLocalStorage()},allItems:{handler(){this.writeToLocalStorage()},deep:!0}},computed:{...(0,F.Se)({filter:"getTodoFilter",allItems:"getAllItems"})},methods:{...(0,F.nv)({firstLoad:"firstLoad"}),...(0,F.OI)({writeToLocalStorage:"writeToLocalStorage"})},mounted(){this.firstLoad()}};const et=(0,a.Z)(tt,[["render",p],["__scopeId","data-v-69143b95"]]);var ot=et,nt={name:"HomeView",components:{ToDoList:ot}};const it=(0,a.Z)(nt,[["render",u]]);var rt=it;const at=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,7381))}],ct=(0,d.p7)({history:(0,d.PO)("/"),routes:at});var lt=ct,st=(0,F.MT)({state:{todoFilter:"all",todoItems:[]},getters:{getTodoFilter(t){return t.todoFilter},getAllItems(t){return t.todoItems},getFilteredItems:t=>e=>{let o=t.todoItems;return e&&"all"!==e?o.filter((t=>t.status==e)):o}},mutations:{writeToLocalStorage(t){localStorage.setItem("todoitems",JSON.stringify(t.todoItems)),localStorage.setItem("todofilter",JSON.stringify(t.todoFilter))},setTodoItems(t,e){t.todoItems=e},setTodoFilter(t,e){t.todoFilter=e},changeStatus(t,e){let o=e;"completed"===o.status?o.status="active":o.status="completed";let n=t.todoItems.findIndex((t=>t.id===o.id));t.todoItems[n]={...o}},changeFilter(t,e){t.todoFilter=e},clearCompleted(t){t.todoItems=t.todoItems.filter((t=>"completed"!==t.status))},newItem(t,e){let o=0;t.todoItems.length>0&&(o=t.todoItems.reduce(((t,e)=>t.id>e.id?t:e)).id+1);let n={id:o,text:e,status:"active"};t.todoItems.push(n)}},actions:{firstLoad(t){if(localStorage.getItem("todoitems")){const e=JSON.parse(localStorage.getItem("todoitems"));t.commit("setTodoItems",e)}if(localStorage.getItem("todofilter")){const e=JSON.parse(localStorage.getItem("todofilter"));t.commit("setTodoFilter",e)}}},modules:{}});const dt=(0,n.ri)(s);dt.use(st),dt.use(lt),dt.mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,r){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],r=t[d][2];for(var c=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(c=!1,r<a&&(a=r));if(c){t.splice(d--,1);var s=i();void 0!==s&&(e=s)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,i,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.e3c51105.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="to-do-list:";o.l=function(n,i,r,a){if(t[n])t[n].push(i);else{var c,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+r){c=u;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",e+r),c.src=n),t[n]=[i];var m=function(e,o){c.onerror=c.onload=null,clearTimeout(f);var i=t[n];if(delete t[n],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,n){var i=o.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(o,n){i=t[e]=[o,n]}));n.push(i[2]=r);var a=o.p+o.u(e),c=new Error,l=function(n){if(o.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}};o.l(a,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,a=n[0],c=n[1],l=n[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(l)var d=l(o)}for(e&&e(n);s<a.length;s++)r=a[s],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},n=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3682)}));n=o.O(n)})();
//# sourceMappingURL=app.e90960a0.js.map