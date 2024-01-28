const btn = document.getElementById('formBtn');
var form = document.getElementById ("form");
var formData = new FormData (form);

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';



    Email.send({
      SecureToken : "e810590b-d480-4f9e-87e1-2111667cb4a0",
      To : 'luisferrodvar@gmail.com',
      From : "portafoliowebb@gmail.com",
      Subject : formData.get('subject') + formData.get('name'),
      Body : formData.get('message') + 'email: ' + formData.get('email')
  }).then(
    message =>  console.log(message)
  );
    return false; // Agregar esta línea para evitar la recarga de la página
  });
