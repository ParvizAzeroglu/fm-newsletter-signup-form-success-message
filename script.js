const input = document.getElementById("input");
const button = document.getElementById("button");

const container = document.getElementById("container");
const success = document.getElementById("success");

const dissmissMsg = document.getElementById("dissmissMsg");

var mediaQuery = window.matchMedia("(max-width: 768px)");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

button.addEventListener("click", (e) => {
  if (emailRegex.test(input.value)) {
    validEmail();
  } else {
    invalidEmail();
  }
});

function invalidEmail() {
  input.style.backgroundColor = "#e57373";
  input.style.borderColor = "red";
  input.style.color = "white";
}

function validEmail() {
  container.classList.add("container-active");
  success.classList.add("success-active");
}

dissmissMsg.addEventListener("click", () => {
  var url = "https://www.frontendmentor.io/profile/ParvizAzeroglu";
  window.location.href = url;
});

//? I tried to change the image using JavaScript, but I still couldn't succeed.

// if (mediaQuery.matches) {
//   var responsiveImg = document.getElementById("img");
//   responsiveImg.setAttribute(
//     "src",
//     "./assets/images/illustration-sign-up-mobile.svg"
//   );
// }
