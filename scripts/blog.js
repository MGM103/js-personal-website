import { initialiseFooter } from "./components/footer.js";
import { initialiseMobileNav } from "./components/mobile-nav.js";
import { initialiseNavbar } from "./components/navbar.js";

initialiseNavbar();
initialiseMobileNav("blog", { base: "../" });
initialiseFooter();
