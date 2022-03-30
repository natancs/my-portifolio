const baseURL = "https://api.github.com/users/natancs/";

function listData(data) {
  const items = document.createElement("li");
  items.addEventListener("click", () => {
    window.open(data.html_url, "_blank");
  })

  items.innerHTML = `
    <button class="project-card box-shadow">
      <div class="project-header">
        <img src="./assets/folder.svg" alt="Nome do Projeto">
        ${data.name}
      </div>
      <div class="project-description">
        ${data.description ? data.description : "No Description"}
      </div>
      <div class="project-footer">
        
        <div class="language">
          <span class="${data.language}"></span>
          ${data.language}
        </div>
      </div>
    </button>
  `

  document.querySelector("#project").appendChild(items);
}

function dataView(data) {
  data.forEach(listData)
}

export const userData = async () => {
  await fetch(`${baseURL}repos`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      dataView(data)
      return data
    })
}