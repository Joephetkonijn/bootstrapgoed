function filterCards() {
	var input, filter, cardContainer, cards, cardTitle, i, txtValue;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	cardContainer = document.getElementById("cardContainer");
	cards = cardContainer.getElementsByClassName("col-sm-6");

	for (i = 0; i < cards.length; i++) {
		cardTitle = cards[i].querySelector(".card-title");
		txtValue = cardTitle.textContent || cardTitle.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			cards[i].style.display = "";
		} else {
			cards[i].style.display = "none";
		}
	}

	var visibleCards = cardContainer.querySelectorAll(
		'.col-sm-6:not([style*="display: none"])'
	);
	var fragment = document.createDocumentFragment();
	Array.from(visibleCards).forEach(function (card) {
		fragment.appendChild(card);
	});
	cardContainer.appendChild(fragment);
}
