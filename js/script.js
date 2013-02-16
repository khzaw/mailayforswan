$(document).ready(function() {
    $('.guy-text').transition({
        x: '20%'
    }, 2000, 'ease');

    $('.girl-text').transition({
        x: '-20%'
    }, 2000, 'ease');

    $('.guy').transition({
        x: '90'
    }, 2000, 'ease');

    $('.girl').transition({
        x: '-90'
    }, 2000, 'ease');

    $('.icon-heart').transition({
        opacity: 1,
    }, 2000, 'ease');
});
