import{w as u}from"./index.Uy7yPzdW.js";const b=globalThis.__sveltekit_zqjaos?.base??"",v=globalThis.__sveltekit_zqjaos?.assets??b,k="1711487032500",R="sveltekit:snapshot",T="sveltekit:scroll",w="sveltekit:states",I="sveltekit:pageurl",S="sveltekit:history",y="sveltekit:navigation",f={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},_=location.origin;function N(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function U(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function O(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===_&&e.hasAttribute("download");return{url:n,external:r,target:a,download:l}}function Y(e){let t=null,n=null,a=null,r=null,l=null,o=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=c(s,"preload-code")),r===null&&(r=c(s,"preload-data")),t===null&&(t=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),o===null&&(o=c(s,"replacestate")),s=g(s);function i(h){switch(h){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:d[a??"off"],preload_data:d[r??"off"],keepfocus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(e){const t=u(e);let n=!0;function a(){n=!0,t.update(o=>o)}function r(o){n=!1,t.set(o)}function l(o){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&o(s=i)})}return{notify:a,set:r,subscribe:l}}function E(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==k;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:a}}function m(e,t){return e.origin!==_||!e.pathname.startsWith(t)}function j(e){e.client}const x={url:p({}),page:p({}),navigating:u(null),updated:E()};export{S as H,y as N,I as P,T as S,w as a,R as b,Y as c,x as d,b as e,L as f,O as g,f as h,m as i,j,_ as o,N as r,U as s};
