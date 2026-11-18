import { initialiseFooter } from "./components/footer.js";
import { initialiseMobileNav } from "./components/mobile-nav.js";
import { initialiseNavbar } from "./components/navbar.js";

initialiseNavbar();
// Articles live one directory below the blog feed, so links back to the site
// root need one more prefix.
initialiseMobileNav("blog", { base: "../../" });
initialiseFooter();
