window.onload = (event) => {
    setTimeout(() => {
      $("#loader-box").fadeOut();
      $(' html, body').css({overflow: 'auto'});
  }, 1000);
  };

  
  $(document).ready(function() {
    $("#hidden-nav-container").hide()
  
  $(this).scrollTop(0);
  });

  
  $('#hidden-nav').click(function () {
    $("#hidden-nav-container").slideToggle()
  });

  

var map = L.map('map').setView([51.951638, -0.274172], 13);


var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 10,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([51.951638, -0.274172]).addTo(map);