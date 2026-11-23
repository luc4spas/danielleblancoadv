
(() => {
 const menu=document.querySelector('.menu-btn'), links=document.querySelector('.navlinks');
 if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
 const els=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});els.forEach(el=>io.observe(el));}else{els.forEach(el=>el.classList.add('visible'));}
 const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
 const form=document.querySelector('[data-whatsapp-form]');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Olá, Dra. Danielle. Meu nome é ${d.get('nome')}. Gostaria de informações sobre ${d.get('assunto')}. ${d.get('mensagem')||''}`;window.open('https://wa.me/5522996099400?text='+encodeURIComponent(msg),'_blank','noopener');});}
})();
