const Employee = {
    salary: 0,
    payGrades: {
        junior: 30000,
        mid: 60000,
        senior: 90000,
    },
    getCadre() {
        if (this.salary < this.payGrades.mid) {
            return 'junior';
        } else if (this.salary < this.payGrades.senior) {
            return 'mid';
        } else {
            return 'senior';
        }
    },
    calculateTax() {
        const taxRate = 0.2; // 20% tax
        return this.salary * taxRate;
    },
    getBenefits() {
        return this.salary > this.payGrades.mid ? 'Full Benefits' : 'Basic Benefits';
    },
    calculateBonus() {
        return this.salary * 0.1; // 10% bonus
    },
    reimbursementEligibility() {
        return this.salary > this.payGrades.junior;
    }
};

export const cadre = Employee.getCadre.bind(Employee);
export const tax = Employee.calculateTax.bind(Employee);
export const benefits = Employee.getBenefits.bind(Employee);
export const bonus = Employee.calculateBonus.bind(Employee);
export const reimbursement = Employee.reimbursementEligibility.bind(Employee);

export default Employee;