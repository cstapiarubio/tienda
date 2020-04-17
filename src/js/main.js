$(document).ready(function() {
    console.log("pagina cargada");
});

/*mapa sucursales*/ 
var map;
function initMap(){
    map= new google.maps.Map(document.getElementById('map'), {
        center:{lat:-33.4316452,lng:-70.6457336},
        zoom:13
    });
}
    
