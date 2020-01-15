/*
 Iresh Rajitha Kalhara
 23/11/2019/ 11.00 p.m.
 Finalized
*/


//////////// Below Array used for same type validation
//var nameBox=$("#name-l,#name-m1,#name-m2,#name-m3,#name-m4");
//var nicBox=$("#nic-l,#nic-m1,#nic-m2,#nic-m3,#nic-m4");

var category="uni";
var isInstitute=false;
var isTeamValidName=false;

var leaderName=false,leaderNic=false,leaderMail=false,leaderContact=false,leaderFullDetail=false;
var m1Name=false,m1Nic=false,m1Mail=false,m1FullDetail=false;
var m2Name=false,m2Nic=false,m2Mail=false,m2FullDetail=false;
var m3Name=false,m3Nic=false,m3Mail=false,m3FullDetail=false;
var m4Name=false,m4Nic=false,m4Mail=false,m4FullDetail=true;


disableBtn();

'use strict';
$(window).load(function() {
    $('.loader').delay(550).fadeOut('slow');
});


$(document).ready(function() {
    'use strict';
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();

    // STICKY HEADER

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    $(window).on('scroll', function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() < 357 |  $(window).scrollTop()> 2344) {
            $('#help').hide();
        } else {
            $('#help').show();
        }
    });

     //COUNTER JS

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    $(".countdown")
        .countdown("2019/12/20 08:00:00", function(event) {
            $(this).html(
                //event.strftime('<div id="week">%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
                event.strftime('<div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
            );
        });

    // SLIDER

    $(".cover_slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:333,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:300,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3

            },
            1000:{
                items:5

            }
        },
        items:5
    });
    //Animated progress bars

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });

    //MAPS

    var map = $('#map');
    if(map.length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
        var lattuide = map.attr('data-lat');
        var longtuided = map.attr('data-lon');
    }
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lattuide, longtuided), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lattuide, longtuided),
            map: map,
            title: 'evento!'
        });
    }

});

// school/uni form controller //////

$(document).ready(function(){
    if ($(this).val() == "school") {
        $("#cat-name").text("Name of the School");
        $(".nic").removeClass("display-nic");
        $(".nic").addClass("hide-nic");
        category="school";
    }
    else{
        $("#cat-name").text("Name of the University");
        $(".nic").removeClass("hide-nic");
        $(".nic").addClass("display-nic");
        category="uni";
    }
});

$(function () {
    $(".category").change(function () {
        if ($(this).val() == "school") {
            m1FullDetail=true;
            m2FullDetail=true;
            m3FullDetail=true;
            m4FullDetail=true;
            $("#cat-name").text("Name of the School");
            $(".nic").removeClass("display-nic");
            $(".nic").addClass("hide-nic");
            category="school";
            disableBtn();
        }
        else{
            m1FullDetail=false;
            m2FullDetail=false;
            m3FullDetail=false;
            m4FullDetail=true;
            $("#cat-name").text("Name of the University");
            $(".nic").removeClass("hide-nic");
            $(".nic").addClass("display-nic");
            category="uni";
            disableBtn();
        }
    });
});


// form validation/////////////////////////////////////


$("#name-uni").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length == 0 | !isUniName(this)){
        //$(this).focus();
        redBorder(this);
        isInstitute=false;
    }else{
        greenBorder(this);
        isInstitute=true;

    }
    disableBtn();
});
$("#tele-l").on("keyup",function () {
    console.log("tele");
    var name=$(this).val();
    if(name.trim().length == 0 | !isValidTelephonNo(this)){
        //$(this).focus();
        redBorder(this);
        leaderContact=false;
    }else{
        greenBorder(this);
        leaderContact=true;

    }
    disableBtn();
});
$("#name-team").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length == 0 | !isTeamName(this) ){
        redBorder(this);
        isTeamValidName=false;
    }else{
        greenBorder(this);
        isTeamValidName=true;
    }
    disableBtn();
});
/*
$("#name-l,#name-m1,#name-m2,#name-m3,#name-m4").on("keyup",function () {
    var name=$(this).val();
    if(isEmpty(name) | !isCompetetorName(this)){
        redBorder(this);
        isName=false;
    }else{
        greenBorder(this);
        checkNames();
    }
    disableBtn();
});
*/
 /*
$("#nic-l,#nic-m1,#nic-m2,#nic-m3,#nic-m4").on("keyup",function () {
    var name=$(this).val();
    if(isEmpty(name) | !isValidNIC(this)){
        redBorder(this);
        isNIc=false;
    }else{
        greenBorder(this);
        checkNICs();
    }
    disableBtn();
});
*/
 ////////// Leader Details Validation//////////////
$("#name-l").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length==0 | !isCompetetorName(this) ){
        leaderName=false;
        redBorder(this);
    }else{
        leaderName=true;
        greenBorder(this);
    }
    isLeaderComplete();
});
$("#nic-l").on("keyup",function () {
    var nic=$(this).val();
    if(nic.trim().length==0 | !isValidNIC(this) ){
        leaderNic=false;
        redBorder(this);
    }else{
        leaderNic=true;
        greenBorder(this);
    }
    isLeaderComplete();
});
$("#email-l").on("keyup",function () {
    var email=$(this).val();
    if(email.trim().length==0 | !isValidEmail(this) ){
        leaderMail=false;
        redBorder(this);
    }else{
        leaderMail=true;
        greenBorder(this);
    }
    isLeaderComplete();
});
$("#tele-l").on("keyup",function () {
    var tel=$(this).val();
    if(tel.trim().length==0 | !isValidTelephonNo(this) ){
        leaderContact=false;
        redBorder(this);
    }else{
        leaderContact=true;
        greenBorder(this);
    }
    isLeaderComplete();
});
//////////////////////////////////////////////

///////////////// M-1//////////////////////
$("#name-m1").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length==0 | !isCompetetorName(this) ){
        m1Name=false;
        redBorder(this);
    }else{
        m1Name=true;
        greenBorder(this);
    }
    isM1Complete();
});
$("#nic-m1").on("keyup",function () {
    var nic=$(this).val();
    if(nic.trim().length==0 | !isValidNIC(this) ){
        m1Nic=false;
        redBorder(this);
    }else{
        m1Nic=true;
        greenBorder(this);
    }
    isM1Complete();
});
$("#email-m1").on("keyup",function () {
    var email=$(this).val();
    if(email.trim().length==0 | !isValidEmail(this) ){
        m1Mail=false;
        redBorder(this);
    }else{
        m1Mail=true;
        greenBorder(this);
    }
    isM1Complete();
});
///////////////////////////////////////////////

/////////////// M2 /////////////////////////
$("#name-m2").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length==0 | !isCompetetorName(this) ){
        m2Name=false;
        redBorder(this);
    }else{
        m2Name=true;
        greenBorder(this);
    }
    isM2Complete();
});
$("#nic-m2").on("keyup",function () {
    var nic=$(this).val();
    if(nic.trim().length==0 | !isValidNIC(this) ){
        m2Nic=false;
        redBorder(this);
    }else{
        m2Nic=true;
        greenBorder(this);
    }
    isM2Complete();
});
$("#email-m2").on("keyup",function () {
    var email=$(this).val();
    if(email.trim().length==0 | !isValidEmail(this) ){
        m2Mail=false;
        redBorder(this);
    }else{
        m2Mail=true;
        greenBorder(this);
    }
    isM2Complete();
});
///////////////////////////////////////////////
////////////////  M3  //////////////////////////
$("#name-m3").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length==0 | !isCompetetorName(this) ){
        m3Name=false;
        redBorder(this);
    }else{
        m3Name=true;
        greenBorder(this);
    }
    isM3Complete();
});
$("#nic-m3").on("keyup",function () {
    var nic=$(this).val();
    if(nic.trim().length==0 | !isValidNIC(this) ){
        m3Nic=false;
        redBorder(this);
    }else{
        m3Nic=true;
        greenBorder(this);
    }
    isM3Complete();
});
$("#email-m3").on("keyup",function () {
    var email=$(this).val();
    if(email.trim().length==0 | !isValidEmail(this) ){
        m3Mail=false;
        redBorder(this);
    }else{
        m3Mail=true;
        greenBorder(this);
    }
    isM3Complete();
});
/////////////////////////////////////
//////////////// M4////////////////
$("#name-m4").on("keyup",function () {
    var name=$(this).val();
    if(name.trim().length==0 | !isCompetetorName(this) ){
        m4Name=false;
        redBorder(this);
    }else{
        m4Name=true;
        greenBorder(this);
    }
    isM4Complete();
});
$("#nic-m4").on("keyup",function () {
    var nic=$(this).val();
    if(nic.trim().length==0 | !isValidNIC(this) ){
        m4Nic=false;
        redBorder(this);
    }else{
        m4Nic=true;
        greenBorder(this);
    }
    isM4Complete();
});
$("#email-m4").on("keyup",function () {
    var email=$(this).val();
    if(email.trim().length==0 | !isValidEmail(this) ){
        m4Mail=false;
        redBorder(this);
    }else{
        m4Mail=true;
        greenBorder(this);
    }
    isM4Complete();
});
///////////////////////////////////////
/*
$("#email-m1,#email-m2,#email-m3,#email-m4").on("keyup",function () {
    var email=$(this).val();
    if(email.trim().length==0 | !isValidEmail(this) ){
        isOthersMail=false;
        redBorder(this);
    }else{
        isOthersMail=true;
        greenBorder(this);
    }
    disableBtn();
});
*/

/////////////////////////////////////////////////////

function isUniName(obj) {
    var name=$(obj).val();
    var regExp = /^[A-z][A-z/. -]+$/;
    if (regExp.test(name)){
        return true;
    }else{
        return false;
    }
}
function isCompetetorName(obj) {
    var name=$(obj).val();
    var regExp = /^[A-z. ]*$/;
    if (regExp.test(name)){
        return true;
    }else{
        return false;
    }
}
function isTeamName(obj) {
    var name=$(obj).val();
    var regExp = /^[A-z0-9@<>$!*+ ]*$/;
    if (regExp.test(name)){
        return true;
    }else{
        return false;
    }
}
function isValidNIC(obj) {
    var name=$(obj).val();
    var regExp = /^[0-9]{9}[vV]$|^[0-9]{12}$/;
    if (regExp.test(name)){
        return true;
    }else{
        return false;
    }
}
function isValidTelephonNo(obj) {
    var name=$(obj).val();
    var regExp = /^0[0-9]{9}$|^00[0-9]{9}$|^\+94[0-9]{9}$/;
    if (regExp.test(name)){
        console.log("correct tele");
        return true;
    }else{
        return false;
    }
}

function isValidEmail(obj) {
    var name=$(obj).val();
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(name)){
        return true;
    }else{
        return false;
    }
}
function redBorder(obj) {
    $(obj).removeClass("green-border");
    $(obj).addClass("red-border");
}
function greenBorder(obj) {
    $(obj).removeClass("red-border");
    $(obj).addClass("green-border");
}
////here commented code for check multiple same type text box //////
/*
function checkNames() {
    for(var i=0; i<nameBox.length;i++){
        if(isEmpty((nameBox[i].value))){
            console.log("empty");
            isName=false;
            return false;
        }
    }
    isName=true;
    return true;
}
function checkNICs() {
    for(var i=0; i<nicBox.length;i++){
        if(isEmpty((nicBox[i].value))){
            console.log("empty");
            isNIc=false;
            return false;
        }
    }
    isNIc=true;
    return true;
}
*/
// function checkNICs() {
//     var nic;
//     for(nic in nicBox) {
//         if ($(nic).val() == undefined) {
//             isName = false;
//             return false;
//         } else {
//             if ($(nic).val().trim().length == 0) {
//                 isName = false;
//                 return false;
//             }
//             isName = true;
//             return true;
//         }
//     }
// }

function disableBtn() {
    console.log("category:"+category+"\nisInstitute:"+isInstitute+"\nisTeam:"+isTeamValidName+"\n l:"+leaderFullDetail
    +"\n m1: "+m1FullDetail
    +"\n m2: "+m2FullDetail
    +"\n m3: "+m3FullDetail
    +"\n m4: "+m4FullDetail
    );

    if(category=="uni" & isInstitute & isTeamValidName & (leaderFullDetail & m1FullDetail & m2FullDetail & m3FullDetail & m4FullDetail)   |
        category=="school" & isInstitute & isTeamValidName & (leaderFullDetail & m1FullDetail & m2FullDetail & m3FullDetail & m4FullDetail)){
        // $("#submitbtn").removeClass("disabled");
         $("#submitbtn").addClass("btn-primary");
        $('#submitbtn').removeAttr('disabled');
    }else{
        // $("#submitbtn").removeClass("btn");
        // $("#submitbtn").removeClass("btn-rounded");
        $("#submitbtn").removeClass("btn-primary");
        $("#submitbtn").attr('disabled','disabled');
    }
}
function isEmpty(str) {
    return !str.trim().length;
}
$(document).ready(function(){
    $('#name-uni,#name-team,#name-l,#name-m2,#name-m3,#name-m4,#name-m1,#email-l' +
        ',#email-m1,#email-m2,#email-m3,#email-m4,#nic-l,#nic-m1,#nic-m2,#nic-m3,#nic-m4').on("cut copy paste",function(e) {
        e.preventDefault();
    });
});

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

///////// Form Section Control here///////////

function isLeaderComplete() {
leaderFullDetail=(leaderName & leaderNic & leaderMail & leaderContact) | (category=="school" & leaderName & leaderMail & leaderContact);
    console.log("LName: "+leaderName+"\nLNic: "+leaderNic+"\nLMail: "+leaderMail+"\nLcontact: "+leaderContact+"\nLFull : "+leaderFullDetail);
    disableBtn();
    return leaderName & leaderNic & leaderMail & leaderContact;
}
function isM1Complete() {
    m1FullDetail=(m1Name & m1Nic & m1Mail) | category=="school";
    console.log("m1Name: "+m1Name+"m1Nic: "+m1Nic+"m1Mail: "+m1Mail);
    disableBtn();
    return m1Name & m1Nic & m1Mail ;
}
function isM2Complete() {
    m2FullDetail=(m2Name & m2Nic & m2Mail) |category=="school";
    console.log("m2Name: "+m2Name+"m2Nic: "+m2Nic+"m2Mail: "+m2Mail);
    disableBtn();
    return m2Name & m2Nic & m2Mail ;
}
function isM3Complete() {
    m3FullDetail=(m3Name & m3Nic & m3Mail)|category=="school";
    console.log("m3Name: "+m3Name+"m3Nic: "+m3Nic+"m3Mail: "+m3Mail);
    disableBtn();
    return m3Name & m3Nic & m3Mail ;
}
function isM4Complete() {
    m4FullDetail=(m4Name & m4Nic & m4Mail) | category=="uni" | category=="school";
    console.log("m4Name: "+m4Name+"m4Nic: "+m4Nic+"m4Mail: "+m4Mail);
    disableBtn();
    return m4Name & m4Nic & m4Mail ;
}

