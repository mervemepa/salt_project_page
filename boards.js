document.addEventListener("DOMContentLoaded", function () {
  const boards = [
    {
      title: "Sensor Relay Board",
      image: "assets/boards/relayboard.jpg",
      pdf: "assets/boards/relayboard-schematic.pdf",
      ino: "assets/boards/relayboard.ino", // Local dosya örneği
    },
    {
      title: "Gesture Interface",
      image: "assets/boards/gestureboard.jpg",
      pdf: "assets/boards/gesture-schematic.pdf",
      github: "https://github.com/username/gesture-interface", // GitHub link örneği
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
            ? `<a href="${board.ino}" target="_blank">🧠 Arduino Code (.ino)</a>`
            : `<a href="${board.github}" target="_blank">🔗 GitHub Repository</a>`
        }
      </p>
    `;

    container.appendChild(wrapper);
  });
});
