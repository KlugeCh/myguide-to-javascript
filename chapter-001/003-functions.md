# Functions

## Defining, Declaring, Arrow Functions

- **Defining**:
  - assigning function value to binding:
  ```
  const doThis = function(a, b) {
      return a + b;
  };
  ```
  - doThis, holds the value (= the function)
  - defined functions must have a { } as body

- **Declaring**:
  ```
  function doThis(a, b) {
      return a + b;
  }
  ```
  - doThis is the function
  - declared functions are not part of 'flow control'
    - conceptually moved to top of ther scope
    - free to order code meaningfull
  
- **as Arrow Function**
  ```
  const doThis = (a, b) => { return a + b; };
  ```
  - 'like': this input (parameters) produce this result {body}
  - with single statement in body, { } isn't needed

- **return**
  - statement in body determines the value returned by the function
  - when _return_ is reached, control jumps out of function
  - value is returned to caller (also see Call Stack)
  - _return_ without espression returns _undifined_

## Bindings and Scope

- bindings defined outside any function or block are _global_
- bindings created for function parameters or inside a function are _local_
  - _let_ and _const_ are local to the block they are declared in
  - _var_ is visible throughout the global scope, if it isn't in a function
- each scope can 'look out' into the scope around it
  - except multiple-binding-names: only the innermost one
- each block creaes a new scope
  - parameters and bindings declared in a given scope are local
  - they are not visible from outside (except _var_, see above)

## Function as Values

- possible to store function value in binding and pass it to another function as argument
- assigning new function value to a binding

## Call Stack

- the place, where the computer stores the context, from where a funtion was called and to which caller
the return has to be given back
- by too much recurison the computer will run out of memory: _stack overflow_
  - 'out of stack space' or 'too much recursion'

## Recursion

- when a function calls itself
  - see above: problem with Call Stack
- about 3-times slower than looping
- usefull to give up efficiency to make a programm more understandable

## Functions and Side Effects

- functions can be divided into 

1. calling for side effects:
- e.g. print a line  

2. calling for return value:
- easier to combine with other functions

   
  




