var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 39.425277,
        lng: -120.995790,
    });
    map.addMarker({
        lat: 39.425277,
        lng: -120.995790,
        title: 'Firm Foundation School',
        infoWindow: {
            content: '<h5 class="title">Firm Foundation Academy</h5><p><span class="region">1999 Ridge Road, North San Juan</span><br><span class="postal-code">California, 95960</span></p>'
        }

    });

});