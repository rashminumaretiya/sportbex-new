const accordionButtons = document.querySelectorAll("#benefits .accordion-button");
const dynamicImage = document.getElementById("dynamicImage");
const accordionItems = document.querySelectorAll("#benefits .accordion-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const imageUrls = Array.from(accordionButtons).map((button) =>
  button.getAttribute("data-image")
);
let currentIndex = 0;
let autoplayInterval;

function expandAccordion(index) {
  accordionItems.forEach((item, i) => {
    const content = item.querySelector(".accordion-collapse");
    const button = accordionButtons[i];

    if (i === index) {
      content.classList.add("show");
      button.classList.remove("collapsed");
      item.classList.add("active-item");
    } else {
      content.classList.remove("show");
      button.classList.add("collapsed");
      item.classList.remove("active-item");
    }
  });
  dynamicImage.src = imageUrls[index];
  currentIndex = index;
}

accordionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    expandAccordion(index);
    resetAutoplay(index);
  });
});

function autoplay() {
  const nextIndex = (currentIndex + 1) % accordionButtons.length;
  expandAccordion(nextIndex);
}

function resetAutoplay(index) {
  clearInterval(autoplayInterval);
  expandAccordion(index);
  autoplayInterval = setInterval(autoplay, 5000);
}

prevBtn.addEventListener("click", () => {
  let prevIndex =
    (currentIndex - 1 + accordionButtons.length) % accordionButtons.length;
  expandAccordion(prevIndex);
  resetAutoplay(prevIndex);
});

nextBtn.addEventListener("click", () => {
  let nextIndex = (currentIndex + 1) % accordionButtons.length;
  expandAccordion(nextIndex);
  resetAutoplay(nextIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  expandAccordion(0);
  autoplayInterval = setInterval(autoplay, 5000);
});
