$(document).ready(function() {
    $('.guy-text').transition({
        x: '20%'
    }, 2000, 'ease');

    $('.girl-text').transition({
        x: '-20%'
    }, 2000, 'ease');

    $('.guy').transition({
        x: '100'
    }, 2000, 'ease');

    $('.girl').transition({
        x: '-100'
    }, 2000, 'ease');

});
