document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.querySelector('section p');

    welcomeMessage.addEventListener('click', function() {
        alert('Hello, Web Developer!');
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}