$(document).ready(function() {
    min_value = [1165,0,0,0,0]; // Valores iniciales de 'left:' para cada card producto
    setInterval(rotarCarrilProductos,2000);

    function rotarCarrilProductos(){
        const MOVE = 233;
        
        $('#most-sold1').css('left',(min_value[0] -= MOVE) + 'px');
        $('#most-sold2').css('left',(min_value[1] -= MOVE) + 'px');
        $('#most-sold3').css('left',(min_value[2] -= MOVE) + 'px');
        $('#most-sold4').css('left',(min_value[3] -= MOVE) + 'px');
        $('#most-sold5').css('left',(min_value[4] -= MOVE) + 'px');
        
        if(min_value[0] <= 0){
            min_value[0] = 1165; 
        }
        if(min_value[1] <= -233){
            min_value[1] = 932;
        }
        if(min_value[2] <= -466){
            min_value[2] = 699;
        }
        if(min_value[3] <= -699){
            min_value[3] = 466;
        }
        if(min_value[4] <= -932){
            min_value[4] = 233;
        }
        
        /*if(!$('#most-sold-list').is(':hover')){
            // Objeto auxiliar para Intercambiarlo al final
            var product = {
                img: $('#most-sold1 img').attr('src'),
                description: $('#most-sold1 p').text(),
                price: $('#most-sold1 b').text(),
                stock: $('#most-sold1 i').text()
            };

            // reemplazando el de la izquierda
            for(var i=1; i<5 ; i++){
                $('#most-sold' + i + ' img').attr('src',$('#most-sold' + (i+1) + ' img').attr('src'));
                $('#most-sold' + i + ' p').text($('#most-sold' + (i+1) + ' p').text());
                $('#most-sold' + i + ' b').text($('#most-sold' + (i+1) + ' b').text());
                $('#most-sold' + i + ' i').text($('#most-sold' + (i+1) + ' i').text());
            }
            // reemplazando la el Producto 1 Salvado en 'product' en el Producto 5
            $('#most-sold5 img').attr('src',product.img);
            $('#most-sold5 p').text(product.description);
            $('#most-sold5 b').text(product.price);
            $('#most-sold5 i').text(product.stock);
        }*/
    }
});