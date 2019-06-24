const clock = document.querySelector(".status-bar__clock");

function daytime() {
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = "";

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours === 0) {
    ampm = "오전";
    hours = hours + 12;
  }
  if (hours < 12) {
    ampm = "오전";
  }

  if (hours === 12) {
    ampm = "오후";
  }
  if (hours > 12) {
    ampm = "오후";
    hours = hours - 12;
  }

  clock.innerText = `${ampm}${hours}:${minutes}`;
  setInterval(daytime, 1000);
}

function init() {
  daytime();
}

init();
