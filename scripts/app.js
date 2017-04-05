// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
   $.ajax( {
    method: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson" , 
    dataType: "json",
    success: onSuccess
  });   // ajax
});  // doc on ready
  function onSuccess(responseData) {
    // console.log(responseData);

    var output = responseData.features;
    output.forEach(function(item, index) {
    	var newOutput = output[index].properties.title;
    	$("#info").append('<p>' + newOutput + '</p>');
    	var findLatLng = output[index].geometry.coordinates;
    	console.log(findLatLng);
    })
    // [0].properties.title;
    // for each (var in output) {
}; 




function makeMap (findLatLng) {
	var myLatLng = findLatLng;

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  zoom: 8
	});
	var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'San Fran!'
        });
}
google.maps.event.addDomListener(window, 'load', initMap);
}

var sfLatLng = {lat: 37.78, lng: -122.44};
makeMap(sfLatLng);

