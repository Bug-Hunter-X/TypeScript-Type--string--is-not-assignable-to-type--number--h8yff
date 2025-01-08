function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1: number
const result2 = subtract(10, 4); // result2: number

// Solution: Convert the string to a number before passing it to the add function.
const result3 = add(Number("5"), 3); // result3: number

//Alternative solution using type assertion, but this is generally less safe 
const result4 = add(+"5", 3); // result3: number