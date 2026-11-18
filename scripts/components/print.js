/**********************************************************************
 * Initialiser
 **********************************************************************/
export function initialisePrint() {
	const printButton = document.getElementById("cv-print");
	if (!printButton) return;

	printButton.addEventListener("click", window.print());
}
