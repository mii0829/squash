$(function($) {

    $(window).scroll(function () {
        var targetElement = $('.fadein').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200) {
            $('.fadein').css('opacity', '1');
            $('.fadein').css('transform','translateY(0)');
        }
    });

    particlesJS("particles-js", {
        "particles":{"number":{"value":19,"density":{"enable":true,"value_area":2051.7838682439087}},
        "color":{"value":["#3a4b9e","#e8534d","#EBC81E"]},
        "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
        "opacity":{"value":0.9943260284566635,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.8791208791208791,"sync":false}},
        "size":{"value":130.209360869325,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
        "line_linked":{"enable":false,"distance":500,"color":"#ebe4e4","opacity":1,"width":5.366203963099454},
        "move":{"enable":true, "speed":5.620472365193136, "direction":"top", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
        "interactivity":{"detect_on":"canvas",
        "events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},
        "modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":31.96803196803197,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":127.87212787212788,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
});