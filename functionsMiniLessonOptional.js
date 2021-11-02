const story =
  "In the beginning there was light. Then there were wolves.Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then , the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
let wordCounts = {};

let data = story;

const creatStory = function () {
  data = data.split(" ");

  for (let word of data) {
    if (!specialChars.includes(word)) {
      if (word in wordCounts) {
        wordCounts[word] = wordCounts[word] + 1;
      } else {
        wordCounts[word] = 1;
      }
    }
  }
};

creatStory();
console.log(wordCounts);

console.log({
  in: 1,
  the: 4,
  beginning: 1,
  there: 3,
  was: 2,
  light: 1,
  "": 6,
  then: 2,
  were: 1,
  wolves: 1,
  finally: 1,
  a: 2,
  big: 1,
  fire: 3,
  ultimately: 1,
  shelob: 1,
  "wolf-master": 1,
  put: 1,
  out: 1,
  with: 1,
  her: 1,
  feet: 1,
  but: 1,
  until: 1,
  caused: 1,
  one: 1,
  heck: 1,
  of: 2,
  lot: 1,
  damage: 1,
});
