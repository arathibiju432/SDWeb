var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tartu_city_districts_edu_1 = new ol.format.GeoJSON();
var features_tartu_city_districts_edu_1 = format_tartu_city_districts_edu_1.readFeatures(json_tartu_city_districts_edu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tartu_city_districts_edu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tartu_city_districts_edu_1.addFeatures(features_tartu_city_districts_edu_1);
var lyr_tartu_city_districts_edu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tartu_city_districts_edu_1, 
                style: style_tartu_city_districts_edu_1,
                popuplayertitle: "tartu_city_districts_edu",
                interactive: true,
    title: 'tartu_city_districts_edu<br />\
    <img src="styles/legend/tartu_city_districts_edu_1_0.png" /> 15 - 33<br />\
    <img src="styles/legend/tartu_city_districts_edu_1_1.png" /> 33 - 75<br />\
    <img src="styles/legend/tartu_city_districts_edu_1_2.png" /> 75 - 143<br />\
    <img src="styles/legend/tartu_city_districts_edu_1_3.png" /> 143 - 299<br />\
    <img src="styles/legend/tartu_city_districts_edu_1_4.png" /> 299 - 427<br />'
        });
var format_tartu_city_celltowers_edu_2 = new ol.format.GeoJSON();
var features_tartu_city_celltowers_edu_2 = format_tartu_city_celltowers_edu_2.readFeatures(json_tartu_city_celltowers_edu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tartu_city_celltowers_edu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tartu_city_celltowers_edu_2.addFeatures(features_tartu_city_celltowers_edu_2);cluster_tartu_city_celltowers_edu_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_tartu_city_celltowers_edu_2
});
var lyr_tartu_city_celltowers_edu_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_tartu_city_celltowers_edu_2, 
                style: style_tartu_city_celltowers_edu_2,
                popuplayertitle: "tartu_city_celltowers_edu",
                interactive: true,
                title: '<img src="styles/legend/tartu_city_celltowers_edu_2.png" /> tartu_city_celltowers_edu'
            });

lyr_OSMStandard_0.setVisible(true);lyr_tartu_city_districts_edu_1.setVisible(true);lyr_tartu_city_celltowers_edu_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_tartu_city_districts_edu_1,lyr_tartu_city_celltowers_edu_2];
lyr_tartu_city_districts_edu_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NIMI': 'NIMI', 'TOWERS': 'TOWERS', });
lyr_tartu_city_celltowers_edu_2.set('fieldAliases', {'radio': 'radio', 'mcc': 'mcc', 'net': 'net', 'area': 'area', 'cell': 'cell', 'lon': 'lon', 'lat': 'lat', 'range': 'range', 'samples': 'samples', });
lyr_tartu_city_districts_edu_1.set('fieldImages', {'OBJECTID': 'Range', 'NIMI': 'TextEdit', 'TOWERS': 'TextEdit', });
lyr_tartu_city_celltowers_edu_2.set('fieldImages', {'radio': '', 'mcc': '', 'net': '', 'area': '', 'cell': '', 'lon': '', 'lat': '', 'range': '', 'samples': '', });
lyr_tartu_city_districts_edu_1.set('fieldLabels', {'OBJECTID': 'no label', 'NIMI': 'header label - always visible', 'TOWERS': 'no label', });
lyr_tartu_city_celltowers_edu_2.set('fieldLabels', {'radio': 'no label', 'mcc': 'no label', 'net': 'no label', 'area': 'no label', 'cell': 'header label - always visible', 'lon': 'no label', 'lat': 'no label', 'range': 'no label', 'samples': 'no label', });
lyr_tartu_city_celltowers_edu_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});