// This file serves as the entry point for the application. 
// It imports the necessary functions from workAround.js and executes them to display employee information.

import { getEmployeeInformation } from './workAround.js';

const salary = 50000; // Example salary input
getEmployeeInformation(salary);