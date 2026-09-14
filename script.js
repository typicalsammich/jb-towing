const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.navlinks');
const closeMenu=()=>{nav?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')};
menuBtn?.setAttribute('aria-expanded','false');
menuBtn?.addEventListener('click',()=>{
  const open=nav?.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(Boolean(open)));
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.addEventListener('click',e=>{if(nav?.classList.contains('open')&&!nav.contains(e.target)&&!menuBtn?.contains(e.target))closeMenu()});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',closeMenu));

const mobileCall=document.querySelector('.mobile-call');
const toggleCall=()=>{if(!mobileCall)return;mobileCall.classList.toggle('show',window.scrollY>150)};
window.addEventListener('scroll',toggleCall,{passive:true});
toggleCall();
