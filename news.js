document.addEventListener("DOMContentLoaded", function () {
  const newsItems = [
    {
      type: "link",
      title: "Interview on Networked Art",
      url: "https://example.com/interview-networked-art",
      source: "ArtForum",
      date: "Jan 2024",
      description:
        "A conversation on the materiality of media and weaving metaphors.",
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
