var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_fires_unique_2020_1 = new ol.format.GeoJSON();
var features_fires_unique_2020_1 = format_fires_unique_2020_1.readFeatures(json_fires_unique_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fires_unique_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fires_unique_2020_1.addFeatures(features_fires_unique_2020_1);
var lyr_fires_unique_2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fires_unique_2020_1, 
                style: style_fires_unique_2020_1,
                interactive: true,
    title: 'fires_unique_2020<br />\
    <img src="styles/legend/fires_unique_2020_1_0.png" /> 0<br />\
    <img src="styles/legend/fires_unique_2020_1_1.png" /> 1<br />'
        });
var format_rosleshoz_unique_2020_2 = new ol.format.GeoJSON();
var features_rosleshoz_unique_2020_2 = format_rosleshoz_unique_2020_2.readFeatures(json_rosleshoz_unique_2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rosleshoz_unique_2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rosleshoz_unique_2020_2.addFeatures(features_rosleshoz_unique_2020_2);
var lyr_rosleshoz_unique_2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rosleshoz_unique_2020_2, 
                style: style_rosleshoz_unique_2020_2,
                interactive: true,
    title: 'rosleshoz_unique_2020<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_0.png" /> Закрыт решением КЧС (в зоне контроля)<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_1.png" /> Земли иных категорий<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_2.png" /> Земли лесного фонда<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_3.png" /> Земли ООПТ<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_4.png" /> Земли сельзхоз назначений<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_5.png" /> Не обнаружен<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_6.png" /> Профвыжигание<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_7.png" /> Сжигание поруб. остатков<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_8.png" /> Техногенный объект<br />\
    <img src="styles/legend/rosleshoz_unique_2020_2_9.png" /> <br />'
        });

lyr_googlehybrid_0.setVisible(true);lyr_fires_unique_2020_1.setVisible(true);lyr_rosleshoz_unique_2020_2.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_fires_unique_2020_1,lyr_rosleshoz_unique_2020_2];
lyr_fires_unique_2020_1.set('fieldAliases', {'fire_id': 'fire_id', 'dt': 'dt', 'lat': 'lat', 'lon': 'lon', 'area': 'area', 'since': 'since', 'id': 'id', 'year': 'year', 'date_start': 'date_start', 'centroid': 'centroid', 'in_data': 'in_data', });
lyr_rosleshoz_unique_2020_2.set('fieldAliases', {'code': 'code', 'f': 'f', 'f_norm': 'f_norm', 'date_diff': 'date_diff', 'distance': 'distance', 'in': 'in', 'fire_id': 'fire_id', 'unique_id': 'unique_id', 'date_start': 'date_start', 'year': 'year', 'lon': 'lon', 'lat': 'lat', 'ps': 'ps', 'ps2': 'ps2', });
lyr_fires_unique_2020_1.set('fieldImages', {'fire_id': 'Range', 'dt': 'DateTime', 'lat': 'TextEdit', 'lon': 'TextEdit', 'area': 'TextEdit', 'since': 'DateTime', 'id': 'Range', 'year': 'Range', 'date_start': 'DateTime', 'centroid': 'TextEdit', 'in_data': 'TextEdit', });
lyr_rosleshoz_unique_2020_2.set('fieldImages', {'code': 'TextEdit', 'f': 'TextEdit', 'f_norm': 'TextEdit', 'date_diff': 'Range', 'distance': 'TextEdit', 'in': 'Range', 'fire_id': 'Range', 'unique_id': 'Range', 'date_start': 'DateTime', 'year': 'Range', 'lon': 'TextEdit', 'lat': 'TextEdit', 'ps': 'TextEdit', 'ps2': 'TextEdit', });
lyr_fires_unique_2020_1.set('fieldLabels', {'fire_id': 'inline label', 'dt': 'no label', 'lat': 'no label', 'lon': 'no label', 'area': 'no label', 'since': 'no label', 'id': 'inline label', 'year': 'no label', 'date_start': 'no label', 'centroid': 'no label', 'in_data': 'no label', });
lyr_rosleshoz_unique_2020_2.set('fieldLabels', {'code': 'inline label', 'f': 'inline label', 'f_norm': 'inline label', 'date_diff': 'inline label', 'distance': 'inline label', 'in': 'inline label', 'fire_id': 'inline label', 'unique_id': 'inline label', 'date_start': 'inline label', 'year': 'inline label', 'lon': 'no label', 'lat': 'no label', 'ps': 'no label', 'ps2': 'no label', });
lyr_rosleshoz_unique_2020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});