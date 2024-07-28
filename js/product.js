function changeImage(imageSrc) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = imageSrc;
}


function toggleDropdown(event) {
  event.stopPropagation();
  const dropdown = event.currentTarget.querySelector(".dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function updateButtonState(button) {
  const quantityElement = button.parentElement.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  const decreaseButton = button.parentElement.querySelector(".quantity-btn:first-child");
  decreaseButton.disabled = quantity === 0;
}

function increaseQuantity(button, event) {
  event.stopPropagation();
  const quantityElement = button.parentElement.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = quantity + 1;
  updateButtonState(button);
}

function decreaseQuantity(button, event) {
  event.stopPropagation();
  const quantityElement = button.parentElement.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
  }
  updateButtonState(button);
}

document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target) && !dropdown.parentElement.contains(event.target)) {
          dropdown.style.display = "none";
      }
  });
});

document.querySelectorAll(".quantity-btn").forEach((button) => {
  updateButtonState(button);
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}

function initMap() {
  const hotelLocation = { lat: 10.8231, lng: 106.6297 }; // Replace with actual coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: hotelLocation,
  });
  const marker = new google.maps.Marker({
      position: hotelLocation,
      map: map,
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  initMap();
});
