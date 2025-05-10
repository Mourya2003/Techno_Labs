// src/workAround.js

import Employee, { getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement } from './employee.js';

function getEmployeeInformation(salary) {
    const employeeCadre = cadre(salary);
    const employeeTax = tax(salary);
    const employeeBenefits = benefits(salary);
    const employeeBonus = bonus(salary);
    const eligibilityForReimbursement = reimbursement(salary);

    console.log(`Employee Information:`);
    console.log(`Cadre: ${employeeCadre}`);
    console.log(`Tax: ${employeeTax}`);
    console.log(`Benefits: ${employeeBenefits}`);
    console.log(`Bonus: ${employeeBonus}`);
    console.log(`Reimbursement Eligibility: ${eligibilityForReimbursement}`);
}

// Example usage
getEmployeeInformation(50000);