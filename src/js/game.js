onload = ()=> {

  //Variables
  var
    cont = document.getElementById("cont"),
    start = document.getElementById("start"),
    loose = document.getElementById("loose"),
    handle = document.getElementById("handle"),   
    ladybug = document.getElementById("ladybug"),
    controls = document.getElementsByClassName("controls"),   
    
    l = false, r = false, t = false, b = true,
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
    moonCount = -1,
    loH = ladybug.offsetHeight,
    loW = ladybug.offsetWidth,
    timer = Date.now(),
    moonFolder = ['<p class="pm" date="-5">🌑</p>', '<p class="pm" date="-3">🌘</p>', '<p class="pm" date="1">🌗</p>', '<p class="pm" date="3">🌖</p>', '<p class="pm" date="5">🌕</p>', '<p class="pm" date="3">🌔</p>', '<p class="pm" date="-1">🌓</p>', '<p class="pm" date="-3">🌒</p>']; 
  
  //Ajax
  start.addEventListener("click", getValue);

function loadUsers() {    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'includes/ajax.php', true);
    xhr.onload = function() {

        if(this.status == 200) {
            
            var user = JSON.parse(this.responseText);                       
            var output = '';

            for(i in user) {
                output += '<ul>' + 
                '<li>' + user[i].login + '</li>' + 
                '<li>' + user[i].score + '</li>' + 
                '</ul>';
            }
            console.log(output);
            document.querySelector('.common_record').innerHTML = output;
        }
    }

    xhr.send();
}

function getValue(e) {
    e.preventDefault(); 
    
    let val = parseInt(bestSpd*1);
    let id = document.querySelector('#hiddenId').innerHTML;
    alert(id + " : " + val);

    var params = "val=" + val + "&id=" + id;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'includes/ajax.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    xhr.onload = function() {
        
    }

    xhr.send(params);

    loadUsers();
}

  //Events
  document.body.addEventListener("selectstart",(e)=> {
    e.preventDefault();
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
  
    var  moonAppearance = setInterval(()=> {
      NewMoon(Math.floor(Math.random() * cont.offsetHeight), Math.floor(Math.random() * cont.offsetWidth));
      if (spd < 3) {
        clearInterval(moonAppearance);
        cont.innerHTML='';
      }
    },1847);
  });
  
  loose.addEventListener("click",()=> {
    loose.style.top = cont.offsetHeight+9 + "px";
    loose.style.transition = "top 1s cubic-bezier(.45,-0.67,.53,1.63)";
    start.innerHTML = "🌚PLAY AGAIN!🌝";
  
    setTimeout(()=> {
      start.style.top = cont.offsetHeight/80*25 + "px";
      loose.style.transition = "top 1s cubic-bezier(.45,-0.67,.53,1.63)";
    },300);
  });
  
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
    } else if(direction == "menu_button") {
      colorChange();
    }
  };
  
  // Check positions
  function check() {
    allMoons = document.querySelectorAll("#cont div");
  
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
        score_moon.innerHTML = "Score: " + (moonCount + 1);
        if (document.getElementById("gest_record")) {
        document.getElementById("gest_record").innerHTML = "Лучший результат сегодння: " + parseInt(bestSpd*10);
        }
        if (spd < 3) {
          spd = 0;
  
          endGame();
        }
        
        allMoons[q].style.display = "none";
  
        record.innerHTML++;
  
        colorChange();
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