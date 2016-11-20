$(document).ready(function() {

  if ( localStorage.getItem('stepcounter') ) {
    var stepcounterchk = localStorage.getItem('stepcounter');
 }

  var chkpoint_one = {
    id:'01',
    title: 'Crystal Palace Ballrooms',
    code: 'parola1',
    question: 'What is object-oriented programming?',
    svar_one:'A type of programming involving data types representing data structures',
    svar_two:'A type of programming using only numbers',
    svar_three:'A type of programming involving a structured method of creating programs',
    svar_four:'A type of programming not in use anymore',
    correct: self.var_one,
    adresa: 'Calea Rahovei 198A, București'
  };

  var fail = {
    fail: 'Ask user for a number, ask user for another number, multiply the two numbers, print result..What do you call this set of instructions?',
    failvar_one:'A compiler',
    failvar_two:'An algorithm',
    failvar_three:'A class',
    failvar_four:'PHP',
    failcorrect: self.failvar_two,
  }

  var chkpoint_two = {
    id:'02',
    title: 'The Ark',
    code: 'parola2',
    question: 'Which of the following is NOT a web language?',
    var_one:'HTML',
    var_two:'Javascript',
    var_three:'C++',
    var_four:'PHP',
    correct: self.var_three,
    adresa: 'Strada Uranus 150, București'
  };

  var chkpoint_three = {
    id:'03',
    title: 'Palatul Bragadiru',
    code: 'parola3',
    question: 'If you needed to execute some code repeatedly based on a certain condition, which of the following would you use?',
    var_one:'Variable',
    var_two:'Loop',
    var_three:'Conditional',
    var_four:'Compiler',
    correct: self.var_two,
    adresa: 'Calea Rahovei 147-153, București'
  };

  var chkpoint_four = {
    id:'04',
    title: 'MNAC',
    code: 'parola4',
    question: 'What is computer programming?',
    var_one:'Setting the alarm on a computer',
    var_two:'Speeding up your computer',
    var_three:'Telling the computer what to do through a special set of instructions',
    var_four:'Convincing the computer to never freeze',
    correct: self.var_three,
    adresa: 'Strada Izvor 2-4, București'
  };

  var chkpoint_five = {
    id:'05',
    title: 'JW Marriott',
    code: 'parola5',
    question: 'What is the difference between a variable and a constant?',
    var_one:'Constants can be declared only in Java',
    var_two:'Variables can be declared only in software languages',
    var_three:'The value of a constant doesn`t change, the value of a variable can change all throughout a program',
    var_four:'No difference',
    correct: self.var_three,
    adresa: 'Calea 13 Septembrie 90, București'
  };


  var chkobj = {
    header_title: '',
    title: '',
    address: '',
    code: '',
    question_title: '',
    svar_one: '',
    svar_two: '',
    svar_three: '',
    svar_four:'',
    correct:''
  }



  switch(stepcounterchk) {
    case '1':
        chkobj.header_title = chkpoint_one.id;
        chkobj.title = chkpoint_one.title;
        chkobj.address = chkpoint_one.adresa;
        chkobj.code = chkpoint_one.code;
        chkobj.question_title = chkpoint_one.question;
        chkobj.svar_one = chkpoint_one.svar_one;
        chkobj.svar_two = chkpoint_one.svar_two;
        chkobj.svar_three = chkpoint_one.svar_three;
        chkobj.svar_four = chkpoint_one.svar_four;
        chkobj.correct = chkpoint_one.correct;
        //$('.chk-title').html(chkpoint_one.title);
        break;
    case '2':
        chkobj.header_title = chkpoint_two.id;
        chkobj.title = chkpoint_two.title;
        chkobj.address = chkpoint_two.adresa;
        chkobj.code = chkpoint_two.code;
        chkobj.question_title = chkpoint_two.question;
        chkobj.svar_one = chkpoint_two.var_one;
        chkobj.svar_two = chkpoint_two.var_two;
        chkobj.svar_three = chkpoint_two.var_three;
        chkobj.svar_four = chkpoint_two.var_four;
        chkobj.correct = chkpoint_two.correct;
        break;
    case 3:
        chkobj.header_title = chkpoint_three.id;
        chkobj.title = chkpoint_three.title;
        chkobj.address = chkpoint_three.adresa;
        chkobj.code = chkpoint_three.code;
        chkobj.question_title = chkpoint_three.question;
        chkobj.svar_one = chkpoint_three.var_one;
        chkobj.svar_two = chkpoint_three.var_two;
        chkobj.svar_three = chkpoint_three.var_three;
        chkobj.svar_four = chkpoint_three.var_four;
        chkobj.correct = chkpoint_three.correct;
        break;
    case 4:
        chkobj.header_title = chkpoint_four.id;
        chkobj.title = chkpoint_four.title;
        chkobj.address = chkpoint_four.adresa;
        chkobj.code = chkpoint_four.code;
        chkobj.question_title = chkpoint_four.question;
        chkobj.svar_one = chkpoint_four.var_one;
        chkobj.svar_two = chkpoint_four.var_two;
        chkobj.svar_three = chkpoint_four.var_three;
        chkobj.svar_four = chkpoint_four.var_four;
        chkobj.correct = chkpoint_four.correct;
        break;
    case 5:
        chkobj.header_title = chkpoint_two.id;
        chkobj.title = chkpoint_two.title;
        chkobj.address = chkpoint_two.adresa;
        chkobj.code = chkpoint_two.code;
        chkobj.question_title = chkpoint_two.question;
        chkobj.svar_one = chkpoint_two.var_one;
        chkobj.svar_two = chkpoint_two.var_two;
        chkobj.svar_three = chkpoint_two.var_three;
        chkobj.svar_four = chkpoint_two.var_four;
        chkobj.correct = chkpoint_two.correct;
        break;
    default:
        //default code block
      }

console.log(chkobj.svar_one);

  function populatePage () {

      $('.header-title').html('checkpoint ' + chkobj.header_title);
      $('.chk-title').html(chkobj.title);
      $('.chk-address').html(chkobj.address);
      $('.question').html(chkobj.question_title);
      $('.svar-one').html(chkobj.svar_one);
      $('.svar-two').html(chkobj.svar_two);
      $('.svar-three').html(chkobj.svar_three);
      $('.svar-four').html(chkobj.svar_four);

}

 populatePage ()



})
