document.addEventListener('click', function(e){
  const card = e.target.closest('.project-card, .card');
  if(!card) return;
  
  const title = card.querySelector('h3') ? card.querySelector('h3').innerText : (card.querySelector('p') ? card.querySelector('p').innerText : 'Проект');
  alert('Открыть проект: ' + title);
});
