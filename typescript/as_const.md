# What does appending `as const` to a value do?

## Answer

Allows you to claim a value as immutable

## Things to push on

- When would you want to use this?
  - When you want to narrow the type of an value.
- When have you used this within a codebase?

Looking for the interviewee to give something similar to one of these two

```typescript
const args = [8, 5]
//    ?^ number[]

const args = [8, 5] as const
//    ?^ readonly [8, 5]

const type = {
  PIN: "pin",
  POLYGON: "polygon",
  RADIUS: "radius",
}
//    ?^ { PIN: string; POLYGON: string; RADIUS: string; }

const type = {
  PIN: "pin",
  POLYGON: "polygon",
  RADIUS: "radius",
} as const
//    ?^ { readonly PIN: "pin"; readonly POLYGON: "polygon"; readonly RADIUS: "radius"; }
```
