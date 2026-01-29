import calculateTotal from "./calculateTotal.js";
import applyDiscount from "./applyDiscount.js";

function displaySummary(member, fine) {
    console.log("Member:", member.name);
    console.log("Type:", member.membershipType);

    let total = calculateTotal(member.borrowed);
    console.log("Total Book Value:", total);

    let finalFine = applyDiscount(fine, member.membershipType);
    console.log("Fine after discount:", finalFine);
}

export default displaySummary;