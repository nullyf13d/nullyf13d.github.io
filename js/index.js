var doc = document.documentElement;
var intr = document.getElementById('intro');
intr.style.opacity = 1;
intr.addEventListener('click',function(){document.location.href='page/main/index.html'})
// functions as a "bouncer" to warn about the JS things
// not sure if there's a simpler, better way to do this
// but it doesn't need to be bigger or better than this