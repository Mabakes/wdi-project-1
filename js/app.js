var Game = Game || {};

// load constants
Game.init = function () {
  console.log('init');
  Game.$integers       = [];
  Game.$answer         = $('.answer');
  Game.$startButton    = $('.start-game');
  Game.$list           = $('.number, .operator');
  Game.$solution       = $('.solution');
  Game.$operator       = $('.operator');
  Game.$attempt1       = $('.attempt-num1');
  Game.$attemptop      = $('.attempt-op');
  Game.$attempt2       = $('.attempt-num2');
  Game.$playerSolution = $('.playerSolution');
  Game.count           = 0;
  Game.score           = 0;
  Game.countdown       = 11;
  Game.$eq             = $('.eq');
  Game.value           = $('.value');

  // Start off by resetting the game
  Game.reset();

  // Setup eventListeners
  Game.$eq.on('click', Game.playerSolution);
  Game.$list.on('click', Game.playerEquation);
};

Game.reset = function() {
  console.log('reset');
  // Values
  Game.player1 = '';
  Game.player2 = '';
  Game.completeSolution = '';
  // Game.answer = '';
  Game.operator = '';
  // DOM selection
  Game.$attempt1.text('');
  Game.$attempt2.text('');
  Game.$attemptop.text('');
  Game.$playerSolution.text('');
  Game.$answer.text('');
  // Run again...
  Game.generateNumbers();
};

// Generate numbers for blocks
Game.generateNumbers = function() {
  console.log('generate');
  for (let i = 0; i < Game.$list.length; i++){
    if (i < Game.$list.length/2){
      $('#id-' + (i+1)).text(Math.ceil(Math.random() * 10));
    } else{
      $('#id-' + (i+1)).text(Math.ceil(Math.random() * 100)+50);
    }
  }
  Game.generateTargetNumber();
};

Game.generateTargetNumber = function() {
  console.log('target');
  // Computer choses random number between 1 and 8
  Game.num1 = Math.ceil(Math.random() * 7);
  Game.num2 = Math.ceil(Math.random() * 7);
  // Gets the text from that html id:
  Game.chosenNum1 = $('#id-'+ Game.num1).text();
  Game.chosenNum2 = $('#id-'+ Game.num2).text();
  // Computer choses random number between 0 and 2
  // Game.chosenOp;
  Game.op = Math.ceil(Math.random() * 2);

  // Assigns it to chose an operation
  if (Game.op === 1){
    Game.chosenOp = '+';
  } else {
    Game.chosenOp = '-';
  }

  // Computer generates number
  Game.answer = eval(`${Game.chosenNum1} ${Game.chosenOp} ${Game.chosenNum2}`);
  // Assigns it to the HTML
  Game.$answer.html(Game.answer);

  Game.clock = setInterval(Game.timer, 1000);
};

Game.timer = function(){
  Game.countdown -= 1;
  if(Game.countdown === 0){
    clearInterval(Game.clock);
  }
  Game.value.html(Game.countdown);
};

Game.playerEquation = function(){
  console.log('playerEquation');
  if ($(this).hasClass('number')) {
    if (Game.player1){
      Game.player2 = $(this).text();
      Game.$attempt2.html(' '+Game.player2+' =');
    } else{
      Game.player1=$(this).text();
      Game.$attempt1.html(Game.player1+ ' ');
    }
  } else {
    Game.operator = $(this).text();
    Game.$attemptop.html(' '+Game.operator+' ');
  }
};

Game.playerSolution = function(){
  console.log('solution');
  // Generates the players' number
  Game.completeSolution = (eval(`${Game.player1}`+ `${Game.operator}` + `${Game.player2}`));
  Game.$playerSolution.text(Game.completeSolution);

  Game.match();
};

Game.match = function(){
  console.log('match');
  if (Game.completeSolution === Game.answer){
    // clear Game.player1 and Game.player2
    alert('Well done!');
    // Game.score();
  } else {
    alert('Naaaah!');
    // Game.reset();
  }
  Game.reset();
};

// Game.score = function(){
//   console.log('score');
// };

Game.checkTotal = function(){
  console.log('total');
  if(Game.score === 5){
    Game.reset();
  }
};

$(Game.init.bind(Game));
