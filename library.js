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
    {
      title: "Cord Impressed Pottery in Eastern India",
      url: "assets/pdfs/Cord_Impressed_Pottery_Eastern_India.pdf",
    },
    {
      title: "Cybernetic Vol 1 No 1 (1985)",
      url: "assets/pdfs/Cybernetic_Vol_1_No_1_1985.pdf",
    },
    {
      title: "Cybernetic Vol 2 No 1 (1986)",
      url: "assets/pdfs/Cybernetic_Vol_2_No_1_1986.pdf",
    },
    { title: "Data Visualization", url: "assets/pdfs/Data_Visualization.pdf" },
    {
      title: "Doing Ethics with Code",
      url: "assets/pdfs/Doing_Ethics_with_Code.pdf",
    },
    {
      title: "Drawing Things Together",
      url: "assets/pdfs/Drawing_Things_Together.pdf",
    },
    {
      title: "Vision and Verticality",
      url: "assets/pdfs/Vision_and_Verticality.pdf",
    },
    {
      title: "Female Networks in Art & Technology",
      url: "assets/pdfs/Introduction_Female_Networks_Art_Technology.pdf",
    },
    {
      title: "Jumping Generations",
      url: "assets/pdfs/Jumping_Generations.pdf",
    },
    {
      title: "Krauss - Rosalind Grids",
      url: "assets/pdfs/Krauss_Rosalind_Grids.pdf",
    },
    {
      title: "Magnetic Core Memories",
      url: "assets/pdfs/Magnetic_Core_Memories.pdf",
    },
    {
      title: "Mesolithic Site Formation",
      url: "assets/pdfs/Mesolithic_Site_Formation.pdf",
    },
    {
      title: "Experimental Impressed Pottery Techniques",
      url: "assets/pdfs/Experimental_Impressed_Pottery.pdf",
    },
    { title: "Network Theory", url: "assets/pdfs/Network_Theory.pdf" },
    {
      title: "Gliptik Sanatı'na Giriş",
      url: "assets/pdfs/Gliptik_Sanati_Giris.pdf",
    },
    {
      title: "Philosophy of Technology",
      url: "assets/pdfs/Philosophy_of_Technology.pdf",
    },
    {
      title: "The Future Looms - Weaving & Cybernetics",
      url: "assets/pdfs/The_Future_Looms_Weaving_Cybernetics.pdf",
    },
    { title: "Pottery Traditions", url: "assets/pdfs/Pottery_Traditions.pdf" },
    {
      title: "Prehistoric Textile Fabrics",
      url: "assets/pdfs/Prehistoric_Textile_Fabrics.pdf",
    },
    {
      title: "Reprogramming Decisionism",
      url: "assets/pdfs/Reprogramming_Decisionism.pdf",
    },
    { title: "Situated Knowledge", url: "assets/pdfs/Situated_Knowledge.pdf" },
    { title: "Textile Letter", url: "assets/pdfs/Textile_Letter.pdf" },
    {
      title: "Textiles from the Pre-Pottery",
      url: "assets/pdfs/Textiles_from_Pre-Pottery.pdf",
    },
    {
      title: "Textile Impressed Pottery in Russia",
      url: "assets/pdfs/Textile_Impressed_Pottery_Russia.pdf",
    },
    {
      title: "Tim Ingold - The Life of Lines",
      url: "assets/pdfs/The_Life_of_Lines_Tim_Ingold.pdf",
    },
    { title: "The Ties That Bind", url: "assets/pdfs/The_Ties_That_Bind.pdf" },
    {
      title: "The Transversal and the Invisible",
      url: "assets/pdfs/The_Transversal_and_the_Invisible.pdf",
    },
    { title: "Tim Ingold - Lines", url: "assets/pdfs/Tim_Ingold_Lines.pdf" },
    {
      title: "Use of Textiles in Pottery",
      url: "assets/pdfs/Use_of_Textiles_in_Pottery.pdf",
    },
    {
      title: "Weaving and Pottery Technology",
      url: "assets/pdfs/Weaving_and_Pottery_Technology.pdf",
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
