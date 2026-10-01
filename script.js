window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("done"),1500));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".section,.project,.skills>div").forEach(x=>{x.style.opacity="0";x.style.transform="translateY(28px)";x.style.transition="opacity .8s ease,transform .8s ease";io.observe(x)});
const st=document.createElement("style");st.textContent=".visible{opacity:1!important;transform:none!important}";document.head.appendChild(st);
const c=document.querySelector(".cursor");document.addEventListener("mousemove",e=>{c.style.left=e.clientX+"px";c.style.top=e.clientY+"px"});
