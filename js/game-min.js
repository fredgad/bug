onload=(()=>{var e,t=document.getElementById("cont"),o=document.getElementById("start"),s=document.getElementById("loose"),n=document.getElementById("handle"),r=document.getElementById("ladybug"),a=(document.getElementsByClassName("controls"),!1),d=!1,f=!1,i=!0,l=t.offsetWidth/2,c=t.offsetHeight/2,p=3,m=3,h=3,y=0,g=40,u=-1,H=r.offsetHeight,M=r.offsetWidth,b=Date.now(),L=['<p class="pm" date="-5">🌑</p>','<p class="pm" date="-3">🌘</p>','<p class="pm" date="1">🌗</p>','<p class="pm" date="3">🌖</p>','<p class="pm" date="5">🌕</p>','<p class="pm" date="3">🌔</p>','<p class="pm" date="-1">🌓</p>','<p class="pm" date="-3">🌒</p>'];function k(){var e=Math.floor(255*Math.random()),n=Math.floor(255*Math.random()),r=Math.floor(255*Math.random());t.style.background="rgb("+e+","+n+","+r+")",o.style.background="rgb("+e+","+n+","+r+")",s.style.background="rgb("+e+","+n+","+r+")"}function T(e){"left"==e?(a=!0,d=!1,f=!1,i=!1):"right"==e?(a=!1,d=!0,f=!1,i=!1):"top"==e?(a=!1,d=!1,f=!0,i=!1):"bottom"==e?(a=!1,d=!1,f=!1,i=!0):"menu_button"==e&&k()}document.body.addEventListener("selectstart",e=>{e.preventDefault()}),n.addEventListener("click",e=>{T(e.target.className)}),document.body.addEventListener("keydown",e=>{let t;37!=e.keyCode&&65!=e.keyCode||(t="left"),38!=e.keyCode&&87!=e.keyCode||(t="top"),39!=e.keyCode&&68!=e.keyCode||(t="right"),40!=e.keyCode&&83!=e.keyCode||(t="bottom"),T(t)}),o.addEventListener("click",()=>{o.style.top=-o.offsetHeight-9+"px",o.style.transition="top 1s cubic-bezier(.45,-0.67,.53,1.63)",p=3,m=3,u=-1,l=t.offsetWidth/2,c=t.offsetHeight/2,a=!1,d=!1,f=!1,i=!0,record.innerHTML=0,screen_speed.innerHTML="Speed: 30 t.k.p.s.",score_speed.innerHTML="Max speed: 30";var s=setInterval(()=>{!function(o,s){this.x=o,this.y=s,this.start=Date.now(),t.innerHTML+='<div class="moon'+y+'">0 <p class="pm">🌑</p></div>';let n=document.querySelector(".moon"+y);y++,n.style.top=this.x+"px",n.style.left=this.y+"px",function t(){let o=Date.now()-b;if(o>g){e=document.querySelectorAll("#cont div");for(let t=0;t<e.length;t++){let s=parseInt(e[t].innerHTML)+1;g=o+140,s>=L.length&&(s=0),e[t].innerHTML=s+" "+L[s]}}requestAnimationFrame(()=>{t()})}()}(Math.floor(Math.random()*t.offsetHeight),Math.floor(Math.random()*t.offsetWidth)),p<3&&(clearInterval(s),t.innerHTML="")},1847)}),s.addEventListener("click",()=>{s.style.top=t.offsetHeight+9+"px",s.style.transition="top 1s cubic-bezier(.45,-0.67,.53,1.63)",o.innerHTML="🌚PLAY AGAIN!🌝",setTimeout(()=>{o.style.top=t.offsetHeight/80*25+"px",s.style.transition="top 1s cubic-bezier(.45,-0.67,.53,1.63)"},300)}),function o(){switch(!0){case a:l-=p,r.style.transform="rotate(-90deg)";break;case d:l+=p,r.style.transform="rotate(90deg)";break;case f:c-=p,r.style.transform="rotate(0deg)";break;case i:c+=p,r.style.transform="rotate(180deg)"}r.style.top=c+"px",r.style.left=l+"px",requestAnimationFrame(()=>{!function(){e=document.querySelectorAll("#cont div"),left&&l+r.offsetWidth<0?l=t.offsetWidth:right&&l-r.offsetWidth>t.offsetWidth&&(l=-r.offsetWidth),top&&c+r.offsetHeight<0?c=t.offsetHeight:bottom&&c-r.offsetHeight>t.offsetHeight&&(c=-r.offsetHeight);for(let o=0;o<e.length;o++)r.offsetTop+H>e[o].offsetTop&&r.offsetTop<e[o].offsetTop+e[o].offsetHeight&&r.offsetLeft+M>e[o].offsetLeft&&r.offsetLeft<e[o].offsetLeft+e[o].offsetWidth&&(p+=e[o].children[0].getAttribute("date")/3,m=Math.max(m,p),h=Math.max(h,p),u++,record.innerHTML=u,screen_speed.innerHTML="Speed: "+parseInt(10*p)+" t.k.p.s.",score_speed.innerHTML="Max speed: "+parseInt(10*m),best_speed.innerHTML="Best speed today: "+parseInt(10*h),score_moon.innerHTML="Score: "+(u+1),document.getElementById("gest_record")&&(document.getElementById("gest_record").innerHTML="Лучший результат сегодння: "+parseInt(10*h)),p<3&&(p=0,s.style.top=t.offsetHeight/80*15+"px",s.style.transition="top 1s cubic-bezier(.45,-0.67,.53,1.63)"),e[o].style.display="none",record.innerHTML++,k())}(),o()})}()});