<script>
	import {transition_smoother, website} from "$lib/modules/data.js";
	import {blur, fly, slide} from 'svelte/transition';
	import {onMount} from "svelte";
	import {quintOut} from "svelte/easing";

	let mounted = false;
	let map;
	let marker;
	let searchBox;
	let selectedLocation = {lat: 0, lng: 0};

	onMount(() => {
		mounted = true;
		initMap();
	});

	function initMap() {
		if (typeof google === 'undefined') {
			setTimeout(initMap, 100);
			return;
		}

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 0, lng: 0},
			zoom: 2,
			mapTypeId: google.maps.MapTypeId.HYBRID,
			mapTypeControl: true
		});

		// Create the search box and link it to the UI element.
		const input = document.getElementById("pac-input");
		searchBox = new google.maps.places.SearchBox(input);

		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		// Bias the SearchBox results towards current map's viewport.
		map.addListener("bounds_changed", () => {
			searchBox.setBounds(map.getBounds());
		});

		// Listen for the event fired when the user selects a prediction and retrieve
		// more details for that place.
		searchBox.addListener("places_changed", () => {
			const places = searchBox.getPlaces();

			if (places.length == 0) {
				return;
			}

			// For each place, get the icon, name and location.
			const bounds = new google.maps.LatLngBounds();
			places.forEach((place) => {
				if (!place.geometry || !place.geometry.location) {
					console.log("Returned place contains no geometry");
					return;
				}

				updateMarker(place.geometry.location);

				if (place.geometry.viewport) {
					// Only geocodes have viewport.
					bounds.union(place.geometry.viewport);
				} else {
					bounds.extend(place.geometry.location);
				}
			});
			map.fitBounds(bounds);
		});

		// Add click listener to map
		map.addListener("click", (mapsMouseEvent) => {
			updateMarker(mapsMouseEvent.latLng);
		});

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
					(position) => {
						const pos = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};

						updateMarker(pos);
						map.setCenter(pos);
						map.setZoom(15);
					},
					() => {
						handleLocationError(true, map.getCenter());
					}
			);
		} else {
			handleLocationError(false, map.getCenter());
		}
	}

	function updateMarker(location) {
		if (marker) {
			marker.setMap(null);
		}
		marker = new google.maps.Marker({
			position: location,
			map: map,
			title: 'Selected Location'
		});
		selectedLocation = {lat: location.lat(), lng: location.lng()};
	}

	function handleLocationError(browserHasGeolocation, pos) {
		console.error(browserHasGeolocation ?
				'Error: The Geolocation service failed.' :
				'Error: Your browser doesn\'t support geolocation.');
	}

	function getDirections() {
		const url = `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`;
		window.open(url, '_blank');
	}
</script>

<svelte:head>
	<title>Select Location</title>
	<meta name="description" content="Select your current location"/>
	<script async
			src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHEz2_m2AhRNZUtQLgvvZzsZ8AThFre7Q&libraries=places">
	</script>
	<style>
		#map {
			height: 400px;
			width: 100%;
		}

		#pac-input {
			background-color: #fff;
			font-family: Roboto;
			font-size: 15px;
			font-weight: 300;
			margin-left: 12px;
			padding: 0 11px 0 13px;
			text-overflow: ellipsis;
			width: 400px;
			margin-top: 10px;
		}
	</style>
</svelte:head>

<div class="flex flex-col justify-center gap-10">
	{#if mounted}
		<div transition:blur={{ duration: 1000, delay: 1000, easing: quintOut }}
			 class="mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 rounded-full flex flex-row justify-center">
			<div class="{transition_smoother} mx-auto font-bold text-2xl text-center {website.dark_text} hover:{website.dark_text_hover}">
				Select your current location
			</div>
		</div>
	{/if}
	<input id="pac-input" class="controls" type="text" placeholder="Search Box"/>
	<div id="map"></div>
	{#if mounted}
		<div transition:fly={{ duration: 1000, delay: 500, easing: quintOut }}
			 class="{website.dark_bg} hover:{website.dark_bg_hover} mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-gray-100 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">Your location has been selected</div>
		</div>
	{/if}
	{#if mounted}
		<button on:click={getDirections}
				transition:slide={{ duration: 1000, delay: 300, easing: quintOut }}
				class="{website.dark_bg} hover:{website.dark_bg_hover} mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-gray-100 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">Get Directions</div>
		</button>
	{/if}
</div>