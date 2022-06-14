(function(){"use strict";var t={8966:function(t,e,n){n.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("strong",[t._v("Loading...")]),n("b-spinner",{staticClass:"ml-4",attrs:{variant:"primary",label:"loading"}})],1)},i=[],a={name:"TheSpinner"},o=a,s=n(1001),l=(0,s.Z)(o,r,i,!1,null,"1bef42a6",null),u=l.exports},8958:function(t,e,n){var r=n(538),i=n(5706),a=n(8262),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],l=n(5069),u=n(3017);n(44);r["default"].use(l.XG7),r["default"].use(u.X);var c={name:"App"},p=c,d=n(1001),f=(0,d.Z)(p,o,s,!1,null,null,null),h=f.exports,v=n(8345),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",["getInput"===t.state?n("b-container",{staticClass:"px-0",attrs:{fluid:""}},[n("h1",[t._v("You've got some NiRV!")]),n("h3",{staticClass:"mt-5"},[t._v("Welcome to the Neuroimaging Report Viewer")]),n("p",{staticClass:"mt-4 text-left"},[t._v(" You can load data into NiRV using a few methods ")]),n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"Use local files",active:""}},[n("b-form-group",{staticClass:"mt-4 text-left",attrs:{label:"Choose a directory containing input files generated by the NiRV BIDS-App.",description:"All computation happens on the client side. Your data will not be uploaded to any server."}},[n("b-form-file",{attrs:{directory:"",multiple:"",placeholder:"Choose a directory..."},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1),n("b-tab",{attrs:{title:"Use remote files"}},[n("b-input-group",{attrs:{prepend:"URI"}},[n("b-form-input",{attrs:{placeholder:"s3://nirv-example-data"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.navigate.apply(null,arguments)}},model:{value:t.uri,callback:function(e){t.uri=e},expression:"uri"}}),n("b-input-group-append",[n("b-btn",{attrs:{text:"Button",variant:"primary"},on:{click:t.navigate}},[t._v("Go")])],1)],1)],1),n("b-tab",{attrs:{title:"Load a demo dataset"}},[n("b-form-group",{staticClass:"mt-4 text-left"},[n("b-form-select",{attrs:{options:t.datasets},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Select a demonstration dataset --")])]},proxy:!0}],null,!1,2800293670),model:{value:t.selectedDataset,callback:function(e){t.selectedDataset=e},expression:"selectedDataset"}})],1)],1)],1),n("b-modal",{attrs:{id:"files-not-found-modal","hide-footer":""},model:{value:t.showErrorModal,callback:function(e){t.showErrorModal=e},expression:"showErrorModal"}},[n("div",{staticClass:"d-block text-center"},[n("h3",[t._v("Error!")]),n("p",[t._v(" NiRV was unable to find the required "),n("code",[t._v("nirv_group_report.csv")]),t._v(" or "),n("code",[t._v("nirv_group_report.json")]),t._v(" files. ")])]),n("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:t.hideErrorModal}},[t._v("Close")])],1)],1):t._e(),"showSpinner"===t.state?n("TheSpinner"):t._e()],1)},b=[],g=(n(6699),n(7833)),y=n(8966),w=n(5108),_={name:"HomeView",components:{TheSpinner:y.Z},setup(){const t=(0,g.n)(),e=(0,i.iH)("getInput"),n=(0,i.iH)(null),r=(0,i.iH)(null),a=[{text:"Healthy Brain Network -- QSIPrep",value:"hbn-qsiprep"},{text:"Healthy Brain Network -- pyAFQ",value:"hbn-pyafq"},{text:"NKI Rockland -- QSIPrep",value:"nki-qsiprep"},{text:"NKI Rockland -- pyAFQ",value:"nki-pyafq"}],o=(0,i.iH)(null),s=(0,i.iH)(!1),l=()=>{s.value=!1};(0,i.YP)(n,(async()=>{n.value&&(e.value="showSpinner",await t.parseFiles(n.value).catch((t=>{if(t.message.includes("NiRV")&&t.message.includes("file not found"))return s.value=!0,void(e.value="getInput")})),O.push({name:"Report"}))}));const u=async()=>{e.value="showSpinner",r.value&&w.log(r.value)};return{datasets:a,files:n,uri:r,hideErrorModal:l,selectedDataset:o,showErrorModal:s,state:e,navigate:u}}},R=_,k=(0,d.Z)(R,m,b,!1,null,"2d928320",null),P=k.exports;r["default"].use(v.Z);var O=new v.Z({routes:[{path:"/",name:"Home",component:P},{path:"/report",name:"Report",component:()=>n.e(983).then(n.bind(n,4776))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e(449).then(n.bind(n,1435))}]});const x=!1;r["default"].config.productionTip=!1,r["default"].config.performance=x,r["default"].use(a.og),r["default"].use(i.ZP);const S=(0,a.WB)();new r["default"]({pinia:S,el:"#app",router:O,components:{App:h},template:"<App/>"})},7833:function(t,e,n){n.d(e,{n:function(){return x}});n(6699),n(1703);var r=n(8262),i=(n(2801),n(6486)),a=n.n(i),o=n(7460),s=n.n(o);const l=(t,e="file")=>"file"===e?t.webkitRelativePath.split("/").length:"s3"===e?t.split("/").length:void 0,u=t=>{if(1===t.length)return t[0];{const e=a().groupBy(t,l),n=Math.min(...Object.keys(e)),r=e[n];return 1===r.length?r[0]:null}},c=(t,e=!1)=>new Promise(((n,r)=>{s().parse(t,{download:e,header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete:t=>n(t.data),error:r})})),p=t=>{const e=new FileReader;return new Promise(((n,r)=>{e.onerror=()=>{e.abort(),r(new DOMException("Problem parsing input file."))},e.onload=()=>{n({file:t,contents:JSON.parse(e.result)})},e.readAsText(t)}))},d=t=>t.map((t=>({participant_session_id:"session_id"in t?[t.participant_id,t.session_id].join("_").replace(/_+$/,"").replace("_"," "):t.participant_id,...t}))),f=t=>t.map((({path_to_report:t,...e})=>e)),h=t=>t.reduce(((t,e)=>(t[e.participant_session_id]=e.path_to_report,t)),{}),v=async t=>{const e=a().filter(Object.values(t),(t=>t.reviewed)),n=e.map((t=>a().pick(t,["subject","rating","whenRated"])));if(0===n.length)return;const r=",",i=Object.keys(n[0]).join(r)+"\n";let o=i;n.forEach((t=>{o+=Object.values(t).join(r)+"\n"}));let s=new Blob([o],{type:"text/csv"}),l=URL.createObjectURL(s),u=document.createElement("a");u.href=l,u.target="_blank";const c=(new Date).toISOString().replace(/[-:]/g,"").split(".")[0];u.download="dwiqc_ratings_"+c+".csv",u.click()},m=t=>a().reduce(Object.keys(t),((t,e)=>(t[e]={participant:e,rating:null,whenRated:null,reviewed:!1},t)),{}),b=t=>new Promise(((e,n)=>{s().parse(t,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete:t=>t.data.reduce(((t,e)=>(t[e.subject]=Object.assign({reviewed:!0},e),t)),{}),error:n})}));var g=n(6470);const y=t=>{const e=new FileReader;return new Promise(((n,r)=>{e.onerror=()=>{e.abort(),r(new DOMException("Problem parsing input file."))},e.onload=()=>{n(e.result)},e.readAsText(t)}))},w=/sub-[a-z0-9]+/gi,_=t=>t.match(w),R=t=>{const e=new FileReader;return new Promise(((n,r)=>{e.onerror=t=>{e.abort(),r(t)},e.onload=t=>{n(t.target.result)},e.readAsDataURL(t)}))},k=(t,e)=>{const n=(0,g.relative)((0,g.dirname)(t),e);return n.startsWith(".")?n:`./${n}`},P=(t,e,n)=>{const r=t.querySelectorAll("[src],[data],[href]");for(const i of r)i.getAttribute("src")===e?i.setAttribute("src",String.raw`${n}`):i.getAttribute("data")===e?i.setAttribute("data",String.raw`${n}`):i.getAttribute("href")===e&&(i.setAttribute("href",String.raw`${n}`),i.setAttribute("download",(0,g.basename)(e)));return t},O=async(t,e,n)=>{const r=n.filter((n=>{const r=k(e,n.$path);return n.$path!==e&&t.includes(r)}));let i=(new DOMParser).parseFromString(t,"text/html");for(const a of r){const t=k(e,a.$path),n=await R(a);i=P(i,t,n)}return(new XMLSerializer).serializeToString(i)},x=(0,r.Q_)({id:"report",state:()=>({inputFiles:null,inputPaths:null,brushedParticipants:[],inputCsv:null,inputJson:null,inputJsonFile:null,participantRatings:null,participantMetrics:null,participantReports:null,participantReportPaths:null,currentParticipant:"study",currentHtml:null,sidebarFilter:""}),getters:{studyId:t=>t.inputJson?.studyId||"Study",metricMetadata:t=>t.inputJson?.variables,metricOptions:t=>t.participantMetrics?Object.keys(t.participantMetrics[0]).filter((t=>!["participant_id","subject_id","subject_session_id","participant_session_id","session_id","file_name"].includes(t))).sort():null,currentReport:t=>t.participantReports&&"study"!==t.currentParticipant?t.participantReports[t.currentParticipant]:null,allParticipants:t=>t.participantReports?Object.keys(t.participantReports):null,filteredParticipants:t=>t.sidebarFilter?t.allParticipants.filter((e=>e.includes(t.sidebarFilter))):t.allParticipants},actions:{async parseFiles(t){const e=t.filter((t=>"nirv_group_report.csv"===t.name)),n=t.filter((t=>"nirv_group_report.json"===t.name));if(0===e.length)throw new Error("NiRV CSV file not found.");if(0===n.length)throw new Error("NiRV JSON file not found.");this.inputCsv=d(await c(u(e))),this.participantMetrics=f(this.inputCsv),this.participantReportPaths=h(this.inputCsv);const r=[...new Set(this.inputCsv.map((t=>t.participant_id)))];this.inputFiles=r.reduce(((e,n)=>(e[n]=t.filter((t=>t.$path.includes(n))),e)),{}),this.inputPaths=r.reduce(((e,n)=>(e[n]=t.filter((t=>t.$path.includes(n))).map((t=>t.webkitRelativePath)),e)),{});const i=t.filter((t=>t.name.endsWith(".html")));this.participantReports=Object.keys(this.participantReportPaths).reduce(((t,e)=>(t[e]=i.filter((t=>t.$path.includes(this.participantReportPaths[e])))[0],t)),{});const{file:a,contents:o}=await p(u(n));this.inputJson=o,this.inputJsonFile=a,this.participantRatings=m(this.participantReports)},assignRating(t){this.participantRatings=Object.assign(this.participantRatings,t)},resetPartialRating(){"study"!==this.currentParticipant&&(this.participantRatings[this.currentParticipant].reviewed=!1,this.participantRatings[this.currentParticipant].whenRated=null)},downloadRatings(){v(this.participantRatings)},readRatingsCsv(t){b(t)},nextParticipant(){const t="study"!==this.currentParticipant?(this.filteredParticipants.indexOf(this.currentParticipant)+1)%this.filteredParticipants.length:0;this.selectParticipant(this.filteredParticipants[t])},selectParticipant(t){if(this.currentParticipant=t,this.currentHtml=null,"study"!==t){const e=_(t);y(this.currentReport).then((t=>O(t,this.currentReport.$path,this.inputFiles[e]))).then((t=>{this.currentHtml=t}))}}}})}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],a=t[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{449:"notFound",983:"report"}[t]+"."+{449:"cf792234",983:"17ba3a33"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/report.9e2a5e17.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="nirv:";n.l=function(r,i,a,o){if(t[r])t[r].push(i);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+a){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[i];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/nirv/"}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],a=i.getAttribute("data-href");if(a===t||a===e)return i}},r=function(r){return new Promise((function(i,a){var o=n.miniCssF(r),s=n.p+o;if(e(o,s))return i();t(r,s,i,a)}))},i={143:0};n.f.miniCss=function(t,e){var n={983:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(e),s=new Error,l=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};n.l(o,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],s=r[1],l=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(e&&e(r);u<o.length;u++)a=o[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunknirv"]=self["webpackChunknirv"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8958)}));r=n.O(r)})();
//# sourceMappingURL=app.a1ec2fab.js.map