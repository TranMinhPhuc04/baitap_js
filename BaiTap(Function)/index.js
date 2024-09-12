// QUẢN LÝ TUYỂN SINH
function kiemTraTuyenSinh() {
    const diemMon1 = parseFloat(document.getElementById('diemMon1').value) || 0;
    const diemMon2 = parseFloat(document.getElementById('diemMon2').value) || 0;
    const diemMon3 = parseFloat(document.getElementById('diemMon3').value) || 0;
    const diemChuan = parseFloat(document.getElementById('diemChuan').value);
    const khuVuc = document.getElementById('khuVuc').value.toUpperCase();
    const doiTuongUuTien = parseInt(document.getElementById('doiTuongUuTien').value);

    // Tính tổng điểm 3 môn
    const tongDiem = diemMon1 + diemMon2 + diemMon3;

    // Hiển thị tổng điểm
    document.getElementById('hienThiTongDiem').innerText = tongDiem;

    // Kiểm tra nếu có môn nào có điểm là 0
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById('thongBaoTuyenSinh').innerText = "Rớt! Có môn có điểm 0.";
        return;
    }

    // Bảng điểm ưu tiên theo khu vực
    const diemKhuVuc = {
        'A': 2,
        'B': 1,
        'C': 0.5,
        'X': 0 // Không thuộc khu vực ưu tiên
    };

    // Bảng điểm ưu tiên theo đối tượng
    const diemDoiTuong = {
        1: 2.5,
        2: 1.5,
        3: 1,
        0: 0 // Không thuộc đối tượng ưu tiên
    };

    // Kiểm tra nếu khu vực hoặc đối tượng không hợp lệ
    if (!(khuVuc in diemKhuVuc) || !(doiTuongUuTien in diemDoiTuong)) {
        document.getElementById('thongBaoTuyenSinh').innerText = "Khu vực hoặc đối tượng không hợp lệ.";
        return;
    }

    // Tính tổng điểm ưu tiên
    const diemUuTien = diemKhuVuc[khuVuc] + diemDoiTuong[doiTuongUuTien];

    // Tính tổng điểm cuối cùng
    const diemCuoiCung = tongDiem + diemUuTien;

    // Kiểm tra kết quả
    if (diemCuoiCung >= diemChuan) {
        document.getElementById('thongBaoTuyenSinh').innerText = `Đậu! Tổng điểm của bạn là: ${diemCuoiCung}`;
    } else {
        document.getElementById('thongBaoTuyenSinh').innerText = `Rớt! Tổng điểm của bạn là: ${diemCuoiCung}`;
    }
}

// TÍNH TIỀN ĐIỆN
function calculateElectricity() {
    const nameTienDien = document.getElementById('nameTienDien').value;
    const kw = parseFloat(document.getElementById('kw').value);

    let totalCost = 0;

    if (kw <= 50) {
        totalCost = kw * 500;
    } else if (kw <= 100) {
        totalCost = (50 * 500) + (kw - 50) * 650;
    } else if (kw <= 200) {
        totalCost = (50 * 500) + (50 * 650) + (kw - 100) * 850;
    } else if (kw <= 350) {
        totalCost = (50 * 500) + (50 * 650) + (100 * 850) + (kw - 200) * 1100;
    } else {
        totalCost = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (kw - 350) * 1300;
    }

    document.getElementById('pThongBaoTienDien').innerText = 
        `Khách hàng ${nameTienDien} phải trả số tiền: ${totalCost.toLocaleString()} VND cho ${kw} Kw.`;
}

// TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhThue() {
    const hoTen = document.getElementById('hoTen').value;
    const tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
    const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);

    // Bước 1: Tính thu nhập chịu thuế
    const thuNhapChiuThue = tongThuNhap - 4 - (soNguoiPhuThuoc * 1.6);

    if (thuNhapChiuThue <= 0) {
        document.getElementById('thongBaoKetQua').innerText = `${hoTen} không phải đóng thuế.`;
        return;
    }

    // Bước 2: Tính thuế dựa trên bảng thuế suất
    let thue = 0;
    if (thuNhapChiuThue <= 60) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thue = (60 * 0.05) + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thue = (60 * 0.05) + (60 * 0.1) + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thue = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thue = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (174 * 0.2) + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thue = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (174 * 0.2) + (240 * 0.25) + (thuNhapChiuThue - 624) * 0.3;
    } else {
        thue = (60 * 0.05) + (60 * 0.1) + (90 * 0.15) + (174 * 0.2) + (240 * 0.25) + (336 * 0.3) + (thuNhapChiuThue - 960) * 0.35;
    }

    // Làm tròn thuế và thu nhập chịu thuế trước khi định dạng
    const thueLamTron = thue.toFixed(2);  // Keeping two decimal places without multiplying by 1,000,000
    const thuNhapChiuThueLamTron = thuNhapChiuThue.toFixed(2);  // Also keeping two decimal places

    document.getElementById('thongBaoKetQua').innerText = 
    `${hoTen}, tổng thuế thu nhập cá nhân phải nộp là: ${parseFloat(thueLamTron).toLocaleString('vi-VN')} triệu VND cho thu nhập chịu thuế là ${parseFloat(thuNhapChiuThueLamTron).toLocaleString('vi-VN')} triệu VND.`;


}


// TÍNH TIỀN CÁP
function toggleConnections() {
    var customerType = document.getElementById("customerType").value;
    var connectionsDiv = document.getElementById("connectionsDiv");
    if (customerType === "business") {
        connectionsDiv.style.display = "block";
    } else {
        connectionsDiv.style.display = "none";
        document.getElementById("connections").value = 0; // Reset số kết nối khi chọn loại nhà dân
    }
}

function calculateBill() {
    var customerType = document.getElementById("customerType").value;
    var connections = parseInt(document.getElementById("connections").value) || 0;
    var channels = parseInt(document.getElementById("channels").value) || 0;
    var totalBill = 0;

    if (customerType === "household") {
        totalBill = 4.5 + 20.5 + (channels * 7.5);
    } else if (customerType === "business") {
        var baseFee = 75; // Phí dịch vụ cơ bản cho 10 kết nối đầu
        if (connections > 10) {
            baseFee += (connections - 10) * 5; // Mỗi kết nối thêm sẽ tốn $5
        }
        totalBill = 15 + baseFee + (channels * 50); // Phí xử lý hóa đơn + phí kết nối + phí kênh cao cấp
    }

    document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}

// Khởi tạo form
toggleConnections();
