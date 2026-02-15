document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const images = document.querySelectorAll("#game-pi-gi img");
    const closeBtn = document.querySelector(".lightbox-close");
    const nextBtn = document.querySelector(".lightbox-next");
    const prevBtn = document.querySelector(".lightbox-prev");

    let currentIndex = 0;

    function showImage(index) {
        const img = images[index];
        lightboxImg.src = img.src;
        lightboxTitle.textContent = img.title || img.alt || "";
    }

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            lightbox.style.display = "flex";
            showImage(currentIndex);
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "Escape") lightbox.style.display = "none";
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "ArrowLeft") prevBtn.click();
        }
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});


document.querySelectorAll("#game-pi-gi img").forEach(img => img.setAttribute("tabindex","0"));
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightbox.setAttribute('aria-hidden', 'false');
  showImage(currentIndex);
  document.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightbox.setAttribute('aria-hidden', 'true');
}
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.matches('#game-pi-gi img')) {
    e.preventDefault();
    document.activeElement.click();
  }
});
