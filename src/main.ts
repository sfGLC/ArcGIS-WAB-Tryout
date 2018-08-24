import Map = require("esri/Map");
import FeatureLayer = require("esri/layers/FeatureLayer");
import MapView = require("esri/views/MapView");

const URL = "https://gis.glc.org/server/rest/services/ErieStat/ErieStat_WatershedsDemo/MapServer"

const map = new Map({
    basemap: "hybrid"
});

const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [-118.244, 34.052],
    zoom: 12
})