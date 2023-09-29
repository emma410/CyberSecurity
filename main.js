function toggleMenu() {
    const navList = document.getElementById('navList');
    navList.style.display === 'none' || navList.style.display === ''
        ? navList.style.display = 'flex'
        : navList.style.display = 'none';
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); 
}

function subscribe() {
    const emailInput = document.getElementById("subscribeEmail");
    const email = emailInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.textContent = "Thank you for subscribing!";

        const previousSuccessMessage = document.querySelector(".success-message");
        if (previousSuccessMessage) {
            previousSuccessMessage.remove();
        }

        const footer = document.querySelector(".footer");
        document.body.insertBefore(successMessage, footer.nextSibling);

        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
}