const player = document.getElementById("player");
const evil = document.getElementById("evil");
const evilTwo = document.getElementById("evilTwo");
const boxPlayer = document.querySelector(".box-game");

// Contadores
const countElement = document.getElementById("count");
const timeElement = document.getElementById("time");

let count = 0;
let time = 60;

//Audios
const audioMario = new Audio("./sources/mario-bros vida.mp3");
const audioBowser = new Audio("./sources/bowsers-laugh meloboom.mp3");
const audioSountrack = new Audio("./sources/mario-bowser meloboom.mp3");
const audioGameOver = new Audio("./sources/mario-bros game over.mp3");

setTimeout(() => {
  audioSountrack.play();
  audioSountrack.volume = 0.2;
  audioSountrack.loop = true;
}, 400);

player.addEventListener("click", () => {
  // Ejecuta la funcion de numero random, con los valores del alto y ancho de su contendor
  //   const PositionRandom = NumeroRandom(
  //     [0, boxPlayer.clientWidth - 50],
  //     [0, boxPlayer.clientHeight - 50]
  //   );
  //   //   Posiciona el elemento de manera random
  //   player.style.left = `${PositionRandom[0]}px`;
  //   player.style.top = `${PositionRandom[1]}px`;
  //   contador
  count = count + 1;
  //   Pinta el nuevo valor
  countElement.style.color = "black";
  countElement.innerHTML = `Puntos: ${count}`;
  //reproduce audio
  audioMario.play();
  audioMario.volume = 0.2;
});

evil.addEventListener("click", actionEvil);
evilTwo.addEventListener("click", actionEvil);

setInterval(() => {
  transformTranslateElement(player);
  transformTranslateElement(evil);
  transformTranslateElement(evilTwo);
}, 1000);

setInterval(() => {
  downTime();
}, 1000);

function NumeroRandom(rangeWidth, rangeHeight) {
  let randomWidth =
    Math.round(Math.random() * rangeWidth[1] - rangeWidth[0] + 1) + 1;
  let randomHeight =
    Math.round(Math.random() * rangeHeight[1] - rangeHeight[0] + 1) + 1;

  return [randomWidth, randomHeight];
}

function actionEvil() {
  count = count - 1;
  countElement.innerHTML = `Puntos: ${count}`;
  countElement.style.color = "red";
  //ejecuta audio
  audioBowser.play();
  audioBowser.volume = 0.2;
}

function transformTranslateElement(element) {
  const PositionRandom = NumeroRandom(
    [0, boxPlayer.clientWidth - 50],
    [0, boxPlayer.clientHeight - 50]
  );
  element.style.left = `${PositionRandom[0]}px`;
  element.style.top = `${PositionRandom[1]}px`;
}

function downTime() {
  time = time - 1;
  timeElement.innerHTML = `Tiempo: ${time}`;
  if (time <= 0 && count < 10) {
    //audio de perdiste
    audioGameOver.play();
    audioGameOver.volume = 0.2;
    alert("Has perdido");
    count = 0;
    time = 60;
    countElement.innerHTML = `Puntos: ${count}`;
    timeElement.innerHTML = `Tiempo: ${time}`;
  }
}
