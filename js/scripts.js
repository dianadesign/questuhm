$(document).ready(function() {

  var chkpoint_one = {
    id:'01',
    title: 'Crystal Palace Ballrooms',
    code: 'parola1',
    question: 'What is object-oriented programming?',
    var_one:'A type of programming involving data types representing data structures',
    var_two:'A type of programming using only numbers',
    var_three:'A type of programming involving a structured method of creating programs',
    var_four:'A type of programming not in use anymore',
    correct: var_one,
    fail: 'Ask user for a number, ask user for another number, multiply the two numbers, print result..What do you call this set of instructions?',
    failvar_one:'A compiler',
    failvar_two:'An algorithm',
    failvar_three:'A class',
    failvar_four:'PHP',
    failcorrect: failvar_two,
    adresa: 'Calea Rahovei 198A, București'
  };

  var chkpoint_two = {
    id:'02',
    title: 'The Ark',
    code: 'parola2',
    question: 'Which of the following is NOT a web language?',
    var_one:'HTML',
    var_two:'Javascript',
    var_three:'C++',
    var_four:'PHP',
    correct: var_three,
    fail: 'Ask user for a number, ask user for another number, multiply the two numbers, print result..What do you call this set of instructions?',
    failvar_one:'A compiler',
    failvar_two:'An algorithm',
    failvar_three:'A class',
    ailvar_four:'PHP',
    failcorrect: failvar_two,
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
    correct: var_two,
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
    correct: var_three,
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
    adresa: 'Calea 13 Septembrie 90, București'
  };


  var chkobj = {
    header_title: $('.header-title').html(),
    chk_title: $('.chk-title').html(),
    chk_address: $('.chk-address').html(),
    chk_code: $('.chk-code').val(),
    question_title: $('.q-title').html(),
    var_one: $('.var-one').html(),
    var_two: $('.var-two').html(),
    var_three: $('.var-three').html()
  }










})
