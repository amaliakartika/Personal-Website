// Ambil elemen-elemen yang akan dimanipulasi
const navList = document.querySelector(".nav-list");
const centerContent = document.querySelector(".center-content");

// Tambahkan event listener untuk mengganti warna teks saat hover
navList.addEventListener("mouseover", function (event) {
  if (event.target.tagName === "A") {
    event.target.style.color = "#FFD275"; // Warna ketika hover
  }
});

navList.addEventListener("mouseout", function (event) {
  if (event.target.tagName === "A") {
    event.target.style.color = "#084C61"; // Kembali ke warna awal
  }
});

// Tambahkan event listener untuk mengubah teks ketika di klik
centerContent.addEventListener("click", function () {
  const amaliaText = document.querySelector(".amalia");
  const kartikaText = document.querySelector(".kartika");

  amaliaText.textContent = "Hello, Amalia!";
  kartikaText.textContent = "Hello, Kartika!";
});

// Tambahkan elemen baru ke dalam list navigasi
const newNavItem = document.createElement("li");
const newNavLink = document.createElement("a");
newNavLink.href = "#";
newNavLink.textContent = "Portfolio";
newNavItem.appendChild(newNavLink);
navList.appendChild(newNavItem);