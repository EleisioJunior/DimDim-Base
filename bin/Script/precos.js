const lista = document.querySelectorAll('h6[name="valor-preco"]');

lista.forEach((element) => {
	if (element.textContent.includes("-")) {
		element.classList.add("preco_negativo");
	} else {
		element.classList.add("preco_positivo");
	}
});
