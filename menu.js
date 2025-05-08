// menu.js

// Data menu bawaan (default)
let menuItems = [
    {
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan telur, ayam, dan kerupuk",
      price: 25000,
      image: "images/nasi-goreng.jpg",
      category: "Makanan",
    },
    {
      name: "Ayam Geprek",
      description: "Ayam geprek dengan lalapan",
      price: 25000,
      image: "images/ayam-geprek.jpg",
      category: "Makanan",
    },
    {
      name: "Bakso Matani",
      description: "Bakso ayam lezat",
      price: 25000,
      image: "images/bakso.jpg",
      category: "Makanan",
    },
    {
      name: "Es Teh Manis",
      description: "Teh manis dingin segar",
      price: 8000,
      image: "images/esteh.jpg",
      category: "Minuman",
    },
    {
      name: "Mie Ayam",
      description: "Mie ayam lengkap dengan pangsit",
      price: 20000,
      image: "images/mie-ayam.jpg",
      category: "Makanan",
    },
  ];
  
  // Tambahkan menu dari localStorage jika ada
  let storedMenu = JSON.parse(localStorage.getItem("menuData") || "[]");
  menuItems = [...menuItems, ...storedMenu];
  
  // Fungsi untuk render menu ke halaman
  function renderMenu(category = "Semua") {
    const menuContainer = document.getElementById("menu");
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
      const kategori = btn.textContent;
      renderMenu(kategori);
    });
  });