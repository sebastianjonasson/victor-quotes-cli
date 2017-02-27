#! /usr/bin/env node
var chalk = require('chalk');

/* 
 *  Quotes
 */
var quotes = [
  '10000 öl',
  'Man är ju inte nyponfärsk',
  'Man känner sig ju inte som en nyplockad sommarblomma',
  'Björna',
  'Kasslergratäng',
  'Nä, jag kör',
  'Man är ju inte 20 längre',
  'Mmm, henne på en bredd macka',
  'setGusta(me);',
  'Jag tar en kvällens',
  'Hue hue',
  'Asså jag minns när jag var i din ålder. MMMmm, jag var ung och rak i ryggen',
  'Ha det fett som fan',
	`Kaffe, kaffe, kaffe, kaffe, kaffe, kaffe, kaffe`
];

var verbs = [
  'states',
  'declares',
  'farts',
  'sings',
];

var colors = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray'
];

var bgColors = [
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite'
];


/*
 *  Functions
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Array.prototype.random = function (withExtra) {
  var index = getRandomInt(0, this.length-1);

  return (withExtra && index % 6 == 0)
    ? this[index] + getDatedQuote()
    : this[index]; 
}

function getDatedQuote(){
  return `. Ja asså jag minns den ${new Date()} som det var idag. Jag kommer ihåg för jag hade precis dessa kläderna på mig.`; 
}

/*
 *  Script
 */
var output = ` --> ${chalk[bgColors.random()]('Victor')} ${chalk[colors.random()](verbs.random())}: ${chalk[bgColors.random()](quotes.random(true))}`;
console.log(output);
