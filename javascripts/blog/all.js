!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return window.hljs}))}(function(e){function r(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,r){var t=e&&e.exec(r);return t&&0==t.index}function a(e){return/no-?highlight|plain|text/.test(e)}function c(e){var r,t,n,c=e.className+" ";if(c+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/.exec(c))return E(t[1])?t[1]:"no-highlight";for(c=c.split(/\s+/),r=0,n=c.length;n>r;r++)if(E(c[r])||a(c[r]))return c[r]}function i(e,r){var t,n={};for(t in e)n[t]=e[t];if(r)for(t in r)n[t]=r[t];return n}function o(e){var r=[];return function n(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3==c.nodeType?a+=c.nodeValue.length:1==c.nodeType&&(r.push({event:"start",offset:a,node:c}),a=n(c,a),t(c).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:c}));return a}(e,0),r}function s(e,n,a){function c(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function i(e){function n(e){return" "+e.nodeName+'="'+r(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function o(e){l+="</"+t(e)+">"}function s(e){("start"==e.event?i:o)(e.node)}for(var u=0,l="",f=[];e.length||n.length;){var b=c();if(l+=r(a.substr(u,b[0].offset-u)),u=b[0].offset,b==e){f.reverse().forEach(o);do s(b.splice(0,1)[0]),b=c();while(b==e&&b.length&&b[0].offset==u);f.reverse().forEach(i)}else"start"==b[0].event?f.push(b[0].node):f.pop(),s(b.splice(0,1)[0])}return l+r(a.substr(u))}function u(e){function r(e){return e&&e.source||e}function t(t,n){return new RegExp(r(t),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},s=function(r,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[r,t[1]?Number(t[1]):1]})};"string"==typeof a.k?s("keyword",a.k):Object.keys(a.k).forEach(function(e){s(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\b\w+\b/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=r(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(r){u.push(i(e,r))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(r).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}n(e)}function l(e,t,a,c){function i(e,r){for(var t=0;t<r.c.length;t++)if(n(r.c[t].bR,e))return r.c[t]}function o(e,r){if(n(e.eR,r)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?o(e.parent,r):void 0}function s(e,r){return!a&&n(r.iR,e)}function b(e,r){var t=m.cI?r[0].toLowerCase():r[0];return e.k.hasOwnProperty(t)&&e.k[t]}function g(e,r,t,n){var a=n?"":w.classPrefix,c='<span class="'+a,i=t?"":"</span>";return c+=e+'">',c+r+i}function p(){if(!M.k)return r(A);var e="",t=0;M.lR.lastIndex=0;for(var n=M.lR.exec(A);n;){e+=r(A.substr(t,n.index-t));var a=b(M,n);a?(L+=a[1],e+=g(a[0],r(n[0]))):e+=r(n[0]),t=M.lR.lastIndex,n=M.lR.exec(A)}return e+r(A.substr(t))}function d(){var e="string"==typeof M.sL;if(e&&!y[M.sL])return r(A);var t=e?l(M.sL,A,!0,R[M.sL]):f(A,M.sL.length?M.sL:void 0);return M.r>0&&(L+=t.r),e&&(R[M.sL]=t.top),g(t.language,t.value,!1,!0)}function h(){return void 0!==M.sL?d():p()}function v(e,t){var n=e.cN?g(e.cN,"",!0):"";e.rB?(x+=n,A=""):e.eB?(x+=r(t)+n,A=""):(x+=n,A=t),M=Object.create(e,{parent:{value:M}})}function N(e,t){if(A+=e,void 0===t)return x+=h(),0;var n=i(t,M);if(n)return x+=h(),v(n,t),n.rB?0:t.length;var a=o(M,t);if(a){var c=M;c.rE||c.eE||(A+=t),x+=h();do M.cN&&(x+="</span>"),L+=M.r,M=M.parent;while(M!=a.parent);return c.eE&&(x+=r(t)),A="",a.starts&&v(a.starts,""),c.rE?0:t.length}if(s(t,M))throw new Error('Illegal lexeme "'+t+'" for mode "'+(M.cN||"<unnamed>")+'"');return A+=t,t.length||1}var m=E(e);if(!m)throw new Error('Unknown language: "'+e+'"');u(m);var C,M=c||m,R={},x="";for(C=M;C!=m;C=C.parent)C.cN&&(x=g(C.cN,"",!0)+x);var A="",L=0;try{for(var B,S,I=0;M.t.lastIndex=I,B=M.t.exec(t),B;)S=N(t.substr(I,B.index-I),B[0]),I=B.index+S;for(N(t.substr(I)),C=M;C.parent;C=C.parent)C.cN&&(x+="</span>");return{r:L,value:x,language:e,top:M}}catch(k){if(-1!=k.message.indexOf("Illegal"))return{r:0,value:r(t)};throw k}}function f(e,t){t=t||w.languages||Object.keys(y);var n={r:0,value:r(e)},a=n;return t.forEach(function(r){if(E(r)){var t=l(r,e,!1);t.language=r,t.r>a.r&&(a=t),t.r>n.r&&(a=n,n=t)}}),a.language&&(n.second_best=a),n}function b(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,r){return r.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,r,t){var n=r?C[r]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}function p(e){var r=c(e);if(!a(r)){var t;w.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var n=t.textContent,i=r?l(r,n,!0):f(n),u=o(t);if(u.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=i.value,i.value=s(u,o(p),n)}i.value=b(i.value),e.innerHTML=i.value,e.className=g(e.className,r,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function d(e){w=i(w,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function N(r,t){var n=y[r]=t(e);n.aliases&&n.aliases.forEach(function(e){C[e]=r})}function m(){return Object.keys(y)}function E(e){return y[e]||y[C[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={},C={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=b,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=N,e.listLanguages=m,e.getLanguage=E,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(r,t,n){var a=e.inherit({cN:"comment",b:r,e:t,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("css",function(e){var r="[a-zA-Z-][a-zA-Z0-9_-]*",t={cN:"function",b:r+"\\(",rB:!0,eE:!0,e:"\\("},n={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[t,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,n,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[t,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:r,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,c:[e.CBCM,n]}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,b:/^\s*['"]use (strict|asm)['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}],i:/#/}}),hljs.registerLanguage("xml",function(e){var r="[A-Za-z0-9\\._:-]+",t={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php"},n={eW:!0,i:/</,r:0,c:[t,{cN:"attribute",b:r,r:0},{b:"=",r:0,c:[{cN:"value",c:[t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars"]}},t,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},n]}]}}),hljs.initHighlightingOnLoad();