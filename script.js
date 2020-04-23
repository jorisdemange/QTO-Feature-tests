var leftMenu = document.getElementById("left-menu");
var dimmer = document.getElementById("dimmer");
var leftMenuHamburger = document.getElementById("left-menu-hamburger");

var debugHamburger = document.getElementById("debug-hamburger");
var debugHamburgerTxt = document.getElementById("debug-hamburger-txt");

function openMenu() {
	dimmer.classList.add("dimmer--open");
	leftMenu.classList.add("left-menu--open");
}

function closeMenu() {
	dimmer.classList.remove("dimmer--open");
	leftMenu.classList.remove("left-menu--open");
}

// Detects a click on the hamburger icon, Method 1
leftMenuHamburger.addEventListener("click", openMenu());

// Debug
debugHamburger.addEventListener("click", function() {
	openMenu();
	debugHamburgerTxt.textContent = "Clicked on the hamburger!";
});

// When menu is open
document.addEventListener("click", (evt) => {
	let targetElement = evt.target; // Clicked element

	do {
		if (targetElement == debugHamburger) {
			// Detects a click on the debug hamburger
			debugHamburgerTxt.textContent = "Clicked on the debug";
			openMenu();
			//dimmer.classList.add("dimmer--open");
			//leftMenu.classList.add("left-menu--open");

		} else if (targetElement == leftMenuHamburger) {
			// Detects a click on the hamburger icon, Method 2
			debugHamburgerTxt.textContent = "Clicked on the hamburger";
			openMenu()
			
		} else if (targetElement == leftMenu) {
			// Detects a click in the menu
			document.getElementById("menuDebug").textContent = "Clicked in the menu";
			return;
		}
		targetElement = targetElement.parentNode;
	} while (targetElement);

	//Detects a click outside of the menu
	document.getElementById("menuDebug").textContent = "Clicked outside the menu";
	closeMenu();
});