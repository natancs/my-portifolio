const viewDiv = document.querySelector(".view");
const cardInfo = document.querySelector(".card-info");
const cardTecnology = document.querySelector(".card-tecnology");
const cardExperience = document.querySelector(".card-experience");
const cardEducation = document.querySelector(".card-education");
let viewBoolean = false;

function displayBlock() {
  viewBoolean = !viewBoolean;

  viewBoolean ? viewDiv.style.transform = "rotate(-135deg)" : viewDiv.style.transform = "rotate(45deg)";

  viewBoolean
    ? cardInfo.style.display = "block"
    : cardInfo.style.display = "none"

  viewBoolean
    ? cardTecnology.style.display = "block"
    : cardTecnology.style.display = "none"

  viewBoolean
    ? cardExperience.style.display = "block"
    : cardExperience.style.display = "none"

  viewBoolean
    ? cardEducation.style.display = "block"
    : cardEducation.style.display = "none"
}

export const viewFunction = () => {
  viewDiv.addEventListener("click", displayBlock)
}