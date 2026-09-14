// 1. Mobile Menu Toggle Function
function toggleMenu() {
    let menu = document.getElementById("menuList");
    menu.classList.toggle("show");
}

// Highlight the current page in the nav
document.addEventListener("DOMContentLoaded", () => {
    let current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("#menuList a").forEach(link => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active-link");
        }
    });
});

// 2. Image Carousel Slider Function
let currentSlide = 0;

function changeSlide(direction) {
    let slides = document.querySelectorAll(".slide");
    
    slides[currentSlide].classList.remove("active");
    currentSlide = currentSlide + direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}

// 3. Modal Popup Functions
function openModal(title, price, desc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("foodModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("foodModal").style.display = "none";
}

// 4. Gallery Filter Function
function filterGallery(e, category) {
    let items = document.querySelectorAll('.gallery-item');
    let buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (e && e.target) {
        e.target.classList.add('active');
    }

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 5. Contact Form Validation Function
function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let feedback = document.getElementById("formFeedback");

    if (name === "" || email === "" || message === "") {
        feedback.style.color = "red";
        feedback.innerText = "Please fill in all fields.";
    } else if (!email.includes("@") || !email.includes(".")) {
        feedback.style.color = "red";
        feedback.innerText = "Please enter a valid email address.";
    } else {
        feedback.style.color = "green";
        feedback.innerText = "Thank you! Your message has been sent successfully.";
        document.getElementById("contactForm").reset();
    }
}
