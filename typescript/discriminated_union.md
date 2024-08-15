# What is a discriminated union?

## Answer

Enables the creation of a type that can represent several different possibilities or variants.\
If you have a class with a literal member then you can use that property to discriminate between union members.

## Example

```typescript
interface Square {
  kind: "square"
  size: number
}

interface Rectangle {
  kind: "rectangle"
  width: number
  height: number
}

type Shape = Square | Rectangle

function area(s: Shape) {
  if (s.kind === "square") {
    // Now TypeScript *knows* that `s` must be a square
    return s.size * s.size
  } else {
    // Wasn't a square? So TypeScript will figure out that it must be a Rectangle
    return s.width * s.height
  }
}
```

## Note

> **NOTE**\
> I use this _a lot_ within the code base. I'd expect the interviewee to know what this is. Maybe not know the dictionary definition but be able to convey their purpose and the benefits.
