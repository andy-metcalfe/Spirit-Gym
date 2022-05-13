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

  