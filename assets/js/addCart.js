window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    let product = null;
    let currentBrand = null;
  
    for (const brand in products) {
      product = products[brand].find((p) => p.id === productId);
      if (product) {
        currentBrand = brand;
        break;
      }
    }
  
    if (product) {
      document.getElementById("product-image").src = product.mainImage;
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-description").textContent = product.description;
  
      let currentVariant = product.variants[0];
      let currentStorage = currentVariant.storageOptions[0];
      document.getElementById("product-price").textContent = currentStorage.price;
  
      const colorOptions = document.getElementById("color-options");
      product.variants.forEach((variant, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <button type="button"
                  id="color-option-${index}"
                  class="color-option btn ${index === 0 ? "active" : ""}"
                  style="background-color: ${variant.colorCode}"
                  data-variant-index="${index}"
                  title="${variant.color}"
                  onclick="changeColor(${index})">
          </button>
          <span class="color-name">${variant.color}</span>
        `;
        colorOptions.appendChild(li);
      });
  
      const storageOptions = document.getElementById("storage-options");
      currentVariant.storageOptions.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <button type="button"
                  id="storage-option-${index}"
                  class="storage-option btn btn-outline-light ${index === 0 ? "active" : ""}"
                  data-storage-index="${index}"
                  onclick="changeStorage(${index})">
            ${option.capacity}
          </button>
        `;
        storageOptions.appendChild(li);
      });
  
      const thumbnailContainer = document.getElementById("thumbnail-container");
      currentVariant.images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = `Thumbnail ${index + 1}`;
        img.className = `thumbnail ${index === 0 ? "active" : ""}`;
        img.dataset.imageIndex = index;
        img.setAttribute("onclick", `changeImage(${index})`);
        thumbnailContainer.appendChild(img);
      });
  
      document.getElementById("add-to-cart").onclick = function () {
        addToCart({
          id: product.id,
          name: product.name,
          color: currentVariant.color,
          storage: currentStorage.capacity,
          price: currentStorage.price,
          image: currentVariant.images[0],
          quantity: 1,
        });
      };
  
      document.getElementById("buy-now").onclick = function () {
        window.location.href = `checkout.html?productId=${product.id}&color=${currentVariant.color}&storage=${currentStorage.capacity}`;
      };
  
      window.changeColor = function (variantIndex) {
        currentVariant = product.variants[variantIndex];
        document.getElementById("product-image").src = currentVariant.images[0];
        document.querySelectorAll(".color-option").forEach((b) => b.classList.remove("active"));
        document.getElementById(`color-option-${variantIndex}`).classList.add("active");
  
        const storageOptions = document.getElementById("storage-options");
        storageOptions.innerHTML = "";
        currentVariant.storageOptions.forEach((option, index) => {
          const li = document.createElement("li");
          li.innerHTML = `
            <button type="button"
                    class="storage-option btn btn-outline-light ${index === 0 ? "active" : ""}"
                    data-storage-index="${index}"
                    onclick="changeStorage(${index})">
              ${option.capacity}
            </button>
          `;
          storageOptions.appendChild(li);
        });
  
        currentStorage = currentVariant.storageOptions[0];
        document.getElementById("product-price").textContent = currentStorage.price;
  
        const thumbnailContainer = document.getElementById("thumbnail-container");
        thumbnailContainer.innerHTML = "";
        currentVariant.images.forEach((image, index) => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = `Thumbnail ${index + 1}`;
          img.className = `thumbnail ${index === 0 ? "active" : ""}`;
          img.setAttribute("onclick", `changeImage(${index})`);
          thumbnailContainer.appendChild(img);
        });
      };
  
      window.changeStorage = function (storageIndex) {
        currentStorage = currentVariant.storageOptions[storageIndex];
        document.querySelectorAll(".storage-option").forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".storage-option")[storageIndex].classList.add("active");
        document.getElementById("product-price").textContent = currentStorage.price;
      };
  
      window.changeImage = function (imageIndex) {
        document.getElementById("product-image").src = currentVariant.images[imageIndex];
        document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(".thumbnail")[imageIndex].classList.add("active");
      };
    } else {
      document.querySelector(".container").innerHTML = "<h2>Sản phẩm không tồn tại</h2>";
    }
  };
  
  function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItemIndex = cart.findIndex(
      cartItem => 
        cartItem.id === item.id && 
        cartItem.color === item.color && 
        cartItem.storage === item.storage
    );
    
    if (existingItemIndex !== -1) {
      // Nếu đã có thì tăng số lượng lên 1
      cart[existingItemIndex].quantity += 1;
      alert(`Đã tăng số lượng ${item.name} (${item.color}, ${item.storage}) trong giỏ hàng!`);
    } else {
      // Nếu chưa có thì thêm mới với quantity = 1
      cart.push(item);
      alert(`Đã thêm ${item.name} (${item.color}, ${item.storage}) vào giỏ hàng!`);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
  }