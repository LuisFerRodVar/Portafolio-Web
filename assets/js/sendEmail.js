const btn = document.getElementById('formBtn');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_yms435s';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviado';
      }, (err) => {
        btn.value = 'Error';
      });

    return false; // Agregar esta línea para evitar la recarga de la página
  });
