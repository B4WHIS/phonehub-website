
document.addEventListener("DOMContentLoaded", () => {
    const addCartBtn = document.querySelector("#add-to-cart");
  
    addCartBtn.addEventListener("click", () => {
      const productImg = document.querySelector("#product-image").src;
      const productTitle = document.querySelector("#product-name").textContent;
      const productPrice = document.querySelector("#product-price").textContent;
  
      // ✅ Lấy màu sắc đang chọn (có class selected)
      const selectedColor = document.querySelector("#color-options .selected");
      const productColor = selectedColor ? selectedColor.textContent : "Không rõ";
  
      // ✅ Lấy dung lượng đang chọn (có class selected)
      const selectedStorage = document.querySelector("#storage-options .selected");
      const productStorage = selectedStorage ? selectedStorage.textContent : "Không rõ";
  
      const newItem = {
        img: productImg,
        price: productPrice,
        storage: productStorage,
        title: productTitle,
        color: productColor,
        quantity: 1,
      };
  
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const existingIndex = cart.findIndex(
        (item) =>
          item.title === newItem.title &&
          item.color === newItem.color &&
          item.storage === newItem.storage
      );
  
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push(newItem);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Đã thêm vào giỏ: ${newItem.title} - ${newItem.color} - ${newItem.storage}`);
    });
  });
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
                 <img src="${item.img}" class="cart-img" alt="${item.img}" />
                  <div class="cart-detail">
                    <h2 class="cart-product-title">${item.title}</h2>
                    <span class="cart-price">${item.price} ${item.color} ${item.storage}</span>
                    <div class="cart-quantity">
                      <button id="decrement" data-index="${index}" >-</button>
                      <span class="number">${item.quantity}</span>
                      <button id="increment" data-index="${index}">+</button>
                    </div>
                  </div>
                  <i class="ri-delete-bin-line cart-remove data-index="${index}" style="cursor: pointer;"></i>
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