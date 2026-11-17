/**********************************************************************
 * Data
 **********************************************************************/
import { skillsContent } from "./skills.data.js";

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
