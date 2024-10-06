import Staff from "./../models/Staff.js";
import ManageStaff from "./../models/ManageStaff.js";
import Validation from "./../models/Validation.js";

const dataSore = [];

const validation = new Validation();
const manageStaff = new ManageStaff(); 

const getEleId = (id) => document.getElementById(id);

getEleId("btnThem").onclick = () => {
    // Style hidden "Cap Nhat"
    getEleId("btnCapNhat").style.display = "None";
    // Style show "Them Mon"
    getEleId("btnThemNV").style.display = "block";
    // reset form
    getEleId("staffForm").reset();
};

/**
 * Delete a food from listFood
 */
const deleteStaff = (id) => {
    manageStaff._deleteStaff(id);
    renderStaff(manageStaff.listStaff);
    setLocalStorage();
}
window.deleteStaff = deleteStaff;

const editStaff = (taiKhoan) => {
    // Style hidden "Them Mon"
    getEleId("btnThemNV").style.display = "None";
    // Style show "Cap Nhat"
    getEleId("btnCapNhat").style.display = "block";
    const staff = manageStaff.getStaffById(taiKhoan);
    if (staff) {
        getEleId("tknv").value = staff.taiKhoan;
        getEleId("name").value = staff.hoTen;
        getEleId("email").value = staff.email;
        getEleId("password").value = staff.password;
        getEleId("datepicker").value = staff.ngayLam;
        getEleId("luongCB").value = staff.luongCB;
        getEleId("chucvu").value = staff.chucVu;
        getEleId("gioLam").value = staff.gioLam;
    }
};
window.editStaff = editStaff;

// Render the staff list in the table
const renderStaff = (listStaff) => {
    let contentHTML = "";
    listStaff.forEach((staff) => {
        contentHTML += `
        <tr>
                <td>${staff.taiKhoan}</td>
                <td>${staff.hoTen}</td>
                <td>${staff.email}</td>
                <td>${staff.ngayLam}</td>
                <td>${staff.chucVu}</td>
                <td>${staff.tongLuong}</td>
                <td>${staff.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteStaff('${staff.taiKhoan}')">Delete</button>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editStaff('${staff.taiKhoan}')">Edit</button>
                </td>
            </tr>
        `;
    });
    // Cập nhật nội dung bảng sau khi hoàn thành vòng lặp
    getEleId("tableDanhSach").innerHTML = contentHTML;  
};


// save list staff to local storage
const setLocalStorage = () => {
    // convert listStaff to string
    const dataString = JSON.stringify(manageStaff.listStaff);
    localStorage.setItem("LIST_STAFF", dataString);
}

// get list staff from local storage
const getLocalStorage = () => {
    const dataString = localStorage.getItem("LIST_STAFF");
    if (dataString) {
        // Declare dataJson before using it
        const dataJson = JSON.parse(dataString);
        // assign listStaff to manageStaff.listStaff
        manageStaff.listStaff = dataJson
        renderStaff(manageStaff.listStaff);
    }
}

getLocalStorage();

const getInfoStaff = () => {
    const taiKhoan = getEleId("tknv").value;
    const hoTen = getEleId("name").value;
    const email = getEleId("email").value;
    const password = getEleId("password").value;
    const date = getEleId("datepicker").value;
    const luongCB = getEleId("luongCB").value;
    const chucVu = getEleId("chucvu").value;
    const gioLam = getEleId("gioLam").value;

    let isValid = true;

    isValid &= validation.isEmpty(taiKhoan, "Please enter account name", "tbTKNV") && 
               validation.checkAccount(taiKhoan, "Account must be 4-6 digits", "tbTKNV");

    isValid &= validation.isEmpty(hoTen, "Please enter name", "tbTen") && 
               validation.checkName(hoTen, "Name must contain only letters", "tbTen");

    isValid &= validation.isEmpty(email, "Please enter email", "tbEmail") && 
               validation.checkEmail(email, "Email is invalid", "tbEmail");

    isValid &= validation.isEmpty(password, "Please enter password", "tbMatKhau") && 
               validation.checkPassword(password, "Password must be 6-10 characters, contain at least one number, one uppercase letter, and one special character", "tbMatKhau");

    isValid &= validation.isEmpty(date, "Please enter the work date", "tbNgay") && 
               validation.checkDate(date, "Date format must be mm/dd/yyyy", "tbNgay");

    isValid &= validation.isEmpty(luongCB, "Please enter salary", "tbLuongCB") && 
               validation.checkSalary(luongCB, "Salary must be between 1,000,000 and 20,000,000", "tbLuongCB");

    isValid &= validation.checkPosition(chucVu, "Please select a valid position", "tbChucVu");

    isValid &= validation.isEmpty(gioLam, "Please enter work hours", "tbGiolam") && 
               validation.checkWorkHours(gioLam, "Work hours must be between 80 and 200", "tbGiolam");

      // Kiểm tra thêm xem lương cơ bản có hợp lệ không
      if (isNaN(parseFloat(luongCB))) {
        alert("Lương cơ bản không hợp lệ!");
        return null;
    }

    if (isValid) {
        const staff = new Staff(
            taiKhoan, 
            hoTen, 
            email, 
            password, 
            date, 
            luongCB, 
            chucVu, 
            gioLam
        );
        return staff;
    }
    return null;
};


getEleId("btnThemNV").onclick = () => {
    const staff = getInfoStaff();

    if(staff) {
        manageStaff.addStaff(staff);
        renderStaff(manageStaff.listStaff);
        setLocalStorage();
    }
};

getEleId("btnCapNhat").onclick = () => {
    const staff = getInfoStaff();

    if (!staff) return;
    manageStaff.updateStaff(staff);
    renderStaff(manageStaff.listStaff);
    // save list staff to local storage
    setLocalStorage();
};

/**
 * Sreach product
 */
getEleId("searchName").addEventListener("keyup", () => {
    const keyword = getEleId("searchName").value;

    const dataFilter = manageStaff.listStaff.filter((staff) => {
        return staff.loaiNhanVien.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    renderStaff(dataFilter);
});
