// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach(link => {
link.addEventListener("click", () => {
navigation.classList.remove("open");
});
});

// Automatic copyright year

document.getElementById("year").textContent =
new Date().getFullYear();

// Scroll reveal animations

const revealElements = document.querySelectorAll(
".introduction, .portfolio-item, .about-content, .recognition, .contact"
);

revealElements.forEach(element => {
element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {

```
entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

    }

});
```

}, {
threshold: 0.12
});

revealElements.forEach(element => {
observer.observe(element);
});
