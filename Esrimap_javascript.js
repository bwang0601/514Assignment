require(["esri/Map", "esri/views/SceneView"], function(
  Map,
  SceneView
) {
  const map = new Map({
    basemap: "streets-navigation-vector"
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    zoom: 10,
    camera: {
    position: [
       31.1343, // lon
       29.7829, // lat
      5000  // elevation in meters
    ],
    tilt: 75,
    heading: 0 
  }
  });
  
  view.watch('camera', function(r){
    console.log("camera ", r);
  })
  
  const EgyptString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 31.1343,
      latitude: 29.9829
    },
    popupTemplate: {
      title: "The Great Pyramid of Giza, Egypt",
      content: EgyptString
    }
  });
    const IcelandString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: -21.9394,
      latitude: 64.1466
    },
    popupTemplate: {
      title: "Reykjavik, Iceland",
      content: IcelandString
    }
  });
    const RussiaString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 37.6240,
      latitude: 55.7638
    },
    popupTemplate: {
      title: "Moscow, Russia",
      content: RussiaString
    }
  });
    const UKString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: -0.1282,
      latitude: 51.5105
    },
    popupTemplate: {
      title: "London, UK",
      content: UKString
    }
  });
    const SingaporeString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 103.8673,
      latitude: 1.3643
    },
    popupTemplate: {
      title: "Singapore, Singapore",
      content: SingaporeString
    }
  });
    const FranceString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 2.3477,
      latitude: 48.8576
    },
    popupTemplate: {
      title: "Paris, France",
      content: FranceString
    }
  });
    const IsraelString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 35.2343,
      latitude: 31.7781
    },
    popupTemplate: {
      title: "Jerusalem, Israel",
      content: IsraelString
    }
  });
    const ItalyString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 12.4794,
      latitude: 41.9054
    },
    popupTemplate: {
      title: "Rome, Italy",
      content: ItalyString
    }
  });
    const GermanyString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 13.4034,
      latitude: 52.5171
    },
    popupTemplate: {
      title: "Berling, Germany",
      content: GermanyString
    }
  });
    const DubaiString = ""; 
  view.graphics.add({
    symbol: {
      type: "simple-marker",
        color: "#7A003C",
    },
    geometry:{
      type: "point",
      longitude: 54.9883,
      latitude: 25.0089
    },
    popupTemplate: {
      title: "Dubai, United Arab Emirates",
      content: DubaiString
    }
  });
});
 
