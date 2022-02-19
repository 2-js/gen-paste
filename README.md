### bookmark
```javascript
JSON.parse(localStorage['nyt-wordle-state']).solution.toUpperCase();
```
```js
///* decode game ID | wordle unlimited
atob(document.querySelector(".game-id").childNodes[1].textContent) 
///* change stats
variables = // won // streak // best streak
localStorage['var'] = parseInt('ammount')
```
```js
function next_word(){
    document.querySelector(".game-id").childNodes[1].textContent = atob(document.querySelector(".game-id").childNodes[1].textContent).toUpperCase()
}
var target = document.querySelector(".game-id");
var observer = new MutationObserver(function(mutations) {
    next_word( atob(document.querySelector(".game-id").childNodes[1].textContent) );
});
var config = { characterData: true, attributes: false, childList: false, subtree: true };
observer.observe(target, config);
next_word( atob(document.querySelector(".game-id").childNodes[1].textContent) );
```
