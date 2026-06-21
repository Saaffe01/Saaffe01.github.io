document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const projectStories = {
  sonoran: {
    number: "01",
    label: "Featured build",
    title: "Sonoran Pool Decks",
    status: "Concept build",
    theme: "blue",
    mark: "SONORAN<br>POOL DECKS",
    lead:
      "A warm, Arizona-inspired web concept created to make a local outdoor-living brand feel trustworthy, clear, and easy to explore.",
    goal:
      "Turn a service business into a confident digital presence that quickly communicates quality and location.",
    focus:
      "Visual hierarchy, responsive composition, approachable copy, and a clear path from curiosity to contact.",
    outcome:
      "A polished business-facing concept that demonstrates design judgment alongside practical frontend execution.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    link: "https://github.com/Saaffe01",
    linkText: "Visit GitHub profile",
  },
  csharp: {
    number: "02",
    label: "Code collection",
    title: "C# + .NET Projects",
    status: "Growing archive",
    theme: "lavender",
    mark: "C#<br>+ .NET",
    lead:
      "A collection of coursework and practice projects documenting my progression from core syntax into object-oriented and data-driven applications.",
    goal:
      "Build a dependable backend foundation by repeatedly applying concepts in small, understandable programs.",
    focus:
      "Object-oriented design, interfaces, polymorphism, exception handling, Entity Framework, and SQL-backed thinking.",
    outcome:
      "A visible record of technical growth—and the foundation supporting my current live-project work.",
    tech: ["C#", ".NET", "OOP", "Entity Framework", "SQL"],
    link: "https://github.com/Saaffe01/The-Tech-Academy-Basic-C-Sharp-Projects.",
    linkText: "Continue to repository",
  },
  frontend: {
    number: "03",
    label: "Frontend experiments",
    title: "HTML + CSS Projects",
    status: "Project archive",
    theme: "coral",
    mark: "WEB<br>LAB",
    lead:
      "A playful archive of frontend exercises where structure, styling, responsive behavior, and interaction began turning into a visual craft.",
    goal:
      "Learn how browser fundamentals work together before relying on heavier frameworks or abstractions.",
    focus:
      "Semantic HTML, custom CSS, Bootstrap, page composition, responsive layouts, and introductory JavaScript.",
    outcome:
      "A practical design-and-code foundation that now supports more expressive experiences like this portfolio.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Responsive"],
    link: "https://github.com/Saaffe01/HTML-AND-CSS-PROJECTS",
    linkText: "Continue to repository",
  },
};

const dialog = document.getElementById("project-dialog");
const closeDialogButton = dialog.querySelector(".dialog-close");
const dialogVisual = document.getElementById("dialog-visual");
let lastProjectTrigger = null;
const dialogFields = {
  number: document.getElementById("dialog-number"),
  label: document.getElementById("dialog-label"),
  title: document.getElementById("dialog-title"),
  status: document.getElementById("dialog-status"),
  mark: document.getElementById("dialog-mark"),
  lead: document.getElementById("dialog-lead"),
  goal: document.getElementById("dialog-goal"),
  focus: document.getElementById("dialog-focus"),
  outcome: document.getElementById("dialog-outcome"),
  tech: document.getElementById("dialog-tech"),
  link: document.getElementById("dialog-link"),
};

function openProject(projectKey) {
  const project = projectStories[projectKey];
  if (!project) return;

  dialogFields.number.textContent = project.number;
  dialogFields.label.textContent = project.label;
  dialogFields.title.textContent = project.title;
  dialogFields.status.textContent = project.status;
  dialogFields.mark.innerHTML = project.mark;
  dialogFields.lead.textContent = project.lead;
  dialogFields.goal.textContent = project.goal;
  dialogFields.focus.textContent = project.focus;
  dialogFields.outcome.textContent = project.outcome;
  dialogFields.tech.innerHTML = project.tech.map((item) => `<li>${item}</li>`).join("");
  dialogFields.link.href = project.link;
  dialogFields.link.innerHTML = `${project.linkText} <span>↗</span>`;
  dialogVisual.dataset.theme = project.theme;

  dialog.hidden = false;
  dialog.classList.add("is-open");
  closeDialogButton.focus();

  if (!reduceMotion && window.gsap) {
    gsap.fromTo(
      ".dialog-shell",
      { y: 60, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" },
    );
    gsap.from(".dialog-content > *", {
      y: 22,
      opacity: 0,
      duration: 0.5,
      stagger: 0.07,
      delay: 0.18,
      ease: "power2.out",
    });
  }
}

function closeProject() {
  dialog.classList.remove("is-open");
  dialog.hidden = true;
  lastProjectTrigger?.focus();
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    lastProjectTrigger = card;
    openProject(card.dataset.project);
  });
});

closeDialogButton.addEventListener("click", closeProject);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dialog.hidden) closeProject();

  if (event.key === "Tab" && !dialog.hidden) {
    const focusable = [...dialog.querySelectorAll("button:not(:disabled), a[href]")];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

if (!reduceMotion && window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({ defaults: { ease: "power4.out" } })
    .from(".site-header", { y: -30, opacity: 0, duration: 0.8 })
    .from(".hero-line > span", { yPercent: 115, duration: 1.15, stagger: 0.13 }, "-=0.35")
    .from(".hero-reveal", { y: 28, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.7")
    .from(".hero-orb", { scale: 0, duration: 1.1, stagger: 0.1 }, "-=1");

  gsap.to(".orb-one", {
    y: 80,
    rotation: 25,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(".orb-two", {
    y: -100,
    x: 50,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(".code-card", {
    y: -70,
    rotation: -2,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(".marquee-track", {
    xPercent: -50,
    ease: "none",
    duration: 24,
    repeat: -1,
  });

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 87%",
        once: true,
      },
    });
  });

  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.from(card, {
      y: 90,
      opacity: 0,
      duration: 1.05,
      delay: index % 2 ? 0.1 : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        once: true,
      },
    });

    const visual = card.querySelector(".project-visual");
    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      gsap.to(visual, {
        rotationY: x * 5,
        rotationX: y * -5,
        scale: 0.99,
        duration: 0.35,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(visual, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.55,
        ease: "power3.out",
      });
    });
  });

  const dot = document.querySelector(".cursor-dot");

  if (window.matchMedia("(pointer: fine)").matches) {
    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 1 });
    const moveX = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3" });
    const moveY = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3" });

    window.addEventListener("mousemove", (event) => {
      moveX(event.clientX);
      moveY(event.clientY);
    });

    document.querySelectorAll("a, button:not(:disabled)").forEach((interactive) => {
      interactive.addEventListener("mouseenter", () => gsap.to(dot, { scale: 2.7, duration: 0.25 }));
      interactive.addEventListener("mouseleave", () => gsap.to(dot, { scale: 1, duration: 0.25 }));
    });
  }

  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      gsap.to(element, { x: x * 0.18, y: y * 0.18, duration: 0.3 });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.35)" });
    });
  });
}
