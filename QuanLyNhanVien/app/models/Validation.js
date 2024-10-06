class Validation {
    // Check if a field is empty
    isEmpty(value, message, idError) {
        if (value === "") {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if account is valid (4-6 digits)
    checkAccount(value, message, idError) {
        const regex = /^[a-zA-Z0-9]{4,6}$/;
        if (!regex.test(value)) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if name is valid (letters only)
    // Check if name is valid (letters only)
    checkName(value, message, idError) {
        const regex = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;
        if (!regex.test(value)) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }


    // Check if email is valid
    checkEmail(value, message, idError) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(value)) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if password is valid (6-10 characters, 1 number, 1 uppercase, 1 special character)
    checkPassword(value, message, idError) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (!regex.test(value)) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if date is valid (format mm/dd/yyyy)
    checkDate(value, message, idError) {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (!regex.test(value)) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if salary is valid (1,000,000 - 20,000,000)
    checkSalary(value, message, idError) {
        const salary = Number(value);
        if (salary < 1000000 || salary > 20000000) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if position is valid (Giám đốc, Trưởng Phòng, Nhân Viên)
    checkPosition(value, message, idError) {
        const validPositions = ["Sếp", "Trưởng phòng", "Nhân viên"];
        if (!validPositions.includes(value)) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }

    // Check if hours worked is valid (80 - 200 hours)
    checkWorkHours(value, message, idError) {
        const hours = Number(value);
        if (hours < 80 || hours > 200) {
            document.getElementById(idError).innerHTML = message;
            document.getElementById(idError).style.display = "block";
            return false;
        }
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }
}

export default Validation;
