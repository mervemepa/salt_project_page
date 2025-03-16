document.addEventListener("DOMContentLoaded", function () {
  const pdfList = [
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
    { title: "Network Theory", url: "assets/pdfs/Network_Theory.pdf" },
    {
      title: "Tim Ingold - The Life of Lines",
      url: "assets/pdfs/The_Life_of_Lines_Tim_Ingold.pdf",
    },
  ];

  function loadPDFs() {
    const pdfContainer = document.getElementById("pdf-list");
    if (!pdfContainer) {
      console.error("Error: Cannot find #pdf-list");
      return;
    }

    pdfContainer.innerHTML = ""; // Önce içeriği temizle

    pdfList.forEach((pdf) => {
      let link = document.createElement("a");
      link.href = pdf.url;
      link.textContent = `📄 ${pdf.title}`;
      link.target = "_blank"; // Yeni sekmede aç
      link.rel = "noopener noreferrer";
      link.style.display = "block";
      link.style.marginBottom = "8px";
      link.style.textDecoration = "none";
      link.style.color = "#007BFF"; // Link rengi
      link.style.fontSize = "16px";

      pdfContainer.appendChild(link);
    });
  }

  loadPDFs();
});
