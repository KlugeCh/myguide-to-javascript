# Programm Structure

## What are Expressions and Statements?

1. Espressions:
   - any valid fragment of code producing value
     - values can be assigned to variables
     - values can be written directly (=literals) to variables 
   - one expression can conatin one/more expressions

2. Statments: 
   - the list of programming 'instructions' which is 'executed' 
     - can produce an observable output, e.g. display s.th.
     - can change behavior of following statements
     - end with **;**

## Why Variables/Bindings?

- used to point to/reference values ('store' them) 
  - created with keyword e.g. **let**, **const**, **var**
  - followed by binding name (=declared), the identifier
  - can be followd by assignement operator and value(=initialized)
  - _keyword bindingname = value;_
  - after defining, bindingname can be used as expression and shows the current value
  - by reassigning they can point to new values
  - value of empty variable = undefined

- naming convention:
  - [style guide for JavaScript](https://google.github.io/styleguide/jsguide.html#naming)

## What are Functions?

- a piece of program, wrapped in a value
  - value can be called, to run the programm wrapped in the function
- call/invoke: _functionname_(); **or**
- through the variable, that points to the function: keyword bindingname = _functionname_();
- values(=arguments) given to the function in (...) are given to the program inside the function
- functions producing a value: return value
  - since any values are expressions -> functions can be used in other expressions

## What is meant by Control Flow?

- statements in programs are executed top to bottom

1. Conditional Execution

- used, when a specific condition is fullfilled and skips or executes the statement, connected to the condition
- the evaluated value of the condition is type boolean
  - keyword **if** - (condition) - 1. codeblock in { } with one/more statements _then_
  - **else** - 2. codeblock in { } with one or more statements 
  - can be chained with **else if** - codeblock, for multiple if/else pairs
- the conditions are checked top to bottom, until one of them is fullfilled

2. Loops

- used to repeat a piece of code multiple times, until a condition is fullfilled

  2.1 While Loop
  - keyword **while**
  - given expression in () is evaluated to boolean
  - then statement in { }
  - after checking condition is fullfilled, statement is executed
  - reentering loop, checking if condition is still fullfilled, executing statement or not

  2.2 Do Loop
  - keyword **do**, statement in { } 
  - and at the end **while** with condition in ( )
  - executes statements at least on time 
  - checks the given condition at the end of the first run

  2.3 For Loop
  - a more comprehensive form of a while loop
  - all statements related to the state of the loop are grouped together
  - keyword **for**
  - (counter; checked expression; update for counter) statement in { }
  
3. Switch

- more descriptive way for multiple if cases
- used to execute corresponding cases with statements by checking _strict_ equality (=no automatic type conversion!)
  - keyword **switch**
  - given expression in ( ) {
  - keyword **case _value to compare with expression ( )_ :** 
  - statement for this specific case ending with **;**
  - value in switch and value in case evaluate to boolean
  - condition fullfilled: statement is executed 
  - cases are executed **until next break;** statement!
  - no matches found: **default:** will be executed
  
## Comments

- a piece of text that belongs to the programm but is ignored from execution
  - used to explain snippets, functions,... to other developers or for yourself
1. `// commenting goes to the end of this line`

2. ```
   /*
   *  everything in this 3 lines will be commented out  
   */
   ```
    
