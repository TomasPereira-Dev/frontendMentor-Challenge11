(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}})();const v=document.querySelectorAll(".percent-btn"),f=document.getElementById("custom-tip"),m=document.getElementById("bill"),g=document.getElementById("number-of-people-input"),a=document.getElementById("tip-amount"),p=document.getElementById("total-amount"),E=document.getElementById("reset-btn");let n=null,d=null,u=null,r=null;const y=(o,e)=>{if(d=(o/e).toFixed(2),p.innerText=`$${d}`,o<=0||e<=0)throw Error("The number of people or the bill value can't be zero or less");return d};document.addEventListener("DOMContentLoaded",()=>{m.addEventListener("change",e=>{n=parseInt(e.target.value),!isNaN(n)&&!isNaN(r)&&n>0&&r>0&&y(n,r)}),g.addEventListener("change",e=>{r=parseInt(e.target.value),!isNaN(n)&&!isNaN(r)&&n>0&&r>0&&y(n,r)}),v.forEach(e=>{e.addEventListener("click",()=>{const i=parseInt(e.dataset.tip);if(n>0&&r>0){let s=parseInt(n*i)/100/r;u=n+s*r,a.innerText=`$${s}`,p.innerText=`$${u}`}})});let o=null;f.addEventListener("change",e=>{if(o=parseInt(e.target.value),n>0&&r>0&&o>0){let i=n*o/100/r;u=n+i*r,a.innerText=`$${u}`}}),E.addEventListener("click",()=>{f.value=null,m.value=null,g.value=null,a.innerText="$0.00",p.innerText="$0.00"})});