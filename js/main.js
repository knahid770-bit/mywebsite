var OWNER_EMAIL='';   // FormSubmit: owner's email e.g. 'owner@yourdomain.com'
var FORM_ENDPOINT=''; // or any other form service URL e.g. Formspree
(function(){
var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
var h=document.getElementById('header'),b=document.getElementById('burger'),n=document.getElementById('nav');
var ly=0;function s(){var y=window.scrollY;h.classList.toggle('scrolled',y>40);h.classList.toggle('hide',y>240&&y>ly+4&&!n.classList.contains('open'));if(y<ly-4||y<=240)h.classList.remove('hide');ly=y}s();h.addEventListener('focusin',function(){h.classList.remove('hide')});window.addEventListener('scroll',s,{passive:true});
function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A')close()});document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add('in')});
var T={},N={home:'Premium Thoroughbred Racing Syndicate',about:'About | Racing Syndicate',contact:'Contact | Enquire to Join'};['home','about','contact'].forEach(function(k){T[k]=N[k];T[k+'-2']=N[k]+' (2)';T[k+'-3']=N[k]+' (3)'});
function go(){var v=(location.hash||'#home').slice(1);if(!T[v])v='home';
document.querySelectorAll('.view').forEach(function(e){e.classList.toggle('active',e.id==='v-'+v)});
var base=v.replace(/-\d$/,'');document.querySelectorAll('#nav a:not(.btn)').forEach(function(a){var t=a.getAttribute('href'),p=a.parentNode.classList.contains('dd');if(p?t==='#'+base:t==='#'+v)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
var first=document.querySelector('#v-'+v+'>section');h.classList.toggle('solid',!!first&&/\b(lt|st|sp)\b/.test(first.className));
document.title=T[v];window.scrollTo(0,0)}
window.addEventListener('hashchange',go);go();
document.querySelectorAll('form').forEach(function(f){var st=f.querySelector('.status'),btn=f.querySelector('button[type=submit]');
var rules={name:function(v){return v.trim().length>1||'Please enter your full name.'},
email:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())||'Please enter a valid email address.'},
phone:function(v){return (/^[+()\d\s.-]{7,20}$/.test(v.trim())&&v.replace(/\D/g,'').length>=7)||'Please enter a valid phone number.'}};
function check(k){var i=f.elements[k],r=rules[k](i.value),e=i.parentNode.querySelector('.err');i.setAttribute('aria-invalid',r!==true);e.textContent=r===true?'':r;return r===true}
Object.keys(rules).forEach(function(k){f.elements[k].addEventListener('blur',function(){check(k)})});
f.addEventListener('submit',function(ev){ev.preventDefault();st.className='status';st.textContent='';
if(!Object.keys(rules).map(check).every(Boolean)){f.querySelector('[aria-invalid=true]').focus();return}
if(f.elements._honey.value){st.className='status ok';st.textContent='Thank you.';f.reset();return}
var url=FORM_ENDPOINT||(OWNER_EMAIL?'https://formsubmit.co/ajax/'+encodeURIComponent(OWNER_EMAIL):'');
if(!url){st.className='status bad';st.textContent='This form is not yet connected to an email service.';return}
btn.disabled=true;btn.textContent='Sending…';var d=new FormData(f);d.append('_subject','New syndicate enquiry');
fetch(url,{method:'POST',body:d,headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw 0;f.reset();f.querySelectorAll('.field,.btn,.privacy').forEach(function(x){x.hidden=true});
st.className='status ok';st.textContent='Thank you. Your enquiry has been received and we will be in touch shortly.'})
.catch(function(){st.className='status bad';st.textContent='Sorry, something went wrong. Please try again or email us directly.';btn.disabled=false;btn.textContent='Submit Enquiry'})})});
})();