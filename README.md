### bookmark
```javascript
JSON.parse(localStorage['nyt-wordle-state']).solution.toUpperCase();
```
```js
var word = JSON.parse(localStorage["nyt-wordle-state"]).solution.toLowerCase()
for (let i = 0; i < 5; i++) {
window.dispatchEvent(new KeyboardEvent('keydown', { key: word[i] }));
}
setTimeout(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter'
    }));
}, 50);
```
```js
///* decode game ID | wordle unlimited
atob(document.querySelector(".game-id").childNodes[1].textContent)
///* change stats
variables = // won // streak // best streak
    localStorage['var'] = parseInt('ammount')
```
```js
function next_word() {
    document.querySelector(".game-id").childNodes[1].textContent = atob(document.querySelector(".game-id").childNodes[1].textContent).toUpperCase()
}
var target = document.querySelector(".game-id");
var observer = new MutationObserver(function(mutations) {
            next_word(atob(document.querySelector(".game-id").childNodes[1].textContent));
});
var config = {
    characterData: true,
    attributes: false,
    childList: false,
    subtree: true
};
observer.observe(target, config);
next_word(atob(document.querySelector(".game-id").childNodes[1].textContent));
```
```js
var h1 = document.querySelector("h1")
h1.onmouseover = function() {
    h1.textContent = atob(document.querySelector(".game-id").childNodes[1].textContent).toUpperCase()
}
h1.onmouseout = function() {
    h1.textContent = "Wordle Unlimited"
}
```
```js
var popup_style = document.createElement("style");
popup_style.innerHTML = ".confetti-loc {display:none;} .feedback .alert{display:none;}"
document.body.appendChild(popup_style);
var target = document.querySelector(".game-id");
var observer = new MutationObserver(function(mutations) {
    var word = atob(document.querySelector(".game-id").childNodes[1].textContent)
    for (let i = 0; i < 5; i++) {
        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: word[i]
        }));
    }
    setTimeout(() => {
        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter'
        }));
    }, 200);
    setTimeout(() => {
        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter'
        }));
    }, 250);

});
var config = {
    characterData: true,
    attributes: false,
    childList: false,
    subtree: true
};
observer.observe(target, config);
var word = atob(document.querySelector(".game-id").childNodes[1].textContent)
for (let i = 0; i < 5; i++) {
    document.dispatchEvent(new KeyboardEvent('keydown', {
        key: word[i]
    }));
}
setTimeout(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter'
    }));
}, 250);
setTimeout(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter'
    }));
}, 250);
```
