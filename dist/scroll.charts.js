$(document).ready(function () {
    var countries20144Width = $("#countries20144").width();
    var countries20144Height = $("#countries20144").height();
    var countriestextHeight = $("#countries-text").height();
    var fixedHeight = countriestextHeight + countries20144Height * 1.1;

    $(".countries").css("padding-top", countries20144Height);


    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#countries-imgs",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#countries-imgs")
        .addTo(controller);

	new ScrollMagic.Scene({
        triggerElement: "#countries-p1",
        triggerHook: 0.8
    })
        .setClassToggle("#countries20144", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#countries-p2",
        triggerHook: 0.7
    })
        .setClassToggle("#countries20163", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#countries-p3",
        triggerHook: 0.7
    })
        .setClassToggle("#countries20172", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#countries-p4",
        triggerHook: 0.7
    })
        .setClassToggle("#countries20192", "fadeout")
        .addTo(controller)

});

$(document).ready(function () {
    var docqualityWidth = $("#doc_quality").width();
    var docqualityHeight = $("#doc_quality").height();
    var doctextHeight = $("#doc-text").height();
    var fixedHeight = doctextHeight;

    /*$(".hospital425").css("padding-top", hospital4251Height);*/
    $("#doc-imgs").css("width", docqualityWidth);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#doc-start",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#doc-imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#doc-p2",
        triggerHook: 0.8
    })
        .setClassToggle("#doc_quality", "fadeout")
        .addTo(controller)
    });


$(document).ready(function () {
    var hospital4251Width = $("#hospital4251").width();
    var hospital4251Height = $("#hospital4251").height();
    var hospital425textHeight = $("#hospital425-text").height();
    var fixedHeight = hospital425textHeight + hospital4251Height*1.1;

    /*$(".hospital425").css("padding-top", hospital4251Height);*/
    $("#hospital425-imgs").css("width", hospital4251Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".start",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#hospital425-imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p2",
        triggerHook: 0.8
    })
        .setClassToggle("#hospital4251", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p3",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4252", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p4",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4253", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p5",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4254", "fadeout")
        .addTo(controller)
    /*new ScrollMagic.Scene({
        triggerElement: "#hospital425-p6",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4255", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p7",
        triggerHook: 0.7
    })
        .setClassToggle("#geoq", "fadein")
        .addTo(controller)*/

});

$(document).ready(function () {
    var extradeath1Width = $("#extra-death1").width();
    var extradeath1Height = $("#extra-death1").height();
    var extradeathtextHeight = $("#extra-death-text").height();
    var fixedHeight = extradeathtextHeight;

    /*$(".hospital425").css("padding-top", hospital4251Height);*/
    $("#extra-death-imgs").css("width", extradeath1Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#extra-death-start",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#extra-death-imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#extra-death-p2",
        triggerHook: 0.8
    })
        .setClassToggle("#extra-death1", "fadeout")
        .addTo(controller)
    });


/*$(document).scroll(function(){
    var topnum1=$("#bubble").offset().top-$(document).scrollTop();
    if (topnum1>0){
        $("#bubble").play();
    }});*/
  