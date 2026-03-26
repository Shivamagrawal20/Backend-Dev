What are the advantages of using Mongoose over the native MongoDB driver?

Mongoose offers several advantages:

- Schema enforcement for consistent document structure.
- Built-in validation (required fields, ranges, custom validators).
- Middleware/hooks for pre/post operation logic.
- `populate()` for handling references between collections.
- Cleaner model-based API with instance/static methods and plugins.

It is especially useful when you want maintainable, structured application code around MongoDB.
