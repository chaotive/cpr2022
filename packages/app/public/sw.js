if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-541f88f7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"11f78eea86cee5f810a5349398385637"},{url:"/_next/static/chunks/169.186ffbc14fbac5d1.js",revision:"186ffbc14fbac5d1"},{url:"/_next/static/chunks/215.72f3b03e9ba9d5c3.js",revision:"72f3b03e9ba9d5c3"},{url:"/_next/static/chunks/31-f81e6156f7dee1dd.js",revision:"f81e6156f7dee1dd"},{url:"/_next/static/chunks/390.c7f67655e6422cda.js",revision:"c7f67655e6422cda"},{url:"/_next/static/chunks/416.9fd9f4c36d68d42d.js",revision:"9fd9f4c36d68d42d"},{url:"/_next/static/chunks/551.06e6be4b21042a23.js",revision:"06e6be4b21042a23"},{url:"/_next/static/chunks/59b4e022.9bafa70002657f60.js",revision:"9bafa70002657f60"},{url:"/_next/static/chunks/666.f576de5b94dbcbfd.js",revision:"f576de5b94dbcbfd"},{url:"/_next/static/chunks/69bd6bf3.ae683eb74bf9d2d7.js",revision:"ae683eb74bf9d2d7"},{url:"/_next/static/chunks/779-b1f2e2517d4539eb.js",revision:"b1f2e2517d4539eb"},{url:"/_next/static/chunks/827.0684e6b97989952d.js",revision:"0684e6b97989952d"},{url:"/_next/static/chunks/885-11f99f8a203d2ab9.js",revision:"11f99f8a203d2ab9"},{url:"/_next/static/chunks/9814d858.0e5284d3c45d56e2.js",revision:"0e5284d3c45d56e2"},{url:"/_next/static/chunks/f36c6662.8bd4b99cfdd13db4.js",revision:"8bd4b99cfdd13db4"},{url:"/_next/static/chunks/framework-0bff4c72fef67389.js",revision:"0bff4c72fef67389"},{url:"/_next/static/chunks/main-d5bf0ad2b77c25e8.js",revision:"d5bf0ad2b77c25e8"},{url:"/_next/static/chunks/pages/_app-530924ddff5df970.js",revision:"530924ddff5df970"},{url:"/_next/static/chunks/pages/_error-e755336071b61fcc.js",revision:"e755336071b61fcc"},{url:"/_next/static/chunks/pages/acerca-de-96fd112c3cbbc6dd.js",revision:"96fd112c3cbbc6dd"},{url:"/_next/static/chunks/pages/fragmento/%5BfragmentoId%5D-7b55952fa8a3e03a.js",revision:"7b55952fa8a3e03a"},{url:"/_next/static/chunks/pages/index-ab5db2a3a0b8738b.js",revision:"ab5db2a3a0b8738b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-33b77a4c9c39cd4a.js",revision:"33b77a4c9c39cd4a"},{url:"/_next/static/css/0fb3c27ae560dc8b.css",revision:"0fb3c27ae560dc8b"},{url:"/_next/static/media/escudo.fc3c50ef.png",revision:"2ed9ac55f4a330ba9b47f6bc90b96cd1"},{url:"/_next/static/media/titulo.3e86f13f.png",revision:"0cf8d024dd06497f597aee567c9142e8"},{url:"/_next/static/v5aaRJTUCdAbMTSPP5W5r/_buildManifest.js",revision:"672f8e6a6e7cd2d7f6cf7799a39208c6"},{url:"/_next/static/v5aaRJTUCdAbMTSPP5W5r/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"334fdb796617edf90b925977e8907e4b"},{url:"/android-chrome-512x512.png",revision:"2fedf973f187e15bf5398017921d5b49"},{url:"/apple-touch-icon.png",revision:"5948485b33640339e728787cc8b99003"},{url:"/favicon-16x16.png",revision:"411c227583603b4bc6b9745b275caaa2"},{url:"/favicon-32x32.png",revision:"d396c968db30425c7a02b8c83a0b56e4"},{url:"/favicon.ico",revision:"ec84edb7cdaf3cab37bcd8a0436e0f70"},{url:"/fonts/ConvencionFJ-Regular.ttf",revision:"2a127c517c2ef9c6e64fa2ee109cd3c3"},{url:"/fonts/ConvencionFJ-Regular.woff2",revision:"e49b9eda8e0a9ef1095a461d7a6d2fd6"},{url:"/images/escudo.png",revision:"2ed9ac55f4a330ba9b47f6bc90b96cd1"},{url:"/images/logo.png",revision:"6187b83719e01f7393fef724e62be3a1"},{url:"/images/titulo.png",revision:"0cf8d024dd06497f597aee567c9142e8"},{url:"/site.webmanifest",revision:"e012de515b0b252e70cf4b38e37ef4fa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
