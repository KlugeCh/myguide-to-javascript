# What are Values?
- represent a piece of information
  - can be numbers, text, functions, objects
  - referenced by its identifier (the name of the variable they are assigned to)

# What are Types?
- the kind of _values_, so it's category

## What are Numbers?
- numeric values
  - whole numbers
  - fractional numbers
  - exponents
- mainly used for arithmetic operations
- special numbers:
  - Infinity / -Infinity: stands for pos/neg infinities
  - NaN: Not a Number, e.g.  0 /0 = NaN (= but still typeOf number!) 

## What are Strings?
- represent text in values
- based on _Unicode_
- quoted in ' ' or " "
  - also mixed: ' "  " ' (=start and end must be the same)
  - \ in strings are escaping characters, e.g " \\'xyc\\' " 
  - '+' operator concatenates strings, e.g. 'abc' + 'def'

## What are Booleans?
- used to evaluate a comparisons
  - only true or false
  
# What are operators?
- applied to values to perform a operation
- can be classified by the operands they work with
1. unary operators:
   - typeOf: returns a string, naming the type of the value
   - not: **!** flips the value given to it, !false = true
   - negating a number: **\-**
   - concatinating strings: **\+**

2. binary operators:
   - addition: **+** (=also as string concatinator!)
   - substraction: **-**  
   - division:  **/**
   - multiplication: \* 
   - remainder: **%** (remainder by 0 is always NaN but still typeOf Number)
   - and: **&&** true only if both conditions are true
   - or: **||** true if one or both conditions are true
   - greater than or equal: **\>=**
   - less than or equal: **<=**
   - equal to: **==**
   - not equal: **!=**
   - equal value and equal type: **===** (=strict comparison)
   - not equal value and not equal type: **!==** (=strict comparison)

3. ternary operators:
   - conditional operator '?:' value left of ? _picks_ value left of (true) : or right (false)
     - when a codeblock has to be executed after the condition you have to use if-else



# Sources

- [eloquentjavascript](https://eloquentjavascript.net/01_values.html)

