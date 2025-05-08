// Ambil elemen container
const menuContainer = document.getElementById('menu-container');

// Fungsi untuk menampilkan menu
function displayMenu(kategori) {
  menuContainer.innerHTML = '';

  const filteredItems = kategori === 'Semua'
    ? menuItems
    : menuItems.filter(item => item.kategori === kategori.toLowerCase());

  filteredItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'menu-item';
    itemDiv.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}" />
      <h3>${item.nama}</h3>
      <p>${item.deskripsi}</p>
      <p><strong>Rp ${item.harga.toLocaleString('id-ID')}</strong></p>
    `;
    menuContainer.appendChild(itemDiv);
  });
}

// Fungsi filter dari tombol
function filterMenu(kategori) {
  displayMenu(kategori);
}

// Tampilkan semua saat awal
window.onload = () => {
  displayMenu('Semua');
};