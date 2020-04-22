$(document).ready(function() {
    $('#most-sold-list').hover(
        function(){
            $(this).children().css('animation-play-state','paused');
        },
        function(){
            $(this).children().css('animation-play-state','running');
        },
    );
});