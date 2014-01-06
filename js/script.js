$(document).ready(function() {
    $('.guy-text').animo({
      animation: ['bounceInLeft', 'tada'],
      duration: 2.5,
    });

    $('.girl-text').animo({
      animation: ['bounceInRight', 'bounce'],
      duration: 2.5,
    });

    $('.glyphicon-heart').animo("blur", {
      amount: 3,
      duration: 0.6,
      focusAfter: 3.5,
      keep: true
    });

    // $('.guy-text').transition({
        // x: '20%'
    // }, 2000, 'ease');

    // $('.girl-text').transition({
        // x: '-20%'
    // }, 2000, 'ease');

    // $('.guy').transition({
        // x: '100'
    // }, 2000, 'ease');

    // $('.girl').transition({
        // x: '-100'
    // }, 2000, 'ease');

    $('#support1').animo({animation: 'bounceInLeft', duration: 1}, function() {
      $('#support2').animo({animation: 'bounceInRight', duration: 1});
    });

    $('#support1').animo({animation: 'fadeInLeft', duration: 0.5}, function() {
      $('#support2').animo({animation: 'fadeInUp', duration: 0.5}, function() {
        $('#support3').animo({animation: 'fadeInRight', duration: 0.5}, function() {
        });
      });
    });

});
