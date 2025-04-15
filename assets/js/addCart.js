const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

let product = null;
for (const brand in products) {
  product = products[brand].find((p) => p.id === productId);
  if (product) break;
}

if (!product) {
  document.getElementById("product-container").innerHTML =
    "<p>Sản phẩm không tồn tại.</p>";
} else {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.mainImage;
  document.getElementById("product-price").textContent = product.basePrice;
  document.getElementById("product-description").textContent =
    product.description;

  const thumbnailContainer = document.getElementById("thumbnail-container");
  const allImages = new Set();
  product.variants.forEach((variant) => {
    variant.images.forEach((img) => allImages.add(img));
  });
  allImages.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("thumbnail");
    if (imgSrc === product.mainImage) img.classList.add("active");
    img.addEventListener("click", () => {
      document
        .querySelectorAll(".thumbnail")
        .forEach((t) => t.classList.remove("active"));
      img.classList.add("active");
      document.getElementById("product-image").src = imgSrc;
    });
    thumbnailContainer.appendChild(img);
  });

  const storageOptions = document.getElementById("storage-options");
  const uniqueStorages = new Set();
  product.variants.forEach((variant) => {
    variant.storageOptions.forEach((opt) => {
      if (!uniqueStorages.has(opt.capacity)) {
        uniqueStorages.add(opt.capacity);
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = opt.capacity;
        button.setAttribute("data-capacity", opt.capacity);
        button.addEventListener("click", () => {
          document
            .querySelectorAll("#storage-options button")
            .forEach((b) => b.classList.remove("active"));
          button.classList.add("active");
          updatePrice();
        });
        li.appendChild(button);
        storageOptions.appendChild(li);
      }
    });
  });

  const colorOptions = document.getElementById("color-options");
  product.variants.forEach((variant) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.style.backgroundColor = variant.colorCode;
    button.setAttribute("data-color", variant.color);
    button.addEventListener("click", () => {
      document
        .querySelectorAll("#color-options button")
        .forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      updatePrice();

      const selectedVariant = product.variants.find(
        (v) => v.color === variant.color
      );
      document.getElementById("product-image").src = selectedVariant.images[0];

      document.querySelectorAll(".thumbnail").forEach((t) => {
        t.classList.remove("active");
        if (t.src.includes(selectedVariant.images[0])) {
          t.classList.add("active");
        }
      });
    });
    li.appendChild(button);
    colorOptions.appendChild(li);
  });

  if (storageOptions.children.length > 0) {
    storageOptions.children[0].querySelector("button").classList.add("active");
  }
  if (colorOptions.children.length > 0) {
    colorOptions.children[0].querySelector("button").classList.add("active");
    const firstColor = product.variants[0].color;
    const firstVariant = product.variants.find((v) => v.color === firstColor);
    document.getElementById("product-image").src = firstVariant.images[0];
  }

  function updatePrice() {
    const selectedColor = document
      .querySelector("#color-options button.active")
      ?.getAttribute("data-color");
    const selectedStorage = document
      .querySelector("#storage-options button.active")
      ?.getAttribute("data-capacity");

    if (selectedColor && selectedStorage) {
      const variant = product.variants.find((v) => v.color === selectedColor);
      const storageOption = variant?.storageOptions.find(
        (opt) => opt.capacity === selectedStorage
      );
      if (storageOption) {
        document.getElementById("product-price").textContent =
          storageOption.price;
      }
    }
  }

  document.getElementById("buy-now").addEventListener("click", () => {
    const selectedColor = document
      .querySelector("#color-options button.active")
      ?.getAttribute("data-color");
    const selectedStorage = document
      .querySelector("#storage-options button.active")
      ?.getAttribute("data-capacity");

    if (!selectedColor || !selectedStorage) {
      alert("Vui lòng chọn màu sắc và dung lượng.");
      return;
    }

    const variant = product.variants.find((v) => v.color === selectedColor);
    const storageOption = variant.storageOptions.find(
      (opt) => opt.capacity === selectedStorage
    );

    const cartItem = {
      id: product.id,
      name: `${product.name} (${selectedColor}, ${selectedStorage})`,
      price: storageOption.price,
      image: variant.images[0],
      color: selectedColor,
      storage: selectedStorage,
      quantity: 1,
    };

    localStorage.setItem("cart", JSON.stringify([cartItem]));

    window.location.href = "../pages/checkout.html";
  });

  document.getElementById("add-to-cart").addEventListener("click", () => {
    const selectedColor = document
      .querySelector("#color-options button.active")
      ?.getAttribute("data-color");
    const selectedStorage = document
      .querySelector("#storage-options button.active")
      ?.getAttribute("data-capacity");

    if (!selectedColor || !selectedStorage) {
      alert("Vui lòng chọn màu sắc và dung lượng.");
      return;
    }

    const variant = product.variants.find((v) => v.color === selectedColor);
    const storageOption = variant.storageOptions.find(
      (opt) => opt.capacity === selectedStorage
    );

    const cartItem = {
      id: product.id,
      name: `${product.name} (${selectedColor}, ${selectedStorage})`,
      price: storageOption.price,
      image: variant.images[0],
      color: selectedColor,
      storage: selectedStorage,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(
      (item) =>
        item.id === cartItem.id &&
        item.color === cartItem.color &&
        item.storage === cartItem.storage
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  });
}
