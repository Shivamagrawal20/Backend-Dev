function calculateTotal(books) {
    let total = 0;

    for (let book of books) {
        total += book.price;
    }

    return total;
}

export default calculateTotal;

