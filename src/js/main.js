$(document).ready(function() {
    console.log("pagina cargada");
    
    $(function() {
      // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
      $(document).scroll(function() {
        // aca se pregunta si el scroll se movio para abajo.
        if ($(this).scrollTop() > 1) { 
          $('#logo img').css('width', '100px');
          $('#contact-div').hide();
          $('#logo h2').css('font-size', '18px');
        }
        if ($(this).scrollTop() < 1) {
          $('#logo img').css('width', '120px');
          $('#contact-div').show();
          $('#logo h2').css('font-size', '30px');
        }
      });
    });
});


    
