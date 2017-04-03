$(() => {

  var Game = Game || {};


  Game.$integers = [];
  Game.$answer = $('.answer');
  Game.$list = $('.number');
  Game.$solution = $('.solution');
  Game.$operator = $('.operator');
  Game.$attempt1 = $('.attempt-num1');
  Game.$attemptop = $('.attempt-op');
  Game.$attempt2 = $('.attempt-num2');
  Game.$playerSolution = $('.playerSolution');
  Game.count = 0;
  Game.player1;
  Game.player2;

  // Computer choses random number and assigns it to the html of the li numbers
  for (let i=0; i<Game.$list.length; i++){
    if (i<Game.$list.length/2){
      $('#id-' + (i+1)).text(Math.ceil(Math.random() * 10));
    } else{
      $('#id-' + (i+1)).text(Math.ceil(Math.random() * 100)+50);
    }
  }

  // Computer choses random number between 1 and 8
  Game.num1 = Math.ceil(Math.random() * 7);
  Game.num2 = Math.ceil(Math.random() * 7);
  // Gets the text from that html id:
  Game.chosenNum1 = $('#id-'+ Game.num1).text();
  Game.chosenNum2 = $('#id-'+ Game.num2).text();

  // Computer choses random number between 0 and 2
  Game.chosenOp;
  Game.op = Math.ceil(Math.random() * 2);
  console.log(Game.op);
  // Assigns it to chose an operation
  if (Game.op === 1){
    Game.chosenOp = '+';
  } else {
    Game.chosenOp = '-';
  }

  // A player clicks on a list item
  Game.$list.click(function(){
    Game.count++;
    // click is even
    if(Game.count %2 !==0){
      // get html from this
      Game.player1 = $(this).text();
      Game.$attempt1.html(Game.player1+ ' ');
      console.log('player1 ' + Game.player1);
    } else{
      // click is odd - get html from this
      Game.player2 = $(this).text();
      Game.$attempt2.html(' '+Game.player2+' =');
      console.log('player2 ' + Game.player2);
      Game.completeSolution = (eval(`${Game.player1}`+ `${Game.operator}` + `${Game.player2}`));
      Game.$playerSolution.text(Game.completeSolution);
      console.log(Game.$playerSolution);
    }
  });

  Game.$operator.click(function(){
    Game.operator = $(this).text();
    Game.$attemptop.html(' '+Game.operator+' ');
    console.log(Game.operator);
  });


if (Game.completeSolution === )
  // giving the number to genera
// Game.$playerSolution.text()

// Game.$playerSolution.text.eval(parseInt(Game.player1)+ operator +parseInt(Game.player2));

// )+ operator +parseInt(Game.player2)));

// console.log(solution);
// console.log(eval(parseInt(Game.player1)+ Game.chosenOp +parseInt(Game.player2)))

// if (eval(parseInt(Game.player1) + operator + parseInt(Game.player2)) === solution){
//   console.log('it works!');
// };

// Game.$solution.text(Game.chosenNum1 + chosenOp + Game.chosenNum2);

// const $number = setInterval(function number(){
//   1 + Math.floor(Math.random() * 20); }, 10000)
// }
//
// Game.$answer.html($number);
//
// let $number;
// setInterval(function number() {
//   $number = 1 + Math.floor(Math.random() * 20);
//   Game.$answer.html($number);
// }, 10000);
//
// function number() {a
//   $number = 1 + Math.floor(Math.random() * 20);
//   Game.$answer.html($number);
// }

//every tile has an answer showing
//every tile is allocated a question when you click on the start tile, the question appears on the tile.
//a timer starts
//you click on an answer
//
//
//
//1. there are 6 tiles on the screen at any time
// Style board with HTML and CSS

//2. there are 2 functions (+ and -)
// //3. the computer takes 2 numbers at random and an operation
// const $num1 = Math.round(Math.random());
// console.log($num1);

//4. it randomly choses whether to reverse it or not
//5. the computer produces that as a target
//6. the player is asked to reach that target
//7. If the player choses the right answer, they go onto the next level
//8. SCOPE: The questions are timed and get harder
//9.
//10.
//

// Game.$answers = ['']
//
// const $tile = $('.tile');
// const $p = $('#id-p');
// const $a = $('#id-a');
// const $d = $('#id-d');
// var timeoutID = window.setTimeout(console.log('hi'), 5000);
//
// // A player clicks on an li
// $p.on('click', function(){
//   $p.text('4+3')
// });
//
// $a.on('click', function(){
//   $a.text('sqrt25')
//   $p.text('9900')
// });
//
// $d.on('click', function(){
//   $a.text('6')
//   $d.text('99*100')
// });

// function answer(){
// The question appears
// console.log('hi');
// $('li[id^='id']:last').append('<b>test</b>');
// // a timer starts
// var timeoutID = window.setTimeout(code, [delay]);
// }


// The questions appears
// The timer starts
// The player clicks on the answer li
// The li turns into the question




// ``let timeRemaining = 10;
//  let timerIsRunning = false;
//
//  function startStopTimer() {
//    // stop the timer if it is running
//    if(timerIsRunning) {
//      timerIsRunning = false;
//      return clearInterval(timerId);
//    }
//    // start the timer if it is NOT running
//
//    // store the setInterval function in a variable to be cleared later
//    timerIsRunning = true;
//    timerId = setInterval(() => {
//      //decrease the timeRemaining variable
//      timeRemaining--;
//      //log the timeRemaining text to the timerScreen
//      $timerScreen.text(timeRemaining);
//      // add "ringing" class to timer when time reaches 0
//      // when timeRemaining reaches 0, clear the timerID variable
//      if (timeRemaining === 0) {
//        console.log('stop');
//        clearInterval(timerId);
//        //add the class running to the timer
//        $timer.addClass('ringing');
//        //Stop the ringing after 3s
//        setTimeout(() => {
//          $timer.removeClass('ringing');
//        }, 3000);
//      }
//    },1000);
