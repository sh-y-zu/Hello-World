// math-operations.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

// Example usage
console.log("Sum:", add(5, 3));
console.log("Difference:", subtract(8, 4));
console.log("Product:", multiply(2, 6));
console.log("Quotient:", divide(10, 2));
