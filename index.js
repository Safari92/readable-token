/**
 * returns a random integer between min and max
 * @returns int
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * returns a random string from a given array of strings
 * @returns string
 */
function getRandomWord(list) {
  if (!list.length) throw new Error('A list of strings is required!');
  var random_number = getRandomInt(0, list.length - 1);
  return list[random_number];
}

/**
 * returns a random word from the choosen list
 */
var generateToken = function(options) {
  options = options || {};
  var language = options.language || 'en';
  var addition = options.addition || 'weekdays';

  var adjectives = require('./words/en/adjectives2.json');

  var words = [];
  try {
    words = require('./words/' + language + '/' + addition + '.json');
  }
  catch(e) {
    throw new Error('Could not find a word list with the given parameters!');
  }

  return getRandomWord(adjectives) + '-' + getRandomWord(words) + '-' + getRandomInt(1, 100);

};


module.exports = generateToken;
