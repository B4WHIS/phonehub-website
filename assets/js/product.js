const products = {
  apple: [
    {
      id: "iphone-16-pro-max",
      name: "iPhone 16 Pro Max",
      basePrice: "31.190.000₫",
      mainImage: "../assets/images/product/apple/iphone-16-pro-max.jpg",
      variants: [
        {
          color: "Vàng Titan",
          colorCode: "#C4AB97",
          images: [
            "../assets/images/product/apple/iphone-16-pro-max.jpg",
            "../assets/images/product/apple/iphone-16-pro-max-titan-den.webp",
          ],
          storageOptions: [
            { capacity: "128GB", price: "31.190.000₫" },
            { capacity: "256GB", price: "34.190.000₫" },
            { capacity: "512GB", price: "38.190.000₫" },
          ],
        },
        {
          color: "Đen Titan",
          colorCode: "#000000",
          images: [
            "../assets/images/product/apple/iphone-16-pro-max-titan-den.webp",
            "../assets/images/product/apple/iphone-16-pro-max.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "31.190.000₫" },
            { capacity: "256GB", price: "34.190.000₫" },
            { capacity: "512GB", price: "38.190.000₫" },
          ],
        },
      ],
      description:
        "iPhone 16 Pro Max với thiết kế mới nhất, hiệu năng vượt trội và camera chuyên nghiệp. Phiên bản cao cấp nhất của Apple với màn hình Super Retina XDR 6.7 inch, chip A18 Pro và khả năng chống nước IP68.",
    },
    {
      id: "iphone-15",
      name: "iPhone 15",
      basePrice: "15.990.000₫",
      mainImage: "../assets/images/product/apple/iphone-15-hong.jpg",
      variants: [
        {
          color: "Hồng",
          colorCode: "#ebd3d4",
          images: [
            "../assets/images/product/apple/iphone-15-hong.jpg",
            "../assets/images/product/apple/iphone-15-plus-xanh.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "15.990.000₫" },
            { capacity: "256GB", price: "18.990.000₫" },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#d0d9ca",
          images: [
            "../assets/images/product/apple/iphone-15-hong.jpg",
            "../assets/images/product/apple/iphone-15-plus-xanh.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "15.990.000₫" },
            { capacity: "256GB", price: "18.990.000₫" },
          ],
        },
      ],
      description:
        "iPhone 15 128GB được trang bị màn hình Dynamic Island kích thước 6.1 inch với công nghệ hiển thị Super Retina XDR màn lại trải nghiệm hình ảnh vượt trội. Điện thoại với mặt lưng kính nhám chống bám mồ hôi cùng 5 phiên bản màu sắc lựa chọn: Hồng, Vàng, Xanh lá, Xanh dương và đen. Camera trên iPhone 15 series cũng được nâng cấp lên cảm biến 48MP cùng tính năng chụp zoom quang học tới 2x. Cùng với thiết kế cổng sạc thay đổi từ lightning sang USB-C vô cùng ấn tượng.",
    },
    {
      id: "iphone-14-plus",
      name: "iPhone 14 Plus",
      basePrice: "17.990.000đ",
      mainImage: "../assets/images/product/apple/iPhone-14-plus-den.jpg",
      variants: [
        {
          color: "Đen",
          colorCode: "#ebd3d4",
          images: [
            "../assets/images/product/apple/iPhone-14-plus-den.jpg",
            "../assets/images/product/apple/iPhone-14-plus-xanh.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "17.990.000đ" },
            { capacity: "256GB", price: "19.990.000đ" },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#ebd3d4",
          images: [
            "../assets/images/product/apple/iPhone-14-plus-den.jpg",
            "../assets/images/product/apple/iPhone-14-plus-xanh.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "17.990.000đ" },
            { capacity: "256GB", price: "19.990.000đ" },
          ],
        },
      ],
      description:
        "iPhone 14 Plus sở hữu màn hình Super Retina XDR OLED thiết kế tai thỏ, kích thước 6.7 inch, kết hợp công nghệ True Tone, HDR, Haptic Touch, Không chỉ vậy, sản phẩm còn trang bị chip A15 Bionic mạnh mẽ, RAM 6GB và chạy trên hệ điều hành iOS 16. Camera kép 12MP cải thiện khả năng chụp thiếu sáng, camera trước True Depth 12MP tự động lấy nét. Xem thêm chi tiết với thông tin sau đây!",
    },
    {
      id: "iphone-14-plus",
      name: "iPhone 14 Plus",
      basePrice: "17.990.000đ",
      mainImage: "../assets/images/product/apple/iPhone-14-plus-den.jpg",
      variants: [
        {
          color: "Đen",
          colorCode: "#ebd3d4",
          images: [
            "../assets/images/product/apple/iPhone-14-plus-den.jpg",
            "../assets/images/product/apple/iPhone-14-plus-xanh.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "17.990.000đ" },
            { capacity: "256GB", price: "19.990.000đ" },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#ebd3d4",
          images: [
            "../assets/images/product/apple/iPhone-14-plus-den.jpg",
            "../assets/images/product/apple/iPhone-14-plus-xanh.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "17.990.000đ" },
            { capacity: "256GB", price: "19.990.000đ" },
          ],
        },
      ],
      description:
        "iPhone 14 Plus sở hữu màn hình Super Retina XDR OLED thiết kế tai thỏ, kích thước 6.7 inch, kết hợp công nghệ True Tone, HDR, Haptic Touch, Không chỉ vậy, sản phẩm còn trang bị chip A15 Bionic mạnh mẽ, RAM 6GB và chạy trên hệ điều hành iOS 16. Camera kép 12MP cải thiện khả năng chụp thiếu sáng, camera trước True Depth 12MP tự động lấy nét. Xem thêm chi tiết với thông tin sau đây!",
    },
  ],
};
