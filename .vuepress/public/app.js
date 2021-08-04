// let t = document.getElementsByClassName("footer");

// console.log(t["0"]);

// t.innerHTML += "<h3>This is the text which has been inserted by JS</h3>";

let year = new Date().getFullYear();
let text = `Copyright © ${year} Chao Zhang`;

// setTimeout(function() {
//   let target = document.getElementsByClassName("footer");
//   for (let i = 0; i < target.length; i++) {
//     target[i].innerText = text;
//   }
// }, 2000);

document.addEventListener("DOMContentLoaded", function() {
  let target = document.getElementsByClassName("footer");
  for (let i = 0; i < target.length; i++) {
    target[i].innerText = text;
  }
});
