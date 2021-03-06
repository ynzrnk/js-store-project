import { getElement } from "../utilities/utilities.js";

const toggleBtn = getElement(".navbar-toggle-btn");
const closeSidebarBtn = getElement(".sidebar-close-btn");
const sidebar = getElement(".sidebar-overlay");

toggleBtn.addEventListener("click", (e) => {
    sidebar.classList.add("visible-opacity");
});

closeSidebarBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    sidebar.classList.remove("visible-opacity");
});
