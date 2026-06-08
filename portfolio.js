const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
];

const projects = [
  {
    title: "C# and .NET Course Projects",
    description:
      "A collection of C# assignments covering console applications, object-oriented programming, interfaces, polymorphism, Entity Framework, and SQLite.",
    tag: "C#",
    link: "https://github.com/Saaffe01/The-Tech-Academy-Basic-C-Sharp-Projects.",
  },
  {
    title: "HTML and CSS Projects",
    description:
      "Course projects focused on semantic HTML, CSS layouts, Bootstrap, responsive pages, and front-end fundamentals.",
    tag: "HTML",
    link: "https://github.com/Saaffe01/HTML-AND-CSS-PROJECTS",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with HTML, CSS, JavaScript, and Tailwind utility classes to showcase technical skills and project work.",
    tag: "WEB",
    link: "https://saaffe01.github.io/",
  },
  {
    title: "Academy Cinemas",
    description:
      "A Bootstrap-based movie theater website assignment featuring a polished layout, image assets, navigation, and movie information sections.",
    tag: "UI",
    link: "https://github.com/Saaffe01/HTML-AND-CSS-PROJECTS/tree/main/ACADEMY-CINEMAS",
  },
  {
    title: "One Page Website",
    description:
      "A single-page website assignment practicing page sections, styling, image use, and basic JavaScript interactions.",
    tag: "JS",
    link: "https://github.com/Saaffe01/HTML-AND-CSS-PROJECTS/tree/main/ONE-PAGE-WEBSITE",
  },
  {
    title: "Simple Recipes",
    description:
      "A front-end recipe project using structured HTML, custom CSS, images, and JavaScript to present recipe content clearly.",
    tag: "CSS",
    link: "https://github.com/Saaffe01/HTML-AND-CSS-PROJECTS/tree/main/SIMPLE-RECIPES",
  },
];

function renderSkills() {
  const list = document.getElementById("skills-list");
  if (!list) return;

  list.innerHTML = skills
    .map(
      (skill) => `
        <span class="skill-pill">
          <img src="${skill.icon}" alt="${skill.name} logo" loading="lazy" />
          ${skill.name}
        </span>
      `,
    )
    .join("");
}

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;

  list.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-icon">${project.tag}</div>
          <h3 class="mt-5 text-xl font-extrabold">${project.title}</h3>
          <p class="mt-3 text-slate-600 leading-7">${project.description}</p>
          <a
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            View Project
          </a>
        </article>
      `,
    )
    .join("");
}

function bindContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("success-toast");
  if (!form || !toast) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = new URL("mailto:SaaffeAlgarib@gmail.com");
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", body);

    toast.classList.add("is-visible");
    window.location.href = mailto.toString();

    window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  bindContactForm();
});
