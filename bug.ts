function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1: number
const result2 = subtract(10, 4); // result2: number

// This is the error: Type 'string' is not assignable to type 'number'.
const result3 = add("5", 3);