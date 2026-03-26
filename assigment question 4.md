How do you implement pagination in Mongoose?

A common approach is using `skip()` and `limit()`:

1. Read `page` and `limit`.
2. Compute `skip = (page - 1) * limit`.
3. Query with sorting, skip, and limit.
4. Use `countDocuments()` to compute total pages.

For very large collections, cursor-based pagination (using `_id` or `createdAt`) is usually more efficient than large `skip()` values.
