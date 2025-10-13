document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.project-card');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c=>{
        if(f==='all' || c.dataset.type===f) c.style.display='';
        else c.style.display='none';
      });
    });
  });
});
