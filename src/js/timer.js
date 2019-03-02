onload = () => {
  let date, time, chfs, chss, chfm, chsm, chfh, chsh, chfd, chsd, timeLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft,firstDays, secondDays, thirdDays, firstHours, secondHours, secondMinutes, firstSeconds, secondSeconds, fd, sd, fh, sh, fm, sm, fs, ss; 
  
  let main = document.querySelector("#main");
  let cont = document.getElementsByClassName("cont");
  let text = document.getElementsByTagName("p");
  let sel = document.querySelector("#sel");
  let selI = sel.selectedIndex;
  let opt = document.querySelector("#sel").options;
  

  sel.addEventListener("change",()=> {
    let html = document.getElementsByTagName('html')[0];

    if(sel.selectedIndex == 0) {
      html.style.cssText = "--bg-color: #222; --cl-dots: #fff; --cl-digits: orange; --cl-strips-start: lightgreen; --cl-strips-end: yellow;";
    } else if(sel.selectedIndex == 1) {
      html.style.cssText = "--bg-color: pink; --cl-dots: rgb(75, 68, 68); --cl-digits: rgb(59, 71, 243); --cl-strips-start: rgb(175, 103, 91); --cl-strips-end: rgb(96, 72, 153)";
    } else if(sel.selectedIndex == 2) {
      html.style.cssText = "--bg-color: #fff; --cl-dots: #000; --cl-digits: rgb(0, 0, 0); --cl-strips-start: yellow; --cl-strips-end: brown";
    } else if(sel.selectedIndex == 3) {
      html.style.cssText = "--bg-color: rgb(32, 94, 20); --cl-dots: rgb(0, 0, 0); --cl-digits: rgb(255, 0, 0); --cl-strips-start: rgb(0, 221, 250); --cl-strips-end: red";
    } else {
      html.style.cssText = "--bg-color: rgb(33, 36, 189); --cl-dots: orangered; --cl-digits: #fff; --cl-strips-start: orangered; --cl-strips-end: rgb(41, 27, 24)";
    }
    

  });
  
  (function colorChange () { 
    for (let i = 0; i < text.length; i++) {
      text[i].style.animation = "colorM 1s linear " + i/4 + "s infinite";
    }
    for (let i = 0; i < cont.length; i++) {
      for (let x = 0; x < cont[i].children.length; x++) {
        cont[i].children[x].style.animation = "colorB 1s linear " + i/4 + "s infinite";
      }
    }
  })();
  
  function timeF () {
    date = Date.now();
    time = new Date(2019,05,0,0,0,0,0); //You can change the date here
    timeLeft = parseInt((time - date)/1000);
    daysLeft = parseInt((time - date)/1000/60/60/24);
    hoursLeft = parseInt((timeLeft - daysLeft*86400)/60/60);
    minutesLeft = parseInt(((timeLeft - daysLeft*86400)-hoursLeft*3600)/60);
    secondsLeft = parseInt(((timeLeft - daysLeft*86400)-hoursLeft*3600)-minutesLeft*60);
    firstDays = (daysLeft+"").split("")[1] ? (daysLeft+"").split("")[0] : 0;
    secondDays = (daysLeft+"").split("")[1] ? (daysLeft+"").split("")[1] : (daysLeft+"").split("")[0];
    thirdDays = (daysLeft+"").split("")[2] ? (daysLeft+"").split("")[2] : 7;
    firstHours = (hoursLeft+"").split("")[1] ? (hoursLeft+"").split("")[0] : 0;
    secondHours = (hoursLeft+"").split("")[1] ? (hoursLeft+"").split("")[1] : (hoursLeft+"").split("")[0];
    firstMinutes = (minutesLeft+"").split("")[1] ? (minutesLeft+"").split("")[0] : 0;
    secondMinutes = (minutesLeft+"").split("")[1] ? (minutesLeft+"").split("")[1] : (minutesLeft+"").split("")[0];
    firstSeconds = (secondsLeft+"").split("")[1] ? (secondsLeft+"").split("")[0] : 0;
    secondSeconds = (secondsLeft+"").split("")[1] ? (secondsLeft+"").split("")[1] : (secondsLeft+"").split("")[0]; 
    return date, time, timeLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft,firstDays, secondDays, firstHours, secondHours, firstMinutes, secondMinutes, firstSeconds, secondSeconds;
  };
  timeF();
  fd = firstDays*-36;
  sd = secondDays*-36;
  fh = firstHours*-36;
  sh = secondHours*-36;
  fm = firstMinutes*-36;
  sm = secondMinutes*-36;
  fs = firstSeconds*-36;
  ss = secondSeconds*-36;
  function rT () {
    
  document.getElementById("he").innerHTML = ("It is " + daysLeft + "days and " + hoursLeft + " hours and " + minutesLeft + " minutes and " + firstSeconds + " " + secondSeconds);
  }
  function forFirstDays () {
    if (chfd != firstDays) {
      cont[0].style.transform = "rotateX(" + fd + "deg)"; 
      if (firstDays == 0) {
        fd += 180;
      }else {
       fd += 36;
      }
      chfd = firstDays;
    }
  }
  function forSecondDays () {
    if (chsd != secondDays) {
      cont[1].style.transform = "rotateX(" + sd + "deg)"; 
      sd += 36;
      chsd = secondDays;
    }
  }
  function forFirstHours () {
    if (chfh != firstHours) {
      cont[2].style.transform = "rotateX(" + fh + "deg)"; 
      if (firstHours == 0) {
        fh += 180;
      }else {
       fh += 36;
      }
      chfh = firstHours;
    }
  }
  function forSecondHours () {
    if (chsh != secondHours) {
      cont[3].style.transform = "rotateX(" + sh + "deg)"; 
      sh += 36;
      chsh = secondHours;
    }
  }
  function forFirstMinutes () {
    if (chfm != firstMinutes) {
      cont[4].style.transform = "rotateX(" + fm + "deg)"; 
      if (firstMinutes == 0) {
        fm += 180;
      }else {
       fm += 36;
      }
      chfm = firstMinutes;
    }
  }
  function forSecondMinutes () {
    if (chsm != secondMinutes) {
      cont[5].style.transform = "rotateX(" + sm + "deg)"; 
      sm += 36;
      chsm = secondMinutes;
    }
  }
  function forFirstSeconds () {
    if (chfs != firstSeconds) {
      cont[6].style.transform = "rotateX(" + fs + "deg)"; 
      if (firstSeconds == 0) {
        fs += 180;
      }else {
       fs += 36;
      }
      chfs = firstSeconds;
    }
  }
  function forSecondSeconds () {
    if (chss != secondSeconds) {
      cont[7].style.transform = "rotateX(" + ss + "deg)"; 
      ss += 36;
      chss = secondSeconds;
    }
  }
  
  (function action () {
    timeF();
    forFirstDays();
    forSecondDays();
    forFirstHours();
    forSecondHours();
    forFirstMinutes();
    forSecondMinutes();
    forFirstSeconds();
    forSecondSeconds();
    requestAnimationFrame(action);
  }());
    
  }