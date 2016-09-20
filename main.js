/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
$(document).ready(function(){
  $("#overview").click(function(){
    $("#brand").fadeIn().css("visibility", "visible");
    $("#briefdescription").fadeIn().css("visibility", "visible");
      $("#theTeamDiv").css("visibility", "hidden");
            $("img").css("display", "none");

  });
$("#portfolio").click(function(){
    $("img").fadeIn(700).css("visibility", "visible");
    $("#brand").css("visibility", "hidden");
    $("#briefdescription").css("visibility", "hidden");
    $("#theTeamDiv").css("visibility", "hidden");

});
$("#teamDiv").click(function(){
    $("img").css("display", "none");
    $("#brand").css("visibility", "hidden");
    $("#briefdescription").css("visibility", "hidden");
    $("#theTeamDiv").css('visibility', 'visible');

});
});
/*if ( $('#overview').css('visibility', 'visible')) {
  $('img').css('visibility','hidden');
  $('#theTeam').css('visibility', 'hidden');
}
else if ( $('#theTeam').css('visibility', 'visible')) {
  $('img').css('visibility', 'hidden');
  $('#overview').css('visibility', 'hidden');
}
else {
  $('#overview').css('visibility', 'hidden');
  $('theTeam').css('visibility', 'hidden');
};
*/
function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
};


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function() {
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'config.json', function() {
  console.log('callback - particles.js config loaded');
});
});

/*$(document).on('mousemove', function(e){
    $('#image').css({
       left:  e.pageX,
       top:   e.pageY
    });
});*/
