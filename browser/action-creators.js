
import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const LOAD_PUPPIES = 'LOAD_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';

//plain vanilla action creator
export const receivePuppies = (puppies) => {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  }
};
export const selectPuppy = (puppy) => {
  return {
    type: SELECT_PUPPY,
    selectedPuppy: puppy
  }
}

//this is thunk creator, it returns a function(a thunk) instead of an action
export const loadPuppies = () => {
  return (dispatch) => {
    axios.get('/api/puppies')
    .then(res => res.data)
    .then(puppies => dispatch(receivePuppies(puppies)))
    .catch(err => console.error(err));
  }
}
//this is thunk creator for fetching single puppy from db
export const selectPuppyAsync = (puppyId) => {
  return (dispatch) => {
    axios.get(`/api/puppies/${puppyId}`)
    .then(res => res.data)
    .then(puppy => {
                   console.log('I am a puppy!!');
                   var msg = new SpeechSynthesisUtterance();
                  // var voices = window.speechSynthesis.getVoices();
                   speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :'');
});
                   msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
speechSynthesis.speak(msg);
                       // msg.voice = voices[5];
                        msg.voiceURI = 'native';
                       //msg.volume = 1; // 0 to 1
                       // msg.rate = 1; // 0.1 to 10
                        msg.pitch = 1; //0 to 2
                        msg.text = `Hello! My name is ${puppy.name}. I am so cool`;
                        msg.lang = 'en-US';
                   window.speechSynthesis.speak(msg);
                   dispatch(selectPuppy(puppy))
                   })
    .catch(err => console.error(err));
  }
}
