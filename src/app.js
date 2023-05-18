window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = domain();
  });
};
// had to change with to a variable with the let
let domain = () => {
  let first = [
    "A hungry man",
    "A lonely cat",
    "A fat dog",
    "A crazy baby",
    "An active rabbit",
    "My hamster"
  ];
  let second = ["ate", "burned", "kicked", "stomped", "yelled at", "threw"];
  let third = [
    "my homework",
    "my car",
    "my computer",
    "my phone",
    "my keys",
    "my shoes"
  ];
  let fourth = [
    "yesterday.",
    "last weekend.",
    "last night.",
    "this morning.",
    "when I was sleeping.",
    "before breakfast."
  ];
  // the same code from domain name generator won't work- I got it mixed up
  // BECAUSE this method would have worked on that one not vice versa
  // this is the format you should follow for the rest
  // we are assigning the index to a variable and using math.random to get a random item in the array
  let firstIndex = Math.floor(Math.random() * first.length);
  let secondIndex = Math.floor(Math.random() * second.length);
  let thirdIndex = Math.floor(Math.random() * third.length);
  let fourthIndex = Math.floor(Math.random() * fourth.length);

  return (
    first[firstIndex] +
    " " +
    second[secondIndex] +
    " " +
    third[thirdIndex] +
    " " +
    fourth[fourthIndex]
  );
};
