# Explicit Types

## Question

What is wrong wit the following code?\
`const string: string = "Hello World!"`

## Answer

You're widening the type, its a constant and so its value won't change. It's type should **not** be `string` but actually `"Hello World!"`

## Note

> **NOTE**\
> Hover over the variable to see its type. Then delete the `: string` annotation and hover again, you'll see the type updated.
