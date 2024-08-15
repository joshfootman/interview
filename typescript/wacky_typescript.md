# Why would you want to create a union type between literal strings and `(string & {})`

## Answer

It provides a loose autocomplete pattern whilst still allowing for any string.

## Example

```typescript
type ContentType = "application/json" | "application/xml" | "text/plain"

type Headers = {
  "Content-Type": ContentType | (string & {})
}
```

## Note

> **NOTE**\
> This is a complex feature within Typescript. I would not expect many to understand what this is. Fewer to know _why_ (I certainly don't)
