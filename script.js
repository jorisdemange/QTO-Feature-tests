var leftMenu = document.getElementById("left-menu");
var dimmer = document.getElementById("dimmer");
var leftMenuBurger = document.getElementById("left-menu-burger");

var debugBurger = document.getElementById("debug-burger");
var debugBurgerTxt = document.getElementById("debug-burger-txt");

function openMenu() {
	dimmer.classList.add("dimmer--open");
	leftMenu.classList.add("left-menu--open");
}

function closeMenu() {
	dimmer.classList.remove("dimmer--open");
	leftMenu.classList.remove("left-menu--open");
}

// Detects a click on the hamburger icon, Method 1
leftMenuBurger.addEventListener("click", openMenu());

// Debug
debugBurger.addEventListener("click", function() {
	openMenu();
	debugBurgerTxt.textContent = "Clicked on the burger!";
});

// When menu is open
document.addEventListener("click", (evt) => {
	let targetElement = evt.target; // Clicked element

	do {
		if (targetElement == debugBurger) {
			// Detects a click on the hamburger icon, Method 2 
			debugBurgerTxt.textContent = "Clicked on the debug";
			openMenu();
			dimmer.classList.add("dimmer--open");
			leftMenu.classList.add("left-menu--open");

		} else if (targetElement == leftMenuBurger) {
			// Detects a click on the hamburger icon, Method 2
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