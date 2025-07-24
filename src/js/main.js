import Alpine from "alpinejs";
import { formControl } from "../js/app.js";

window.Alpine = Alpine;
Alpine.data("formControl", formControl);
Alpine.start();
