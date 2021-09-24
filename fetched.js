var r = window.onbeforeunload = function() { return "lock" }; if (r != null) { var c = 'locked'} else { var c = 'not locked' } alert ( 'tab '+ c )
