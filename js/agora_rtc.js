const APP_ID = "24b8b0ef1f894877a1d4a7338723fc62";

let uid = sessionStorage.getItem("uid");
if (!uid) {
  uid = Math.floor(Math.random() * 10_00_000);
  sessionStorage.setItem("uid", uid);
}

let token = null;
let client;

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let roomId = urlParams.get("room");

if (!roomId) {
  roomId = "main";
}

let localTracks = [];
let remoteUsers = {};

const joinRoomInit = async () => {
  client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  await client.join(APP_ID, roomId, token, uid);

  await client.on("user-published", handleUserPublish);
  await client.on("user-left", handleUserLeft);
  joinStream();
};

const joinStream = async () => {
  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

  const streamPlayer = `
        <div data-player="stream-player" class="overflow-hidden" id="user-${uid}"  ></div>
    `;
  document
    .getElementById("participants")
    .insertAdjacentHTML("beforeend", streamPlayer);

  localTracks[1].play(`user-${uid}`);
  await client.publish([localTracks[0], localTracks[1]]);
};

async function handleUserPublish(user, mediaType) {
  remoteUsers[user.uid] = user;

  await client.subscribe(user, mediaType);

  let streamPlayer = document.getElementById(`user-${user.uid}`);
  if (streamPlayer === null) {
    streamPlayer = `
              <div data-player="stream-player" class="stream-players overflow-hidden" id="user-${user.uid}"  ></div>
          `;
    document
      .getElementById(`participants`)
      .insertAdjacentHTML("beforeend", streamPlayer);
  }

  if (mediaType === "video") {
    user.videoTrack.play(`user-${user.uid}`);
  }
  if (mediaType === "audio") {
    user.addTrack.play();
  }
}

async function handleUserLeft(user) {
  delete remoteUsers[user.uid];
  document.getElementById(`user-${user.uid}`).remove();
}
joinRoomInit();
