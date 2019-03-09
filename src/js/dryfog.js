onload = ()=> {

    //Variables
let wrap = document.getElementById("wrap"),
    cont = document.getElementById("cont"),
    bttn = document.getElementById("bttn"),
    turn = document.getElementById("turn"),
    tran = document.getElementById("tran"),   
    numW = 22,
    numH = 1,
    height = cont.offsetHeight,
    width = cont.offsetWidth,
    X = 0;


    //Events
wrap.addEventListener("click", (e)=> {
    scrolling(e);
    filling();
    sizing(X);
    if(e.clientX < wrap.offsetWidth / 2) {
        animation("turn", "1");
    } else {
        animation("tran", "1");
    }
    console.log(numW + ' : ' + numH);
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


//Mods
document.getElementById("squaL").addEventListener("click", ()=> {
    numH = 28; numW = 28;
});
document.getElementById("squaN").addEventListener("click", ()=> {
    numH = 22; numW = 22;
});
document.getElementById("squaB").addEventListener("click", ()=> {
    numH = 17; numW = 17;
});
document.getElementById("vertL").addEventListener("click", ()=> {
    numH = 22; numW = 1;
});
document.getElementById("vertN").addEventListener("click", ()=> {
    numH = 45; numW = 1;
});
document.getElementById("vertB").addEventListener("click", ()=> {
    numH = 125; numW = 1;    
});
document.getElementById("goriL").addEventListener("click", ()=> {
    numH = 1; numW = 22;
});
document.getElementById("goriN").addEventListener("click", ()=> {
    numH = 1; numW = 45;
});
document.getElementById("goriB").addEventListener("click", ()=> {
    numH = 1; numW = 125;
});


    //Functions
function scrolling(e) {   
    let albLen = 2;   //Number of images (-1)     
    if(e.clientX < wrap.offsetWidth / 2) {
    X--;
        if(X < 0) {
            X = albLen;
        }
    } else {
        X++;
        if(X > albLen) {
            X = 0;
        }
    }
    return X;
}

function filling() {
    cont.innerHTML = '';

    //Fill container
    for(let x = 0; x < numW * numH; x++) {
        cont.innerHTML += `<div class="image${X}"></div>`;
    }
} 

function sizing(obj) {
    let parts = document.getElementsByClassName("image" + obj),
        partL = 70 / numW,
        partT = 40 / numH,
        pudW = 100 / numW,
        pudH = 100 / numH,
        row = numW,
        posH = 0,
        posW = 0,
        pLeft = 0,
        pTop = 0;

    for(let y = 0; y < numW * numH; y++) {    

        parts[y].style.height = height / numH + "px";
        parts[y].style.width = width / numW + "px";
        parts[y].style.left = pLeft + "rem";
        parts[y].style.top = pTop + "rem";

        parts[y].style.backgroundSize = `${numW * 100}% ${numH * 100}%`; 
        parts[y].style.backgroundPosition = `${posW}% ${posH}%`;

        pLeft += partL;
        posW += pudW;

        if(y == row - 1) {
            pLeft = 0;
            posW = 0;
            pTop += partT;
            posH += pudH;
            row = Number(row) + +numW;
        }
    }
}

function animation(animType, animSpeed) {
    let imageX = document.getElementsByClassName("image" + X);

    for(let x = 0; x < imageX.length; x++) { 
        setTimeout(()=> {
            imageX[x].style.display = "block";
        }, x*15);
 
        imageX[x].style.animation = `${animType} ${animSpeed}s linear`;
    }
}

function cut() {
    let imageX = document.getElementsByClassName("image" + X);

    for(let x = 0; x < imageX.length; x++) {
        imageX[x].style.borderTop = "1px solid #000";
        imageX[x].style.borderLeft = "1px solid #fff";
    }
}   

}