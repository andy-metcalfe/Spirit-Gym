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

document.getElementById("the-gym").onclick = function () {
  location.href = "gym.html";
};

document.getElementById("find-us").onclick = function () {
  location.href = "about.html";
};

document.getElementById("team").onclick = function () {
  location.href = "team.html";
};

document.getElementById("membership").onclick = function () {
  location.href = "membership.html";
};




$('#the-gym').mouseenter(function () {
  $('#the-gym-overlay').fadeIn();
});

$('#the-gym').mouseleave(function () {
  $('#the-gym-overlay').fadeOut();
}
).mouseleave();

$('#find-us').mouseenter(function () {
  $('#find-us-overlay').fadeIn();
});

$('#find-us').mouseleave(function () {
  $('#find-us-overlay').fadeOut();
}
).mouseleave();

$('#membership').mouseenter(function () {
  $('#membership-overlay').fadeIn();
});

$('#membership').mouseleave(function () {
  $('#membership-overlay').fadeOut();
}
).mouseleave();

$('#team').mouseenter(function () {
  $('#team-overlay').fadeIn();
});

$('#team').mouseleave(function () {
  $('#team-overlay').fadeOut();
}
).mouseleave();



$('#hidden-nav').click(function () {
  
  $("#hidden-nav-container").slideToggle()
 
});



