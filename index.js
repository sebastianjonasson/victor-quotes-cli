#! /usr/bin/env node

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
  'Hue hue'
];

var verbs = [
	'states',
	'declares',
	'farts',
	'sings'
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomListValue() {
  var index = getRandomInt(0, this.length-1);
  return this[index];
}


var output = ` --> Victor ${getRandomListValue.call(verbs)}: ${getRandomListValue.call(quotes)}`;
console.log(output);
