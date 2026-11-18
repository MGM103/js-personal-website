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
const mobileBubble = skillsSidePanel.querySelector(".mobile-bubble");

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

// Active-tab bubble (mobile only)
let bubblePlaced = false;

// The bubble is display: none above the mobile breakpoint, so the breakpoint
// itself stays in CSS instead of being duplicated here.
function bubbleIsVisible() {
	return getComputedStyle(mobileBubble).display !== "none";
}

function updateBubble() {
	const activeButton = skillsSidePanel.querySelector(".menu-btn.active");

	if (!activeButton || !bubbleIsVisible()) {
		mobileBubble.style.removeProperty("height");
		mobileBubble.style.removeProperty("transform");
		mobileBubble.style.removeProperty("width");
		bubblePlaced = false;
		return;
	}

	const panelBox = skillsSidePanel.getBoundingClientRect();
	const buttonBox = activeButton.getBoundingClientRect();
	const snap = !bubblePlaced;

	if (snap) mobileBubble.classList.add("mobile-bubble--instant");

	// The bubble is positioned against the panel's padding box, so the panel
	// border has to be discounted from the viewport-based rects.
	mobileBubble.style.width = `${buttonBox.width}px`;
	mobileBubble.style.height = `${buttonBox.height}px`;
	mobileBubble.style.transform = `translate(${
		buttonBox.left - panelBox.left - skillsSidePanel.clientLeft
	}px, ${buttonBox.top - panelBox.top - skillsSidePanel.clientTop}px)`;

	if (snap) {
		// Flush the snapped position before transitions are re-enabled.
		void mobileBubble.offsetWidth;
		mobileBubble.classList.remove("mobile-bubble--instant");
	}

	bubblePlaced = true;
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

	updateBubble();

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
export function initialiseSkills() {
	skillsSidePanel.addEventListener("click", onCategoryClick);
	skillsContainer.addEventListener("click", onSkillClick);

	skillModal.addEventListener("click", (event) => {
		if (event.target === skillModal) skillModal.close();
	});

	renderSkillCategory(activeCategory);

	// Keep the bubble aligned through layout changes that don't involve a click
	// (breakpoint switches, rotation) and late-loading webfonts.
	new ResizeObserver(updateBubble).observe(skillsSidePanel);
	document.fonts?.ready.then(updateBubble);
	updateBubble();
}
