$(document).ready(function() {
    $('.card').hover(
        function(){
            $(this).children('img').css('transform','scale(1.10)');
        },
        function(){
            $(this).children('img').css('transform','scale(1)');
        },
    );
});