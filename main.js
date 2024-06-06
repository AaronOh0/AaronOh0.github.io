window.onload = oppstart;

let scene = 0;
let currentTimer;

function oppstart() {
  document.getElementById("leftChoice").onclick = function () {
    makeChoice("left");
  };
  document.getElementById("rightChoice").onclick = function () {
    makeChoice("right");
  };
  document.querySelector(".choiceTimer").style.display = "none";
  showScene();
}

function makeChoice(choice) {
  if (scene == 0) {
    // starte video
    if (choice == "left") {
      scene = 1;
    } else if (choice == "right") {
      scene = 1;
    }
  } else if (scene === 1) {
    // stjele
    if (choice == "left") {
      scene = 2;
    } else if (choice == "right") {
      scene = 3;
    }
  } else if (scene === 2) {
    // løp, bli tatt
    if (choice == "left") {
      scene = 4;
      // ta konsekvensene
    } else if (choice == "right") {
      scene = 5;
    }
  } else if (scene == 3) {
    // betal scene , scene dra hjem, se noen bli tatt for å stjele og gå hjem
    if (choice == "left") {
      scene = 6;
    } else if (choice == "right") {
      scene = 7;
    }
  } else if (scene == 5) {
    // scene 5 har ingen valg, man skal gå hjem å være skuffet over seg
    if (choice == "left") {
      scene = 10;
    } else if (choice == "right") {
      scene = 11;
    }
  }
  showScene();
}

function showScene() {
  const video = document.getElementById("mainVideo");
  const choiceInfo = document.querySelector(".choiceInfo");
  const leftChoice = document.querySelector("#leftChoice");
  const rightChoice = document.querySelector("#rightChoice");

  if (currentTimer) {
    clearTimeout(currentTimer);
  }

  if (scene == 0) {
    video.src = "";
    choiceInfo.innerHTML = "Start Video (trykk på en knapp)";
    leftChoice.innerHTML = "Start Video";
    document.querySelector("#rightChoice").style.display = "none";
    document.querySelector("#leftChoice").style.width = "100%";
  } else if (scene == 1) {
    video.src =
      "https://www.youtube.com/embed/QoQ-zGO_Kt8?autoplay=1&rel=0&si=Sf0EOdIgR52ctVEr";
    choiceInfo.innerHTML = "Du har lyst på drikke: stjel eller betal!";
    leftChoice.innerHTML = "Stjel";
    rightChoice.innerHTML = "Betal";
    document.querySelector("#rightChoice").style.display = "block";
    document.querySelector("#leftChoice").style.width = "50%";
    currentTimer = setTimeout(timer, 4900);
  } else if (scene == 2) {
    video.src = "https://www.youtube.com/embed/1isDChSgHBw?autoplay=1&rel=0";
    choiceInfo.innerHTML = "";
    leftChoice.innerHTML = "Løp";
    rightChoice.innerHTML = "Ta konsekvensene";
    document.querySelector("#leftChoice").style.display = "none";
    document.querySelector("#rightChoice").style.display = "none";
    currentTimer = setTimeout(timerSteal, 28000);
  } else if (scene == 3) {
    video.src = "https://www.youtube.com/embed/_L9V1ySKqQI?autoplay=1&rel=0";
    choiceInfo.innerHTML = "";
    document.querySelector("#leftChoice").style.display = "none";
    document.querySelector("#rightChoice").style.display = "none";
    currentTimer = setTimeout(goodEnding, 20000);
  } else if (scene == 4) {
    video.src =
      "https://www.youtube.com/embed/nUeqWoJM5qo?autoplay=1&rel=0&si=lSzEE9zJPyhDtdNj";
    choiceInfo.innerHTML = "";
    leftChoice.innerHTML = "";
    rightChoice.innerHTML = "";
    document.querySelector("#leftChoice").style.display = "none";
    document.querySelector("#rightChoice").style.display = "none";
    currentTimer = setTimeout(timerCaught, 6000);
  } else if (scene == 5) {
    video.src =
      "https://www.youtube.com/embed/VUNilHe7G0Q?autoplay=1&rel=0&si=MVqRtGu4Znv0PnK5";
    choiceInfo.innerHTML = "";
    document.querySelector("#leftChoice").style.display = "none";
    document.querySelector("#rightChoice").style.display = "none";
    currentTimer = setTimeout(timerWarning, 8000);
  }
}

function goodEnding() {
  document.querySelector(".choiceInfo").innerHTML =
    "Gratulerer, du fikk den gode endingen!";
}
function timer() {
  const choiceTimer = document.querySelector(".choiceTimer");
  choiceTimer.style.display = "block";
}

function timerSteal() {
  const choiceTimer = document.querySelector(".choiceTimer");
  choiceTimer.style.display = "block";
  document.querySelector(".choiceInfo").innerHTML =
    "Du ble tatt: løp eller ta konsekvensene!";
  document.querySelector("#rightChoice").style.display = "block";
  document.querySelector("#leftChoice").style.display = "block";
}

function timerCaught() {
  document.querySelector(".choiceInfo").innerHTML =
    "Du ble tatt, prøv på nytt!";
}

function timerWarning() {
  document.querySelector(".choiceInfo").innerHTML =
    "Du slapp unna med advarsel!";
}
