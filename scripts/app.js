// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
   $.ajax( {
    method: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson" , 
    dataType: "json",
    success: onSuccess
  });   // ajax
});  // document on ready

function onSuccess(responseData) {
	var output = responseData.features;
	// coordinates starts with SF coordinates
	var coord = [{lat: 37.78, lng: -122.44}]; 
	output.forEach(function(item, index) {
		var newOutput = output[index].properties.title;
		$("#info").append('<p>' + newOutput + '</p>');
		var findLatLng = output[index].geometry.coordinates;
		console.log(findLatLng);
		// now take data coordinates in array, reverse order, and put into object
		var arrLatLong = {} ;
		arrLatLong['lat'] = output[index].geometry.coordinates[1];
		arrLatLong['lng'] = output[index].geometry.coordinates[0];
		coord.push(arrLatLong) ;
	})   // output.forEach
} // onSuccess

var sfLatLng = {lat: 37.78, lng: -122.44};
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: sfLatLng,
	  zoom: 8
	});  // google.maps

 	var marker = new google.maps.Marker({
      position: sfLatLng,
      map: map,
      title: 'Hello World!'
	});   // marker
}    // initMap
google.maps.event.addDomListener(window, 'load', initMap);
// }
