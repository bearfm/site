({38:function(){var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};function n(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,n.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/(\d{4}-\d{2}-\d{2})/g," $1").replace(/\b\w/g,(function(e){return e.toUpperCase()}))];case 1:return[2,e.sent()]}}))}))}!function(){e(this,void 0,void 0,(function(){var r=this;return t(this,(function(i){return document.getElementById("blogIndex")&&document.getElementById("latestPost")?(document.getElementById("blogIndex").innerHTML="",document.getElementById("latestPost").innerHTML="",fetch("/blogindex.txt").then((function(e){return e.text()})).then((function(i){var o=i.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(" ");return{timestamp:parseInt(t[0]),uri:t[1]||""}}));o.sort((function(e,t){return t.timestamp-e.timestamp}));var a=document.createElement("ul");o.forEach((function(i){return e(r,void 0,void 0,(function(){var e,r,o,c,l,u;return t(this,(function(t){switch(t.label){case 0:return i.uri?(e=i.uri.split("/").pop().replace(".html",""),o="".concat,[4,n(e)]):[3,2];case 1:r=o.apply("",[t.sent()]),"index"!==e.toLowerCase()&&(c=document.createElement("li"),l=document.createElement("a"),u=document.createElement("p"),c.style.whiteSpace="nowrap",u.style.gap="10px",u.textContent="".concat(new Intl.DateTimeFormat(navigator.language).format(new Date(1e3*i.timestamp)),"⠀"),l.href=i.uri.substring(i.uri.indexOf("/blog/")),l.textContent=r,l.style.display="inline-block",u.style.display="inline-block",c.appendChild(u),c.appendChild(l),a.appendChild(c)),t.label=2;case 2:return[2]}}))}))})),document.getElementById("blogIndex").appendChild(a)})).catch((function(e){console.error("Error fetching and processing blog index:",e)})),[2]):[2]}))}))}()}})[38]();