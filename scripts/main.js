import { initaliseSkills } from "./skills.js";

initaliseSkills();
const footer = document.querySelector("footer");
footer.textContent = `© ${new Date().getFullYear()} Marcus Marinelli`;
