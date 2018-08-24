define(["require", "exports", "esri/Map", "esri/views/MapView"], function (require, exports, Map, MapView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var URL = "https://gis.glc.org/server/rest/services/ErieStat/ErieStat_WatershedsDemo/MapServer";
    var map = new Map({
        basemap: "hybrid"
    });
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
});
//# sourceMappingURL=main.js.map