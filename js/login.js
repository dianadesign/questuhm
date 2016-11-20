$(document).ready(function() {

  localStorage.setItem('stepcounter', 0);
  if ( localStorage.getItem('stepcounter') ) {
    var stepcounter = localStorage.getItem('stepcounter');
 }
 console.log(stepcounter);



 })
