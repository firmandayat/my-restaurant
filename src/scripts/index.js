import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

const toggle = document.querySelector(".toggle-btn");
const toggleBtn = document.querySelector(".toggle-btn i");
const dropDown = document.querySelector(".dropdown-menu");

toggle.onclick = function () {
  dropDown.classList.toggle("open");
  const isOpen = dropDown.classList.contains("open");

  toggleBtn.classList = isOpen ? "fa fa-times" : "fa-solid fa-bars";
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/DATA.json")
    .then((response) => response.json())
    .then((data) => {
      const restaurantList = document.getElementById("restaurant-list");

      data.restaurants.forEach(function (restaurant) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.innerHTML = `
                    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
                    <div class="container-card">
                        <h4><b>${restaurant.name}</b></h4>
                        <p><strong>Kota:</strong> ${restaurant.city}</p>
                        <p><strong>Rating:</strong> ${restaurant.rating}</p>
                        <button>Detail</button>
                    </div>
                `;

        restaurantList.appendChild(cardDiv);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
});
