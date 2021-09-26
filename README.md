#### general paste:
```javascript
javascript:fetch("https://raw.githubusercontent.com/2-js/gen-paste/main/fetched.js")
.then((res) => res.text() 
.then((t) => eval(t)))
```
- [x] auto updating bookmark
#### test room code
```javascript
JSON.parse(localStorage.getItem("previousContext")).game.roomCode
```
