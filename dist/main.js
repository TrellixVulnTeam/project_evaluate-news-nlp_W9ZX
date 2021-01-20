var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response},function(e,t,n){"use strict";function r(e){console.log("::: Running checkForName :::",e);return!!["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e)}function o(e){e.preventDefault();let t=document.getElementById("name").value;var n,o=(n="Sorry, your name is not in the list",r(t)&&(n="Welcome captain! Your name is in the list"),n);return document.getElementById("name_list").innerHTML=o,o}n.r(t),n.d(t,"checkForName",(function(){return r})),n.d(t,"handleSubmitForm1",(function(){return o})),n.d(t,"handleSubmitForm2",(function(){return a})),n.d(t,"analyzeArticle",(function(){return i})),n.d(t,"getAnalyzedDataFromAPI",(function(){return u})),n.d(t,"postDataToServer",(function(){return s})),n.d(t,"getRecentEntryData",(function(){return d}));const a=async e=>{e.preventDefault();let t=document.getElementById("article").value;console.log("::: Form Submitted :::");const n=await fetch("http://localhost:8081/sentiment",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({formText:t})});try{const e=await n.json();return console.log(e),document.getElementById("sentiment_analysis").innerHTML=`\n            Subjectivity = ${e.subjectivity} </br>\n            Polarity = ${e.polarity} </br>\n            Agreement = ${e.agreement} </br>\n            Confidence= ${e.confidence} </br>\n            Irony= ${e.irony} </br>\n        `,e}catch(e){return console.log("error",e),Promise.reject({message:"Call did not work properly",error:e})}};function i(e){console.log("::: Running analyzeArticle :::",e)}const c=n(0),l=async e=>{const t=document.getElementById("article").value,n=await u(t);s(n.main.analysis),d()},u=async e=>{const t=await c(e);try{return await t.json()}catch(e){return console.log("error",e),Promise.reject({message:"Call did not work properly",error:e})}},s=async e=>{const t=await c("http://localhost:8081/addData",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({analysis:e})});try{return await t.json()}catch(e){return console.log("error",e),Promise.reject({message:"Call did not work properly",error:e})}},d=async()=>{const e=await c("http://localhost:8081/all");try{const t=await e.json();console.log("All data is :"),console.log(t),document.getElementById("content").innerHTML=t.analysis}catch(e){return console.log("error",e),Promise.reject({message:"Call did not work properly",error:e})}};document.getElementById("article")&&document.getElementById("article").addEventListener("click",l)}]);