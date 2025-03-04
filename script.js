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
function sendMessage() {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
}
