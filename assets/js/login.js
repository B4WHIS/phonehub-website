document.getElementById("loginBtn").addEventListener("click", function () {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
  
    /////// Kiểm tra xem thông tin đã được nhập đầy đủ chưa
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
  
    ///////// Kiểm tra tên tài khoản không có khoảng trắng
    if (/\s/.test(username)) {
      alert("Tên tài khoản không được có khoảng trắng.");
      return;
    }
  
    //////// Kiểm tra mật khẩu có ít nhất 6 ký tự
    if (password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
  
   /////// Lấy danh sách tài khoản đã được lưu khi đăng ký ở trang register từ localStorage
    const users = JSON.parse(localStorage.getItem("userAccounts")) || [];
  
    /////// Kiểm tra tài khoản và mật khẩu
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );
  
   //////// // Nếu tìm thấy tài khoản hợp lệ thì thôngbaos
    if (matchedUser) {
      alert("Đăng nhập thành công!");
      
      ////// Lưu thông tin tk
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
  
      //////// đăng nhập thành công thì chuyển sang trang index
      window.location.href = "index.html"; // Có thể thay đổi trang này tùy vào mục đích
  
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  });
  