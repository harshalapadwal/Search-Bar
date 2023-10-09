let availableKeywords = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PHP",
  "EASY LEARNING",
  "REACT",
  "ANGULAR",
  "WEB DEVLOPMENT",
  "HOW TO CREATE WEBSIDE",
  "HOW TO LEARN CODING",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  //when typing anything a inputbox when funtion will be exucuted
  let result = []; // store all filter key words
  let input = inputBox.value; // store the available value in input box
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.tolowerCase());
    });
    console.log(result);
  }
};
