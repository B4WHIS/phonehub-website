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
            "../assets/images/product/apple/iphone-15-plus-xanh.jpg",
            "../assets/images/product/apple/iphone-15-hong.jpg",
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
          colorCode: "#222930",

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
          colorCode: "#a0b4c7",
          images: [
            "../assets/images/product/apple/iPhone-14-plus-xanh.jpg",
            "../assets/images/product/apple/iPhone-14-plus-den.jpg",
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
      id: "iphone-13",
      name: "iPhone 13",
      basePrice: "11.990.000đ",
      mainImage: "../assets/images/product/apple/iphone-13-trang.webp",
      variants: [
        {
          color: "Trắng",
          colorCode: "#faf6f2",
          images: [
            "../assets/images/product/apple/iphone-13-trang.webp",
            "../assets/images/product/apple/iphone-13-den.jpg",
          ],
          storageOptions: [
            { capacity: "128GB", price: "11.990.000đ" },
            { capacity: "256GB", price: "15.990.000đ" },
          ],
        },
        {
          color: "Đen",
          colorCode: "#232a31",
          images: [
            "../assets/images/product/apple/iphone-13-den.jpg",
            "../assets/images/product/apple/iphone-13-trang.webp",
          ],
          storageOptions: [
            { capacity: "128GB", price: "11.990.000đ" },
            { capacity: "256GB", price: "15.990.000đ" },
          ],
        },
      ],
      description:
        "iPhone 13 thường được trang bị chip A15 Bionic mạnh mẽ với 6 nhân CPU và 4 nhân GPU, cung cấp mức hiệu năng vượt trội, giúp xử lý nhanh chóng các tác vụ nặng. Màn hình Super Retina XDR 6.1 inch trên máy cũng được đánh giá cao khi mang tới hình ảnh sắc nét với độ sáng cao, tối ưu hóa trải nghiệm xem nội dung dưới mọi điều kiện ánh sáng. Chưa hết, iPhone13 còn sở hữu hệ thống camera kép 12MP với công nghệ ổn định hình ảnh quang học (OIS) cải thiện khả năng quay film, chụp hình, ngay cả khi đang ở trong môi trường ánh sáng yếu.",
    },
    {
      id: "iphone-12",
      name: "iPhone 12",
      basePrice: "10.590.000đ",
      mainImage: "../assets/images/product/apple/iphone-12-tim.jpg",
      variants: [
        {
          color: "Tím",
          colorCode: "#e6e6fa",
          images: [
            "../assets/images/product/apple/iphone-12-tim.jpg",
            "../assets/images/product/apple/iphone-12-xanh.webp",
          ],
          storageOptions: [
            { capacity: "64GB", price: "10.590.000đ" },
            { capacity: "128GB", price: "11.990.000đ" },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#b0e0e6",
          images: [
            "../assets/images/product/apple/iphone-12-xanh.webp",
            "../assets/images/product/apple/iphone-12-tim.jpg",
          ],
          storageOptions: [
            { capacity: "64GB", price: "10.590.000đ" },
            { capacity: "128GB", price: "11.990.000đ" },
          ],
        },
      ],
      description:
        "iPhone 12 được trang bị chip A14 Bionic mạnh mẽ với 6 nhân CPU và 4 nhân GPU, cung cấp hiệu năng vượt trội, giúp xử lý nhanh chóng các tác vụ nặng. Màn hình Super Retina XDR 6.1 inch mang đến hình ảnh sắc nét với độ sáng cao, tối ưu hóa trải nghiệm xem nội dung dưới mọi điều kiện ánh sáng. Ngoài ra, iPhone 12 sở hữu hệ thống camera kép 12MP với công nghệ Night Mode và Deep Fusion, cải thiện khả năng chụp ảnh và quay video, ngay cả trong môi trường ánh sáng yếu.",
    },
    {
      id: "iphone-11-pro-max",
      name: "iPhone 11 Pro Max",
      basePrice: "25.600.000đ",
      mainImage: "../assets/images/product/apple/iphone-11-pro-max-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/apple/iphone-11-pro-max-den.webp",
            "../assets/images/product/apple/iphone-11-pro-max-vang.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "25.600.000đ",
            },
            {
              capacity: "256GB",
              price: "29.600.000đ",
            },
            {
              capacity: "512GB",
              price: "33.600.000đ",
            },
          ],
        },
        {
          color: "Vàng",
          colorCode: "#f9e7c3",
          images: [
            "../assets/images/product/apple/iphone-11-pro-max-vang.webp",
            "../assets/images/product/apple/iphone-11-pro-max-den.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "25.600.000đ",
            },
            {
              capacity: "256GB",
              price: "29.600.000đ",
            },
            {
              capacity: "512GB",
              price: "33.600.000đ",
            },
          ],
        },
      ],
      description:
        "iPhone 11 Pro Max được trang bị chip A13 Bionic mạnh mẽ với 6 nhân CPU và 4 nhân GPU, cung cấp hiệu năng vượt trội, giúp xử lý mượt mà các tác vụ nặng. Màn hình Super Retina XDR 6.5 inch với độ phân giải 1242 x 2688 pixels mang đến hình ảnh sắc nét và độ sáng cao, tối ưu hóa trải nghiệm xem nội dung. Ngoài ra, iPhone 11 Pro Max sở hữu hệ thống ba camera 12MP với công nghệ Night Mode và Deep Fusion, cải thiện khả năng chụp ảnh và quay video ngay cả trong điều kiện ánh sáng yếu. Thời lượng pin của máy cũng được nâng cấp, cho phép sử dụng lâu hơn so với các thế hệ trước.",
    },
    {
      id: "iphone-x",
      name: "iPhone X",
      basePrice: "11.990.000đ",
      mainImage: "../assets/images/product/apple/iphone-x-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/apple/iphone-x-den.webp",
            "../assets/images/product/apple/iphone-x-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "11.990.000đ",
            },
            {
              capacity: "256GB",
              price: "13.990.000đ",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#f2f2f7",
          images: [
            "../assets/images/product/apple/iphone-x-trang.webp",
            "../assets/images/product/apple/iphone-x-den.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "11.990.000đ",
            },
            {
              capacity: "256GB",
              price: "13.990.000đ",
            },
          ],
        },
      ],
      description:
        "iPhone X được trang bị chip A11 Bionic với 6 nhân CPU và 3 nhân GPU, cung cấp hiệu năng mạnh mẽ cho các tác vụ hàng ngày. Màn hình Super Retina OLED 5.8 inch với độ phân giải 1125 x 2436 pixels mang đến hình ảnh sắc nét và màu sắc sống động. iPhone X sở hữu hệ thống camera kép 12MP với công nghệ chống rung quang học (OIS) và khả năng chụp ảnh chân dung xóa phông chuyên nghiệp. Ngoài ra, máy còn hỗ trợ tính năng nhận diện khuôn mặt Face ID và sạc không dây tiện lợi.",
    },
  ],
};
