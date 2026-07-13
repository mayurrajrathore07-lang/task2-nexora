const getInTouchButton = document.querySelector('.get');
const learnMoreButtons = document.querySelectorAll('.button button, .learn, .read, .us');
const contactSection = document.querySelector('#contact');
const form = document.querySelector('.input');
const darkModeButton = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
	menuToggle.addEventListener('click', () => {
		navLinks.classList.toggle('active');
		const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!isExpanded));
	});
}

if (getInTouchButton && contactSection) {
	getInTouchButton.addEventListener('click', () => {
		contactSection.scrollIntoView({ behavior: 'smooth' });
	});
}

learnMoreButtons.forEach((button) => {
	button.addEventListener('click', () => {
		alert('Currently not available.');
	});
});

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		alert('Thanks for your message! We will contact you soon.');
		form.reset();
	});
}

if (darkModeButton) {
	darkModeButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
	});
}