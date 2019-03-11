onload = ()=> {

  //Variables
  var
    cont = document.getElementById("cont"),
    start = document.getElementById("start"),
    loose = document.getElementById("loose"),
    rules = document.getElementById("rules"),
    resume = document.getElementById("resume"), 
    handle = document.getElementById("handle"),   
    ladybug = document.getElementById("ladybug"),
    gameRules = document.getElementById("game_rules"),
    menuTable = document.getElementById("menu_table"),
    menuButton = document.getElementById("menu_button"),
    staticColor = document.getElementById("static_color"),
    controls = document.getElementsByClassName("controls"), 
    id = document.querySelector('#hiddenId') ? 
    parseInt(document.querySelector('#hiddenId').innerHTML) : undefined, 
    
    l = false, r = false, t = false, b = true,
    pause = false,
    static = false,
    x = cont.offsetWidth/2,
    y = cont.offsetHeight/2,
    spd = 3,
    maxSpd = 3,
    bestSpd = 3,
    n = 0, 
    i = 0, 
    timePoint = 40, 
    target,
    allMoons,
    allMoons2,
    pMoons,
    moonTime,
    H,
    moonCount = -1,
    loH = ladybug.offsetHeight,
    loW = ladybug.offsetWidth,
    timer = Date.now(),
    moonFolder = ['<p class="pm" date="-15">🌑</p>', '<p class="pm" date="-5">🌘</p>', '<p class="pm" date="1">🌗</p>', '<p class="pm" date="3">🌖</p>', '<p class="pm" date="5">🌕</p>', '<p class="pm" date="3">🌔</p>', '<p class="pm" date="1">🌓</p>', '<p class="pm" date="-5">🌒</p>']; 
  
  //Ajax start
  start.addEventListener("click", getValue);
  loose.addEventListener("click", getValue);

function loadUsers() {    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'includes/ajax.php', true);

    xhr.onload = function() {
        if(this.status == 200) {
            
            var user = JSON.parse(this.responseText);                       
            var output = []; 

            for(i in user) {
                output.push(user[i].score + "." + user[i].login);
            }
            let best = 0,
                index = 0;
            for(let i = 0; i < output.length; i++) {
              if(best < parseInt(output[i])) {
                best = parseInt(output[i]);
                index = i;
              }
            }

            document.querySelector('#rec').innerHTML = parseInt(output[index]);
            document.querySelector('#recName').innerHTML = output[index].split('.')[1];
            if(document.querySelector('#yRec')) {
              document.querySelector('#yRec').innerHTML = user[id-1].score;
            }
        }
    }

    xhr.send();  
}

function getValue(e) {
  e.preventDefault(); 

  let val = parseInt(maxSpd*10);

  var params = "val=" + val + "&id=" + id;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'includes/ajax.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
    }
    xhr.send(params);

    loadUsers();
}
  //Ajax end

  //Events
  document.body.addEventListener("selectstart",(e)=> {
    e.preventDefault();
  });  
  
  menuButton.addEventListener("click", ()=> {
    menuButton.style.display = "none";
    setTimeout(()=> {
      menuButton.style.display = "flex";
    },1848);
    stopGame();
    rules.style.display = "none";
  });

  document.getElementById("color_button").addEventListener("click", ()=> {
    colorChange();
  });

  gameRules.addEventListener("click", ()=> {
    if(rules.style.display == "none") { 
      rules.style.display = "flex";
      gameRules.style.color = "rgb(190, 6, 6)";
    } else {
      rules.style.display = "none";
      gameRules.style.color = "rgb(250, 221, 59)"; 
    }
  });

  staticColor.addEventListener("click", ()=> {
    static = static ? false : true ;
    if(static) {
      staticColor.style.color = "rgb(190, 6, 6)";
    } else {
      staticColor.style.color = "rgb(250, 221, 59)"; 
    }
  });

  resume.addEventListener("click", ()=> {
    stopGame();
    rules.style.display = "none";
  });

  handle.addEventListener("click",(e)=> {
    let direction = e.target.className;
    arrows(direction);
  });   
  
  document.body.addEventListener("keydown", (e)=> {
    let direction;
    if (e.keyCode == 37 || e.keyCode == 65) {
      direction = "left";
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
      direction = "top";
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
      direction = "right";
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
      direction = "bottom";
    }
    arrows(direction);
  });
  
  start.addEventListener("click",()=> {
    start.style.top = -start.offsetHeight-9 + "px";
    start.style.transition = "top 1s cubic-bezier(.45,-0.67,.53,1.63)";
    spd = 3,
    maxSpd = 3,
    moonCount = -1,
    x = cont.offsetWidth/2,
    y = cont.offsetHeight/2;
    l = false, r = false, t = false, b = true,
    record.innerHTML = 0;
    screen_speed.innerHTML = "Speed: 30 t.k.p.s.",
    score_speed.innerHTML = "Max speed: 30";
  
    let  moonAppearance = setInterval(()=> {
      NewMoon(Math.floor(Math.random() * cont.offsetHeight - 30), Math.floor(Math.random() * cont.offsetWidth - 30));
      if (spd <= 0) {
        clearInterval(moonAppearance);
        cont.innerHTML='';
      }
      if(pause) {
        clearInterval(moonAppearance);
      }
    },1847);
  });
  
  loose.addEventListener("click",()=> {
    loose.style.top = cont.offsetHeight+9 + "px";
    loose.style.transition = "top 1s cubic-bezier(.45,-0.67,.53,1.63)";
    start.innerHTML = "🌚AGAIN!🌝";
  
    setTimeout(()=> {
      start.style.top = cont.offsetHeight/80*25 + "px";
      loose.style.transition = "top 1s cubic-bezier(.45,-0.67,.53,1.63)";
    },300);
  });
  
  //Functions
  function endGame() {
    //cont.offsetHeight/80*15 + "px"
    loose.style.top = "0px";
    loose.style.transition = "top 1s cubic-bezier(.45,-0.67,.53,1.63)";
  }
  
  function colorChange() {
    var red = Math.floor(Math.random()*255),
      green = Math.floor(Math.random()*255),
      blue = Math.floor(Math.random()*255);
        
    cont.style.background = "rgb(" + red + "," + green + "," + blue + ")";
    start.style.background = "rgb(" + red + "," + green + "," + blue + ")";
    loose.style.background = "rgb(" + red + "," + green + "," + blue + ")";
  }

  function stopGame() {
    pause = pause ? false : true; 

    if(menuTable.style.display == "grid") {    
      menuTable.style.display = "none";
    } else {
      menuTable.style.display = "grid";
    }
    if(pause) {

      H = spd;
      spd = 0.001;
    } else {
      spd = H;
      let  moonAppearance = setInterval(()=> {
        NewMoon(Math.floor(Math.random() * cont.offsetHeight - 30), Math.floor(Math.random() * cont.offsetWidth - 30));
        if (spd <= 0) {
          clearInterval(moonAppearance);
          cont.innerHTML='';
        }
        if(pause) {
          clearInterval(moonAppearance);
        }
      },1847);
    }
  }
  
  // Beetle part
  function arrows(direction) {
  
        
    if (direction == "left") {
      l = true;
      r = false;
      t = false;
      b = false;
    } else if(direction == "right") {
      l = false;
      r = true;
      t = false;
      b = false;
    } else if(direction == "top") {
      l = false;
      r = false;
      t = true;
      b = false;
    } else if(direction == "bottom") {
      l = false;
      r = false;
      t = false;
      b = true;
    }
  };
  
  // Check positions
  function check() {
    allMoons = document.querySelectorAll("#cont div");
  
    if(x < 0 && y < 0) {
      x = cont.offsetWidth;
      y = cont.offsetHeight;
    }

    if (left && x + ladybug.offsetWidth < 0) {
      x = cont.offsetWidth 
    } else if (right && x - ladybug.offsetWidth > cont.offsetWidth) {
      x = -ladybug.offsetWidth; 
    } 
    if (top && y + ladybug.offsetHeight < 0) {
      y = cont.offsetHeight 
    } else if (bottom && y - ladybug.offsetHeight > cont.offsetHeight){
      y = -ladybug.offsetHeight; 
    }
  
    for (let q = 0; q < allMoons.length; q++) {
      if (ladybug.offsetTop + loH > allMoons[q].offsetTop && ladybug.offsetTop < allMoons[q].offsetTop + allMoons[q].offsetHeight && ladybug.offsetLeft + loW > allMoons[q].offsetLeft && ladybug.offsetLeft < allMoons[q].offsetLeft + allMoons[q].offsetWidth) {     
        spd += allMoons[q].children[0].getAttribute("date")/3;
        maxSpd = Math.max(maxSpd,spd);
        bestSpd = Math.max(bestSpd,spd);
        moonCount++;
        record.innerHTML = moonCount;
  
        screen_speed.innerHTML = 'Speed: ' + parseInt(spd*10) + " t.k.p.s.";
        score_speed.innerHTML = 'Max speed: ' + parseInt(maxSpd*10);
        best_speed.innerHTML = 'Best speed today: ' + parseInt(bestSpd*10);
        score_moon.innerHTML = "Moons: " + (moonCount + 1);
        if (document.getElementById("gest_record")) {
        document.getElementById("gest_record").innerHTML = "Лучший результат сегодння: " + parseInt(bestSpd*10);
        }
        if (spd <= 2) {
          spd = 0; 
  
          endGame();
        }
        
        allMoons[q].style.display = "none";
  
        record.innerHTML++;
  
        if(!static) {
          colorChange();
        }
        return bestSpd;
      }
    }
  }
    
  !function move() {
    switch (true) {
      case l:
        x-=spd;
        ladybug.style.transform = "rotate(-90deg)";
        break;
      case r:
        x+=spd;
        ladybug.style.transform = "rotate(90deg)";
        break;
      case t:
        y-=spd;
        ladybug.style.transform = "rotate(0deg)";
        break;
      case b:
        y+=spd; 
        ladybug.style.transform = "rotate(180deg)";
    }
  
    ladybug.style.top = y + "px";
    ladybug.style.left = x + "px";
        
    requestAnimationFrame(()=> {
      check();
      move();
    });
  }();
  
  // Moons part
  function NewMoon(x, y) {
    this.x = x;
    this.y = y;
    this.start = Date.now();
  
    cont.innerHTML += '<div class="moon' + n + '">0 <p class="pm">🌑</p></div>';
    let nM = document.querySelector(".moon" + n); 
    n++;
  
    nM.style.top = this.x + "px";
    nM.style.left = this.y + "px";
    
    forMoons();
  }
   
  function PointMoon(x,y,z) {
    cont.innerHTML += '<p class="point">'
  }
  
  function forMoons() {
    let timePass = Date.now() - timer;
    if (timePass > timePoint) {
      allMoons = document.querySelectorAll("#cont div");
      for (let i = 0; i < allMoons.length; i++) {
        let k = parseInt(allMoons[i].innerHTML)+1;
        timePoint = timePass + 140;
        if (k >= moonFolder.length) {
          k = 0;
        }
        allMoons[i].innerHTML = k + " " + moonFolder[k];
      }
    }
    requestAnimationFrame(()=> {
      forMoons();
    });
  };
  }