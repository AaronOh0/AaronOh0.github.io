window.onload = oppstart;

let scene = 1;

function oppstart() {
  document.getElementById("leftChoice").onclick = function () {
    makeChoice("left");
  };
  document.getElementById("rightChoice").onclick = function () {
    makeChoice("right");
  };
  showScene();
}

function makeChoice(choice) {
  if (scene === 1) {
    if (choice == "left") {
      scene = 2;
    } else if (choice == "right") {
      scene = 3;
    }
  } else if (scene === 2) {
    if (choice == "left") {
      scene == 4;
    } else if (choice == "right") {
      scene = 5;
    }
  } else if (scene == 3) {
    if (choice == left) {
      scene = 6;
    } else if (choice == right) {
      scene = 7;
    }
  }
  showScene();
}

function showScene() {
  const video = document.getElementById("mainVideo");
  const choiceInfo = document.querySelector(".choiceInfo");
  const leftChoice = document.querySelector("#leftChoice");
  const rightChoice = document.querySelector("#rightChoice");

  if (scene == 1) {
    // er ikke ferdig med å redigere så må vente med dette
    video.src = "scene1.mp4";
    choiceInfo.innerHTML = "Du har lyst på drikke, stjel eller betal!";
    leftChoice.innerHTML = "Stjel";
    rightChoice.innerHTML = "Betal";
  }
  // fortsett sånn videre
  else if (scene == 2) {
    video.src = "";
    choiceInfo.innerHTML = "";
    leftChoice.innerHTML = "";
    rightChoice.innerHTML = "";
  }
}
