function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.758663360782144,
            lng: 20.26395009829545
        },
        zoom: 15,
        mapTypeId: 'hybrid'
    });

    marker = new google.maps.Marker({
        position: {
            lat: 44.758663360782144,
            lng: 20.26395009829545
        },
        map: map
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<h2>Pansion "Simba"</h2>'
    });

    marker.addListener('mouseover', function () {
        infoWindow.open(map, marker);
    });
}