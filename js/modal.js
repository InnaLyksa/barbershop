// (() => {
// 	const refs = {
// 		openModalBtn: document.querySelector("[data-modal-open]"),
// 		closeModalBtn: document.querySelector("[data-modal-close]"),
// 		modal: document.querySelector("[data-modal]"),
// 	};

// 	refs.openModalBtn.addEventListener("click", toggleModal);
// 	refs.closeModalBtn.addEventListener("click", toggleModal);

// 	function toggleModal() {
// 		refs.modal.classList.toggle("is-hidden");
// 	}
// })();

// const refs = {
// 	openModalBtn: document.querySelector(".js-open-modal"),
// 	closeModalBtn: document.querySelector(".js-modal-close"),
// 	backdrop: document.querySelector(".js-overlay-modal"),
// };

// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.backdrop.addEventListener("click", onBackDropClick);

// function onOpenModal() {
// 	window.addEventListener("keydown", onEscapeKeypress);
// 	document.body.classList.add("active");
// }

// function onCloseModal() {
// 	window.removeEventListener("keydown", onEscapeKeypress);
// 	document.body.classList.remove("active");
// }

// function onBackDropClick(event) {
// 	console.log(event.currentTarget);
// 	console.log(event.target);
// 	if (event.currentTarget === event.target) {
// 		onCloseModal();
// 	}
// }

// function onEscapeKeypress(event) {
// 	console.log(event);
// 	console.log(event.code);
// 	if (event.code === "Escape") {
// 		onCloseModal();
// 	}
// }

// const refs = {
// 	openModalBtn: document.querySelector('[data-action="open-modal"]'),
// 	closeModalBtn: document.querySelector('[data-action="close-modal"]'),
// 	backdrop: document.querySelector(".js-backdrop"),
// };

// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.backdrop.addEventListener("click", onBackDropClick);

// function onOpenModal() {
// 	window.addEventListener("keydown", onEscapeKeypress);
// 	document.body.classList.add("show-modal");
// }

// function onCloseModal() {
// 	window.removeEventListener("keydown", onEscapeKeypress);
// 	document.body.classList.remove("show-modal");
// }

// function onBackDropClick(event) {
// 	console.log(event.currentTarget);
// 	console.log(event.target);
// 	if (event.currentTarget === event.target) {
// 		onCloseModal();
// 	}
// }

// function onEscapeKeypress(event) {
// 	console.log(event);
// 	console.log(event.code);
// 	if (event.code === "Escape") {
// 		onCloseModal();
// 	}
// }
