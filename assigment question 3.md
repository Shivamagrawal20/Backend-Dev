What is the purpose of middleware in Mongoose?

Middleware allows you to run logic before or after Mongoose operations (such as `save`, `find`, `updateOne`, and `deleteOne`).

Common uses:

- Password hashing before saving users.
- Logging and auditing data changes.
- Enforcing business rules in one central place.
- Automatically setting derived fields.

It helps keep controllers/services cleaner by centralizing repeated logic.
