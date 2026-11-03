(function(){
var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
var h=document.getElementById('header'),b=document.getElementById('burger'),n=document.getElementById('nav');
function s(){h.classList.toggle('scrolled',window.scrollY>40)}s();window.addEventListener('scroll',s,{passive:true});
function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A')close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
else els.forEach(function(e){e.classList.add('in')});
})();
