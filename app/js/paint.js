onload = ()=> {
  var animationSwitch = document.getElementById("check");
  var rng = document.getElementById("rng");
  var persRng = document.getElementById("persRng");
  var main = document.getElementById("main");
  var page = document.getElementById("first");
  var divs; 
  var x = -200; 
  var itemHeight = 15;
  var itemWidth = 15;
  var itemBorder = 3;
  var o = [];
  var areas = ['<svg id="first"></svg>', '<article id="second"></article>', '<input type="range" id="aliveRng" step="1" min="0" max="90" value="90"><article id="third"></article>'];

  drowEvents();
  document.getElementById("firstButton").addEventListener("click", ()=> {
    main.innerHTML = areas[0];
    drowEvents();
  });
  document.getElementById("secondButton").addEventListener("click", ()=> {
    main.innerHTML = areas[1];
    drowEvents();
  });
  document.getElementById("thirdButton").addEventListener("click", ()=> {
    o = [];
    main.innerHTML = areas[2];
    drowEvents();
  });



  //Clear area
  clear.addEventListener("click",()=> {
    pageCompare();
    page.innerHTML = '';
    rng.value = 0;
    x = -200;
    o = [];
  });

  rng.addEventListener("input",()=> {
    pageCompare();
    page.style.transform = "rotateY(" + rng.value + "deg)";
  });

  animationSwitch.addEventListener("input",()=> {
    pageCompare();
    if(String(page.id) == "first") {
      divs = document.getElementsByTagName("circle");
    } else {
      divs = document.getElementsByTagName("div");
    }

    if (animationSwitch.checked) {
      animation();
    }else {
      stop();
    }
  });

  function animation() {
    for (let i = 0; i < divs.length; i++) { 
      divs[i].style.animation = "exp .3s linear " + i/30 + "s infinite alternate";
    } 
  };
  
  function stop() {
    for (let i = 0; i < divs.length; i++) { 
    divs[i].style.animation = "none";   
    } 
  };

  function drowEvents() {
    pageCompare();
    x = -200;

    page.addEventListener("touchmove",(e)=> {
      o.push('');   
      o[o.length] = new Mark(e.touches[0].pageX, e.touches[0].pageY, "new" + x,x);
      x++;
    });
    page.addEventListener("mousemove",(e)=> {
      if (e.which == 1) {
        o[o.length] = new Mark(e.clientX, e.clientY, "new" + x,x);
        x++;
      }
    });
    page.addEventListener("click",(e)=> {  
      o[o.length] = new Mark(e.clientX, e.clientY, "new" + x,x);
      x++;
    }); 

    if(document.getElementById("aliveRng")) { 
      document.getElementById("aliveRng").addEventListener("input", ()=> {
        page.style.height = document.getElementById("aliveRng").value + "vh";
      });
    }
  }

  function pageCompare() {
    return page = document.getElementById("first") ? document.getElementById("first") : document.getElementById("second") ? document.getElementById("second") : document.getElementById("third");
  };

  function Mark(x,y,cn,z) {
    this.x = x;
    this.y = y;
    this.cn = cn;
    this.z = z;   
    (()=> {
      pageCompare();

      if(String(page.id) == "first") {  
        let div = '<circle r="5" cx="' + this.x + '" cy="' + this.y + '" style="transform-origin:' + this.x + 'px ' + this.y + 'px" fill="rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')" stroke="rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')" class="' + this.cn + '"/>';

        page.innerHTML += div;
      } else {
        let div = document.createElement("div");
        page.appendChild(div);
        div.className = this.cn;
        let ob = document.querySelector("." + this.cn);
        
        ob.style.border = + itemBorder + "px solid";
        ob.style.height = itemHeight + "px";
        ob.style.width = itemWidth + "px";
        ob.style.borderRadius = (ob.offsetWidth + ob.offsetHeight)/4 + "px";
        ob.style.left = this.x+"px";
        ob.style.top = this.y+"px";
        ob.style.color = "rgb(" +  Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
        ob.style.background = "rgb(" +  Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";    
        ob.style.transform = "translateZ(" + this.z + "px)";

        if(String(page.id) == "third") {

          this.g = ()=> {
            let wall = page.getBoundingClientRect();
            let ob = document.querySelector("." + this.cn);

            this.x +=  Math.floor(Math.random()*11-5);
            this.y += Math.floor(Math.random()*11-5);
            if (this.x < 0) {
              this.x = 0;
            }else if (this.x > wall.right - ob.offsetWidth) {
              this.x = wall.right - ob.offsetWidth;
            }
            if (this.y < 0) {
              this.y = 0;
            }else if (this.y > wall.bottom - ob.offsetHeight) {
              this.y = wall.bottom - ob.offsetHeight;
            }
    
            ob.style.left = this.x + "px";
            ob.style.top = this.y + "px";
          }
        }
      }
    })();
  };
  setInterval(() => {
    pageCompare();
    if(String(page.id) == "third") {
      for (let i = 0; i < o.length; i++) {
        o[i].g();
      }
    }
  },16); 
  



};