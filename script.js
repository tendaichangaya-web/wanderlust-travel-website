
function searchPlaces() {
  const search = document
    .getElementById("search")
    .value.toLowerCase();

  const cards = document.querySelectorAll(".card");
  let found = 0;

  cards.forEach(card => {
    const name = card.innerText.toLowerCase();

    if (name.includes(search)) {
      card.style.display = "block";
      found++;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("noResults").hidden = found !== 0;
}

document.getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").textContent =
      "Thank you! Your travel enquiry has been received.";

    this.reset();
  });
