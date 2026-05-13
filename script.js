fetch("http://localhost:5000/projects")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("projects");

    data.forEach(project => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      container.appendChild(div);
    });
  });