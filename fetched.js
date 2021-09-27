var r = window.onbeforeunload = function() { return "lock" }; if (r != null) { var c = 'locked'} else { var c = 'not locked' } alert ( window.location.origin+ ' is ' + c )
//// locks tab by getting the 'onbeforeunload' then making it return 'lock' what this does is when you usally exit the tab it has no return value so it can exit or refresh without a waring
