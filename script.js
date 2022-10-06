// const challenges = document.querySelector('.navbar li');
const products = document.getElementById("products");
const challenges = document.getElementById("challenges");
const resources = document.getElementById("resources");
const popUp = document.querySelector(".popUp");

products.addEventListener("click", function (e) {
  e.preventDefault();
  if (popUp.classList.contains("hidden")) {
    popUp.classList.remove("hidden");
  }
   else popUp.classList.add("hidden");

   popUp.style.right = '52em';
});

challenges.addEventListener("click", function (e) {
  e.preventDefault();
  if (popUp.classList.contains("hidden")) {
    popUp.classList.remove("hidden");
  }
   else popUp.classList.add("hidden");

   popUp.style.right = '45em';
});

resources.addEventListener("click", function (e) {
  e.preventDefault();
  if (popUp.classList.contains("hidden")) {
    popUp.classList.remove("hidden");
  }
   else popUp.classList.add("hidden");

   popUp.style.right = '32em';
});
