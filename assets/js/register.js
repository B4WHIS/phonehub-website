document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
  /////khai báo các biến sự kiện
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const agree = document.getElementById("agree").checked;
  
//////////////kiểm tra khoảng trắng chỗ username
      if (/\s/.test(username)) {
        alert("Tên người dùng không được có khoảng trắng.");
        return;
      }
 ////////////////kiểm tra có đủ thông tin không 
      if (!username || !email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return false;
      }
  ////////////kiểm tra email có đúng định dạng không
      if (!validateEmail(email)) {
        alert("Email chưa đúng định dạng!");
        return false;
      }
  ///check mk 
      if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return false;
      }
  /////// button agree
      if (!agree) {
        alert("Vui lòng đồng ý điều khoản!");
        return;
      }
  //////lưu thông tin tài khoản vào localStorage
      const accounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
  
      // Kiểm tra xem tài khoản hoặc email đã tồn tại chưa 
      const existingUser = accounts.find(
        (user) => user.username === username || user.email === email
      );
  
      if (existingUser) {
        if (existingUser.username === username && existingUser.email === email) {
          alert("Tài khoản và email đã tồn tại!");
        } else if (existingUser.username === username) {
          alert(" Tên tài khoản đã tồn tại!");
        } else {
          alert("Email đã tồn tại!");
        }
        return;
      }
  
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
  
      accounts.push(newUser);
      localStorage.setItem("userAccounts", JSON.stringify(accounts));
  
      alert("Đăng ký thành công!");
  
      //////// Hỏi người dùng có muốn đăng nhập hong
      const goToLogin = confirm("Bạn có muốn chuyển đến trang đăng nhập không?");
      if (goToLogin) {
        window.location.href = "./login.html";
      } else {
        form.reset();
      }
    });
  
    ///////////// Hàm kiểm tra cú pháp email
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  