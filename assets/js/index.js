function displayProducts() {
  const productBrands = document.getElementById("product-brands");
  productBrands.innerHTML = "";

  const allowedBrands = ["apple", "samsung", "oppo"];

  for (const brand of allowedBrands) {
    if (products[brand]) {
      const brandSection = document.createElement("div");
      brandSection.className = "brand-section mb-5 reveal";
      brandSection.innerHTML = `
          <h3 class="mb-3">${
            brand.charAt(0).toUpperCase() + brand.slice(1)
          }</h3>
          <div class="row" id="product-list-${brand}">
          </div>
        `;
      productBrands.appendChild(brandSection);

      const productList = document.getElementById(`product-list-${brand}`);
      products[brand].forEach((product) => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-lg-3 mb-4";
        col.innerHTML = `
            <div class="card product-card">
              <img src="${product.mainImage}" alt="${product.name}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.basePrice}</p>
                <div class="button-group">
                  <button class="btn btn-outline-dark" onclick="addToCart('${product.id}')">Thêm</button>
                  <a href="/pages/product-detail.html?id=${product.id}" class="btn btn-dark">Xem chi tiết</a>
                </div>
              </div>
            </div>
          `;
        productList.appendChild(col);
      });
    }
  }
}

displayProducts();
