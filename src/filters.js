import Vue from 'vue';

Vue.filter('getDuration', function(value){
    const hours = Math.floor(value / 60);          
    const minutes = value % 60;
    const hh = hours < 10 ? `0${hours}` : hours;
    const mm = minutes < 10 ? `0${minutes}` : minutes;

    return `${hh}:${mm}`;
});

Vue.filter('fansFilter', function (value) {
        value += '';
        let x = value.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return `${x1}${x2}`;
});