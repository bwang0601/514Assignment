require([
      "esri/Map",
      "esri/views/SceneView"
    ], function(Map, SceneView) {

      const map = new Map({
        basemap: "hybrid",
        ground: "world-elevation"
      });

     const view = new SceneView({
        container: "viewDiv",
        map: map,
        scale: 500000000,
        center: [37.62, 53.22]
      });
	  
  view.watch('camera', function(r){
    console.log("camera ", r);
  })
  const EgyptString = "<h3>I would like to see the pyramids, the sphinx, and the tombs of the pharaohs. The Great Pyramid of Giza also known as the Pyramid of Khufu or the Pyramid of Cheops is the oldest and largest of the three pyramids in the Giza pyramid complex bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.</h3><img src= 'https://www.sciencenews.org/sites/default/files/2017/11/main/articles/110117_MT_great-pyramid_main_FREE.jpg'>"; 
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
    const IcelandString = "<h3>You can see spectacular auroras in Iceland. An aurora is a natural light display in the Earths sky, predominantly seen in the high-latitude regions</h3><img src= 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/35149/SITours/classic-northern-lights-tour-from-reykjavik-with-live-guide-and-touch-in-reykjavik-472229.jpg'>"; 
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
    const RussiaString = "<h3>I want to visit the red square and the largest Orthodox church.</h3><img src= 'https://blog.radissonblu.com/wp-content/uploads/2016/11/Moscow-Red-Square-St-Basils-Cathedral-and-Spasskaya-Tower.jpg'>"; 
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
    const UKString = "<h3>London is the capital and largest city of both England and the United Kingdom. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia.</h3><img src= 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/10/11/Future-London.jpg?w968'>"; 
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
    const SingaporeString = "<h3>The film Crazy Rich Asians introduced Singapore to more Americans, I know Singapore for a long time, but never have a chance to visit.</h3><img src= 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Falexcapri%2Ffiles%2F2018%2F09%2FSingapore-1200x800.jpg'>"; 
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
    const FranceString = "<h3>The Eiffel Tower constructed from 1887–1889 as the entrance to the 1889 Worlds Fair, it was initially criticised by some of Frances leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world.</h3><img src= 'https://odis.homeaway.com/odis/destination/813dfd25-7a08-4eef-a489-58bcb071f03d.hw1.jpg'>"; 
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
    const IsraelString = "<h3>Jerusalem the city described in the Bible, makes me want to know more history about this city.</h3><img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Israel-2013%282%29-Aerial-Jerusalem-Temple_Mount-Temple_Mount_%28south_exposure%29.jpg/1280px-Israel-2013%282%29-Aerial-Jerusalem-Temple_Mount-Temple_Mount_%28south_exposure%29.jpg'>"; 
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
    const ItalyString = "<h3>The Colosseum or Coliseum is an oval amphitheater in the center of the city of Rome, Italy.</h3><img src= 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/ef/4b/skip-the-line-ancient.jpg'>"; 
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
    const GermanyString = "<h3>Berlin is a world city of culture, politics, media, and science. Its economy is based on high-tech firms and the service sector, encompassing a diverse range of creative industries, research facilities, media corporations, and convention venues.</h3><img src= 'https://www.leboat.ca/sites/default/files/styles/lbt_imgstyle_gallery_lg/public/images/gallery/berlin_city_germany_glg.jpg?itok=dvUijEQq&timestamp=1524062142'>"; 
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
      title: "Berlin, Germany",
      content: GermanyString
    }
  });
    const DubaiString = "<h3>Dubai is the largest and most populous city in the United Arab Emirates. On the southeast coast of the Persian Gulf, it is the capital of the Emirate of Dubai, one of the seven emirates that make up the country.</h3><img src= 'http://www.travelstart.co.za/blog/wp-content/uploads/2018/05/burjkhalifa.jpg'>"; 
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
