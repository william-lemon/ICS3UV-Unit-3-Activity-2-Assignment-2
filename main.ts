/**
 * @author William Lemon
 * @version 1.0.0
 * @date 2025-11-20
 * @fileoverview Convert a number of cents into dollars and cents using integer arithmetic.
 */

// INPUT: Total cents (replace this value to test different inputs)
const totalCents: number = 324;

// PROCESS: Calculate dollars and remaining cents using integer arithmetic
const dollars: number = (totalCents - (totalCents % 100)) / 100;
const cents: number = totalCents % 100;

// OUTPUT: Display the result using template literals
console.log(`Input the cents please:`);
console.log(`${totalCents}`);
console.log(`That is ${dollars} dollars and ${cents} cents`);

console.log("\nDone.");