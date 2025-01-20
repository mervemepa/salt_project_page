const contents = [
  {
    type: "text",
    content:
      "This project focuses on pluralistically revitalizing the complex interactions and intersections between human, technology, and environment by using the concepts of 'thread' and 'trace' as metaphors. It is based on transforming the archaeology of weaving and computer technologies and the cartography of the environments they create into a narrative form. In doing so, it aims to reconsider entrenched power structures and dominant narratives.",
    position: { top: "8%", left: "1%" },
    size: { width: "20%", height: "auto" },
  },
  {
    type: "gif",
    content: "images/sample.gif",
    position: { top: "8%", left: "21.5%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "text",
    content:
      "As a convergence point of the research I have conducted during this process, I place 'thread' at the center of this study. This is because the concept of 'thread' encompasses many meanings related to the recording of environment, technology, and memory.",
    position: { top: "45%", left: "22%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "image",
    content: "images/Screen Shot 2022-06-11 at 15.28.08.png",
    position: { top: "60%", left: "20%" },
    size: { width: "5%", height: "auto" },
  },
  {
    type: "text",
    content:
      "Nothing can hold on unless it puts out a line, and unless that line can tangle with others.",
    position: { top: "30%", left: "25%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "image",
    content: "images/Screen Shot 2023-02-13 at 16.25.36.png",
    position: { top: "30%", left: "12%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "text",
    content: "the rope is always in process like social life itself",
    position: { top: "30%", left: "35%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "image",
    content: "images/Screen Shot 2023-02-13 at 16.08.22.png",
    position: { top: "40%", left: "5%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "text",
    content: "not elementary components but ever-extending lines",
    position: { top: "70%", left: "35%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "text",
    content: "They can expand and contract, encroach and retrench.",
    position: { top: "70%", left: "1.5%" },
    size: { width: "10%", height: "auto" },
  },
  {
    type: "video",
    content: "videos/sample1.mp4",
    position: { top: "50%", left: "20%" },
    size: { width: "20%", height: "auto" },
  },
];

const container = document.getElementById("content-container");

contents.forEach((item) => {
  const block = document.createElement("div");
  block.classList.add("content-block");

  // Pozisyon ve boyut belirleme
  block.style.position = "absolute";
  block.style.top = item.position.top;
  block.style.left = item.position.left;
  block.style.width = item.size.width;
  block.style.height = item.size.height;

  // Taşmayı engelleme
  const left = parseFloat(item.position.left.replace("%", ""));
  const top = parseFloat(item.position.top.replace("%", ""));
  const width = parseFloat(item.size.width.replace("%", ""));
  const screenWidth = 100; // Ekranın % birimi genişliği
  const screenHeight = 100; // Ekranın % birimi yüksekliği

  if (left + width > screenWidth) {
    const overflow = left + width - screenWidth;
    block.style.left = `${left - overflow}%`;
  }

  if (top > screenHeight) {
    block.style.top = `${screenHeight - 10}%`;
  }

  // İçeriği ekleme
  if (item.type === "text") {
    block.innerHTML = `<p>${item.content}</p>`;
  } else if (item.type === "image") {
    block.innerHTML = `<img src="${item.content}" alt="Image Content" />`;
  } else if (item.type === "video") {
    block.innerHTML = `
      <video controls>
        <source src="${item.content}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
  } else if (item.type === "gif") {
    block.innerHTML = `<img src="${item.content}" alt="GIF Content" />`; // GIF için img etiketi
  }

  container.appendChild(block);
});
