document.addEventListener("DOMContentLoaded", function () {
  const boards = [
    {
      title: "Sniffer Oscilloscope",
      image: "assets/boards/oscilloscope.jpeg",
      pdf: "assets/boards/relayboard-schematic.pdf",
      github: "https://github.com/mervemepa/sniffer_fans/tree/main", // Local dosya örneği
    },
    {
      title: "Sniffer Fan Controller",
      image: "assets/boards/white_led.jpg",
      pdf: "assets/boards/gesture-schematic.pdf",
      github: "https://github.com/mervemepa/sniffer_fans/tree/main", // GitHub link örneği
    },
    // Yeni board'ları buraya ekleyebilirsin
  ];

  const container = document.getElementById("boards-list");

  boards.forEach((board) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("board-item");

    wrapper.innerHTML = `
      <h3>${board.title}</h3>
      <img src="${board.image}" alt="${board.title}" class="board-image"/>
      <p>
        <a href="${board.pdf}" target="_blank">📄 Schematic PDF</a><br/>
        ${
          board.ino
            ? `<a href="${board.ino}" target="_blank"> <img src="assets/images/github_icon.png" alt="GitHub" style="width:20px; vertical-align:middle; margin-right:5px;">
          GitHub Repository</a>`
            : `<a href="${board.github}" target="_blank"> <img src="assets/images/github_icon.png" alt="GitHub" style="width:20px; vertical-align:middle; margin-right:5px;">
          GitHub Repository</a>`
        }
      </p>
    `;

    container.appendChild(wrapper);
  });
});
