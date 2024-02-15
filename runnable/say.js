const say = require('say');

// Specify the voice by name (if available)
const voice = 'Karen'; // Example voice name (for MacOS)
const text = 'Create a simple program in java program that will display “Hello World”';
const speed = 1; // Normal speed

say.speak(text, voice, speed, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Text has been spoken.');
});
