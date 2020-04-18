$(document).ready(function() {
    console.log("pagina cargada");

    $('.card').hover(
        function(){
            $(this).children('img').css('transform','scale(1.10)');
        },
        function(){
            $(this).children('img').css('transform','scale(1)');
        },
    );
});