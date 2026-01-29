import createMember from "./src/createMember.js";
import borrowBooks from "./src/borrowBooks.js";
import createBook from "./src/createBook.js";

createBook(1, "Java", "James Gosling", 500);
createBook(2, "JS", "Brendan Eich", 600);

createMember(101, "Tushar", "gold");

borrowBooks(101, [
    { bookId: 1, title: "Java", price: 500 },
    { bookId: 2, title: "JS", price: 600 }
]);