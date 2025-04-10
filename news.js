document.addEventListener("DOMContentLoaded", function () {
  const newsItems = [
    {
      type: "custom",
      content: `
    <div class="news-item">
      <h3>
        <a href="https://saltonline.org/en/2853/sergi-ali-taptik-merve-mepa-asli-uludag?home" target="_blank">
          Exhibition: Ali Taptık, Merve Mepa, Aslı Uludağ
        </a>
      </h3>
      <p class="news-description">
        <em>Salt Artistic Research and Production Grant Program</em>
        <strong>SALT Galata</strong> — 19 March – 15 June 2025<br/>

      </p>
      <img src="assets/news/bbva_sergi.jpg" class="news-image" alt="SALT sergisi görseli" />
    </div>
  `,
    },

    {
      type: "custom",
      content: `
    <div class="news-item">
      <h3>
        <a href="https://sanatokur.com/asli-uludag-ali-taptik-ve-merve-mepa-salt-galatada/" target="_blank">
          Aslı Uludağ, Ali Taptık ve Merve Mepa SALT Galata'da
        </a>
      </h3>
      <p class="news-description">
        <strong>Sanat Okur</strong> — Mart 2025<br/>
        <em>Sergi üzerine yayımlanmış haber, röportaj ve görselleri içerir.</em>
      </p>
      <img src="assets/news/sanatokur-cover.jpg" class="news-image" alt="Sanat Okur haber görseli" />
    </div>
  `,
    },

    {
      type: "pdf",
      title: "test",
      url: "assets/news/weaving_futures.pdf",
      source: "Printed Matters",
      date: "Nov 2023",
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
