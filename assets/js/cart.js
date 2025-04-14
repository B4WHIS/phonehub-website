
document.addEventListener("DOMContentLoaded", function () {
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
                title="${variant.color}">
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
                data-storage-index="${index}">
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
      thumbnailContainer.appendChild(img);
    });

    document.querySelectorAll(".color-option").forEach((btn) => {
      btn.addEventListener("click", function () {
        const variantIndex = this.dataset.variantIndex;
        currentVariant = product.variants[variantIndex];

        document.getElementById("product-image").src = currentVariant.images[0];

        document.querySelectorAll(".color-option").forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        storageOptions.innerHTML = "";
        currentVariant.storageOptions.forEach((option, index) => {
          const li = document.createElement("li");
          li.innerHTML = `
            <button type="button"
                    class="storage-option btn btn-outline-light ${index === 0 ? "active" : ""}"
                    data-storage-index="${index}">
              ${option.capacity}
            </button>
          `;
          storageOptions.appendChild(li);
        });

        currentStorage = currentVariant.storageOptions[0];
        document.getElementById("product-price").textContent = currentStorage.price;

        thumbnailContainer.innerHTML = "";
        currentVariant.images.forEach((image, index) => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = `Thumbnail ${index + 1}`;
          img.className = `thumbnail ${index === 0 ? "active" : ""}`;
          img.dataset.imageIndex = index;
          thumbnailContainer.appendChild(img);
        });
      });
    });

    storageOptions.addEventListener("click", function (e) {
      if (e.target.classList.contains("storage-option")) {
        const storageIndex = e.target.dataset.storageIndex;
        currentStorage = currentVariant.storageOptions[storageIndex];

        document.querySelectorAll(".storage-option").forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");

        document.getElementById("product-price").textContent = currentStorage.price;
      }
    });

    thumbnailContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("thumbnail")) {
        const imageIndex = e.target.dataset.imageIndex;
        document.getElementById("product-image").src = currentVariant.images[imageIndex];

        document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"));
        e.target.classList.add("active");
      }
    });

    document.getElementById("add-to-cart").addEventListener("click", function () {
      addToCart({
        id: product.id,
        name: product.name,
        color: currentVariant.color,
        storage: currentStorage.capacity,
        price: currentStorage.price,
        image: currentVariant.images[0],
        quantity: 1,
      });
    });

    document.getElementById("buy-now").addEventListener("click", function () {
      window.location.href = `checkout.html?productId=${product.id}&color=${currentVariant.color}&storage=${currentStorage.capacity}`;
    });
  } else {
    document.querySelector(".container").innerHTML = "<h2>Sản phẩm không tồn tại</h2>";
  }
});

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Đã thêm ${item.name} (${item.color}, ${item.storage}) vào giỏ hàng!`);
}
document.addEventListener("DOMContentLoaded",() => {
    const cartContent = document.querySelector(".cart-content");
    const totalPrice = document.querySelector(".total-price");


    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.length === 0){
        cartContent.innerHTML = ` <div id="cart-empty" class="text-center">
          <p>Hiện tại giỏ hàng của bạn đang trống.</p>
          <a href="#products" class="btn btn-dark">Tiếp tục mua sắm</a>
        </div> `;
        document.querySelector('.total').style.display = 'none';
        totalPrice.textContent = "0đ";
        document.querySelector('.btn-buy').style.display = 'none';
        return;
    }
    renderCart();
    function renderCart() {
        cartContent.innerHTML = "";
        let total = 0;

        cart.forEach((item,index) => {
            const cartBox = document.createElement("div");
            cartBox.classList.add("cart-box");
            cartBox.innerHTML = `
                <img src="${item.image}" class="cart-img" alt="${item.name}" />
                  <div class="cart-detail">
                    <h2 class="cart-product-title">${item.name}</h2>
                    <span class="cart-price">${item.price} ${item.color} ${item.storage}</span>
                    <div class="cart-quantity">
                      <button id="decrement" data-index="${index}" >-</button>
                      <span class="number">${item.quantity}</span>
                      <button id="increment" data-index="${index}">+</button>
                    </div>
                  </div>
                  <i class="ri-delete-bin-line cart-remove" data-index="${index}" style="cursor: pointer;"></i>
            `;
            document.querySelector('.total').style.display = 'block';
            document.querySelector('.btn-buy').style.display = 'block';
            cartContent.appendChild(cartBox);

            const priceNumber = parseInt(item.price.replace(/\D/g, ""));
            total += priceNumber * item.quantity;
            
        });
        totalPrice.textContent = total.toLocaleString() + "đ";
         // su kien nut +
       const incrementButtons = document.querySelectorAll("#increment");
       incrementButtons.forEach(button => {
           button.addEventListener("click", e => {
               const index = e.target.getAttribute("data-index");
               cart[index].quantity += 1;
               localStorage.setItem("cart", JSON.stringify(cart));
               renderCart();
           });
       });
       // su kien nut -
       const decrementButtons = document.querySelectorAll("#decrement");
        decrementButtons.forEach(button => {
            button.addEventListener("click", e => {
                const index = e.target.getAttribute("data-index");
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    if (confirm("Bạn có muốn xoá sản phẩm này không?")) {
                        cart.splice(index, 1);
                    }
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });
       const removeButtons = document.querySelectorAll(".cart-remove");
       removeButtons.forEach(button => {
        button.addEventListener("click", e => {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart",JSON.stringify(cart));
            renderCart();
        });
       });
      

    }
});