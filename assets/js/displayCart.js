
window.onload = function () {
  const cartContent = document.querySelector(".cart-content");
  const totalPrice = document.querySelector(".total-price");

  // Lấy giỏ hàng từ localStorage với kiểm tra nghiêm ngặt
  let cart = [];
  try {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      cart = JSON.parse(cartData);
      if (!Array.isArray(cart)) {
        throw new Error("Dữ liệu giỏ hàng không hợp lệ");
      }
    }
  } catch (e) {
    console.error("Lỗi khi đọc giỏ hàng:", e);
    cart = [];
    localStorage.removeItem("cart"); // Xóa dữ liệu không hợp lệ
  }

  // Hiển thị giỏ hàng
  renderCart();

  // Hàm hiển thị giỏ hàng
  function renderCart() {
    cartContent.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartContent.innerHTML = `
  <div id="cart-empty" class="text-center">
    <p>Hiện tại giỏ hàng của bạn đang trống.</p>
    <a href="../pages/product.html" class="btn btn-dark">Tiếp tục mua sắm</a>
  </div>`;
      document.querySelector(".total").style.display = "none";
      totalPrice.textContent = "0đ";
      document.querySelector(".btn-buy").style.display = "none";

      // QUAN TRỌNG: Xóa hoàn toàn giỏ hàng khi rỗng
      localStorage.removeItem("cart");
      return;
    }

    cart.forEach((item, index) => {
      const cartBox = document.createElement("div");
      cartBox.classList.add("cart-box");
      cartBox.innerHTML = `
  <img src="${item.image}" class="cart-img" alt="${item.name}" />
  <div class="cart-detail">
    <h2 class="cart-product-title">${item.name}</h2>
    <span class="cart-price">${item.price} ${item.color} ${item.storage}</span>
    <div class="cart-quantity">
      <button onclick="decrement(${index})">-</button>
      <span class="number">${item.quantity}</span>
      <button onclick="increment(${index})">+</button>
    </div>
  </div>
  <i class="ri-delete-bin-line cart-remove" onclick="removeFromCart(${index})" style="cursor: pointer;"></i>
`;
      cartContent.appendChild(cartBox);
    });

    document.querySelector(".total").style.display = "block";
    document.querySelector(".btn-buy").style.display = "block";

    // Tính tổng tiền
    const totals = cart.reduce((sum, item) => {
      const priceNumber = parseInt(item.price.replace(/\D/g, ""));
      return sum + priceNumber * item.quantity;
    }, 0);

    totalPrice.textContent = totals.toLocaleString() + "đ";
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Hàm tăng số lượng
  window.increment = function (index) {
    cart[index].quantity += 1;
    renderCart();
  };

  // Hàm giảm số lượng
  window.decrement = function (index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      if (confirm("Bạn có muốn xoá sản phẩm này không?")) {
        cart.splice(index, 1);
      }
    }
    renderCart();
  };

  // Hàm xóa sản phẩm 
  window.removeFromCart = function (index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      cart.splice(index, 1);
      if (cart.length === 0) {
        localStorage.removeItem("cart");
      } else {
        localStorage.setItem("cart", JSON.stringify(cart));
      }

      renderCart();
    }
  };
};
