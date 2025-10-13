document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    if(!form.checkValidity()){
      e.preventDefault();
      alert('Пожалуйста, заполните форму корректно.');
    } else {
      e.preventDefault();
      alert('Спасибо! Сообщение отправлено (демо).');
      form.reset();
    }
  });
});
