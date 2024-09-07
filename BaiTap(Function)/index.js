// QUẢN LÝ TUYỂN SINH
function calculateAdmission() {
    const totalScore = parseFloat(document.getElementById('totalScore').value);
    const cutoffScore = parseFloat(document.getElementById('cutoffScore').value);
    const region = document.getElementById('region').value.toUpperCase();
    const priorityObject = parseInt(document.getElementById('priorityObject').value);

    // Bảng điểm ưu tiên theo khu vực
    const regionScores = {
        'A': 2,
        'B': 1,
        'C': 0.5,
        'X': 0 // Không thuộc khu vực ưu tiên
    };

    // Bảng điểm ưu tiên theo đối tượng
    const objectScores = {
        1: 2.5,
        2: 1.5,
        3: 1,
        0: 0 // Không thuộc đối tượng ưu tiên
    };

    // Kiểm tra nếu khu vực hoặc đối tượng không hợp lệ
    if (!(region in regionScores) || !(priorityObject in objectScores)) {
        document.getElementById('pThongBaoTuyenSinh').innerText = "Khu vực hoặc đối tượng không hợp lệ.";
        return;
    }

    // Tính tổng điểm ưu tiên
    const priorityScore = regionScores[region] + objectScores[priorityObject];

    // Tính tổng điểm cuối cùng
    const finalScore = totalScore + priorityScore;

    // Kiểm tra kết quả
    if (totalScore <= 0 || finalScore >= cutoffScore) {
        document.getElementById('pThongBaoTuyenSinh').innerText = 
            `Đậu! Tổng điểm của bạn là: ${finalScore}`;
    } else {
        document.getElementById('pThongBaoTuyenSinh').innerText = 
            `Rớt! Tổng điểm của bạn là: ${finalScore}`;
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
function calculateTax() {
    const nameThueCaNhan = document.getElementById('nameThueCaNhan').value;
    const income = parseFloat(document.getElementById('income').value);
    const dependents = parseInt(document.getElementById('dependents').value);

    // Thu nhập chịu thuế = Tổng thu nhập năm - 4 triệu - số người phụ thuộc * 1.6 triệu
    const taxableIncome = income - 4 - dependents * 1.6;

    if (taxableIncome <= 0) {
        document.getElementById('result').innerText = `${nameThueCaNhan}, bạn không phải nộp thuế vì thu nhập chịu thuế của bạn là ${taxableIncome.toFixed(2)} triệu VND.`;
        return;
    }

    let tax = 0;

    if (taxableIncome <= 60) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 120) {
        tax = 60 * 0.05 + (taxableIncome - 60) * 0.10;
    } else if (taxableIncome <= 210) {
        tax = 60 * 0.05 + 60 * 0.10 + (taxableIncome - 120) * 0.15;
    } else if (taxableIncome <= 384) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (taxableIncome - 210) * 0.20;
    } else if (taxableIncome <= 624) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (taxableIncome - 384) * 0.25;
    } else if (taxableIncome <= 960) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (taxableIncome - 624) * 0.30;
    } else {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (taxableIncome - 960) * 0.35;
    }

    document.getElementById('result').innerText = 
        `${nameThueCaNhan}, tổng thuế thu nhập cá nhân phải nộp là: ${tax.toLocaleString()} triệu VND cho thu nhập chịu thuế là ${taxableIncome.toFixed(2)} triệu VND.`;
}

// TÍNH TIỀN CÁP
function toggleConnections() {
    var customerType = document.getElementById("customerType").value;
    var connectionsDiv = document.getElementById("connectionsDiv");
    if (customerType === "business") {
        connectionsDiv.style.display = "block";
    } else {
        connectionsDiv.style.display = "none";
    }
}

function toggleConnections() {
    var customerType = document.getElementById("customerType").value;
    var connectionsDiv = document.getElementById("connectionsDiv");
    if (customerType === "business") {
        connectionsDiv.style.display = "block";
    } else {
        connectionsDiv.style.display = "none";
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
        totalBill = 15 + 75 + ((connections - 10) * 5) + (channels * 50);
    }

    document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}

// Khởi tạo form
toggleConnections();
