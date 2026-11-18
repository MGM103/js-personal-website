/**********************************************************************
 * Data
 **********************************************************************/
const EXTERNAL_LINKS = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/marcus-marinelli-b1a10b1a0/",
	},
	{ label: "GitHub", href: "https://github.com/MGM103" },
];

// Paths are relative to the site root; each page passes the prefix that gets
// from its own directory back to the root ("" for index.html, "../" for
// pages/, "../../" for pages/blog/).
const PAGE_LINKS = [
	{ id: "home", label: "Home", href: "index.html" },
	{ id: "cv", label: "CV", href: "pages/cv.html" },
	{ id: "blog", label: "Blog", href: "pages/blog.html" },
];

/**********************************************************************
 * DOM Elements
 **********************************************************************/
let mobileNavTrigger;
let mobileNavDialog;

let pushedHistoryEntry = false;

/**********************************************************************
 * Rendering
 **********************************************************************/
function renderTrigger() {
	const button = document.createElement("button");

	button.type = "button";
	button.className = "mobile-nav-trigger";
	button.setAttribute("aria-label", "Open navigation menu");
	button.setAttribute("aria-haspopup", "dialog");
	button.setAttribute("aria-controls", "mobile-nav-modal");
	button.innerHTML = "M<sup>2</sup>";

	return button;
}

function renderNavItem({ label, href, external, current }) {
	const item = document.createElement("li");
	const link = document.createElement("a");

	link.href = href;
	link.textContent = label;

	if (external) {
		link.target = "_blank";
		link.rel = "noopener";
	}

	if (current) link.setAttribute("aria-current", "page");

	item.append(link);
	return item;
}

function renderDialog(currentPage, base) {
	const dialog = document.createElement("dialog");
	const nav = document.createElement("nav");
	const list = document.createElement("ul");
	const closeButton = document.createElement("button");

	dialog.id = "mobile-nav-modal";
	dialog.className = "mobile-nav-modal";
	dialog.setAttribute("aria-label", "Navigation");

	list.className = "mobile-nav-list";
	list.append(
		...PAGE_LINKS.map((link) =>
			renderNavItem({
				...link,
				href: `${base}${link.href}`,
				external: false,
				current: link.id === currentPage,
			}),
		),
		...EXTERNAL_LINKS.map((link) =>
			renderNavItem({ ...link, external: true }),
		),
	);

	nav.append(list);

	closeButton.type = "button";
	closeButton.className = "outline-btn mobile-nav-close";
	closeButton.textContent = "Close";
	closeButton.setAttribute("command", "close");
	closeButton.setAttribute("commandfor", dialog.id);

	// Declarative invoker commands are not supported everywhere yet. Attaching
	// the fallback unconditionally would close the dialog in JS first and make
	// the browser's own close command warn that it is already closed.
	if (!("command" in HTMLButtonElement.prototype)) {
		closeButton.addEventListener("click", () => dialog.close());
	}

	dialog.append(nav, closeButton);
	return dialog;
}

/**********************************************************************
 * Event Handlers
 **********************************************************************/
function openNav() {
	if (mobileNavDialog.open) return;

	// One history entry backs the open menu, so the browser Back button
	// dismisses it like any other layer.
	history.pushState({ mobileNav: true }, "");
	pushedHistoryEntry = true;

	mobileNavDialog.showModal();
}

function onDialogClose() {
	if (!pushedHistoryEntry) return;

	pushedHistoryEntry = false;
	history.back();
}

function onDialogClick(event) {
	if (event.target === mobileNavDialog) mobileNavDialog.close();
}

function onPopState() {
	if (!mobileNavDialog.open) return;

	// The history entry is being consumed by this pop, so closing the dialog
	// must not pop another one.
	pushedHistoryEntry = false;
	mobileNavDialog.close();
}

/**********************************************************************
 * Initialiser
 **********************************************************************/
export function initialiseMobileNav(currentPage, { base = "" } = {}) {
	mobileNavTrigger = renderTrigger();
	mobileNavDialog = renderDialog(currentPage, base);

	// The trigger replaces the navbar, so it belongs before the page content
	// in the reading and tab order as well as in the bottom-right corner.
	document.body.prepend(mobileNavTrigger);
	document.body.append(mobileNavDialog);

	mobileNavTrigger.addEventListener("click", openNav);
	mobileNavDialog.addEventListener("click", onDialogClick);
	mobileNavDialog.addEventListener("close", onDialogClose);
	window.addEventListener("popstate", onPopState);

	// Opening the menu on a phone and widening the window would otherwise
	// leave a mobile-only menu on top of the desktop navbar.
	const desktopQuery = window.matchMedia("(min-width: 769px)");

	desktopQuery.addEventListener("change", (event) => {
		if (event.matches) mobileNavDialog.close();
	});
}
