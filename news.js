document.addEventListener("DOMContentLoaded", function () {
  const newsItems = [
    {
      type: "custom",
      content: `
    <div class="news-item">
      <h3>
        <a href="https://saltonline.org/en/2853/sergi-ali-taptik-merve-mepa-asli-uludag?home" target="_blank">
          Sergi: Ali Taptık, Merve Mepa, Aslı Uludağ
        </a>
      </h3>
      <p class="news-description">
        <strong>SALT Galata</strong> — 19 Mart – 15 Haziran 2025<br/>
        <em>SALT Sanatsal Araştırma ve Üretim Destek Programı kapsamında gerçekleştirilen sergi.</em>
      </p>
      <img src="https://saltonline.org/uploads/nodes/2853/ali-taptik-merve-mepa-asli-uludag.jpg" class="news-image" alt="SALT sergisi görseli" />
    </div>
  `,
    },
    {
      type: "pdf",
      title: "Print Feature: Weaving Futures",
      url: "assets/news/weaving_futures.pdf",
      source: "Printed Matters",
      date: "Nov 2023",
    },
    {
      type: "image",
      imageUrl: "assets/news/screenshot_magazine.jpg",
      description: "Magazine coverage in Visual Studies, 2022",
    },
  ];

  const container = document.getElementById("news-list");

  newsItems.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("news-item");

    if (item.type === "link") {
      wrapper.innerHTML = `
        <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
        <p class="news-description">${item.source} — ${item.date}<br><em>${item.description}</em></p>
      `;
    } else if (item.type === "custom") {
      wrapper.innerHTML = item.content;
    } else if (item.type === "pdf") {
      wrapper.innerHTML = `
        <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
        <p class="news-description">${item.source} — ${item.date}</p>
      `;
    } else if (item.type === "image") {
      wrapper.innerHTML = `
        <img src="${item.imageUrl}" class="news-image" alt="News Image"/>
        <p class="news-description">${item.description}</p>
      `;
    }

    container.appendChild(wrapper);
  });
});
