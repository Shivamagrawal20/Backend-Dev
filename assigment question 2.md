Explain the difference between `findOneAndUpdate()` and `updateOne()`.

- `findOneAndUpdate()` finds one matching document and updates it. It can return the matched/updated document depending on options.
- `updateOne()` updates one matching document but returns operation metadata like `matchedCount` and `modifiedCount`, not the document.

Use `findOneAndUpdate()` when you need the document back, and `updateOne()` for simple write operations.

