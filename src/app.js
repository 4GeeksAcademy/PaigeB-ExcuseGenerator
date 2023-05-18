window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = domain();
  });
};

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
