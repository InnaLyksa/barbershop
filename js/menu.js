// (() => {
// 	const menuBtnRef = document.querySelector("[data-menu-button]");
// 	const mobileMenuRef = document.querySelector("[data-menu]");

// 	const mobileOpen = document.querySelector("[data-open]");

// 	menuBtnRef.addEventListener("click", () => {
// 		const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

// 		menuBtnRef.classList.toggle("is-open");
// 		menuBtnRef.setAttribute("aria-expanded", !expanded);

// 		mobileMenuRef.classList.toggle("is-open");

// 		mobileOpen.classList.toggle("menu-open");
// 	});
// })();
(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
		body: document.querySelector("body"),
	};

	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.menu.classList.toggle("is-hidden");
		refs.body.classList.toggle("no-scroll");
	}
})();
