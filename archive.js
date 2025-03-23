document.addEventListener("DOMContentLoaded", function () {
  const categoryImages = {
    movies: "assets/archive/movies/movies_preview.jpg",
    relics: "assets/archive/relics/relics_preview.jpg",
    maps: "assets/archive/maps/maps_preview.jpg",
  };

  function showCategoryImage(event, category) {
    const previewImage = document.getElementById("category-preview");
    if (categoryImages[category]) {
      previewImage.src = categoryImages[category];
      previewImage.style.display = "block";

      // **Kategori Öğesinin Pozisyonunu Al**
      const categoryRect = event.target.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // **Görselin Ortanın Sağına Yerleştirilmesi**
      previewImage.style.position = "absolute";
      previewImage.style.top = `${categoryRect.top + window.scrollY}px`;
      previewImage.style.left = `${windowWidth / 2 + 100}px`;
    }
  }

  function hideCategoryImage() {
    document.getElementById("category-preview").style.display = "none";
  }

  // **Kategori Listesine Event Listener Ekle**
  document.querySelectorAll(".category-list li").forEach((item) => {
    const category = item.getAttribute("data-category");
    if (category) {
      item.addEventListener("mouseenter", (event) =>
        showCategoryImage(event, category)
      );
      item.addEventListener("mouseleave", hideCategoryImage);
    }
  });

  // **Kategori İçeriklerini Aç/Kapat**
  window.toggleCategory = function (category) {
    const contentDiv = document.getElementById(`${category}-content`);

    if (!contentDiv) {
      console.error(`HATA: ID '${category}-content' bulunamadı.`);
      return;
    }

    // **Eğer içerik açıksa kapat**
    if (contentDiv.style.display === "block") {
      contentDiv.style.display = "none";
      contentDiv.innerHTML = "";
      return;
    }

    // **Önce tüm içerikleri kapat**
    document.querySelectorAll(".content-area").forEach((div) => {
      div.style.display = "none";
      div.innerHTML = "";
    });

    // **Seçilen kategoriyi aç**
    contentDiv.style.display = "block";

    // **Movies Kategorisi İçin Özel İçerik**
    if (category === "movies") {
      contentDiv.innerHTML = `
        <h2>Movies Database</h2>
        <iframe src="https://docs.google.com/spreadsheets/d/1q_YC5RLHH0I4RrSuGeOKpPKoSkZtGslfjhjEol8jIUE/edit?usp=sharing" 
                width="100%" height="600px"></iframe>
      `;
    }
    // **Diğer Kategoriler İçin Placeholder İçerik**
    else {
      contentDiv.innerHTML = `<p>Loading ${category} content...</p>`;
    }
  };
});
