class ManageStaff {
    constructor() {
        this.listStaff = [];
    }

    // Add a new staff member to the list and update localStorage
    addStaff(staff) {
        this.listStaff.push(staff);
    }

    // Find staff by ID (account) and return the index
    _findIndexById(taiKhoan) {
        return this.listStaff.findIndex(staff => staff.taiKhoan === taiKhoan);
    }

    // Delete staff by ID (account)
    _deleteStaff(taiKhoan) {
        const index = this._findIndexById(taiKhoan);
        if (index !== -1) {
            this.listStaff.splice(index, 1);
        }
    }

    // Get staff by ID (account)
    getStaffById(taiKhoan) {
        const index = this._findIndexById(taiKhoan);
        if (index !== -1) {
            return this.listStaff[index];
        }
        return null;
    }

    // Update staff details by ID (account)
    updateStaff(updatedStaff) {
        const index = this._findIndexById(updatedStaff.taiKhoan);
        if (index !== -1) {
            this.listStaff[index] = updatedStaff;
        }
    }
}

export default ManageStaff;
