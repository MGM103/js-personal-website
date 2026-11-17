/**********************************************************************
 * Rendering
 **********************************************************************/
function syncHeaderBlur() {
	const header = document.querySelector("header");

	header.classList.toggle("is-scrolled", window.scrollY > 0);
}

/**********************************************************************
 * Initialiser
 **********************************************************************/
export function initialiseNavbar() {
	window.addEventListener("scroll", syncHeaderBlur, { passive: true });

	syncHeaderBlur();
}
