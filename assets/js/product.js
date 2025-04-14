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
    {
      id: "iphone-se",
      name: "iPhone SE",
      basePrice: "9.490.000đ",
      mainImage: "../assets/images/product/apple/iphone-se-trang.webp",
      variants: [
        {
          color: "Trắng",
          colorCode: "#f2f2f2",
          images: [
            "../assets/images/product/apple/iphone-se-trang.webp",
            "../assets/images/product/apple/iphone-x-den.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "9.490.000đ",
            },
            {
              capacity: "128GB",
              price: "10.990.000đ",
            },
            {
              capacity: "256GB",
              price: "13.490.000đ",
            },
          ],
        },
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/apple/iphone-x-den.webp",
            "../assets/images/product/apple/iphone-se-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "9.490.000đ",
            },
            {
              capacity: "128GB",
              price: "10.990.000đ",
            },
            {
              capacity: "256GB",
              price: "13.490.000đ",
            },
          ],
        },
      ],
      description:
        "iPhone SE sở hữu thiết kế nhỏ gọn nhưng vẫn mang trong mình sức mạnh từ chip A15 Bionic, cho hiệu năng mạnh mẽ. Màn hình Retina HD 4.7 inch mang lại chất lượng hiển thị tốt. Camera đơn 12MP hỗ trợ chụp ảnh chân thực, sắc nét. Máy hỗ trợ Touch ID tích hợp nút Home truyền thống, khả năng kháng nước chuẩn IP67 và sạc không dây tiện lợi.",
    },
  ],
  oppo: [
    {
      id: "oppo-a3",
      name: "OPPO A3",
      basePrice: "5.290.000₫",
      mainImage: "../assets/images/product/oppo/oppo-a3-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/oppo/oppo-a3-den.webp",
            "../assets/images/product/oppo/oppo-a3-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "5.290.000₫",
            },
            {
              capacity: "256GB",
              price: "6.090.000₫",
            },
          ],
        },
        {
          color: "Tím",
          colorCode: "#e6e6fa",
          images: [
            "../assets/images/product/oppo/oppo-a3-tim.webp",
            "../assets/images/product/oppo/oppo-a3-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "5.290.000₫",
            },
            {
              capacity: "256GB",
              price: "6.090.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO A3 sở hữu thiết kế bền bỉ đạt tiêu chuẩn quân sự và khả năng kháng nước IP54, giúp thiết bị vượt qua mọi thử thách. Máy được trang bị màn hình IPS LCD 6.67 inch với độ phân giải HD+ (720 x 1.604 pixels), tần số quét 90 Hz và độ sáng tối đa 1.000 nits, mang lại trải nghiệm hình ảnh sống động và mượt mà. Camera sau 50 MP kết hợp với thuật toán thông minh cho phép chụp ảnh sắc nét ngay cả trong điều kiện ánh sáng yếu. Camera trước 5 MP tích hợp AI mang đến những bức ảnh selfie tự nhiên. Viên pin 5.100 mAh hỗ trợ sạc nhanh SuperVOOC 45W, đảm bảo thời gian sử dụng dài lâu và sạc đầy nhanh chóng.",
    },
    {
      id: "oppo-a58",
      name: "OPPO A58",
      basePrice: "4.970.000₫",
      mainImage: "../assets/images/product/oppo/oppo-a58-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/oppo/oppo-a58-den.webp",
            "../assets/images/product/oppo/oppo-a58-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.970.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#aee0e4",
          images: [
            "../assets/images/product/oppo/oppo-a58-xanh.webp",
            "../assets/images/product/oppo/oppo-a58-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.970.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO A58 được trang bị màn hình IPS LCD 6.72 inch với độ phân giải 1080 x 2400 pixels, mang đến trải nghiệm hình ảnh sắc nét. Máy sử dụng vi xử lý MediaTek Helio G85, RAM 6GB và bộ nhớ trong 128GB, đáp ứng tốt nhu cầu sử dụng hàng ngày. Camera chính 50MP cho phép chụp ảnh chất lượng cao, cùng viên pin 5000mAh hỗ trợ sạc nhanh 33W, đảm bảo thời gian sử dụng lâu dài.",
    },
    {
      id: "oppo-a79",
      name: "OPPO A79 5G",
      basePrice: "7.690.000₫",
      mainImage: "../assets/images/product/oppo/oppo-a79-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/oppo/oppo-a79-den.webp",
            "../assets/images/product/oppo/oppo-a79-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "7.690.000₫",
            },
          ],
        },
        {
          color: "Tím",
          colorCode: "#d8bfd8",
          images: [
            "../assets/images/product/oppo/oppo-a79-tim.webp",
            "../assets/images/product/oppo/oppo-a79-den.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "7.690.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO A79 5G sở hữu thiết kế thời thượng với màn hình 6.5 inch độ phân giải Full HD+, mang lại trải nghiệm xem tuyệt vời. Máy được trang bị vi xử lý MediaTek Dimensity 6020, RAM 8GB và bộ nhớ trong 256GB, hỗ trợ kết nối 5G cho tốc độ truy cập internet nhanh chóng. Camera chính 64MP cho hình ảnh sắc nét, cùng viên pin 5000mAh hỗ trợ sạc nhanh 33W, đáp ứng nhu cầu sử dụng cả ngày dài.",
    },
    {
      id: "oppo-find-x8",
      name: "OPPO Find X8",
      basePrice: "23.990.000₫",
      mainImage: "../assets/images/product/oppo/oppo-find-x8-mau-den.webp",
      variants: [
        {
          color: "Màu Đen",
          colorCode: "#000000",
          images: [
            "../assets/images/product/oppo/oppo-find-x8-mau-den.webp",
            "../assets/images/product/oppo/oppo-find-x8-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "512GB",
              price: "23.990.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/oppo/oppo-find-x8-trang.webp",
            "../assets/images/product/oppo/oppo-find-x8-mau-den.webp",
          ],
          storageOptions: [
            {
              capacity: "512GB",
              price: "23.990.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO Find X8 nổi bật với thiết kế sang trọng, màn hình AMOLED 6.7 inch độ phân giải QHD+ và tần số quét 120Hz, cho hình ảnh mượt mà và sắc nét. Máy được trang bị vi xử lý Snapdragon 8 Gen 2, RAM 16GB và bộ nhớ trong 512GB, đáp ứng mọi nhu cầu sử dụng. Hệ thống camera hợp tác với Hasselblad, bao gồm camera chính 50MP, cho khả năng chụp ảnh chuyên nghiệp. Pin dung lượng 5000mAh hỗ trợ sạc nhanh 80W, đảm bảo thời gian sử dụng lâu dài.",
    },
    {
      id: "oppo-reno10-pro-plus",
      name: "OPPO Reno10 Pro+ 5G",
      basePrice: "19.990.000₫",
      mainImage: "../assets/images/product/oppo/oppo-reno10-pro-plus-tim.webp",
      variants: [
        {
          color: "Tím",
          colorCode: "#d8bfd8",
          images: [
            "../assets/images/product/oppo/oppo-reno10-pro-plus-tim.webp",
            "../assets/images/product/oppo/oppo-reno10-pro-plus-xam.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "19.990.000₫",
            },
          ],
        },
        {
          color: "Xám",
          colorCode: "#a9a9a9",
          images: [
            "../assets/images/product/oppo/oppo-reno10-pro-plus-xam.webp",
            "../assets/images/product/oppo/oppo-reno10-pro-plus-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "19.990.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO Reno10 Pro+ 5G sở hữu màn hình AMOLED 6.74 inch độ phân giải Full HD+ với tần số quét 120Hz, mang đến trải nghiệm hình ảnh mượt mà. Máy được trang bị vi xử lý Snapdragon 8+ Gen 1, RAM 12GB và bộ nhớ trong 256GB, đáp ứng tốt nhu cầu sử dụng hàng ngày và chơi game. Hệ thống camera chính 50MP, camera tele 64MP và camera góc siêu rộng 8MP cho khả năng chụp ảnh ấn tượng. Pin dung lượng 4700mAh hỗ trợ sạc nhanh 100W, đảm bảo thời gian sử dụng lâu dài.",
    },
    {
      id: "oppo-reno12",
      name: "OPPO Reno12 5G",
      basePrice: "18.990.000₫",
      mainImage: "../assets/images/product/oppo/oppo-reno12-bac.webp",
      variants: [
        {
          color: "Bạc",
          colorCode: "#c0c0c0",
          images: [
            "../assets/images/product/oppo/oppo-reno12-bac.webp",
            "../assets/images/product/oppo/oppo-reno12-nauDong.webp",
          ],
          storageOptions: [
            {
              capacity: "512GB",
              price: "18.990.000₫",
            },
          ],
        },
        {
          color: "Nâu Đồng",
          colorCode: "#b87333",
          images: [
            "../assets/images/product/oppo/oppo-reno12-nauDong.webp",
            "../assets/images/product/oppo/oppo-reno12-bac.webp",
          ],
          storageOptions: [
            {
              capacity: "512GB",
              price: "18.990.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO Reno12 5G được trang bị màn hình AMOLED 6.7 inch độ phân giải Full HD+ với tần số quét 120Hz, mang lại trải nghiệm hình ảnh sắc nét. Máy sử dụng vi xử lý Snapdragon 780G, RAM 12GB và bộ nhớ trong 512GB, đáp ứng tốt nhu cầu đa nhiệm và lưu trữ. Hệ thống camera chính 50MP, camera góc siêu rộng 16MP và camera macro 2MP cho khả năng chụp ảnh đa dạng. Pin dung lượng 6000mAh hỗ trợ sạc nhanh 65W, đảm bảo thời gian sử dụng dài lâu.",
    },
    {
      id: "oppo-reno13f",
      name: "OPPO Reno13 F 5G",
      basePrice: "9.990.000₫",
      mainImage: "../assets/images/product/oppo/oppo-reno13F-tim.webp",
      variants: [
        {
          color: "Tím",
          colorCode: "#d8bfd8",
          images: [
            "../assets/images/product/oppo/oppo-reno13F-tim.webp",
            "../assets/images/product/oppo/oppo-reno13F-xam.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "9.990.000₫",
            },
            {
              capacity: "512GB",
              price: "11.990.000₫",
            },
          ],
        },
        {
          color: "Xám",
          colorCode: "#a9a9a9",
          images: [
            "../assets/images/product/oppo/oppo-reno13F-xam.webp",
            "../assets/images/product/oppo/oppo-reno13F-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "9.990.000₫",
            },
            {
              capacity: "512GB",
              price: "11.990.000₫",
            },
          ],
        },
      ],
      description:
        "OPPO Reno13 F 5G nổi bật với thiết kế mỏng nhẹ, màn hình AMOLED sắc nét và hiệu năng mạnh mẽ từ vi xử lý MediaTek Helio G100. Máy hỗ trợ chuẩn kháng nước IP66, IP68, IP69, đáp ứng tốt nhu cầu sử dụng hàng ngày. Hệ thống camera trước 32MP và các tính năng AI mang đến trải nghiệm chụp ảnh ấn tượng. Pin dung lượng lớn hỗ trợ sạc nhanh, đảm bảo thời gian sử dụng lâu dài.",
    },
  ],
  realme: [
    {
      id: "realme-7-pro",
      name: "Realme 7 Pro",
      basePrice: "7.990.000₫",
      mainImage: "../assets/images/product/realme/realme-7-pro-bac.webp",
      variants: [
        {
          color: "Bạc",
          colorCode: "#c0c0c0",
          images: [
            "../assets/images/product/realme/realme-7-pro-bac.webp",
            "../assets/images/product/realme/realme-7-pro-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "7.990.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#1e90ff",
          images: [
            "../assets/images/product/realme/realme-7-pro-xanh.webp",
            "../assets/images/product/realme/realme-7-pro-bac.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "7.990.000₫",
            },
          ],
        },
      ],
      description:
        "Realme 7 Pro nổi bật với màn hình Super AMOLED 6.4 inch, vi xử lý Snapdragon 720G, RAM 8GB và bộ nhớ trong 128GB. Máy sở hữu cụm 4 camera sau với cảm biến chính 64MP, hỗ trợ sạc nhanh SuperDart 65W, mang đến trải nghiệm mượt mà và tiện lợi cho người dùng.",
    },
    {
      id: "realme-11-pro",
      name: "Realme 11 Pro 5G",
      basePrice: "10.990.000₫",
      mainImage: "../assets/images/product/realme/realme-11-pro-trang.webp",
      variants: [
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/realme/realme-11-pro-trang.webp",
            "../assets/images/product/realme/realme-11-pro-xanhla.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "10.990.000₫",
            },
          ],
        },
        {
          color: "Xanh Lá",
          colorCode: "#228b22",
          images: [
            "../assets/images/product/realme/realme-11-pro-xanhla.webp",
            "../assets/images/product/realme/realme-11-pro-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "10.990.000₫",
            },
          ],
        },
      ],
      description:
        "Realme 11 Pro 5G được trang bị màn hình AMOLED 6.7 inch với tần số quét 120Hz, vi xử lý Dimensity 7050, RAM 8GB và bộ nhớ trong 256GB. Máy sở hữu camera chính 100MP với công nghệ chống rung OIS, pin 5000mAh hỗ trợ sạc nhanh 67W, mang đến hiệu năng mạnh mẽ và trải nghiệm chụp ảnh ấn tượng.",
    },
    {
      id: "realme-c55",
      name: "Realme C55",
      basePrice: "4.290.000₫",
      mainImage: "../assets/images/product/realme/realme-c55-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/realme/realme-c55-den.webp",
            "../assets/images/product/realme/realme-c55-vang.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.290.000₫",
            },
          ],
        },
        {
          color: "Vàng",
          colorCode: "#f5d76e",
          images: [
            "../assets/images/product/realme/realme-c55-vang.webp",
            "../assets/images/product/realme/realme-c55-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.290.000₫",
            },
          ],
        },
      ],
      description:
        "Realme C55 sở hữu màn hình IPS LCD 6.72 inch với tần số quét 90Hz, vi xử lý MediaTek Helio G88, RAM 6GB và bộ nhớ trong 128GB. Máy trang bị camera chính 64MP, pin 5000mAh hỗ trợ sạc nhanh 33W, mang đến trải nghiệm mượt mà và thời lượng sử dụng lâu dài.",
    },
    {
      id: "realme-c60",
      name: "Realme C60",
      basePrice: "3.490.000₫",
      mainImage: "../assets/images/product/realme/realme-c60-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/realme/realme-c60-den.webp",
            "../assets/images/product/realme/realme-c60-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "3.490.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#add8e6",
          images: [
            "../assets/images/product/realme/realme-c60-xanh.webp",
            "../assets/images/product/realme/realme-c60-den.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "3.490.000₫",
            },
          ],
        },
      ],
      description:
        "Realme C60 được trang bị màn hình IPS LCD 6.5 inch, vi xử lý Unisoc T612, RAM 4GB và bộ nhớ trong 64GB. Máy sở hữu camera chính 50MP, pin 5000mAh hỗ trợ sạc nhanh 33W, đáp ứng tốt nhu cầu sử dụng hàng ngày.",
    },
    {
      id: "realme-c65",
      name: "Realme C65",
      basePrice: "3.690.000₫",
      mainImage: "../assets/images/product/realme/realme-c65-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/realme/realme-c65-den.webp",
            "../assets/images/product/realme/realme-c65-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "3.690.000₫",
            },
            {
              capacity: "256GB",
              price: "4.790.000₫",
            },
          ],
        },
        {
          color: "Tím",
          colorCode: "#dda0dd",
          images: [
            "../assets/images/product/realme/realme-c65-tim.webp",
            "../assets/images/product/realme/realme-c65-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "3.690.000₫",
            },
            {
              capacity: "256GB",
              price: "4.790.000₫",
            },
          ],
        },
      ],
      description:
        "Realme C65 nổi bật với màn hình IPS LCD 6.67 inch, vi xử lý MediaTek Helio G85, RAM 6GB/8GB và bộ nhớ trong 128GB/256GB. Máy trang bị camera chính 50MP, pin 5000mAh hỗ trợ sạc nhanh 45W, mang đến hiệu năng mạnh mẽ và thời lượng sử dụng ấn tượng.",
    },
    {
      id: "realme-c67",
      name: "Realme C67",
      basePrice: "4.990.000₫",
      mainImage: "../assets/images/product/realme/realme-c67-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#000000",
          images: [
            "../assets/images/product/realme/realme-c67-den.webp",
            "../assets/images/product/realme/realme-c67-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.990.000₫",
            },
            {
              capacity: "256GB",
              price: "5.490.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#00bfff",
          images: [
            "../assets/images/product/realme/realme-c67-xanh.webp",
            "../assets/images/product/realme/realme-c67-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.990.000₫",
            },
            {
              capacity: "256GB",
              price: "5.490.000₫",
            },
          ],
        },
      ],
      description:
        "Realme C67 được trang bị màn hình IPS LCD 6.72 inch với độ phân giải Full HD+ và tần số quét 120Hz, mang đến trải nghiệm hình ảnh mượt mà. Máy sử dụng vi xử lý Snapdragon 685, RAM 6GB và bộ nhớ trong tùy chọn 128GB hoặc 256GB, đáp ứng tốt nhu cầu sử dụng hàng ngày và chơi game nhẹ. Hệ thống camera chính 108MP cho khả năng chụp ảnh sắc nét, cùng viên pin 5000mAh hỗ trợ sạc nhanh 33W, đảm bảo thời gian sử dụng lâu dài.",
    },
  ],
  samsung: [
    {
      id: "galaxy-a55-5g",
      name: "Samsung Galaxy A55",
      basePrice: "9.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-a55-5g-den.jpg",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/samsung/galaxy-a55-5g-den.jpg",
            "../assets/images/product/samsung/galaxy-a55-5g-trang.jpg",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "9.990.000₫",
            },
            {
              capacity: "256GB",
              price: "10.990.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/samsung/galaxy-a55-5g-trang.jpg",
            "../assets/images/product/samsung/galaxy-a55-5g-den.jpg",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "9.990.000₫",
            },
            {
              capacity: "256GB",
              price: "10.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy A55 sở hữu màn hình Super AMOLED 6.6 inch với tần số quét 120Hz, vi xử lý Exynos 1480 (4nm), RAM 8GB và bộ nhớ trong 128GB hoặc 256GB. Máy trang bị cụm 3 camera sau với cảm biến chính 50MP, camera trước 32MP, pin 5000mAh hỗ trợ sạc nhanh 25W, cùng khả năng kháng nước và bụi chuẩn IP67.",
    },
    {
      id: "galaxy-s23",
      name: "Samsung Galaxy S23",
      basePrice: "17.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-s23-trang.jpg",
      variants: [
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/samsung/galaxy-s23-trang.jpg",
            "../assets/images/product/samsung/galaxy-s23-xanhla.jpg",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "17.990.000₫",
            },
            {
              capacity: "256GB",
              price: "19.990.000₫",
            },
          ],
        },
        {
          color: "Xanh Lá",
          colorCode: "#a8d5ba",
          images: [
            "../assets/images/product/samsung/galaxy-s23-xanhla.jpg",
            "../assets/images/product/samsung/galaxy-s23-trang.jpg",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "17.990.000₫",
            },
            {
              capacity: "256GB",
              price: "19.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy S23 được trang bị màn hình Dynamic AMOLED 2X 6.1 inch, vi xử lý Snapdragon 8 Gen 2, RAM 8GB và bộ nhớ trong 128GB hoặc 256GB. Máy sở hữu cụm 3 camera sau với cảm biến chính 50MP, camera trước 12MP, pin 3900mAh hỗ trợ sạc nhanh 25W, mang đến hiệu năng mạnh mẽ và trải nghiệm chụp ảnh chất lượng.",
    },
    {
      id: "galaxy-s24plus",
      name: "Samsung Galaxy S24",
      basePrice: "25.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-s24plus-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/samsung/galaxy-s24plus-den.webp",
            "../assets/images/product/samsung/galaxy-s24plus-tim.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "25.990.000₫",
            },
            {
              capacity: "512GB",
              price: "27.990.000₫",
            },
          ],
        },
        {
          color: "Tím",
          colorCode: "#d8bfd8",
          images: [
            "../assets/images/product/samsung/galaxy-s24plus-tim.jpg",
            "../assets/images/product/samsung/galaxy-s24plus-den.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "25.990.000₫",
            },
            {
              capacity: "512GB",
              price: "27.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy S24 sở hữu màn hình Dynamic AMOLED 2X 6.7 inch với độ phân giải QHD+, vi xử lý Exynos 2400, RAM 12GB và bộ nhớ trong 256GB hoặc 512GB. Máy trang bị cụm 3 camera sau với cảm biến chính 50MP, camera trước 12MP, pin 4900mAh hỗ trợ sạc nhanh 45W, cùng các tính năng AI tiên tiến.",
    },
    {
      id: "galaxy-s25",
      name: "Samsung Galaxy S25",
      basePrice: "21.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-s25-den.jpg",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/samsung/galaxy-s25-den.jpg",
            "../assets/images/product/samsung/galaxy-s25-trang.jpg",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "21.990.000₫",
            },
            {
              capacity: "256GB",
              price: "23.990.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/samsung/galaxy-s25-trang.jpg",
            "../assets/images/product/samsung/galaxy-s25-den.jpg",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "21.990.000₫",
            },
            {
              capacity: "256GB",
              price: "23.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy S25 được trang bị màn hình Dynamic AMOLED 2X 6.2 inch, vi xử lý Snapdragon 8 Gen 3, RAM 8GB và bộ nhớ trong 128GB hoặc 256GB. Máy sở hữu cụm 3 camera sau với cảm biến chính 50MP, camera trước 12MP, pin 4000mAh hỗ trợ sạc nhanh 25W, mang đến hiệu năng mạnh mẽ và trải nghiệm chụp ảnh chất lượng.",
    },
    {
      id: "galaxy-s25plus",
      name: "Samsung Galaxy S25 Plus",
      basePrice: "24.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-s25plus-xanh.jpg",
      variants: [
        {
          color: "Xanh",
          colorCode: "#1e90ff",
          images: ["../assets/images/product/samsung/galaxy-s25plus-xanh.jpg"],
          storageOptions: [
            {
              capacity: "256GB",
              price: "24.990.000₫",
            },
            {
              capacity: "512GB",
              price: "27.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy S25 Plus sở hữu màn hình Dynamic AMOLED 2X 6.7 inch, vi xử lý Snapdragon 8 Elite, RAM 12GB và bộ nhớ trong 256GB hoặc 512GB. Máy trang bị cụm 3 camera sau với cảm biến chính 50MP, camera trước 12MP, pin 4900mAh hỗ trợ sạc nhanh 45W, cùng các tính năng AI tiên tiến như Live Translation, Nightography và AI RePhoto.",
    },
    {
      id: "galaxy-zflip5",
      name: "Samsung Galaxy Z Flip5",
      basePrice: "21.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-zflip5-den.jpg",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/samsung/galaxy-zflip5-den.jpg",
            "../assets/images/product/samsung/galaxy-zflip5-xanhla.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "21.990.000₫",
            },
            {
              capacity: "512GB",
              price: "23.990.000₫",
            },
          ],
        },
        {
          color: "Xanh Lá",
          colorCode: "#32cd32",
          images: [
            "../assets/images/product/samsung/galaxy-zflip5-xanhla.jpg",
            "../assets/images/product/samsung/galaxy-zflip5-den.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "21.990.000₫",
            },
            {
              capacity: "512GB",
              price: "23.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy Z Flip5 sở hữu màn hình Dynamic AMOLED 2X 6.7 inch, vi xử lý Snapdragon 8 Gen 2, RAM 8GB và bộ nhớ trong 256GB hoặc 512GB. Máy trang bị camera chính 12MP, camera trước 10MP, pin 3700mAh hỗ trợ sạc nhanh 25W, cùng thiết kế gập độc đáo và các tính năng AI tiên tiến.",
    },
    {
      id: "galaxy-zflip6",
      name: "Samsung Galaxy Z Flip6",
      basePrice: "24.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-zflip6-den.png",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/samsung/galaxy-zflip6-den.png",
            "../assets/images/product/samsung/galaxy-zflip6-xanh.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "24.990.000₫",
            },
            {
              capacity: "512GB",
              price: "26.990.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#00bfff",
          images: [
            "../assets/images/product/samsung/galaxy-zflip6-xanh.jpg",
            "../assets/images/product/samsung/galaxy-zflip6-den.png",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "24.990.000₫",
            },
            {
              capacity: "512GB",
              price: "26.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy Z Flip6 được trang bị màn hình Dynamic AMOLED 2X 6.7 inch, vi xử lý Snapdragon 8 Gen 3, RAM 12GB và bộ nhớ trong 256GB hoặc 512GB. Máy sở hữu camera chính 50MP, camera trước 10MP, pin 3700mAh hỗ trợ sạc nhanh 25W, cùng các tính năng AI như Live Translation, AI Noise Suppression và Flex Cam với Auto Zoom.",
    },
    {
      id: "galaxy-zfold6",
      name: "Samsung Galaxy Z Fold6",
      basePrice: "44.990.000₫",
      mainImage: "../assets/images/product/samsung/galaxy-zfold6-den.png",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/samsung/galaxy-zfold6-den.png",
            "../assets/images/product/samsung/galaxy-zfold6-trang.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "44.990.000₫",
            },
            {
              capacity: "512GB",
              price: "47.990.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#f2f2f2",
          images: [
            "../assets/images/product/samsung/galaxy-zfold6-trang.jpg",
            "../assets/images/product/samsung/galaxy-zfold6-den.png",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "44.990.000₫",
            },
            {
              capacity: "512GB",
              price: "47.990.000₫",
            },
          ],
        },
      ],
      description:
        "Samsung Galaxy Z Fold6 sở hữu thiết kế màn hình gập cao cấp, trang bị vi xử lý Snapdragon 8 Gen 3 mạnh mẽ, màn hình chính 7.6 inch Dynamic AMOLED 2X hỗ trợ tần số quét 120Hz. Thiết bị có 3 camera sau với cảm biến chính 50MP, camera trước 10MP và camera ẩn dưới màn hình 4MP. Dung lượng pin 4400mAh hỗ trợ sạc nhanh 25W, cùng nhiều tính năng hỗ trợ đa nhiệm và bút S Pen.",
    },
  ],

  vivo: [
    {
      id: "vivo-v29e",
      name: "Vivo V29e 5G",
      basePrice: "8.490.000₫",
      mainImage: "../assets/images/product/vivo/vivo-v29e-xanhla.webp",
      variants: [
        {
          color: "Xanh Lá",
          colorCode: "#a8d5ba",
          images: [
            "../assets/images/product/vivo/vivo-v29e-xanhla.webp",
            "../assets/images/product/vivo/vivo-v29e-xanhtrang.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "8.490.000₫",
            },
            {
              capacity: "256GB",
              price: "9.490.000₫",
            },
          ],
        },
        {
          color: "Xanh Trắng",
          colorCode: "#d0e6f7",
          images: [
            "../assets/images/product/vivo/vivo-v29e-xanhtrang.webp",
            "../assets/images/product/vivo/vivo-v29e-xanhla.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "8.490.000₫",
            },
            {
              capacity: "256GB",
              price: "9.490.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo V29e 5G sở hữu màn hình AMOLED 6.67 inch với độ phân giải Full HD+, vi xử lý Snapdragon 695, RAM 8GB và bộ nhớ trong 128GB hoặc 256GB. Máy trang bị camera chính 64MP, camera trước 50MP, pin 4800mAh hỗ trợ sạc nhanh 44W, cùng thiết kế mỏng nhẹ và hiện đại.",
    },
    {
      id: "vivo-v30e",
      name: "Vivo V30e 5G",
      basePrice: "9.990.000₫",
      mainImage: "../assets/images/product/vivo/vivo-v30e-nau.webp",
      variants: [
        {
          color: "Nâu",
          colorCode: "#8b5e3c",
          images: [
            "../assets/images/product/vivo/vivo-v30e-nau.webp",
            "../assets/images/product/vivo/vivo-v30e-trang.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "9.990.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/vivo/vivo-v30e-trang.jpg",
            "../assets/images/product/vivo/vivo-v30e-nau.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "9.990.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo V30e 5G được trang bị màn hình AMOLED 6.78 inch với độ phân giải Full HD+, vi xử lý Snapdragon 6 Gen 1, RAM 8GB và bộ nhớ trong 256GB. Máy sở hữu camera chính 50MP sử dụng cảm biến Sony, camera trước 32MP, pin 5500mAh hỗ trợ sạc nhanh 44W, cùng thiết kế sang trọng và hiện đại.",
    },
    {
      id: "vivo-v40",
      name: "Vivo V40 5G",
      basePrice: "11.990.000₫",
      mainImage: "../assets/images/product/vivo/vivo-v40-cam.jpg",
      variants: [
        {
          color: "Cam",
          colorCode: "#f5b091",
          images: [
            "../assets/images/product/vivo/vivo-v40-cam.jpg",
            "../assets/images/product/vivo/vivo-v40-den.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "11.990.000₫",
            },
          ],
        },
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/vivo/vivo-v40-den.jpg",
            "../assets/images/product/vivo/vivo-v40-cam.jpg",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "11.990.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo V40 5G sở hữu màn hình AMOLED 6.78 inch với độ phân giải FHD+, tần số quét 120Hz, chip Snapdragon 7 Gen 3, RAM 8GB, bộ nhớ trong 256GB. Máy có camera chính 50MP, camera selfie 50MP, pin 5000mAh, sạc nhanh 80W và thiết kế mặt lưng sang trọng.",
    },
    {
      id: "vivo-y03",
      name: "Vivo Y03",
      basePrice: "2.990.000₫",
      mainImage: "../assets/images/product/vivo/vivo-y03-den.webp",
      variants: [
        {
          color: "Xanh lá đậm",
          colorCode: "#4caf50",
          images: [
            "../assets/images/product/vivo/vivo-y03-den.webp",
            "../assets/images/product/vivo/vivo-y03-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "2.990.000₫",
            },
          ],
        },
        {
          color: "Xanh lá nhạt",
          colorCode: "#a8d5ba",
          images: [
            "../assets/images/product/vivo/vivo-y03-xanh.webp",
            "../assets/images/product/vivo/vivo-y03-den.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "2.990.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo Y03 sở hữu màn hình LCD 6.56 inch HD+, vi xử lý Helio G85, RAM 4GB, bộ nhớ trong 64GB. Máy trang bị camera chính 13MP, pin 5000mAh, sạc nhanh 15W, thiết kế trẻ trung và thân thiện với người dùng phổ thông.",
    },
    {
      id: "vivo-y18s",
      name: "Vivo Y18s",
      basePrice: "3.290.000₫",
      mainImage: "../assets/images/product/vivo/vivo-y18s-den.webp",
      variants: [
        {
          color: "Nâu",
          colorCode: "#4e3b31",
          images: [
            "../assets/images/product/vivo/vivo-y18s-den.webp",
            "../assets/images/product/vivo/vivo-y18s-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "3.290.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#f5f5f5",
          images: [
            "../assets/images/product/vivo/vivo-y18s-trang.webp",
            "../assets/images/product/vivo/vivo-y18s-den.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "3.290.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo Y18s sở hữu màn hình LCD 6.56 inch, độ phân giải HD+, chip MediaTek Helio G85, RAM 4GB, bộ nhớ trong 64GB. Máy có pin 5000mAh hỗ trợ sạc nhanh 18W, camera chính 50MP và thiết kế trẻ trung.",
    },
    {
      id: "vivo-y19s",
      name: "Vivo Y19s",
      basePrice: "4.190.000₫",
      mainImage: "../assets/images/product/vivo/vivo-y19s-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#2e2e2e",
          images: [
            "../assets/images/product/vivo/vivo-y19s-den.webp",
            "../assets/images/product/vivo/vivo-y19s-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.190.000₫",
            },
          ],
        },
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/vivo/vivo-y19s-trang.webp",
            "../assets/images/product/vivo/vivo-y19s-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.190.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo Y19s có màn hình 6.56 inch HD+, dùng chip Helio G85, RAM 6GB, bộ nhớ trong 128GB. Máy sở hữu pin 5000mAh, camera chính 50MP, thiết kế đơn giản phù hợp cho học tập và giải trí nhẹ nhàng.",
    },
    {
      id: "vivo-y21",
      name: "Vivo Y21",
      basePrice: "3.990.000₫",
      mainImage: "../assets/images/product/vivo/vivo-y21-trang.webp",
      variants: [
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/vivo/vivo-y21-trang.webp",
            "../assets/images/product/vivo/vivo-y21-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "3.990.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#a6d3f2",
          images: [
            "../assets/images/product/vivo/vivo-y21-xanh.webp",
            "../assets/images/product/vivo/vivo-y21-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "64GB",
              price: "3.990.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo Y21 đi kèm màn hình LCD 6.51 inch HD+, chip MediaTek Helio P35, RAM 4GB, bộ nhớ 64GB, pin 5000mAh, camera sau 13MP + 2MP, camera trước 8MP. Thiết kế mỏng nhẹ, phù hợp cho nhu cầu cơ bản.",
    },
    {
      id: "vivo-y100",
      name: "Vivo Y100",
      basePrice: "6.490.000₫",
      mainImage: "../assets/images/product/vivo/vivo-y100-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1e1e1e",
          images: [
            "../assets/images/product/vivo/vivo-y100-den.webp",
            "../assets/images/product/vivo/vivo-y100-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "6.490.000₫",
            },
          ],
        },
        {
          color: "Xanh Lá ",
          colorCode: "#a8d5ba",
          images: [
            "../assets/images/product/vivo/vivo-y100-trang.webp",
            "../assets/images/product/vivo/vivo-y100-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "6.490.000₫",
            },
          ],
        },
      ],
      description:
        "Vivo Y100 có thiết kế sang trọng, màn hình AMOLED 6.38 inch FHD+, chip MediaTek Dimensity 6020, RAM 8GB, bộ nhớ 128GB, pin 4500mAh hỗ trợ sạc nhanh 44W, camera chính 64MP. Phù hợp cho người dùng yêu thích hiệu năng ổn định và thiết kế thời trang.",
    },
  ],
  xiaomi: [
    {
      id: "poco-m6",
      name: "POCO M6",
      basePrice: "3.990.000₫",
      mainImage: "../assets/images/product/xiaomi/poco-m6-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/xiaomi/poco-m6-den.webp",
            "../assets/images/product/xiaomi/poco-m6-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "3.990.000₫",
            },
          ],
        },
        {
          color: "Tím",
          colorCode: "#c8a2c8",
          images: [
            "../assets/images/product/xiaomi/poco-m6-tim.webp",
            "../assets/images/product/xiaomi/poco-m6-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "3.990.000₫",
            },
          ],
        },
      ],
      description:
        "POCO M6 trang bị màn hình 6.74 inch HD+ tần số quét 90Hz, vi xử lý Helio G85, RAM 6GB, bộ nhớ trong 128GB, camera chính 50MP, pin 5000mAh sạc nhanh 18W. Thiết kế trẻ trung, hiệu năng ổn định trong phân khúc giá rẻ.",
    },
    {
      id: "xiaomi-12t",
      name: "Xiaomi 12T",
      basePrice: "10.490.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi-12t-xam.webp",
      variants: [
        {
          color: "Xám",
          colorCode: "#7d7d7d",
          images: [
            "../assets/images/product/xiaomi/xiaomi-12t-xam.webp",
            "../assets/images/product/xiaomi/xiaomi-12t-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "10.490.000₫",
            },
            {
              capacity: "256GB",
              price: "11.990.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#add8e6",
          images: [
            "../assets/images/product/xiaomi/xiaomi-12t-xanh.webp",
            "../assets/images/product/xiaomi/xiaomi-12t-xam.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "10.490.000₫",
            },
            {
              capacity: "256GB",
              price: "11.990.000₫",
            },
          ],
        },
      ],
      description:
        "Xiaomi 12T nổi bật với màn hình AMOLED 6.67 inch 120Hz, chip Dimensity 8100-Ultra mạnh mẽ, RAM 8GB, camera chính 108MP, pin 5000mAh sạc nhanh 120W. Hiệu năng cao, camera sắc nét, phù hợp cả chơi game và chụp ảnh chuyên nghiệp.",
    },
    {
      id: "xiaomi-13c",
      name: "Xiaomi 13C",
      basePrice: "3.990.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi-13c-xanhduong.webp",
      variants: [
        {
          color: "Xanh dương",
          colorCode: "#00bfff",
          images: [
            "../assets/images/product/xiaomi/xiaomi-13c-xanhduong.webp",
            "../assets/images/product/xiaomi/xiaomi-13c-xanhla.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "3.990.000₫",
            },
          ],
        },
        {
          color: "Xanh lá",
          colorCode: "#90ee90",
          images: [
            "../assets/images/product/xiaomi/xiaomi-13c-xanhla.webp",
            "../assets/images/product/xiaomi/xiaomi-13c-xanhduong.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "3.990.000₫",
            },
          ],
        },
      ],
      description:
        "Xiaomi 13C có màn hình 6.74 inch HD+, tần số quét 90Hz, vi xử lý MediaTek Helio G85, RAM 6GB, bộ nhớ trong 128GB, camera sau 50MP, pin 5000mAh sạc nhanh 18W. Thiết kế trẻ trung, phù hợp cho người dùng phổ thông.",
    },
    {
      id: "xiaomi-13t-pro",
      name: "Xiaomi 13T Pro",
      basePrice: "16.990.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi-13t-pro-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/xiaomi/xiaomi-13t-pro-den.webp",
            "../assets/images/product/xiaomi/xiaomi-13t-pro-tim.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "16.990.000₫",
            },
            {
              capacity: "512GB",
              price: "18.990.000₫",
            },
          ],
        },
        {
          color: "Tím",
          colorCode: "#9370db",
          images: [
            "../assets/images/product/xiaomi/xiaomi-13t-pro-tim.webp",
            "../assets/images/product/xiaomi/xiaomi-13t-pro-den.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "16.990.000₫",
            },
            {
              capacity: "512GB",
              price: "18.990.000₫",
            },
          ],
        },
      ],
      description:
        "Xiaomi 13T Pro sở hữu màn hình AMOLED 6.67 inch 1.5K, tần số quét 144Hz, vi xử lý Dimensity 9200+, RAM 12GB, camera Leica 50MP, pin 5000mAh hỗ trợ sạc nhanh 120W. Đây là smartphone cao cấp nổi bật với hiệu năng mạnh mẽ và khả năng chụp ảnh chuyên nghiệp.",
    },

    {
      id: "xiaomi-note12",
      name: "Xiaomi Redmi Note 12",
      basePrice: "4.690.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi-note12-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#1c1c1e",
          images: [
            "../assets/images/product/xiaomi/xiaomi-note12-den.webp",
            "../assets/images/product/xiaomi/xiaomi-note12-vang.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.690.000₫",
            },
          ],
        },
        {
          color: "Vàng",
          colorCode: "#ffd700",
          images: [
            "../assets/images/product/xiaomi/xiaomi-note12-vang.webp",
            "../assets/images/product/xiaomi/xiaomi-note12-den.webp",
          ],
          storageOptions: [
            {
              capacity: "128GB",
              price: "4.690.000₫",
            },
          ],
        },
      ],
      description:
        "Redmi Note 12 có màn hình AMOLED 6.67 inch 120Hz, chip Snapdragon 685, RAM 6GB, pin 5000mAh, sạc nhanh 33W, camera chính 50MP. Lựa chọn hợp lý cho học tập và giải trí.",
    },
    {
      id: "xiaomi-14t-pro",
      name: "Xiaomi 14T Pro",
      basePrice: "20.990.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi14T-pro-xam.webp",
      variants: [
        {
          color: "Xám",
          colorCode: "#7d7d7d",
          images: [
            "../assets/images/product/xiaomi/xiaomi14T-pro-xam.webp",
            "../assets/images/product/xiaomi/xiaomi14T-pro-xanh.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "20.990.000₫",
            },
            {
              capacity: "512GB",
              price: "22.490.000₫",
            },
          ],
        },
        {
          color: "Xanh",
          colorCode: "#48d1cc",
          images: [
            "../assets/images/product/xiaomi/xiaomi14T-pro-xanh.webp",
            "../assets/images/product/xiaomi/xiaomi14T-pro-xam.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "20.990.000₫",
            },
            {
              capacity: "512GB",
              price: "22.490.000₫",
            },
          ],
        },
      ],
      description:
        "Xiaomi 14T Pro có màn hình AMOLED 6.78 inch 144Hz, chip Snapdragon 8 Gen 3, RAM 12GB, camera chính 200MP OIS, pin 5000mAh, sạc nhanh 120W. Mạnh mẽ, cao cấp, phù hợp cả công việc và giải trí đỉnh cao.",
    },
    {
      id: "xiaomi-14t",
      name: "Xiaomi 14T",
      basePrice: "17.990.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi14T-den.webp",
      variants: [
        {
          color: "Đen",
          colorCode: "#000000",
          images: [
            "../assets/images/product/xiaomi/xiaomi14T-den.webp",
            "../assets/images/product/xiaomi/xiaomi14T-xam.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "17.990.000₫",
            },
            {
              capacity: "512GB",
              price: "19.490.000₫",
            },
          ],
        },
        {
          color: "Xám",
          colorCode: "#808080",
          images: [
            "../assets/images/product/xiaomi/xiaomi14T-xam.webp",
            "../assets/images/product/xiaomi/xiaomi14T-den.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "17.990.000₫",
            },
            {
              capacity: "512GB",
              price: "19.490.000₫",
            },
          ],
        },
      ],
      description:
        "Xiaomi 14T mang đến trải nghiệm đỉnh cao với màn hình AMOLED 6.67 inch 144Hz, chip MediaTek Dimensity 8200, camera 108MP, pin 5100mAh, sạc nhanh 67W. Thiết kế tinh tế, hiệu năng ổn định, phù hợp cho công việc và giải trí.",
    },
    {
      id: "xiaomi-15",
      name: "Xiaomi 15",
      basePrice: "22.990.000₫",
      mainImage: "../assets/images/product/xiaomi/xiaomi15-trang.webp",
      variants: [
        {
          color: "Trắng",
          colorCode: "#ffffff",
          images: [
            "../assets/images/product/xiaomi/xiaomi15-trang.webp",
            "../assets/images/product/xiaomi/xiaomi15-xanhla.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "22.990.000₫",
            },
            {
              capacity: "512GB",
              price: "24.490.000₫",
            },
          ],
        },
        {
          color: "Xanh lá",
          colorCode: "#7fffd4",
          images: [
            "../assets/images/product/xiaomi/xiaomi15-xanhla.webp",
            "../assets/images/product/xiaomi/xiaomi15-trang.webp",
          ],
          storageOptions: [
            {
              capacity: "256GB",
              price: "22.990.000₫",
            },
            {
              capacity: "512GB",
              price: "24.490.000₫",
            },
          ],
        },
      ],
      description:
        "Xiaomi 15 sở hữu màn hình LTPO AMOLED 6.36 inch 120Hz, chip Snapdragon 8 Gen 3, cụm camera Leica chất lượng cao, pin 4610mAh, sạc nhanh 90W. Thiết kế cao cấp, hiệu năng mạnh mẽ, lý tưởng cho người dùng yêu công nghệ.",
    },
  ],
};
