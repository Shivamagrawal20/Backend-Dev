import fs from "fs";

function borrowBooks(memberId, books) {
    try {
        // read members
        let members = JSON.parse(fs.readFileSync("members.json", "utf-8"));

        // read existing borrow records OR create empty array
        let borrowRecords = fs.existsSync("borrow.json")
            ? JSON.parse(fs.readFileSync("borrow.json", "utf-8"))
            : [];

        borrowRecords.push({
            memberId: memberId,
            books: books
        });

        fs.writeFileSync("borrow.json", JSON.stringify(borrowRecords, null, 2));
    } catch (error) {
        console.log("error in borrowing books", error);
    }
}

export default borrowBooks;
