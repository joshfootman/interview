# What is the difference between `var`, `let` and `const`?

## Answer

- `var` is globally scoped, can be re-declared and updated.
- `let` is block scoped, can be updated but not re-declared.
- `const` is block scoped, cannot be updated or re-declared.

## Note

> **NOTE**\
> `var` is very old. I've never worked with a codebase that used it and therefore is understandable that the interviewee might not get this correct. Also, probably means they might not get the block scoped aspect of the other two variables.

## Things to push on

- Why do you think variables being globally scoped might be a bad thing?
- `const` cannot be updated, does this mean the value will never change?
  - nope :) `const` defines a constant reference to a value, not a constant value.
  - i.e. I can push & pop from a constant array.

## Goal of the question

Does the interviewee understand a core concept of Javascript.
