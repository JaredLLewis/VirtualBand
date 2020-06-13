var socket = io.connect();
const params = new URL(location.href).searchParams;
const sessionId  = params.get('session');
socket.emit('create', sessionId);


 socket.on('sendNoteToClient',function(data) {
    // do something with data
	  var synth = new Tone.Synth().toMaster()
//play a middle 'C' for the duration of an 8th note
	  synth.triggerAttackRelease(data.note + '2', '8n');
	
	

 });