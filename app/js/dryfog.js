onload = ()=> {

                    //Variables
    let wrap = document.getElementById("wrap"),
    rngHeight = document.getElementById("rngHeight"),
    rngWidth = document.getElementById("rngWidth"),
    cont = document.getElementById("cont"),
    bttn = document.getElementById("bttn"),
    turn = document.getElementById("turn"),
    tran = document.getElementById("tran"),   
    numW = document.getElementById("numW"),
    numH = document.getElementById("numH"),
    height = cont.offsetHeight,
    width = cont.offsetWidth,
    X = 0, Y = 1;


                    //Events
wrap.addEventListener("click", (e)=> {
    scrolling(e);
    filling();
    sizing(X);
    sizing(Y);
    if(e.clientX < wrap.offsetWidth / 2) {
        animation("turn", "1");
    } else {
        animation("tran", "1");
    }
});
bttn.addEventListener("click", ()=> {
    cut();
});
turn.addEventListener("click", ()=> {
      animation("turn", "50");
});
tran.addEventListener("click", ()=> {
      animation("tran", "50");
});
rngWidth.addEventListener("input", ()=> {
    numW.value = rngWidth.value;
    filling();
});
rngHeight.addEventListener("input", ()=> {
    numH.value = rngHeight.value;
    //cut();
});


                    //Functions
function scrolling(e) {   
    let albLen = 2;   //Number of images (-1)     
    if(e.clientX < wrap.offsetWidth / 2) {
        X--;    Y--;
        if(X < 0) {
            X = albLen;
        }
        if(Y < 0) {
            Y = albLen;
        }
    } else {
        X++;    Y++;
        if(X > albLen) {
            X = 0;
        }
        if(Y > albLen) {
            Y = 0;
        }
    }
    return X, Y;
}

function filling() {
    cont.innerHTML = '';

    //Fill container
    for(let x = 0; x < numW.value * numH.value; x++) {
        cont.innerHTML += `<div class="image${X}"></div><div class="image${Y}"></div>`;
    }
} 
  
function sizing(obj) {
    let parts = document.getElementsByClassName("image" + obj),
    partL = 70 / numW.value,
    partT = 40 / numH.value,
    pudW = 100 / numW.value,
    pudH = 100 / numH.value,
    row = numW.value,
    posH = 0,
    posW = 0,
    pLeft = 0,
    pTop = 0;

    for(let y = 0; y < numW.value * numH.value; y++) {    

        parts[y].style.height = height / numH.value + "px";
        parts[y].style.width = width / numW.value + "px";
        parts[y].style.left = pLeft + "rem";
        parts[y].style.top = pTop + "rem";
        
        parts[y].style.backgroundSize = `${numW.value * 100}% ${numH.value * 100}%`; 
        parts[y].style.backgroundPosition = `${posW}% ${posH}%`;
            
        pLeft += partL;
        posW += pudW;
        
        if(y == row - 1) {
            pLeft = 0;
            posW = 0;
            pTop += partT;
            posH += pudH;
            row = Number(row) + +numW.value;
        }
    }
}

function animation(animType, animSpeed) {
    let imageX = document.getElementsByClassName("image" + X),
        imageY = document.getElementsByClassName("image" + Y);
    setTimeout(()=>{
        for(let x = 0; x < imageX.length; x++) { 
            setTimeout(()=> {
                imageX[x].style.display = "block";
                imageY[x].style.display = "none";
            }, x*15);

              imageX[x].style.animation = `${animType} ${animSpeed}s linear`;
              imageY[imageY.length - x - 1].style.animation = `${animType} ${animSpeed}s linear`;
        }
    }, 0);

}

function cut() {
    let imageX = document.getElementsByClassName("image" + X),
        imageY = document.getElementsByClassName("image" + Y);

    for(let x = 0; x < imageX.length; x++) {
        imageX[x].style.borderTop = "1px solid #fff";
        imageX[x].style.borderLeft = "1px solid #fff";
    }
}

}