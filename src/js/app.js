$(function(){

var galleryPopped = true;
var aboutPopped = false;
var contactPopped = false;

var paintings = [
  {name: "Vantage",
  src: "vantage.png"},
  {name: "Centric Depths",
  src: "centric_depths.png"},
  {name: "Centric Heights",
  src: "centric_heights.png"},
  {name: "Day Blush",
  src: "day_blush.png"},
  {name: "In The Deep",
  src: "in_the_deep.png"},
  {name: "Intercosmic Flow",
  src: "intercosmic_flow.png"},
  {name: "Night Lapse",
  src: "night_lapse_01.png"},
  {name: "Untitled 03",
  src: "untitled_03.jpg"},
  {name: "Night Wind",
  src: "night_wind.png"},
  {name: "Northern Nights",
  src: "northern_nights.jpg"},
  {name: "White Black 2x2",
  src: "white_black_2by2.jpg"},
  {name: "Untitled 00",
  src: "untitled_00.png"},
  {name: "Untitled 04",
  src: "untitled_04.jpg"},
  {name: "Alexa",
  src: "alexa.jpg"},
  {name: "By The Blood",
  src: "by_the_blood.jpg"},
  {name: "Sky Birch Field",
  src: "sky_birch_field.jpg"},
  {name: "Untitled 02",
  src: "untitled_02.jpg"},
  {name: "Untitled 01",
  src: "untitled_01.jpg"},
  {name: "Material Love",
  src: "material_love.jpg"}
];

  $('body').removeClass('fade-out');

  paintings.forEach(function(item){
      var art = "<a href='src/images/paintings/" + item.src + "' data-lightbox='gallery'><img class='thumb' data-pin-url='http://www.ArtistChrista.com' data-pin-media='http://www.ArtistChrista.com/src/images/paintings/" + item.src + "' data-pin-description='" + item.name + ". By Christa Anderson.' alt='Thumbnail of " + item.name + ". By Christa Anderson.' src='src/images/thumb/thumb_" + item.src + "'></a>";

      $('.galleryBox').append(art);
  });

  var showGallery = function(){
    $('#contactPopUp').fadeOut(500);
    $('#aboutPopUp').fadeOut(500);
    $('.galleryBox').delay(500).fadeIn(500);
    galleryPopped = true;
    aboutPopped = false;
    contactPopped = false;
    $('#contact').removeClass('highlighted');
    $('#about').removeClass('highlighted');
    $(this).addClass('highlighted');
  };

  $('#headerImg').on("click", function(){
    if ( !galleryPopped ) {
      showGallery();
    }
  });

  $('#gallery').on("click", function(){
    if ( !galleryPopped ) {
      showGallery();
    }
  });

  $('#contact').on("click", function(){
    if ( !contactPopped ) {
      $('.galleryBox').fadeOut(500);
      $('#aboutPopUp').fadeOut(500);
      $('#contactPopUp').delay(500).fadeIn(500);
      contactPopped = true;
      aboutPopped = false;
      galleryPopped = false;
      $('#gallery').removeClass('highlighted');
      $('#about').removeClass('highlighted');
      $(this).addClass('highlighted');
    }
  });

  $('#about').on("click", function(){
    if ( !aboutPopped ) {
      $('.galleryBox').fadeOut(500);
      $('#contactPopUp').fadeOut(500);
      $('#aboutPopUp').delay(500).fadeIn(500);
      aboutPopped = true;
      galleryPopped = false;
      contactPopped = false;
      $('#contact').removeClass('highlighted');
      $('#gallery').removeClass('highlighted');
      $(this).addClass('highlighted');
    }
  });

});
