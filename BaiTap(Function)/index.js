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
    // Lấy giá trị từ form
    const hoTen = document.getElementById('hoTen').value;
    const tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
    const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);

    // Các giá trị cố định
    const GiamTruCoBan = 4000000; // 4 triệu
    const GiamTruPhuThuoc = 1600000; // 1.6 triệu cho mỗi người phụ thuộc

    // Tính thu nhập chịu thuế
    const thuNhapChiuThue = tongThuNhap - GiamTruCoBan - (GiamTruPhuThuoc * soNguoiPhuThuoc);

    // Tính thuế dựa trên các bậc thuế
    let thue = 0;

    if (thuNhapChiuThue <= 60000000) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
        thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    } else if (thuNhapChiuThue <= 210000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    } else if (thuNhapChiuThue <= 624000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    } else {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }

    // Xuất kết quả
    document.getElementById('ketQua').innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${thue.toLocaleString('vi-VN')} VND`;
}



// Thay đổi hiển thị số kết nối dựa trên loại khách hàng
function thayDoiKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var divKetNoi = document.getElementById("divKetNoi");
    if (loaiKhachHang === "doanhNghiep") {
        divKetNoi.style.display = "block";
    } else {
        divKetNoi.style.display = "none";
        document.getElementById("soKetNoi").value = 0; // Đặt lại số kết nối khi chọn nhà dân
    }
}

// Tính toán hóa đơn
function tinhHoaDon() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value) || 0;
    var tongHoaDon = 0;

    if (loaiKhachHang === "nhaDan") {
        tongHoaDon = 4.5 + 20.5 + (soKenhCaoCap * 7.5);
    } else if (loaiKhachHang === "doanhNghiep") {
        var phiCoBan = 75; // Phí dịch vụ cơ bản cho 10 kết nối đầu
        if (soKetNoi > 10) {
            phiCoBan += (soKetNoi - 10) * 5; // Mỗi kết nối thêm sẽ tốn $5
        }
        tongHoaDon = 15 + phiCoBan + (soKenhCaoCap * 50); // Phí xử lý hóa đơn + phí kết nối + phí kênh cao cấp
    }

    document.getElementById("tongHoaDon").innerText = tongHoaDon.toFixed(2);
}

// Khởi tạo form
thayDoiKetNoi();
