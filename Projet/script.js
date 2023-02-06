let map;

window.addEventListener("load", async function () {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY3YwNiIsImEiOiJjajg2MmpzYjcwbWdnMzNsc2NzM2l4eW0yIn0.TfDJipR5II7orUZaC848YA";
    PositionActuelle();
});

function PositionActuelle() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  navigator.geolocation.getCurrentPosition(valid, error, options);
}

async function valid(position) {
  const crd = position.coords;
  const MaPosition = new mapboxgl.Popup().setText("Votre Position");

  
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [crd.longitude, crd.latitude],
      zoom: 13,
    });


    let MarkerPosActuelle = new mapboxgl.Marker({ color: "#FF0000" })
      .setLngLat([crd.longitude, crd.latitude])
      .addTo(map)
      .setPopup(MaPosition);

      MarkerPosActuelle.getElement().addEventListener("mouseenter", function () {
        MarkerPosActuelle.togglePopup();
    });

    MarkerPosActuelle.getElement().addEventListener("mouseleave", function () {
      MarkerPosActuelle.togglePopup();
    });

    ListAttraction().forEach((siteAttrac) => {
      let NameAttraction = new mapboxgl.Popup().setText(siteAttrac.name);
      let MarkerLieuxAttrac = new mapboxgl.Marker({ color: "#0000ff" })
        .setLngLat([siteAttrac.siteAttrac.lon, siteAttrac.siteAttrac.lat])
        .addTo(map)
        .setPopup(NameAttraction);
        


      MarkerLieuxAttrac.getElement().addEventListener("click", function () {
        itineraire([crd.longitude, crd.latitude], [siteAttrac.siteAttrac.lon, siteAttrac.siteAttrac.lat]);
      });
    });

    //Map Texture 3d
    map.on('style.load', () => {
      
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;
       

      map.addLayer(
      {
      'id': 'add-3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
      'fill-extrusion-color': '#aaa',
       

        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      },
        labelLayerId
      );
    });
  
}

async function itineraire(debut, fin) {
  map.on("load", () => {
    map.addLayer({
      id: "point",
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: debut,
              },
            },
          ],
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#3887be",
      },
    });
  });

  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${debut[0]},${debut[1]};${fin[0]},${fin[1]}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiY3YwNiIsImEiOiJjajg2MmpzYjcwbWdnMzNsc2NzM2l4eW0yIn0.TfDJipR5II7orUZaC848YA`,
    { method: "GET" }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };

  if (map.getSource("route")) {
    map.getSource("route").setData(geojson);
  } else {
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geojson,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#3399ff",
        "line-width": 5,
        "line-opacity": 0.75,
      },
    });
  }
}

function ListAttraction() {
  
  return [
    {
      name: "Mini World Côte d'azur",
      avis:  "4/5 étoiles" ,
      siteAttrac: { lat: 43.1374, lon: 5.9831 },
      
    },
    {
      name: "Parc Spirou Provence",
      siteAttrac: { lat: 44.0150824, lon: 4.9732554 },
      
    },
    {
      name: "Luna Park Fréjus",
      siteAttrac: { lat: 43.4329, lon: 6.7352 },
      
    },
    {
      name: "Disneyland Paris",
      siteAttrac: { lat: 48.8929, lon: 2.7967 },
      
    },
    {
      name: "Azur Park",
      siteAttrac: { lat: 43.26932, lon: 6.63981 },
      
    },
    
  ];

}

function error(err) {
  console.warn("ERREUR");
}


