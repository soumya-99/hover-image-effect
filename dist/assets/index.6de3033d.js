(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const s=document.getElementsByClassName("image");let l=0,c={x:0,y:0};const u=(t,n,r)=>{t.style.left=`${n}px`,t.style.top=`${r}px`,t.dataset.status="active",c={x:n,y:r}},d=(t,n)=>Math.hypot(t-c.x,n-c.y);window.onmousemove=t=>{if(d(t.clientX,t.clientY)>100){const n=s[l%s.length];let r=s[(l-5)%s.length];u(n,t.clientX,t.clientY),r&&(r.dataset.status="inactive"),l++}};
