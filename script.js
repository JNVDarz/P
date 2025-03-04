document.addEventListener("DOMContentLoaded", function () {
    loadReviews();
});

function addReview() {
    const name = document.getElementById("reviewerName").value;
    const text = document.getElementById("reviewText").value;

    if (name.trim() === "" || text.trim() === "") {
        alert("Please fill out both fields.");
        return;
    }

    const review = { name, text };
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewText").value = "";
    
    loadReviews();
}

function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewsContainer = document.getElementById("reviews");
    reviewsContainer.innerHTML = "";

    reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<strong>${review.name}</strong><p>${review.text}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });
}
