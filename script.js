const contents = [
  "Nothing can hold on unless it puts out a line, and unless that line can tangle with others.",
  [
    "images/00f2a0d1b3ab344bcac82476193a3457.jpeg",
    "images/1f0f49cd74782109c6a02abbcf88ed0a.jpeg",
    "images/sample3.jpg",
    "images/sample4.jpg",
  ], // Kolaj olarak gösterilecek resim dizisi
  `<video autoplay loop muted>
    <source src="videos/sample1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>`,
  "Blobs have volume, mass, density.",
  `<video autoplay loop muted>
    <source src="videos/sample2.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>`,
  "The line bears out the contrary principle of deterritorialization.",
];

let currentIndex = 0; // Şu anda gösterilen elemanın dizini
const mainText = document.getElementById("main-text");

// Kolajı Göster
function createCollage(images) {
  mainText.innerHTML = ""; // Önceki içeriği temizle

  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image; // Resim kaynağı
    imgElement.style.position = "absolute";
    imgElement.style.top = `${10 + Math.random() * 50}%`; // Ekranın üst kısmına yakın
    imgElement.style.left = `${10 + Math.random() * 50}%`; // Ekranın sol kısmına yakın
    imgElement.style.zIndex = index; // Üst üste binme sırası
    imgElement.style.opacity = `${0.7 + Math.random() * 0.3}`; // Şeffaflık
    imgElement.style.transform = `rotate(${Math.random() * 10 - 5}deg)`; // Döndürme
    imgElement.style.width = `${30 + Math.random() * 20}%`; // Dinamik boyutlar

    console.log("Appending image:", image); // Konsola görüntüleme
    mainText.appendChild(imgElement); // Resmi DOM'a ekle
  });
}

// İçeriği Güncelle
function updateContent() {
  const content = contents[currentIndex];

  if (Array.isArray(content)) {
    createCollage(content); // Kolaj göster
  } else {
    mainText.innerHTML = content.startsWith("<video")
      ? content // Video
      : `<p>${content}</p>`; // Metin
  }
}

// Scroll Hareketini Dinle
function handleScroll(event) {
  const delta = event.deltaY || -event.wheelDelta || event.detail;

  if (delta > 0 && currentIndex < contents.length - 1) {
    currentIndex++; // Bir sonraki içeriğe geç
  } else if (delta < 0 && currentIndex > 0) {
    currentIndex--; // Bir önceki içeriğe geç
  }

  updateContent();
}

// Mobil için Touch Hareketleri
let touchStartY = 0;
window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
});
window.addEventListener("touchend", (event) => {
  const touchEndY = event.changedTouches[0].clientY;
  const delta = touchStartY - touchEndY;

  if (Math.abs(delta) > 30) {
    if (delta > 0 && currentIndex < contents.length - 1) {
      currentIndex++;
    } else if (delta < -30 && currentIndex > 0) {
      currentIndex--;
    }
    updateContent();
  }
});

// Scroll Olaylarını Dinle
window.addEventListener("wheel", handleScroll); // Fare kaydırma
updateContent(); // Başlangıç durumu
