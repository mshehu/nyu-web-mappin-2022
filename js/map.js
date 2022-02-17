
mapboxgl.accessToken =
'pk.eyJ1IjoibXRzaGVodSIsImEiOiJja3pxcWxhamUwNTZrMnZvdzV5ZGN6emQzIn0.NovLA1r6sNV2eZAHxt2UFA' ;

var mediterraneanSea = [19.149818037918454, 39.52530600087885]

var map = new mapboxgl.Map({
 container: 'mapContainer', // HTML container id
 style: 'mapbox://styles/mapbox/dark-v9', // style URL
 center: mediterraneanSea, // starting position as [lng, lat]
 zoom: 3,
 minZoom: 1,
 maxZoom: 14
});

  var pointsOfInterest = [
    {
    lngLat: [20.010330272236992, 39.873541606618055],
    popupHtml: 'Albania',
    subText: '#Ranked 1'
    },
    {
    lngLat: [25.428951754105817, 36.42091299369339],
    popupHtml: 'Greece',
    subText: '#Ranked 3'
    },
    {
    lngLat: [12.335117421300172, 45.47213516688911],
    popupHtml: 'Italy',
    subText: '#Ranked 2'
    },
]


pointsOfInterest.forEach(function(pointOfInterestItem) {
  var popup = new mapboxgl.Popup({offset: 40})
  .setHTML(`
    <h3>${pointOfInterestItem.popupHtml}</h3>
    <p>${pointOfInterestItem.subText}</p>
    `);

  new mapboxgl.Marker()
  .setLngLat(pointOfInterestItem.lngLat)
  .setPopup(popup)
  .addTo(map);
});
