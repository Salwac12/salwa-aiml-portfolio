(function(){
  'use strict';
  const toggle=document.querySelector('[data-nav-toggle]');const nav=document.querySelector('[data-nav]');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}},{threshold:0.10});items.forEach(el=>observer.observe(el));} else items.forEach(el=>el.classList.add('visible'));
  const filters=document.querySelectorAll('[data-filter]');const projects=document.querySelectorAll('[data-category]');
  filters.forEach(btn=>btn.addEventListener('click',()=>{const selected=btn.dataset.filter;filters.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));projects.forEach(p=>{p.hidden=selected!=='all'&&p.dataset.category!==selected});}));
  const copy=document.querySelector('[data-copy-email]');
  if(copy){copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('salwatc07@gmail.com');const old=copy.textContent;copy.textContent='Copied ✓';setTimeout(()=>copy.textContent=old,2200)}catch{window.location.href='mailto:salwatc07@gmail.com';}})}
})();
