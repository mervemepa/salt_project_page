const contentData = {
  Library: {
    about:
      "The Library contains a collection of readings and research materials related to the Meshwork project. \
                Here you will find resources on weaving, technology, cybernetics, archaeology, and more.",
    items: [
      {
        title: "Protocol - Tactical Media",
        url: "assets/pdfs/Protocol_Tactical_Media.pdf",
      },
      {
        title: "Protocol - Internet Art",
        url: "assets/pdfs/Protocol_Internet_Art.pdf",
      },
      {
        title: "Cybernetics - Gordon Pask (1961)",
        url: "assets/pdfs/An_Approach_to_Cybernetics.pdf",
      },
      {
        title: "An Internet of Things",
        url: "assets/pdfs/An_Internet_of_Things.pdf",
      },
      {
        title: "Archaeological Textile Research",
        url: "assets/pdfs/Archaeological_Textile_Research.pdf",
      },
      { title: "Network Theory", url: "assets/pdfs/Network_Theory.pdf" },
      {
        title: "Tim Ingold - The Life of Lines",
        url: "assets/pdfs/The_Life_of_Lines_Tim_Ingold.pdf",
      },
    ],
  },
};

function showCategory(category) {
  const contentArea = document.getElementById("content-area");
  contentArea.innerHTML = ""; // Önce eski içeriği temizleme

  if (contentData[category]) {
    // Eğer bu kategori bir "Library" ise, önce About kısmını ekle
    if (category === "Library") {
      const aboutSection = document.createElement("p");
      aboutSection.classList.add("category-about");
      aboutSection.textContent = contentData[category].about;
      contentArea.appendChild(aboutSection);
    }

    // İçerikleri listele
    contentData[category].items.forEach((item) => {
      let element = document.createElement("a");
      element.href = item.url;
      element.textContent = `📄 ${item.title}`;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      element.style.display = "block";
      element.style.marginBottom = "5px";
      element.style.textDecoration = "none";
      element.style.color = "#007BFF";
      element.style.fontSize = "16px";

      contentArea.appendChild(element);
    });
  } else {
    contentArea.innerHTML = "<p>No content available.</p>";
  }
}
