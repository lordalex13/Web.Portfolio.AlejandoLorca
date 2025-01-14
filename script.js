
/**  1 - Renderizado de las skills y creacion de sus elementos HTML desde codigo*/

function renderSkills(skills, containerSelector) {
  const skillsGrid = document.querySelector(containerSelector);

  if (!skillsGrid) {
    console.error(`El contenedor "${containerSelector}" no existe.`);
    return;
  }

  
  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const img = document.createElement("img");
    img.src = skill.icon;
    img.alt = skill.name;

    const skillInfo = document.createElement("div");
    skillInfo.classList.add("skill-info");

    const title = document.createElement("h3");
    title.textContent = skill.name;

    const skillBar = document.createElement("div");
    skillBar.classList.add("skill-bar");

    
    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      if (i < skill.level) {
        span.classList.add("filled");
      }
      skillBar.appendChild(span);
    }

    
    skillInfo.appendChild(title);
    skillInfo.appendChild(skillBar);
    skillDiv.appendChild(img);
    skillDiv.appendChild(skillInfo);
    skillsGrid.appendChild(skillDiv);
  });
}

const skills = [
  { name: "Photoshop", icon: "./assets/icons/ps.png", level: 4 },
  { name: "Illustrator", icon: "./assets/icons/ai.png", level: 3 },
  { name: "InDesign", icon: "./assets/icons/id.png", level: 4 },
  { name: "AutoCAD", icon: "./assets/icons/aucad.png", level: 4 },
  { name: "Fusion 360", icon: "./assets/icons/fs.png", level: 3 },
  { name: "Rhinoceros 3D", icon: "./assets/icons/rino.png", level: 4 },
  { name: "Grasshopper 3D", icon: "./assets/icons/grasshopper.png", level: 4 },
  { name: "Keyshot", icon: "./assets/icons/logokey.png", level: 4 },
  { name: "SolidWorks", icon: "./assets/icons/sw.png", level: 4 },
  { name: "SketchBook", icon: "./assets/icons/pencil.png", level: 3 },
];

renderSkills(skills, ".skills-grid");

/** 2 - Descarga del PDF del portfolio desde un boton en la web*/
document.getElementById("download-pdf").addEventListener("click", () => {
  const pdfUrl = "./assets/portfolio.pdf"; // Ruta al archivo PDF
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = ".mi-archivo.pdf"; // Nombre del archivo descargado
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/** 3 - Formulario de contacto, validación y alerta*/
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("form-message").textContent =
      "Por favor, completa todos los campos.";
    return;
  }

  alert("¡Mensaje enviado con éxito!");

  document.getElementById("form-message").textContent =
    "¡Mensaje enviado con éxito!";
  document.getElementById("contact-form").reset();
});
