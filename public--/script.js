const productsContainer = document.getElementById('products');

async function loadProducts() {
  try {
    const response = await fetch('products.json');
    const products = await response.json();

    productsContainer.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product';
      if (product.stock === 0) card.classList.add('sold-out');

      card.innerHTML = `
        <img src="${product.image_url}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
      `;
      productsContainer.appendChild(card);
    });

  } catch (err) {
    console.error('Error loading products:', err);
    productsContainer.innerHTML = '<p>Failed to load products.</p>';
  }
}

loadProducts();



