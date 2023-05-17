/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { formatWithCursor } from "prettier";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = domain();
  });
  domain = () => {
    let first = ["the", "her", "him", "prime", "beauty", "dance"];
    let second = ["great", "big", "saucy", "blue", "happy", "domain"];
    let third = [".com", ".org", ".net", ".edu", ".io", ".info"];

    for (let i = 0; i < first.length; i++) {
      for (let a = 0; a < second.length; a++) {
        for (let b = 0; b < third.length; b++) {
          console.log(first[i] + second[a] + third[b]);
        }
      }
    }
    return first[i] + " " + second[a] + " " + third[b];
  };
};
