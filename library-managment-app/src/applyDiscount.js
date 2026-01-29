function applyDiscount(fine, membershipType) {
    let discount = 0;

    if (membershipType === "normal") discount = 0.05;
    if (membershipType === "gold") discount = 0.15;

    return fine - (fine * discount);
}

export default applyDiscount;