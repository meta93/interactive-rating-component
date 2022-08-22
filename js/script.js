const maincard = document.querySelector(".main-card");
const thankyou = document.querySelector(".card-thank-you");
const ratings = document.getElementById("ratings");
const submi = document.querySelector(".sub-button");

submi.addEventListener("click", () => {
  thankyou.classList.remove("hidden");
  maincard.style.display="none";
});
