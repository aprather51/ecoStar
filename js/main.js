//fade in on load
const page = document.documentElement;
window.onload = fadeIn;

function fadeIn() {
	page.style.opacity = '1';
}

//preload with zero animation
setTimeout(function() {
	document.body.className = '';
}, 500);

//menu
let slideMenu = document.querySelector('#side-menu');

// Open Side Menu
function openSideMenu() {
	slideMenu.classList.add('show');
	document.body.style.overflow = 'hidden';
}

// Close Side Menu
function closeSideMenu() {
	slideMenu.classList.remove('show');
	document.body.style.overflow = 'auto';
}

// Expectional for delay close when sign up pressed
function delayClose() {
	setTimeout(closeSideMenu, 500);
}

// Hide/Show Menu on Scroll
let prevScroll = window.pageYOffset;
window.onscroll = hideMenuOnScroll;

function hideMenuOnScroll() {
	const currentScroll = window.pageYOffset;

	if (prevScroll > currentScroll) {
		document.getElementById('menu-icon').style.top = '10px';
	} else {
		document.getElementById('menu-icon').style.top = '-150px';
	}

	prevScroll = currentScroll;
}
