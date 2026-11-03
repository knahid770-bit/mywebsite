/* ===== FORM CONFIGURATION =====
   Option A (FormSubmit): set OWNER_EMAIL to the address that should receive enquiries.
   Option B (any other service, e.g. Formspree): set FORM_ENDPOINT to its full URL.
   Leave both empty and the form honestly reports it is not configured. */
var OWNER_EMAIL='';   // e.g. 'owner@yourdomain.com'
var FORM_ENDPOINT=''; // e.g. 'https://formspree.io/f/xxxxxxx'
(function(){
var f=document.getElementById('form'),st=document.getElementById('status'),btn=document.getElementById('submit');
var rules={name:function(v){return v.trim().length>1||'Please enter your full name.'},
email:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())||'Please enter a valid email address.'},
phone:function(v){return (/^[+()\d\s.-]{7,20}$/.test(v.trim())&&v.replace(/\D/g,'').length>=7)||'Please enter a valid phone number.'}};
function check(k){var i=f.elements[k],r=rules[k](i.value),e=document.getElementById(k+'-err');
i.setAttribute('aria-invalid',r!==true);e.textContent=r===true?'':r;return r===true}
Object.keys(rules).forEach(function(k){f.elements[k].addEventListener('blur',function(){check(k)})});
f.addEventListener('submit',function(ev){ev.preventDefault();st.className='status';st.textContent='';
var ok=Object.keys(rules).map(check).every(Boolean);
if(!ok){f.querySelector('[aria-invalid=true]').focus();return}
if(f.elements._honey.value){st.className='status ok';st.textContent='Thank you.';f.reset();return}
var url=FORM_ENDPOINT||(OWNER_EMAIL?'https://formsubmit.co/ajax/'+encodeURIComponent(OWNER_EMAIL):'');
if(!url){st.className='status bad';st.textContent='This form is not yet connected to an email service. See README.md.';return}
btn.disabled=true;btn.textContent='Sending…';
var d=new FormData(f);d.append('_subject','New syndicate enquiry');
fetch(url,{method:'POST',body:d,headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw 0;
f.reset();f.querySelectorAll('.field,.btn,.privacy').forEach(function(x){x.hidden=true});
st.className='status ok';st.textContent='Thank you. Your enquiry has been received and we will be in touch shortly.'})
.catch(function(){st.className='status bad';st.textContent='Sorry, something went wrong. Please try again or email us directly.';btn.disabled=false;btn.textContent='Submit Enquiry'})});
})();
