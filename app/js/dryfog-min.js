onload=(()=>{let e=document.getElementById("wrap"),t=document.getElementById("cont"),n=document.getElementById("bttn"),d=document.getElementById("turn"),l=document.getElementById("tran"),i=22,c=1,o=t.offsetHeight,s=t.offsetWidth,m=0;function r(e,t){let n=document.getElementsByClassName("image"+m);for(let d=0;d<n.length;d++)setTimeout(()=>{n[d].style.display="block"},15*d),n[d].style.animation=`${e} ${t}s linear`}e.addEventListener("click",n=>{!function(t){t.clientX<e.offsetWidth/2?--m<0&&(m=2):++m>2&&(m=0)}(n),function(){t.innerHTML="";for(let e=0;e<i*c;e++)t.innerHTML+=`<div class="image${m}"></div>`}(),function(e){let t=document.getElementsByClassName("image"+e),n=70/i,d=40/c,l=100/i,m=100/c,r=i,a=0,u=0,g=0,E=0;for(let e=0;e<i*c;e++)t[e].style.height=o/c+"px",t[e].style.width=s/i+"px",t[e].style.left=g+"rem",t[e].style.top=E+"rem",t[e].style.backgroundSize=`${100*i}% ${100*c}%`,t[e].style.backgroundPosition=`${u}% ${a}%`,g+=n,u+=l,e==r-1&&(g=0,u=0,E+=d,a+=m,r=Number(r)+ +i)}(m),n.clientX<e.offsetWidth/2?r("turn","1"):r("tran","1"),console.log(i+" : "+c)}),n.addEventListener("click",()=>{!function(){let e=document.getElementsByClassName("image"+m);for(let t=0;t<e.length;t++)e[t].style.borderTop="1px solid #000",e[t].style.borderLeft="1px solid #fff"}()}),d.addEventListener("click",()=>{r("turn","50")}),l.addEventListener("click",()=>{r("tran","50")}),document.getElementById("squaL").addEventListener("click",()=>{c=28,i=28}),document.getElementById("squaN").addEventListener("click",()=>{c=22,i=22}),document.getElementById("squaB").addEventListener("click",()=>{c=17,i=17}),document.getElementById("vertL").addEventListener("click",()=>{c=22,i=1}),document.getElementById("vertN").addEventListener("click",()=>{c=45,i=1}),document.getElementById("vertB").addEventListener("click",()=>{c=125,i=1}),document.getElementById("goriL").addEventListener("click",()=>{c=1,i=22}),document.getElementById("goriN").addEventListener("click",()=>{c=1,i=45}),document.getElementById("goriB").addEventListener("click",()=>{c=1,i=125})});