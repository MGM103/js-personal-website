/**********************************************************************
 * Initialiser
 **********************************************************************/
export function initialiseFooter() {
	const copyright = document.querySelector("footer .copyright");
	if (!copyright) return;

	copyright.textContent = `© ${new Date().getFullYear()} Marcus Marinelli`;
}
