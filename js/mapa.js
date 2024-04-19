const map = L.map('map');

map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap'
}).addTo(map);

let marker, circle, zoomed;

navigator.geolocation.watchPosition(success, error);
function success(pos) {

	const lat = pos.coords.latitude;
	const lng = pos.coords.longitude;
	const accuracy = pos.coords.accuracy;

	if (marker) {
		map.removeLayer(marker);
		map.removeLayer(circle);
	}

	marker = L.marker([lat, lng]).addTo(map);
	circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

	if (!zoomed) {
		zoomed = map.fitBounds(circle.getBounds());
	}

	map.setView([lat, lng]);
	return;
}
function error(err) {

	if (err.code === 1) {
		alert("Please allow geolocation access");
	} else {
		alert("Cannot get current location");
	}
}



document.getElementById('btn').addEventListener('click', searchLocation);
function searchLocation() {

	const lat = parseFloat(document.getElementById('latitude').value);
	const lng = parseFloat(document.getElementById('longitude').value);

	if (marker) {
		map.removeLayer(marker);
		map.removeLayer(circle);
	}

	marker = L.marker([lat, lng]).addTo(map);
	circle = L.circle([lat, lng], { radius: 5000 }).addTo(map);

	map.setView([lat, lng]);
}