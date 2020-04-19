/*mapa sucursales*/ 
var map;
function initMap(){
    map= new google.maps.Map(document.getElementById('map'), {
        center:{lat:-33.4316452,lng:-70.6457336},
        zoom:18
    });

    var marker = new google.maps.Marker({
        position: {lat:-33.4316452,lng:-70.6457336},
        map : map
    })
}