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
          colorCode: "#FFD700",
          colorClass: "btn-warning",
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
          colorClass: "btn-dark",
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
  ],
};
