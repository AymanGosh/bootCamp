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


