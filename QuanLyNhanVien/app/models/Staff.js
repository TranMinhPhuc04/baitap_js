class Staff {
    constructor(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
        this.taiKhoan = _taiKhoan;
        this.hoTen = _hoTen;
        this.email = _email;
        this.matKhau = _matKhau;
        this.ngayLam = _ngayLam;
        this.luongCB = parseFloat(_luongCB);
        this.chucVu = _chucVu;
        this.gioLam = _gioLam;
        this.tongLuong = this.calculateSalary();
        this.loaiNhanVien = this.getStaffType();
    }

    // Calculate the total salary based on the role
    calculateSalary() {
        switch (this.chucVu) {            
            case 'Sếp':
                return this.luongCB * 3;
            case 'Trưởng phòng':
                return this.luongCB * 2;
            case 'Nhân viên':
                return this.luongCB;
            default:
                return 0;
        }
    }
    
    // Classify the staff based on the working hours
    getStaffType() {
        if (this.gioLam >= 192) {
            return "Xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Giỏi";
        } else if (this.gioLam >= 160) {
            return "Khá";
        } else {
            return "Trung Bình";
        }
    }
    
}

export default Staff;