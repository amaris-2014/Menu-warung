const menuData = [
    {
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan telur, ayam, dan kerupuk.",
      price: 25000,
      image: "images/nasi-goreng.jpg",
      category: "Makanan"
    },
    {
        name: "Ayam Geprek",
        description: "Ayam geprek dengan lalapan",
        price: 25000,
        image: "images/ayam-geprek.jpg",
        category: "Makanan"
      },
      {
        name: "Bakso Matani",
        description: "Bakso ayam lezat",
        price: 25000,
        image: "images/bakso.jpg",
        category: "Makanan"
      },








    {
      name: "Es Teh Manis",
      description: "Teh manis dingin segar.",
      price: 8000,
      image: "images/esteh.jpg",
      category: "Minuman"
    },
    {
      name: "Mie Ayam",
      description: "Mie ayam lengkap dengan pangsit.",
      price: 20000,
      image: "images/mie-ayam.jpg",
      category: "Makanan"
    }
  ];
  
  function renderMenu(data) {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";
  
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">Rp ${item.price.toLocaleString()}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }
  
  function filterMenu(category) {
    if (category === "Semua") {
      renderMenu(menuData);
    } else {
      const filtered = menuData.filter(item => item.category === category);
      renderMenu(filtered);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => renderMenu(menuData));