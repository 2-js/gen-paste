### paste: 1/27/22 
```javascript
javascript:req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeCustomMenuStuff/main/custom.js');
req.onload = function() { eval(this.responseText + 'snake.more_menu();');}; req.send();
*/// snake mod
```
