# When might you use the type `never`?

## Answer

- To ensure certain code is unreachable.
- Within custom types to ensure certain conditions cannot be met.

## Example

```typescript
type Colour = "red" | "green" | "blue"


function handleColour(colour: Colour) {
  switch (colour) {
    case "red":
      return ...
    case "blue":
      return ...
    default: {
      const _exhaustiveCheck: never = colour;
      // ERROR: `Colour` is not assignable to `never`
      // because 'green' is not being handled
    }
  }
}
```

## Note

> **NOTE**\
> I'm looking for the first answer here. Happily take the second but its more complex and delving into library code not application code.
