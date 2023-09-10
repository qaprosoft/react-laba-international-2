const btn =
  document.querySelector("#btn");
const elemColor1 =
  document.querySelectorAll(".color-1");
const links = document.querySelectorAll(
  ".link-icons"
);
const buttonDownload =
  document.querySelector(
    ".container-buttons__download"
  );
const icons =
  document.querySelectorAll(".icon");
const title =
  document.querySelector("#title");
const buttonArea =
  document.querySelector(
    ".button-container-portfolio-box"
  );
const buttonPortfolio =
  document.querySelector(
    ".button-container-portfolio-box__button1"
  );
const buttonSkills =
  document.querySelector(
    ".button-container-portfolio-box__button2"
  );
btn.addEventListener("click", () => {
  console.log("click");
  document.body.classList.toggle(
    "background-color-0c151d"
  );
  title.classList.toggle(
    "color-F1F2F4"
  );
  buttonArea.classList.toggle(
    "background-color-171F26"
  );
  buttonPortfolio.classList.toggle(
    "background-color-0c151d"
  );
  btn.classList.toggle(
    "background-color-171F26"
  );
  buttonSkills.classList.toggle(
    "background-color-171F26"
  );
  buttonDownload.classList.toggle(
    "background-color-ffe071"
  );
  for (const elem of elemColor1) {
    elem.classList.toggle(
      "color-a3abb2"
    );
  }
  for (const icon of links) {
    icon.classList.toggle("no-show");
  }
  for (const icon of icons) {
    icon.classList.toggle("no-show");
  }
});
