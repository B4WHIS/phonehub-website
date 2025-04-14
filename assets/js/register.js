// Sự kiện cho các nút bấm đăng ký, đăng nhập
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', function () {
    container.classList.add('active');
});

loginBtn.addEventListener('click', function () {
    container.classList.remove('active');
});

const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

//////////////// Đăng ký
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelector('input[type="password"]').value;

    if (username === '' || email === '' || password === '') {
        alert('Vui lòng nhập đầy đủ dữ liệu!');
        return;
    }

    if (!dinhdangemail(email)) {
        alert('Email chưa đúng định dạng!');
        return;
    }

    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự!');
        return;
    }

    //////////////// Lấy danh sách tài khoản đã có từ localStorage
    const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];

    /////////////////// Kiểm tra trùng username hoặc email
    const trung = accounts.some(function (user) {
        return user.username === username || user.email === email;
    });
    if (trung) {
        alert('Tài khoản hoặc email đã tồn tại!');
        return;
    }

  ///////////////tạo đối tương account mới gômg username, email, password
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    accounts.push(newUser);
    localStorage.setItem('userAccounts', JSON.stringify(accounts));

    alert('Đăng ký thành công!');
    const luachondangnhap = confirm("Bạn có muốn đăng nhập không?");
    if (luachondangnhap) {
        container.classList.remove('active'); 
    } else {
        registerForm.reset(); 
    }
});

//////////////// Đăng nhập
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username === '' || password === '') {
        alert('Vui lòng nhập đầy đủ dữ liệu!');
        return;
    }

    const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];

    const timtk = accounts.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (timtk) {
        alert('Đăng nhập thành công!');
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser)); 
        window.location.href = 'index.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!');
    }
});

//////////////// Hàm kiểm tra định dạng email
function dinhdangemail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
