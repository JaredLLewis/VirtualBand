// A $( document ).ready() block.
$( document ).ready(function() {
	alert("m");
    console.log( "ready!" );
});
const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");
  console.log(keyNote);
  
  
  var data={  
    room: sessionId,  
    note : keyNote
    };  
  socket.emit('sendNote',data);

  key.classList.add("playing");
  
//  var synth = new Tone.Synth().toMaster()

//play a middle 'C' for the duration of an 8th note
//synth.triggerAttackRelease(keyNote + '2', '8n')
  
 // note.innerHTML = keyNote;
 /// audio.currentTime = 0;
 // audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);