const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    console.log(
      tutorial
        .split(" ")
        .map((splitted) => {
          return (
            splitted.charAt(0).toUpperCase() + splitted.slice(1).toLowerCase()
          );
        })
        .join(" ")
    );
  });
};

titleCased();

// const toTitleCase = (phrase) => {
//   return phrase
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// let result2 = toTitleCase("maRy hAd a lIttLe LaMb");
// console.log(result2);
