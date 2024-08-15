# Code Challenge

## Question

Write some code so that the two types match the comment below.

## Answers

```typescript
type UnionOfFeatures = (typeof Features)[number]

type MappedFeatureFunction = {
  [Property in UnionOfFeatures]: () => void
}
```

## Goal of the question

Get a taste of how they tackle a typescript challenge. Googling should be allowed if they need it.
