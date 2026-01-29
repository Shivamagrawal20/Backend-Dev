import fs from "fs";

function createMember(memberId, name, membershipType) {
    try {
        let member = { memberId, name, membershipType, borrowed: [] };

        let data = [];

        if (fs.existsSync("members.json")) {
            data = JSON.parse(fs.readFileSync("members.json", "utf-8"));
        }

        data.push(member);

        fs.writeFileSync("members.json", JSON.stringify(data, null, 2));
    } catch (error) {
        console.log("error in creating member", error);
    }
}

export default createMember;