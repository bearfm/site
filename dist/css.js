(()=>{"use strict";var e,t,r,o,n,a,i,c,l,d,s,p,u,f,m={777:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(620),n=r.n(o),a=r(69),i=r.n(a)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),i.push([e.id,'body{font-family:Arial,sans-serif;font-size:1.5em;margin:2em;line-height:1.6;height:100vh;width:auto;margin:0;padding:0;text-align:left;background-color:#1e1e2e;color:#cdd6f4;white-space:normal}.header-container{width:100vw;text-align:center;justify-content:center}.center-image{display:block;margin-left:auto;margin-right:auto}.meta{font-size:.75em;line-height:1;color:#313244}.center-box{text-align:left;width:15%;margin:auto}header{background-color:#11111b;color:#cdd6f4;height:auto}header a{color:#cdd6f4;text-decoration:dotted;font-size:1.5rem}header a i{vertical-align:middle;display:inline-block}nav{background-color:#11111b;color:#ebdbb2;display:flex;flex-direction:row;padding-top:.25%;padding-bottom:.25%;align-items:center;justify-content:center;gap:6px}.title{font-weight:bolder;text-align:center}.article{margin-top:0;margin-bottom:auto;margin-left:0;margin-right:0;text-align:left;padding-left:42.25%;padding-right:42.25%;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:left;align-items:normal;white-space:normal}.article p{text-align:left}.article h1,.article h2,.article h3,.article h4,.article h5,.article h6{text-align:left;display:block}ul,li,ol{margin:0;padding:0;list-style:none;display:block}h1,h2,h3,h4,h5,h6{color:#fbf1c7;display:block}a{color:#458588;display:block}a:hover{color:#689d6a}button{background-color:#b16286;color:#fbf1c7}button:hover{background-color:#458588}p{margin-bottom:1em;display:inline-block;white-space:normal}pre{background-color:#313244;padding:.5em;overflow:auto}code{font-family:"Courier New",Courier,monospace;background-color:#313244;color:#d65d0e;padding:.2em;border-radius:3px;display:block}table{border-collapse:collapse;width:100%;margin-bottom:1em;border-collapse:collapse;display:table}table th,table td{border:1px solid #11111b;padding:8px;text-align:left}th,td{border:1px solid #fbf1c7;padding:8px;text-align:left}th{background-color:#ebdbb2}blockquote{border-left:2px solid #313244;margin:1em 0;padding-left:1em}footer{background-color:#11111b;color:#d5c4a1}',""]);const c=i},69:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),n&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=n):s[4]="".concat(n)),t.push(s))}},t}},620:e=>{e.exports=function(e){return e[1]}},646:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var u=r(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=n(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var l=o(e,n),d=0;d<a.length;d++){var s=r(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},13:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},506:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},942:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},959:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},215:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function g(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,exports:{}};return m[e](r,r.exports,g),r.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var r in t)g.o(t,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.nc=void 0,e=g(646),t=g.n(e),r=g(959),o=g.n(r),n=g(13),a=g.n(n),i=g(942),c=g.n(i),l=g(506),d=g.n(l),s=g(215),p=g.n(s),u=g(777),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(u.A,f),u.A&&u.A.locals&&u.A.locals})();