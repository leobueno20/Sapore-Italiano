function handleWhatsAppButtonClick(event) {
    var button = event.currentTarget;
    var message = encodeURIComponent(button.getAttribute('data-message'));
    var phoneNumber = '+14999020960'; // Substitua pelo número de telefone desejado

    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + message;
    window.location.href = whatsappLink;
  }

  // Adiciona o ouvinte de eventos a todos os botões com a classe whatsappButton
  var buttons = document.querySelectorAll('.whatsappButton');
  buttons.forEach(function(button) {
    button.addEventListener('click', handleWhatsAppButtonClick);
  });