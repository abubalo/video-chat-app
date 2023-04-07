function switchTab() {
  chatroomBtn = document.querySelector("#chatroom-btn");
  participantBtn = document.querySelector("#parti-btn");

  chatPanel = document.querySelector(`#parti-panel[data-id=${1}]`);
  ParticipantPanel = document.querySelector("#parti-panel");

  chatroomBtn.addEventListener("click", () => {
    console.log("hello there");
  });

  participantBtn.addEventListener("click", () => {
    console.log("working");
  });
}

function handleChat() {}

async function handleControls() {
  const mic = document.querySelector("#mic");
  const camera = document.querySelector("#camera");
  const screen = document.querySelector("#screen");
}

async function leaveChannell() {
  // const
}
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("seconds").innerHTML = formatTime(seconds);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("hours").innerHTML = formatTime(hours);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

setInterval(() => {
  updateTimer();
}, 1000);

const mainframe = document.querySelector("#main--screen");
const participants = document.querySelectorAll(".stream-players");

function expandVideoFrame() {
  for (let i = 0; i < participants.length; i++) {
    const participant = participants[i];
    participant.addEventListener("click", () => {
      alert("Video selected")
      console.log(participant);
    });
  }
}
