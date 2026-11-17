/**********************************************************************
 * Initialiser
 **********************************************************************/
export function initialiseFooter() {
	const footer = document.querySelector("footer");
	footer.textContent = `© ${new Date().getFullYear()} Marcus Marinelli`;
}
