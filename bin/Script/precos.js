const lista = document.querySelectorAll('h6[name="valor-preco"]');

lista.forEach((element) => {
	if (element.textContent.includes("-")) {
		element.classList.add("preco_negativo");
	} else {
		element.classList.add("preco_positivo");
	}
});
function onchangedo() {
	const lista_option = document.querySelectorAll(
		'input[name = "Offcanvas_result"]'
	);
	lista_option.forEach((element) => {
		let label = document.querySelector(`label[for="${element.id}"]`);
		if (element.checked) {
			label.style.fontWeight = "bold";
			document.getElementById("menutext").innerText = label.textContent;
		} else {
			label.style.fontWeight = "200";
		}
	});
}
onchangedo();
function sumir() {
	document.getElementById("sumir").style.display = "none";
}
function aparece() {
	document.getElementById("sumir").style.display = "flex";
}
