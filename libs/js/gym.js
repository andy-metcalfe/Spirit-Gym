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


 $('#treadmill-photo').click(function () {
   $('#modal-content').css('backgroundImage', "url('libs/images/gym/treadmill.jpg')")
 })

 $('#exercise-ball-photo').click(function () {
  $('#modal-content').css('backgroundImage', "url('libs/images/gym/excericse-ball.webp')")
 })

 $('#free-weight-photo').click(function () {
  $('#modal-content').css('backgroundImage', "url('libs/images/gym/free-weights-1.jpg')")
 })

 $('#free-weight2-photo').click(function () {
  $('#modal-content').css('backgroundImage', "url('libs/images/gym/free-weights.jpg')")
 })

 $('#machines-photo').click(function () {
  $('#modal-content').css('backgroundImage', "url('libs/images/gym/machines.jpg')")
 })

 $('#bikes-photo').click(function () {
  $('#modal-content').css('backgroundImage', "url('libs/images/gym/bikes.jpg')")
 })