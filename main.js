function checkNumber() {
    const number = document.getElementById('numberInput').value;
    const pThongBaoCheckNumber = document.getElementById('pThongBaoCheckNumber');
    
    if (number > 0) {
        pThongBaoCheckNumber.textContent = 'Số dương';
        pThongBaoCheckNumber.style.color = 'green';
    } else if (number < 0) {
        pThongBaoCheckNumber.textContent = 'Số âm';
        pThongBaoCheckNumber.style.color = 'red';
    } else {
        pThongBaoCheckNumber.textContent = 'Số bằng 0';
        pThongBaoCheckNumber.style.color = 'blue';
    }
}

function checkAge() {
    const age = document.getElementById('ageInput').value;
    const pThongBaoTuoiHS = document.getElementById('pThongBaoTuoiHS');
    
    if (age >= 6) {
        pThongBaoTuoiHS.textContent = 'Đủ tuổi vào lớp 1';
        pThongBaoTuoiHS.style.color = 'green';
    } else {
        pThongBaoTuoiHS.textContent = 'Chưa đủ tuổi vào lớp 1';
        pThongBaoTuoiHS.style.color = 'red';
    }
}

function checkEvenNumber() {
    const number = document.getElementById('evenNumberInput').value;
    const pThongBaoChanLe = document.getElementById('pThongBaoChanLe');
    
    if (number % 2 === 0) {
        pThongBaoChanLe.textContent = 'Số chẵn';
        pThongBaoChanLe.style.color = 'green';
    } else {
        pThongBaoChanLe.textContent = 'Số lẻ';
        pThongBaoChanLe.style.color = 'red';
    }
}

// Bài 1: Kiểm tra Độ Tuổi Lái Xe
// Bài 1: Kiểm tra Độ Tuổi Lái Xe
function kiemTraTuoiLaiXe() {
    const number = document.getElementById("number_3").value * 1;
    if (number >= 16) {
        result = `<span>${number} tuổi đủ điều kiện dự đăng kí lái xe</span>`
    }else {
        result = `<span>${number} tuổi chưa đủ điều kiện dự đăng kí lái xe</span>`
    }
    const pThongBaoTuoiLaiXe = document.getElementById("pThongBaoTuoiLaiXe");
    pThongBaoTuoiLaiXe.innerHTML = result;
}


// Bài 2: Xét Thưởng Nhân Viên
function checkSale() {
    const sales = parseInt(document.getElementById('number_4').value, 10);
    const pThongBaoThuongNV = document.getElementById('pThongBaoThuongNV');

    if (!isNaN(sales) && sales > 100) {
        const bonus = sales * 0.10;
        pThongBaoThuongNV.innerHTML = `Số tiền thưởng là: $${bonus.toFixed(2)}`;
        pThongBaoThuongNV.style.color = 'green';
    } else if (!isNaN(sales)) {
        pThongBaoThuongNV.innerHTML = `Bạn không có thưởng`;
        pThongBaoThuongNV.style.color = 'red';
    } else {
        pThongBaoThuongNV.innerHTML = `Vui lòng nhập số lượng sản phẩm hợp lệ`;
        pThongBaoThuongNV.style.color = 'orange';
    }
}


// Bài 3: Tính Chiết Khấu
function calculateDiscount() {
    const amount = parseFloat(document.getElementById('purchaseAmountInput').value);
    const pThongBaoChietKhau = document.getElementById('pThongBaoChietKhau');
    
    if (!isNaN(amount) && amount > 500) {
        const discount = amount * 0.20;
        const finalPrice = amount - discount;
        pThongBaoChietKhau.textContent = `Bạn được giảm 20%. Số tiền sau khi giảm là: $${finalPrice.toFixed(2)}`;
        pThongBaoChietKhau.style.color = 'green';
    } else if (!isNaN(amount)) {
        pThongBaoChietKhau.textContent = 'Bạn không đủ điều kiện để nhận chiết khấu';
        pThongBaoChietKhau.style.color = 'red';
    } else {
        pThongBaoChietKhau.textContent = 'Vui lòng nhập số tiền hợp lệ';
        pThongBaoChietKhau.style.color = 'orange';
    }
}

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const passwordResult = document.getElementById('passwordResult');
    
    password.length >= 8 
        ? (passwordResult.textContent = 'Mật khẩu đủ mạnh', passwordResult.style.color = 'green')
        : (passwordResult.textContent = 'Mật khẩu quá yếu, cần ít nhất 8 ký tự', passwordResult.style.color = 'red');
}
