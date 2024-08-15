# Edge cases

## Questions

- Out of the 9 primitive values in Javascript, 1 is different due to a day 0 bug. Which is it?
  - `string`
  - `number`
  - `boolean`
  - `bigint`
  - `symbol`
  - `object`
  - `function`
  - `undefined`
  - `null`
- There exists a value `x`, which when strict equality checked with itself is `false`. Which is it?
- There exists two different values `y` and `z`, which when strict equality checked with each other is `true`. What are they?

## Answers

- `null`
  - `typeof null` is equal to `'object'`
- `NaN`
- `0` and `-0`
  - bit of an _um actually_ but technically two different values

## Goal of the question

Do you understand the edge cases of the language? Realistically the vast majority of people are not going to get q2 & 3 here.
