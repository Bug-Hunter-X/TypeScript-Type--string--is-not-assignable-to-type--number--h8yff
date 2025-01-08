# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This error arises when performing arithmetic operations on a string and a number.  TypeScript's type system enforces type safety, preventing this potentially erroneous operation.

## Bug Description:
The `add` function is defined to accept two numbers and return a number. However, in the example, a string ("5") is passed as an argument, causing a type error.

## Bug Solution:
The solution involves ensuring that all arguments passed to the `add` function are of type number.  This can be achieved through type checking or explicit type conversion.