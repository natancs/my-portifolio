const urlIcon = "./assets/language-icons/icons-"

const iconsLanguage = [
  { name: "HTML", icon: `${urlIcon}html.svg` },
  { name: "CSS", icon: `${urlIcon}css.svg` },
  { name: "Javascript", icon: `${urlIcon}javascript.svg` },
  { name: "Typescript", icon: `${urlIcon}typescript.svg` },
  { name: "ReactJS", icon: `${urlIcon}react.svg` },
  { name: "NodeJS", icon: `${urlIcon}node-js.svg` },
  { name: "Git", icon: `${urlIcon}git.svg` },
  { name: "GitHub", icon: `${urlIcon}github.svg` },
  { name: "Bootstrap", icon: `${urlIcon}bootstrap.svg` },
  { name: "Sass", icon: `${urlIcon}sass.svg` },
  { name: "MySQL", icon: `${urlIcon}mysql.svg` }
];

function listItems(element) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <img src="${element.icon}" alt="${element.name}" />
  `
  document.querySelector("#list").appendChild(newItem);
}

export function loadItems() {
  iconsLanguage.forEach(listItems)
}