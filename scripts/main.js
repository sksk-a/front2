smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('mobile-open');
      btn.classList.toggle('open');
    });
  }


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target){
          target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        
        if(nav && nav.classList.contains('mobile-open')) nav.classList.remove('mobile-open');
      }
    });
  });
});
