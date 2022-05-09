geojsonpublicOpts = {
  pointToLayer: function (feature, latlng) {
    var publicIcon = L.icon({
      iconSize: [27, 27],
      iconAnchor: [13, 27],
      popupAnchor: [1, -24],
      iconUrl: "../images/blue-circle.png",
    });

    return L.marker(latlng, { icon: publicIcon });
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<br/><b>Monitor Name:</b> &nbsp;" +
        feature.properties.name +
        "<br><b>County and State:</b> &nbsp;" +
        feature.properties.territory +
        "<br><b>Date Offline:</b> &nbsp;" +
        feature.properties.date_online +
        "&nbsp;<b>Date Offline:</b> &nbsp;" +
        feature.properties.date_offline +
        "<br/>" +
        "<br/>" +
        "<table>" +
        "<tr>" +
        '<th class="text-center"><b>Data Table</b></th>' +
        '<th class="text-center">Concentration Average</th>' +
        '<th class="text-center">Weather</th>' +
        '<th class="text-center">Graphs</th>' +
        "</tr>" +
        "<tr>" +
        "<td>Daily</td>" +
        "<td>Other</td>" +
        "<td>" +
        feature.properties.tempatures_gra +
        "</td>" +
        "<td>" +
        feature.properties.grafana +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Weakly</td>" +
        "<td>Other</td>" +
        "<td>" +
        feature.properties.humity_gra +
        "</td>" +
        "<td>Other</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Monthly</td>" +
        "<td>Other</td>" +
        "<td>Other</td>" +
        "<td>Other</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Yearly</td>" +
        "<td>Other</td>" +
        "<td>Other</td>" +
        "<td>" +
        feature.properties.graphs +
        "</td>" +
        "</tr>" +
        "</table>"
    );
  },
};

var publiclayer = L.layerGroup([
  L.geoJson(publicsites, geojsonpublicOpts),
]).addTo(map);

geojsonprivateOpts = {
  pointToLayer: function (feature, latlng) {
    var sourceIcon = L.icon({
      iconSize: [27, 27],
      iconAnchor: [13, 27],
      popupAnchor: [1, -24],
      iconUrl: "../images/orange-circle.png",
    });

    return L.marker(latlng, { icon: sourceIcon });
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<br/><b>Name:</b> &nbsp;" +
        feature.properties.name +
        "<br><b>Source Type:</b> &nbsp;" +
        feature.properties.variety +
        "<br><b>Status:</b> &nbsp;" +
        feature.properties.status +
        "<br><b>Operator:</b> &nbsp;" +
        feature.properties.operator +
        "<br><b>Spud Date:</b> &nbsp;" +
        feature.properties.date_spud +
        "&nbsp;<b>Shut-in Date:</b> &nbsp;" +
        feature.properties.date_shut_in +
        "<br><b>Location:</b> &nbsp;" +
        feature.properties.location +
        "<br/>" +
        "<br/>" +
        "<table>" +
        "<tr>" +
        '<th class="text-center">Casing Depths</th>' +
        '<th class="text-center">Leak Reports</th>' +
        '<th class="text-center">Other</th>' +
        "<tr>" +
        "<td>" +
        feature.properties.casing_depths +
        "</td>" +
        "<td>" +
        feature.properties.leak_reports +
        "</td>" +
        "<td>" +
        feature.properties.other +
        "</td>" +
        "</table>"
    );
  },
};

var sourcelayer = L.layerGroup([
  L.geoJson(privatesites, geojsonprivateOpts),
]).addTo(map);

function style(feature) {
  return {
    color: "black",
    weight: 2,
    opacity: 0.7,
    fill: true,
    fillColor: "maroon",
    fillOpacity: 0.3,
    smoothFactor: 0.5,
    dashArray: "5,5",
  };
}

function onEachFeature(feature, layer) {
  // feature.properties.popupContent is required for popup
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(
      "<br/><b>Name:</b> &nbsp;" +
        feature.properties.name +
        "<br><b>Address:</b> &nbsp;" +
        feature.properties.address +
        "<br><b>Date Opened:</b> &nbsp;" +
        feature.properties.date_open +
        "&nbsp;<b>Date Closed:</b> &nbsp;" +
        feature.properties.date_shut_down +
        "<br/>" +
        "<br/>" +
        "<table>" +
        "<tr>" +
        '<th class="text-center">data</th>' +
        '<th class="text-center">data</th>' +
        '<th class="text-center">data</th>' +
        "<tr>" +
        "<td>N/A</td>" +
        "<td>N/A</td>" +
        "<td>N/A</td>" +
        "</table>"
    );
  }
}

var boundarymarkers = L.geoJson(searcharea, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);
