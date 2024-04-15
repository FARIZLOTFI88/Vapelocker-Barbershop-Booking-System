// Get references to the search icon and search box
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');

// Function to toggle the visibility of the search box
function toggleSearchBox() {
    searchBox.classList.toggle('active');
}

// Event listener for the search icon click
searchIcon.addEventListener('click', toggleSearchBox);


let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header 
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});




function showAppointmentForm(carModel) {
    document.getElementById("appointment-car-model").value = carModel;
    document.getElementById("appointment-form").style.display = "block";
}
