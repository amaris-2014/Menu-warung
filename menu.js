// menu.js

// Data menu bawaan (default)
let menuItems = [
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan telur dan kerupuk.",
    price: 15000,
    image: "images/nasi-goreng.jpg",
    category: "Makanan"
  },
  {
    name: "Ayam Geprek",
    description: "Ayam geprek lengkap dengan nasi dan lalapan",
    price: 15000,
    image: "images/ayam-geprek.jpg",
    category: "Makanan"
  },
  {
    name: "Bakso Matani",
    description: "Bakso ayam lezat",
    price: 10000,
    image: "images/bakso.jpg",
    category: "Makanan"
  },
  {
    name: "Mie Ayam",
    description: "Mie ayam lengkap dengan pangsit.",
    price: 15000,
    image: "images/mie-ayam.jpg",
    category: "Makanan"
  },
  {
    name: "Nasi Campur",
    description: "Nasi dengan aneka lauk",
    price: 10000,
    image: "images/nasi-campur.jpg",
    category: "Makanan"
  },
  {
    name: "Es Teh Manis",
    description: "Teh manis dingin segar.",
    price: 8000,
    image: "images/esteh.jpg",
    category: "Minuman"
  }
];

// Tambahkan menu dari localStorage jika ada
let storedMenu = JSON.parse(localStorage.getItem("menuData") || "[]");
menuItems = [...menuItems, ...storedMenu];

// Fungsi untuk render menu ke halaman
function renderMenu(category = "Semua") {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  const filtered =
    category === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <strong>Rp ${item.price.toLocaleString()}</strong>
    `;
    menuContainer.appendChild(div);
  });
}

// Inisialisasi
renderMenu();

// Event listener untuk tombol filter
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const kategori = btn.getAttribute("data-kategori");
    renderMenu(kategori);
  });
});