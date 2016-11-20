$(document).ready(function() {

  if ( localStorage.getItem('stepcounter') ) {
    var stepcountermap = localStorage.getItem('stepcounter');
 }

  $('.play-quest').bind("click", function() {
    stepcountermap++;
    localStorage.setItem('stepcounter', stepcountermap);
});


})
