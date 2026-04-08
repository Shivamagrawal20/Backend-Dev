When should you use embedding vs referencing in MongoDB schema design?

Use embedding when:

- Data is tightly related and usually read together.
- Relationship is one-to-few.
- Child data size remains bounded.

Use referencing when:

- Data is large, shared, or reused across documents.
- Relationship is one-to-many or many-to-many.
- Related documents need independent lifecycle management.

Rule of thumb: embed for locality and simpler reads, reference for scale and flexibility.

