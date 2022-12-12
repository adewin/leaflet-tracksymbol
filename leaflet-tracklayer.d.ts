import 'leaflet';
declare module 'leaflet' {
	class TrackLayer {
		private aislayer: L.FeatureGroup;

		addTrack(marker: TrackSymbol): void;

		removeTrack(marker: TrackSymbol): void;
		
		addTo(map: Map): void;
	}

	function trackLayer(): TrackLayer;
}
