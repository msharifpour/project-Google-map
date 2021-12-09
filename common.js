

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.23833238,
            lng: -118.523664572
        },
        zoom: 16, //15.8,
        gestureHandling: "none",
        disableDefaultUI: true,
        clickableIcons: false,
        zoomControl: false,

    });

    map.addListener("dblclick", e => {
        const geoCoder = new google.maps.Geocoder();
        geoCoder.geocode({
            latLng: e.latLng
        }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                console.log('results from geocode api: ', results);
            }


        });

        var resultPath = google.maps.geometry.rectangle.containsLocation(e.LatLng, rectangle) ?
          "m 0 -1 l 1 2 02 0 z":
          google.maps.SymbolPath.Rectangle;


        var rectangle = new google.maps.Rectangle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            bounds: {
                north: 34.241,
                south: 34.242,
                east: -118.528,
                west: -118.53
            }
        });


        var resultColor = google.maps.geometry.containsLocation(e.latLng, rectangle) ?
          'green' :
          'red';
    });

/*
var bermudaTriangle = new google.maps.Polygon({paths: triangleCoords});

       google.maps.event.addListener(map, 'click', function(e) {
         var resultColor =
             google.maps.geometry.poly.containsLocation(e.latLng, bermudaTriangle) ?
             'blue' :
             'red';

         var resultPath =
             google.maps.geometry.poly.containsLocation(e.latLng, bermudaTriangle) ?
             // A triangle.
             "m 0 -1 l 1 2 -2 0 z" :
             google.maps.SymbolPath.CIRCLE;

*/


    // };
    //  generate list of possible CSUN locations
    const listOfPlaces = ["Where is Bayramian Hall", "Where is the Student Recreation Center", "Where is Jacaranda Hall", "Where is Juniper Hall", "Where is Redwood Hall", "Where is Matador Bookstore"];
    listOfPlaces.sort(() => 0.5 - Math.random());
    const currentQuestions = listOfPlaces.slice(0, 5);
    const currentQuestionIndex = 0;
    console.log('five selected questions', currentQuestions);
    document.getElementById("instructions").innerHTML += `<p>${currentQuestions[currentQuestionIndex]}</p>`;


}
