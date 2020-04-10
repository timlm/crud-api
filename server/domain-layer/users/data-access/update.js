const fs = require("fs");
const util = require("util");

const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = require("./config").data_path;

const update = async (user = {}) => {
    try {
        const users = JSON.parse(await (read_file(data_path)));
        const userFounded = users.findIndex(userFound => userFound.email === user.email);
        users[userFounded] = user;
        await write_file(data_path, JSON.stringify(users, null, 4));
        return {
            "message": "Update User Sucessfull",
            "inserted_user": user
        }

    } catch (e) {
        console.error(e);
        throw new Error("Insert User Failed");
    }
};

module.exports = update;