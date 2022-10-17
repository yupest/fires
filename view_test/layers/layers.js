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
var format_localities_1 = new ol.format.GeoJSON();
var features_localities_1 = format_localities_1.readFeatures(json_localities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localities_1.addFeatures(features_localities_1);
var lyr_localities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localities_1, 
                style: style_localities_1,
                interactive: true,
                title: '<img src="styles/legend/localities_1.png" /> localities копия'
            });
var format_FIRMS_NASAinregion_2 = new ol.format.GeoJSON();
var features_FIRMS_NASAinregion_2 = format_FIRMS_NASAinregion_2.readFeatures(json_FIRMS_NASAinregion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIRMS_NASAinregion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIRMS_NASAinregion_2.addFeatures(features_FIRMS_NASAinregion_2);
var lyr_FIRMS_NASAinregion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FIRMS_NASAinregion_2, 
                style: style_FIRMS_NASAinregion_2,
                interactive: true,
                title: '<img src="styles/legend/FIRMS_NASAinregion_2.png" /> FIRMS_NASA (in region)'
            });
var format_fires_avh_3076_irk_region_3 = new ol.format.GeoJSON();
var features_fires_avh_3076_irk_region_3 = format_fires_avh_3076_irk_region_3.readFeatures(json_fires_avh_3076_irk_region_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fires_avh_3076_irk_region_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fires_avh_3076_irk_region_3.addFeatures(features_fires_avh_3076_irk_region_3);
var lyr_fires_avh_3076_irk_region_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fires_avh_3076_irk_region_3, 
                style: style_fires_avh_3076_irk_region_3,
                interactive: true,
                title: '<img src="styles/legend/fires_avh_3076_irk_region_3.png" /> fires_avh_3076_irk_region'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ИСДМ РОСЛЕСХОЗ'
            });

lyr_googlehybrid_0.setVisible(true);lyr_localities_1.setVisible(true);lyr_FIRMS_NASAinregion_2.setVisible(true);lyr_fires_avh_3076_irk_region_3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_localities_1,lyr_FIRMS_NASAinregion_2,lyr_fires_avh_3076_irk_region_3,lyr__4];
lyr_localities_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'name_MO': 'name_MO', 'code': 'code', 'distance': 'distance', 'ado': 'ado', 'id': 'id', 'query': 'query', 'address': 'address', 'geometry': 'geometry', 'poly': 'poly', 'valid': 'valid', 'locality': 'locality', });
lyr_FIRMS_NASAinregion_2.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'BRIGHTNESS': 'BRIGHTNESS', 'SCAN': 'SCAN', 'TRACK': 'TRACK', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', 'SATELLITE': 'SATELLITE', 'INSTRUMENT': 'INSTRUMENT', 'CONFIDENCE': 'CONFIDENCE', 'VERSION': 'VERSION', 'BRIGHT_T31': 'BRIGHT_T31', 'FRP': 'FRP', 'DAYNIGHT': 'DAYNIGHT', 'TYPE': 'TYPE', });
lyr_fires_avh_3076_irk_region_3.set('fieldAliases', {'fire_id': 'fire_id', 'dt': 'dt', 'lat': 'lat', 'lon': 'lon', 'area': 'area', 'terr_id': 'terr_id', 'since': 'since', 'id': 'id', 'is_deleted': 'is_deleted', 'classname': 'classname', 'created_by': 'created_by', 'edited_by': 'edited_by', 'edited_on': 'edited_on', 'created_on': 'created_on', 'published': 'published', 'poly': 'poly', });
lyr__4.set('fieldAliases', {'Номер пожара': 'Номер пожара', 'Дата первого наблюдения': 'Дата первого наблюдения', 'lat': 'lat', 'lon': 'lon', });
lyr_localities_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'name_MO': 'TextEdit', 'code': 'TextEdit', 'distance': 'TextEdit', 'ado': 'TextEdit', 'id': 'TextEdit', 'query': 'TextEdit', 'address': 'TextEdit', 'geometry': 'TextEdit', 'poly': 'TextEdit', 'valid': 'TextEdit', 'locality': 'Range', });
lyr_FIRMS_NASAinregion_2.set('fieldImages', {'LATITUDE': '', 'LONGITUDE': '', 'BRIGHTNESS': '', 'SCAN': '', 'TRACK': '', 'ACQ_DATE': '', 'ACQ_TIME': '', 'SATELLITE': '', 'INSTRUMENT': '', 'CONFIDENCE': '', 'VERSION': '', 'BRIGHT_T31': '', 'FRP': '', 'DAYNIGHT': '', 'TYPE': '', });
lyr_fires_avh_3076_irk_region_3.set('fieldImages', {'fire_id': '', 'dt': '', 'lat': '', 'lon': '', 'area': '', 'terr_id': '', 'since': '', 'id': '', 'is_deleted': '', 'classname': '', 'created_by': '', 'edited_by': '', 'edited_on': '', 'created_on': '', 'published': '', 'poly': '', });
lyr__4.set('fieldImages', {'Номер пожара': '', 'Дата первого наблюдения': '', 'lat': '', 'lon': '', });
lyr_localities_1.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'name_MO': 'no label', 'code': 'no label', 'distance': 'no label', 'ado': 'no label', 'id': 'no label', 'query': 'no label', 'address': 'no label', 'geometry': 'no label', 'poly': 'no label', 'valid': 'no label', 'locality': 'no label', });
lyr_FIRMS_NASAinregion_2.set('fieldLabels', {'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'BRIGHTNESS': 'no label', 'SCAN': 'no label', 'TRACK': 'no label', 'ACQ_DATE': 'no label', 'ACQ_TIME': 'no label', 'SATELLITE': 'no label', 'INSTRUMENT': 'no label', 'CONFIDENCE': 'no label', 'VERSION': 'no label', 'BRIGHT_T31': 'no label', 'FRP': 'no label', 'DAYNIGHT': 'no label', 'TYPE': 'no label', });
lyr_fires_avh_3076_irk_region_3.set('fieldLabels', {'fire_id': 'inline label', 'dt': 'inline label', 'lat': 'inline label', 'lon': 'inline label', 'area': 'inline label', 'terr_id': 'inline label', 'since': 'inline label', 'id': 'inline label', 'is_deleted': 'inline label', 'classname': 'inline label', 'created_by': 'inline label', 'edited_by': 'inline label', 'edited_on': 'inline label', 'created_on': 'inline label', 'published': 'no label', 'poly': 'no label', });
lyr__4.set('fieldLabels', {'Номер пожара': 'no label', 'Дата первого наблюдения': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});