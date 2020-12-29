function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 44.759168,
      lng: 20.263687,
    },
    zoom: 15,
    mapTypeId: "hybrid",
  });

  marker = new google.maps.Marker({
    position: {
      lat: 44.759168,
      lng: 20.263687,
    },
    map: map,
  });
}
