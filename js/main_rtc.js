const APP_ID = "24b8b0ef1f894877a1d4a7338723fc62"

let uid = sessionStorage.getItem('uid')
if(!uid){
    uid = Math.floor(Math.random() * 10_00_000);
    sessionStorage.setItem('uid', uid)
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
let romoteUsers = {}

// const servers = () => {
//   iceSever: [
//     {
//       urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
//     },
//   ];
// };


const joinRoomInnit = async ()=>{
    client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'})
    await client.join(APP_ID, roomId, token, uid)

    joinStream();
}

const joinStream = async ()=>{
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    const player = `
        <div id="user-container" class="w-full h-30v bg-blue-500" >
            <div class="w-full absolute h-full" id="user-${uid}"></div>
        </div>
    `
    document.getElementById('participant').insertAdjacentHTML('beforeend', player)
    // document.getElementById('participants').innerHTML = player

    localTracks[1].play(`user-${uid}`).play()
}
joinRoomInnit();