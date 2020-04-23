$(document).ready(function() {
    console.log("pagina cargada");
    
    $(function() {
      // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
      $(document).scroll(function() {
        // aca se pregunta si el scroll se movio para abajo.
        if ($(this).scrollTop() > 1) { 
          $('#logo img').css('width', '20%');
          $('#contact-div').hide();
        }
        if ($(this).scrollTop() < 1) {
          $('#logo img').css('width', '40%');
          $('#contact-div').show();
        }
      });
    });
});

    
