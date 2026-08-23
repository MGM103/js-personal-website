/**********************************************************************
 * Data
 **********************************************************************/
export const skillsContent = {
  frontend: [
    {
      id: "react",
      title: "React",
      description: `
      <p>
        I first tinkered with React in the class-based components era with React 15, since then I have built and maintained react applications ranging in size from personal projects to enterprise systems.
      </p>
      <p>
        I have built and maintained applications ranging from personal projects to enterprise systems for multinational insurance clients, and I am comfortable contributing to React projects of all sizes. My experience extends across the wider React ecosystem, including TanStack Query, Zustand, Redux, Zod, and Axios. I have designed scalable component architectures, managed complex client-side state, integrated frontend applications with backend APIs, and place a strong emphasis on performance by analysing render behaviour, eliminating unnecessary re-renders, and applying optimisation techniques where they provide measurable benefit.
      </p>
      <p>
        Alongside commercial development, I have also contributed to technical enablement by creating a <a class="external-link" href="https://github.com/MGM103/My_First_MFE" target="_blank">React microfrontend tutorial</a> that was used to introduce the architecture to developers on a national insurance engagement.
      </p>
      `,
    },
    {
      id: "next",
      title: "Next",
      description:
        "Used in my current job, it's react with extra bells and whistles.",
    },
    {
      id: "vue",
      title: "Vue",
      description: "Vue is underrated honestly.",
    },
    {
      id: "svelte",
      title: "Svelte",
      description: "Simplicity, return to a more vanilla js like framework.",
    },
    {
      id: "angular",
      title: "Angular",
      description: "Honestly never used this.",
    },
    {
      id: "html5",
      title: "HTML5",
      description: "The fundamental building block of web front ends.",
    },
    {
      id: "css3",
      title: "CSS3",
      description: "The style mechanism of the web.",
    },
    {
      id: "tailwind",
      title: "Tailwind",
      description:
        "Honestly just learn css or create your own utility classes.",
    },
    {
      id: "javascript",
      title: "JavaScript",
      description:
        "The language of the web, I've been writing it for years across frontend and backend projects.",
    },
    {
      id: "typescript",
      title: "TypeScript",
      description:
        "Every serious project I work on uses TypeScript. Static types save time and bugs.",
    },
    {
      id: "vite",
      title: "Vite",
      description:
        "My go-to build tool for modern frontend projects. Fast dev server and instant HMR.",
    },
    {
      id: "htmx",
      title: "HTMX",
      description:
        "Explored it for simpler server-driven UIs. A refreshing take on interactivity without heavy JS.",
    },
  ],
  backend: [
    {
      id: "node-js",
      title: "Node.js",
      description:
        "Built numerous backend services and APIs with Node.js throughout my career.",
    },
    {
      id: "express",
      title: "Express",
      description:
        "My default HTTP framework for Node.js. Simple, flexible, gets the job done.",
    },
    {
      id: "drizzle-orm",
      title: "Drizzle ORM",
      description:
        "Used Drizzle for type-safe database queries. Lightweight and SQL-like, which I appreciate.",
    },
    {
      id: "python",
      title: "Python",
      description:
        "Used in various backend and data-related projects. Great for scripting and rapid prototyping.",
    },
    {
      id: "go",
      title: "Go",
      description:
        "Explored Go for performance-critical services. Concurrency primitives and simplicity are its strengths.",
    },
    {
      id: "c-net",
      title: "C#/.NET",
      description:
        "Used C# in professional settings for backend development. A robust and well-structured ecosystem.",
    },
    {
      id: "php",
      title: "PHP",
      description:
        "Worked with PHP in earlier career stages. Still powers a huge portion of the web.",
    },
    {
      id: "postgresql",
      title: "PostgreSQL",
      description:
        "My preferred relational database. Powerful, reliable, and feature-rich.",
    },
    {
      id: "mysql",
      title: "MySQL",
      description:
        "Used MySQL in multiple production environments. A solid and widely adopted database.",
    },
    {
      id: "sqlite",
      title: "SQLite",
      description:
        "Perfect for lightweight apps and local development. I use it in personal projects frequently.",
    },
    {
      id: "mongodb",
      title: "MongoDB",
      description:
        "Used MongoDB for projects requiring flexible schemas and document-based storage.",
    },
    {
      id: "graphql",
      title: "GraphQL",
      description:
        "Implemented GraphQL APIs for clients needing flexible data querying. Powerful but requires discipline.",
    },
  ],
  devops: [
    {
      id: "azure-cloud",
      title: "Azure Cloud",
      description:
        "Deployed and managed cloud infrastructure on Azure in my current role.",
    },
    {
      id: "azure-devops",
      title: "Azure DevOps",
      description:
        "Used Azure DevOps for CI/CD pipelines and work item tracking in professional projects.",
    },
    {
      id: "amazon-web-services",
      title: "Amazon Web Services",
      description:
        "Worked with various AWS services for hosting, storage, and compute needs.",
    },
    {
      id: "docker",
      title: "Docker",
      description:
        "Containerized applications for consistent development and deployment environments.",
    },
    {
      id: "kubernetes",
      title: "Kubernetes",
      description:
        "Managed container orchestration for scaling applications in production.",
    },
    {
      id: "git",
      title: "Git",
      description:
        "Version control is essential. I use Git daily and follow best practices for branching and collaboration.",
    },
    {
      id: "github",
      title: "GitHub",
      description:
        "My primary platform for code hosting, collaboration, and open source contributions.",
    },
    {
      id: "github-actions",
      title: "GitHub Actions",
      description:
        "Set up automated workflows for CI/CD, testing, and deployment across projects.",
    },
    {
      id: "terraform",
      title: "Terraform",
      description:
        "Used Terraform for infrastructure as code. Declarative and reproducible infrastructure is the way.",
    },
    {
      id: "linux",
      title: "Linux",
      description:
        "Daily Linux user. Most of my development and deployment happens on Linux systems.",
    },
    {
      id: "bash",
      title: "Bash",
      description:
        "Write shell scripts regularly for automation, build tasks, and system administration.",
    },
    {
      id: "yaml",
      title: "YAML",
      description:
        "Used extensively in configuration files for CI/CD, Docker Compose, Kubernetes, and more.",
    },
  ],
  other: [
    {
      id: "c",
      title: "C",
      description:
        "Learned C for understanding low-level computing. Essential for systems programming knowledge.",
    },
    {
      id: "c++",
      title: "C++",
      description:
        "Explored C++ for performance-critical and systems-level programming projects.",
    },
    {
      id: "rust",
      title: "Rust",
      description:
        "Learning Rust for its memory safety guarantees and systems programming capabilities.",
    },
    {
      id: "solidity",
      title: "Solidity",
      description:
        "Explored smart contract development on Ethereum. Fascinated by blockchain technology.",
    },
    {
      id: "hardhat",
      title: "Hardhat",
      description:
        "Used Hardhat as the development environment for building and testing Solidity smart contracts.",
    },
    {
      id: "web-assembly",
      title: "WebAssembly",
      description:
        "Explored WASM for running high-performance code in the browser alongside JavaScript.",
    },
    {
      id: "apache-spark",
      title: "Apache Spark",
      description:
        "Used Spark for large-scale data processing tasks in data engineering projects.",
    },
    {
      id: "cucumber",
      title: "Cucumber",
      description:
        "Used Cucumber for behavior-driven development to write clear, readable acceptance tests.",
    },
    {
      id: "playwright",
      title: "Playwright",
      description:
        "My preferred tool for end-to-end testing. Reliable cross-browser automation.",
    },
    {
      id: "jest",
      title: "Jest",
      description:
        "Go-to testing framework for JavaScript projects. Fast, reliable, and easy to set up.",
    },
    {
      id: "storybook",
      title: "Storybook",
      description:
        "Used Storybook for developing and documenting UI components in isolation.",
    },
    {
      id: "neovim",
      title: "NeoVim",
      description:
        "My editor of choice. Configured with Lua for a fast and efficient development workflow.",
    },
  ],
};

/**********************************************************************
 * DOM Elements
 **********************************************************************/
// Menu
let activeCategory = "frontend";
const skillsSidePanel = document.getElementById("skills-side-panel");

// Icon grid
const ICON_SPRITE = "/assets/icons.svg";
const skillsContainer = document.querySelector(".skills-container");

// Modal
const skillModal = document.getElementById("skill-modal");
const skillModalTitleEl = document.getElementById("skill-title");
const skillModalContentEl = document.getElementById("skill-content");
const skillIconEl = document.getElementById("skill-icon");

/**********************************************************************
 * Rendering
 **********************************************************************/
function getIcon(skillId) {
  return `
    <svg
      class="skill-icon"
      aria-hidden="true"
      focusable="false"
    >
      <use href="${ICON_SPRITE}#${skillId}"></use>
    </svg>
    <div id="icon-reflection"></div>
  `;
}

function renderSkillButton(skill) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "ghost-btn";
  button.dataset.skill = skill.id;
  button.title = skill.title;
  button.setAttribute("aria-label", skill.title);

  button.innerHTML = getIcon(skill.id);

  return button;
}

function renderSkillCategory(category) {
  skillsContainer.replaceChildren();

  for (const skill of skillsContent[category]) {
    skillsContainer.append(renderSkillButton(skill));
  }
}

function renderSkillModal(skill) {
  skillModalTitleEl.textContent = skill.title;
  skillModalContentEl.innerHTML = skill.description;

  skillIconEl.innerHTML = getIcon(skill.id);

  skillModal.showModal();
}

/**********************************************************************
 * Event Handlers
 **********************************************************************/

function onCategoryClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const category = button.dataset.target;
  if (!category) return;

  activeCategory = category;

  skillsSidePanel.querySelector(".active")?.classList.remove("active");

  button.classList.add("active");

  renderSkillCategory(category);
}

function onSkillClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const skill = skillsContent[activeCategory].find(
    (skill) => skill.id === button.dataset.skill,
  );

  if (!skill) return;

  renderSkillModal(skill);
}

/**********************************************************************
 * Initialiser
 **********************************************************************/
export function initaliseSkills() {
  skillsSidePanel.addEventListener("click", onCategoryClick);
  skillsContainer.addEventListener("click", onSkillClick);

  skillModal.addEventListener("click", (event) => {
    if (event.target === skillModal) skillModal.close();
  });

  renderSkillCategory(activeCategory);
}
