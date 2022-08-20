const rate = document.querySelectorAll(".rate"); //individual button class ref
const sub = document.querySelector(".sub-button"); //Submit button class

rate.forEach((rate) => {
  rate.addEventListener("click", function (event) {
    event.preventDefault();

    this.classList.add("selected");
    
    rate.forEach((rate) => {
      rate.classList.remove("selected");
    });
  });
});
