let e=document.querySelector("[data-start]");console.log(e);let l=document.querySelector("[data-stop]");console.log(l);let o=document.querySelector("body"),t=null;e.addEventListener("click",(()=>{t=setInterval((e=>{let l=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=l}),1e3),console.log("Зміну кольору запущено"),e.disabled=!0})),l.addEventListener("click",(()=>{clearInterval(t),console.log("Зміну кольору зупинено"),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3c7cc5ce.js.map