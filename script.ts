document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.querySelector('section p');

    welcomeMessage.addEventListener('click', function() {
        alert('Hello, Web Developer!');
    });
});