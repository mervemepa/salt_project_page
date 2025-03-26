document.addEventListener("DOMContentLoaded", function () {
  const categoryImages = {
    movies: "assets/archive/movies_preview.jpg",
    relics: "assets/archive/relics_preview.jpg",
    maps: "assets/archive/maps/maps_preview.jpg",
    stations: "assets/archive/stations/stations_preview.jpg",
    cables: "assets/archive/cables/cables_preview.jpg",
  };

  function showCategoryImage(event, category) {
    const previewImage = document.getElementById("category-preview");
    if (categoryImages[category]) {
      previewImage.src = categoryImages[category];
      previewImage.style.display = "block";

      const categoryRect = event.target.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      previewImage.style.position = "absolute";
      previewImage.style.top = `${categoryRect.top + window.scrollY}px`;
      previewImage.style.left = `${windowWidth / 2 + 100}px`;
    }
  }

  function hideCategoryImage() {
    document.getElementById("category-preview").style.display = "none";
  }

  // Hover efekti sadece kategorilere uygulanıyor
  document.querySelectorAll(".category-list li").forEach((item) => {
    const category = item.getAttribute("data-category");
    if (category) {
      item.addEventListener("mouseenter", (event) =>
        showCategoryImage(event, category)
      );
      item.addEventListener("mouseleave", hideCategoryImage);
    }
  });
});
