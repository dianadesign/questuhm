$(document).ready(function() {

  if ( localStorage.getItem('stepcounter') ) {
    var stepcountermap = localStorage.getItem('stepcounter');
  }
  var mappath = '';
  switch(stepcountermap) {
  case '0':
      mappath = 'img/start.png';
  case '1':
      mappath = 'img/step1.png';
      break;
  case '2':
      mappath = 'img/step2.png';
      break;
  case '3':
      mappath = 'img/step3.png';
      break;
  case '4':
    mappath = 'img/finish.png';
    window.location.href = "http://quest.ateluhm.ro/hooray.html";
      break;
  case '5':
    mappath = 'img/finish.png';

      break;
  case '6':

      break;
  default:
      //default code block
    }


    $('.imgmap').attr('src', mappath);


  $('.play-quest').bind("click", function() {
    stepcountermap++;
    localStorage.setItem('stepcounter', stepcountermap);
    //changebg ();
});

console.log(stepcountermap);



})
