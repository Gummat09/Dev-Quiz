"Use strict";

const navigation = document.querySelector(".navigation-items");
const dropdown = document.getElementById("title");
const modals = document.querySelectorAll(".modal-wrapper");

function showMenu() {
  navigation.classList.toggle("active");
}

// console.log(modal[1]);
// console.log(dropdown.options[1].value);

function showPopup() {
  //I want to check if an option is selected
  //If an option is selected I want to show a modal that corresponds to its value

  // get the selected value
  const selectedValue = dropdown.value;

  // Hide All modals by default
  // modals.forEach((modal) => (modal.style.display = "none"));

  if (selectedValue !== "select") {
    const modalToShow = document.querySelector(
      `.modal-wrapper[value="${selectedValue}"]`
    );

    if (modalToShow) {
      modalToShow.style.display = "flex";
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  }
}

function closePopup(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = ""; // Enable scrolling
}
