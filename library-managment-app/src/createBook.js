import fs from "fs";

function createBook(bookId, title, author, price) {
    try {
        let book = { bookId, title, author, price };
        let data = [];
        if (fs.existsSync("library.json")) {
            data = JSON.parse(fs.readFileSync("library.json", "utf-8"));
        }
        data.push(book);
        fs.writeFileSync("library.json", JSON.stringify(data, null, 2));
    } catch (error) {
        console.log("error in creating book", error);
    }
}

export default createBook;