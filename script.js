var leftMenu = document.getElementById("left-menu");
var dimmer = document.getElementById("dimmer");
var leftMenuBurger = document.getElementById("left-menu-burger");

function openMenu() {
	dimmer.classList.add("dimmer--open");
	leftMenu.classList.add("left-menu--open");
}

function closeMenu() {
	dimmer.classList.remove("dimmer--open");
	leftMenu.classList.remove("left-menu--open");
}

// When menu is closed
leftMenuBurger.addEventListener("click", openMenu());

// When menu is open
document.addEventListener("click", (evt) => {
	let targetElement = evt.target; // clicked element

	do {
		if (targetElement == leftMenu) {
			//Detects a click in the menu
			document.getElementById("menuDebug").textContent = "Clicked in the menu!";
			return;
		}
		targetElement = targetElement.parentNode;
	} while (targetElement);

	//Detects a click outside of the menu
	document.getElementById("menuDebug").textContent = "Clicked outside the menu!";
	closeMenu();
});