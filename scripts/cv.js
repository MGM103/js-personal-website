import { initialiseFooter } from "./components/footer.js";
import { initialiseMobileNav } from "./components/mobile-nav.js";
import { initialiseNavbar } from "./components/navbar.js";
import { initialisePrint } from "./components/print.js";

initialiseNavbar();
initialiseMobileNav("cv", { base: "../" });
initialisePrint();
initialiseFooter();
