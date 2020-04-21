$(document).ready(function() {
    min_value = [1165,0,0,0,0];             // Valores iniciales de 'left:' para cada card producto
    setInterval(rotarCarrilProductos,2000); // ejecuta rotarCarrilProducto() cada 2 segundos

    function rotarCarrilProductos(){      
        if(!$('#most-sold-list').is(':hover')){
            const MOVE = 233;                   // distancia en px entre cards
           
            for(var i=1; i<=5; i++){
                if($('#most-sold' + i).attr('data-animation') == 'no')
                    $('#most-sold' + i).attr('data-animation','yes');
            }

            if(min_value[0] <= 0){
                $('#most-sold1').attr('data-animation','no');
                min_value[0] = 1165; 
            }            
            if(min_value[1] <= -233){
                $('#most-sold2').attr('data-animation','no');
                min_value[1] = 932; 
            }           
            if(min_value[2] <= -466){
                $('#most-sold3').attr('data-animation','no');
                min_value[2] = 699;
            }            
            if(min_value[3] <= -699){
                $('#most-sold4').attr('data-animation','no');
                min_value[3] = 466;  
            }         
            if(min_value[4] <= -932){
                $('#most-sold5').attr('data-animation','no');
                min_value[4] = 233;
            }

            $('#most-sold1').css('left',(min_value[0] -= MOVE) + 'px');
            $('#most-sold2').css('left',(min_value[1] -= MOVE) + 'px');
            $('#most-sold3').css('left',(min_value[2] -= MOVE) + 'px');
            $('#most-sold4').css('left',(min_value[3] -= MOVE) + 'px');
            $('#most-sold5').css('left',(min_value[4] -= MOVE) + 'px');
                      
        }
    }
});