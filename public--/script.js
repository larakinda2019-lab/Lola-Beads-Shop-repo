const productsContainer = document.getElementById("products");

async function loadProducts() {
  try {
    const res = await fetch("products.json");
    const products = await res.json();

    productsContainer.innerHTML = "";

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      if (product.stock === 0) card.classList.add("sold-out");

      card.innerHTML = `
        <img src="${product.image_url}" alt="${product.name}">
        <div class="info">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>Stock: ${product.stock}</p>
        </div>
      `;
      productsContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading products:", err.message);
    productsContainer.innerHTML = "<p>Failed to load products.</p>";
  }
}

loadProducts();


