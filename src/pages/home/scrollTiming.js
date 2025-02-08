export function filterMenuAnimation() {
	const filterMenu = document.querySelector(".filterMenu");
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("animat", entry.isIntersecting);
		});
	});
	observer.observe(filterMenu);
}

export function lazyloadMovies() {
	// Select ALL card containers
	const movieCards = document.querySelectorAll(".cardContainer");

	// Create observer with intersection detection
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("load");
				} else {
					entry.target.classList.remove("load");
				}
			});
		},
		{
			threshold: 0.2,
			rootMargin: "100px",
		}
	);

	movieCards.forEach((card) => {
		if (card) {
			observer.observe(card);
		} else {
			console.error("Card element not found!");
		}
	});
}
