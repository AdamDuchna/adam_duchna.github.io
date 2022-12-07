import*as i from"https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();window.onscroll=function(){W()};window.scrollTo(0,0);function h(o){var e=o.getBoundingClientRect(),a=e.top,c=e.bottom;return a<window.innerHeight&&c>=0}function W(){var o=document.getElementById("about"),e=document.getElementById("projects"),a=document.getElementById("cv"),c=document.getElementById("contact"),n=document.querySelectorAll(".filler");(document.body.scrollTop||document.documentElement.scrollTop)==0&&n.forEach(t=>{t.style.backgroundImage="linear-gradient(#16db93,#16db93)"}),h(o)&&n.forEach(t=>{t.style.backgroundImage="linear-gradient(#ffd500,#ffd500)"}),h(e)&&n.forEach(t=>{t.style.backgroundImage="linear-gradient(#ea3546,#ea3546)"}),h(a)&&n.forEach(t=>{t.style.backgroundImage="linear-gradient(#fb5607,#fb5607)"}),h(c)&&n.forEach(t=>{t.style.backgroundImage="linear-gradient(#4c4cfc,#4c4cfc)"})}function G(){d.position.x=Math.round(window.scrollY/window.innerHeight*120),d.position.y=Math.round(window.scrollY/window.innerHeight*120),window.innerWidth<=800&&(d.position.x+=40)}function T(){const o=[];for(var e=0;e<=1;e+=.01){var a=4*Math.PI+4*Math.PI*(Math.cos(2*Math.PI*15*e)-Math.cos(2*Math.PI)),c=Math.cos(4*Math.PI)-4*Math.PI*(Math.sin(2*Math.PI*40*e)-Math.sin(2*Math.PI)),n=10*Math.sin(a);o.push(new i.Vector3(a,c,n))}const t=new i.LineBasicMaterial({color:16471559}),r=new i.BufferGeometry().setFromPoints(o),s=new i.Line(r,t);return s.scale.multiply(new i.Vector3(2,2,2)),s}function A(){const o=[];for(var e=0;e<300;e+=.1){var a=-35*Math.cos(e)+65*Math.cos(-.35*e),c=-35*Math.sin(e)+65*Math.sin(-.35*e),n=e/2;o.push(new i.Vector3(a,c,n))}const t=new i.LineBasicMaterial({color:16766208}),r=new i.BufferGeometry().setFromPoints(o),s=new i.Line(r,t);return s.scale.multiply(new i.Vector3(.2,.2,.2)),s}function v(o,e){const n=2.6666666666666665;var t=o,r=e,s=Math.random();const E=[];for(var V=0;V<3e4;V++){const k=10*(r-t)*.004,F=(t*(28-s)-r)*.004,H=(t*r-n*s)*.004;t=t+k,r=r+F,s=s+H,E.push(new i.Vector3(t-6,r-6,s))}const C=new i.LineBasicMaterial({color:1498003}),z=new i.BufferGeometry().setFromPoints(E);return z.setDrawRange(0,2),new i.Line(z,C)}function b(){const o=[];for(var e=0;e<Math.PI*4;e+=.01){var a=e-1.6*Math.sin(24*e),c=e-1.6*Math.sin(25*e),n=e/10;o.push(new i.Vector3(a,c,n))}const t=new i.LineBasicMaterial({color:15349062}),r=new i.BufferGeometry().setFromPoints(o),s=new i.Line(r,t);return s.scale.multiply(new i.Vector3(4,4,20)),s}function O(){const o=[];for(var e=0;e<Math.PI*4;e+=.01){var a=Math.sin(e)*(Math.exp(Math.cos(e))-2*Math.cos(4*e)-Math.pow(Math.sin(e/12),5)),c=Math.cos(e)*(Math.exp(Math.cos(e))-2*Math.cos(4*e)-Math.pow(Math.sin(e/12),5)),n=Math.sign(a)*2*Math.sin(a);o.push(new i.Vector3(a,c,n))}const t=new i.LineBasicMaterial({color:5000444}),r=new i.BufferGeometry().setFromPoints(o),s=new i.Line(r,t);return s.scale.multiply(new i.Vector3(4,4,4)),s}const q=3e4;var u=10,f=[];function R(){requestAnimationFrame(R);for(var o=0;o<f.length;o++)f[o].geometry.setDrawRange(u-1,u),f[o].rotation.x+=.001,f[o].rotation.y+=.001;w.rotation.y+=.002,p.rotation.x+=.002,p.rotation.z+=.001,g.rotation.x-=.001,g.rotation.y-=5e-4,y.rotation.y+=.01,M.rotation.z+=.005,B.rotation.y+=.005,y.geometry.setDrawRange(0,u),M.geometry.setDrawRange(0,u),window.addEventListener("scroll",G),window.addEventListener("resize",S),u=(u+1)%q,m.render(l,d)}function S(){var o=window.innerWidth,e=window.innerHeight;d.aspect=o/e,d.updateProjectionMatrix(),m.setSize(o,e)}const l=new i.Scene,d=new i.PerspectiveCamera(120,window.innerWidth/window.innerHeight),m=new i.WebGLRenderer({canvas:document.querySelector("#background")});m.render(l,d);const I=v(10,10),P=v(12,12),x=v(14,14),L=v(16,16),w=b(),p=b(),g=b(),y=O(),M=A(),B=T();M.position.set(260,240,20);w.position.set(490,480,20);p.position.set(480,460,10);g.position.set(520,490,10);B.position.set(750,720,20);y.position.set(975,960,20);l.add(P);l.add(I);l.add(x);l.add(L);l.add(w);l.add(p);l.add(g);l.add(y);l.add(M);l.add(B);w.rotation.z=.35;w.rotation.x=-.6;f.push(I,P,x,L);d.position.x=4;d.position.y=4;d.position.z=40;window.addEventListener("resize",S);window.innerWidth<=760&&(I.position.x+=40,P.position.x+=40,x.position.x+=40,L.position.x+=40,d.position.x=40);m.setPixelRatio(window.devicePixelRatio);m.setSize(window.innerWidth,window.innerHeight);R();