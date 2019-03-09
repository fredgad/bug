onload = ()=> {

    //Variables
let wrap = document.getElementById("wrap"),
    cont = document.getElementById("cont"),
    bttn = document.getElementById("bttn"),
    tran = document.getElementById("tran"),   
    numW = 125,
    numH = 1,
    height = cont.offsetHeight,
    width = cont.offsetWidth,
    X = 0,
    rand = false,
    cut = false;


    //Events
wrap.addEventListener("click", (e)=> {
    scrolling(e);
    filling();
    sizing(X);
    if(rand) {
        if(e.clientX < wrap.offsetWidth / 2) {
            randomAnimation("turn", "1");
        } else {
            randomAnimation("tran", "1");
        } 
    } else {
        if(e.clientX < wrap.offsetWidth / 2) {
            animation("turn", "1");
        } else {
            animation("tran", "1");
        } 
    }
});

bttn.addEventListener("click", ()=> {
    cut = cut ? false : true ;
    cutt();
});
tran.addEventListener("click", ()=> {
    rand = rand ? false : true ;
    if(rand) {
        tran.style.color = "red";
    } else {
        tran.style.color = "black";
    }
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
    numH = 125; numW = 1;  
});
document.getElementById("vertN").addEventListener("click", ()=> {
    numH = 45; numW = 1;
});
document.getElementById("vertB").addEventListener("click", ()=> {
    numH = 22; numW = 1;  
});
document.getElementById("goriL").addEventListener("click", ()=> {
    numH = 1; numW = 125;
});
document.getElementById("goriN").addEventListener("click", ()=> {
    numH = 1; numW = 45;
});
document.getElementById("goriB").addEventListener("click", ()=> {
    numH = 1; numW = 22;
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

function randomAnimation(animType, animSpeed) {
    let imageX = document.getElementsByClassName("image" + X),
        aRRay = [],
        z, box;
    //Randomisation
    for(let i = 0; i < imageX.length; i++) {
        aRRay.push(i);
    }
    for(let i = aRRay.length - 1; i > 0; i--){
		z = Math.floor(Math.random()*(i + 1));
		box = aRRay[z];
		aRRay[z] = aRRay[i];
		aRRay[i] = box;
    }
    
    for(let x = 0; x < imageX.length; x++) { 


        setTimeout(()=> {
            imageX[aRRay[x]].style.display = "block";
        }, x*15);
 
        imageX[aRRay[x]].style.animation = `${animType} ${animSpeed}s linear`;
    }
}

function cutt() {
    let imageX = document.getElementsByClassName("image" + X);

    if(cut) {
        for(let x = 0; x < imageX.length; x++) {
            imageX[x].style.borderTop = "1px solid #fff";
            imageX[x].style.borderLeft = "1px solid #fff";
        }
        bttn.style.color = "yellow";
    } else {
        for(let x = 0; x < imageX.length; x++) {
            imageX[x].style.borderTop = "0px solid #fff";
            imageX[x].style.borderLeft = "0px solid #fff";
        }
        bttn.style.color = "black";
    }
}

}