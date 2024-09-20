let numberArr = [1, 6, -20, 8];
document.getElementById("txt-array").innerHTML = `[${numberArr}]`;

let tinhTongSoDuong = () => {
    let ketQua = 0;
    let demSoDuong = 0;
    numberArr.forEach((item) => {
        if (item > 0) {
            ketQua += item;
            demSoDuong++;
        }
    });
    document.getElementById("txt-tong-so-duong").innerHTML = `Tổng số dương ${ketQua}`;
    document.getElementById("txt-dem-so-duong").innerHTML = `Số dương: ${demSoDuong}`;
};

let timSoNhoNhat = () => {
    let min = numberArr[0];
    numberArr.forEach((item) => {
        if (item < min) {
            min = item;
        }
    });
    document.getElementById("txt-so-nho-nhat").innerHTML = `Số nhỏ nhất: ${min}`;
}

let timSoDuongNhoNhat = () => {
    let min = numberArr[0];
    numberArr.forEach((item) => {
        if (item < min && item > 0) {
            min = item;
        }
    });
    document.getElementById("txt-so-duong-nho-nhat").innerHTML = `Số dương nhỏ nhất: ${min}`;
};

let timSoChanCuoiCung = () => { 
    // Khởi tạo biến để lưu số chẵn cuối cùng
    let ketQua = -1;
    numberArr.forEach((item) => {
        if (item % 2 === 0) {
            ketQua = item;
        }
    })
    document.getElementById("txt-so-chan-cuoi-cung").innerHTML = `Số chẵn cuối cùng: ${ketQua}`;
}

let swapItems = () => {
    // Lấy giá trị của hai vị trí từ input
    let index1 = document.getElementById("index-1").value;
    let index2 = document.getElementById("index-2").value;

    // Chuyển đổi giá trị thành số nguyên
    index1 = parseInt(index1);
    index2 = parseInt(index2);

    // Kiểm tra xem hai vị trí có hợp lệ hay không
    if (isNaN(index1) || isNaN(index2) || index1 < 0 || index2 < 0 || index1 >= numberArr.length || index2 >= numberArr.length) {
        alert("Vui lòng nhập vị trí hợp lệ!");
        return;
    }

    // Thực hiện hoán đổi
    let temp = numberArr[index1];
    numberArr[index1] = numberArr[index2];
    numberArr[index2] = temp;

    // Cập nhật lại mảng hiển thị trên giao diện
    document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
}

let sort = () => {
    // selection sort
    for (let i = 0; i < numberArr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < numberArr.length; j++) {
            if (numberArr[minIndex] > numberArr[j]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = numberArr[i];
            numberArr[i] = numberArr[minIndex];
            numberArr[minIndex] = temp;
        }
    }

    // update layout
    document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
}

let laSoNguyenTo = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

let timSoNguyenToDauTien = () => {
    let soNguyenToDauTien = -1;
    for (let i = 0; i < numberArr.length; i++) {
        if (laSoNguyenTo(numberArr[i])) {
            soNguyenToDauTien = numberArr[i];
            break;
        }
    }
    document.getElementById("txt-so-nguyen-to-dau-tien").innerHTML = `Số nguyên tố đầu tiên: ${soNguyenToDauTien}`;
};

let demSoNguyen = () => {
    let mangSoThuc = [1.5, 2.3, 3, 4.0, 5]; // ví dụ mảng số thực
    let demSoNguyen = 0;
    mangSoThuc.forEach((item) => {
        if (Number.isInteger(item)) {
            demSoNguyen++;
        }
    });
    document.getElementById("txt-dem-so-nguyen").innerHTML = `Số nguyên trong mảng: ${demSoNguyen}`;
};

let soSanhSoLuongDuongAm = () => {
    let soLuongDuong = 0;
    let soLuongAm = 0;
    numberArr.forEach((item) => {
        if (item > 0) {
            soLuongDuong++;
        } else if (item < 0) {
            soLuongAm++;
        }
    });
    let ketQua = soLuongDuong > soLuongAm 
                ? "Số dương nhiều hơn số âm" 
                : soLuongAm > soLuongDuong 
                ? "Số âm nhiều hơn số dương" 
                : "Số dương và số âm bằng nhau";
    document.getElementById("txt-so-sanh-duong-am").innerHTML = ketQua;
};

let submit = () => {
    // Lấy giá trị của input và thêm array
    let number = document.getElementById("number").value;
    console.log("number: ", number);
    
    // validate (kiểm tra) data trước khi push
    if (number.trim() === "") {
        alert("Vui lòng nhập số!");
        return;
    }

    numberArr.push(number * 1);
    // hiển thị lên layout
    document.getElementById("txt-array").innerHTML = `[${numberArr}]`;

    // yêu cầu 1
    tinhTongSoDuong();

    // yêu cầu 3
    timSoNhoNhat();

    // yêu cầu 4
    timSoDuongNhoNhat();

    // yêu cầu 5
    timSoChanCuoiCung();
    
    // yêu cầu 8
    timSoNguyenToDauTien();

    // yêu cầu 9
    demSoNguyen();
 
    // yêu cầu 10
    soSanhSoLuongDuongAm();    
}