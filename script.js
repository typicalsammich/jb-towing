const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.navlinks');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
const mobileCall=document.querySelector('.mobile-call');
const toggleCall=()=>{ if(!mobileCall)return; mobileCall.classList.toggle('show',window.scrollY>150); };
window.addEventListener('scroll',toggleCall,{passive:true}); toggleCall();
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
