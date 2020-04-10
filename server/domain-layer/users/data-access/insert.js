const fs = require("fs");
const util = require("util");

const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = require("./config").data_path;

const insert = async (user = {}) => {
    try {
        const users = JSON.parse(await (read_file(data_path)));
        const usersIdList = users.map(value => value.id);
        user.id = Math.max(...usersIdList) + 1;
        const new_users_array = users.concat(user);
        await write_file(data_path, JSON.stringify(new_users_array, null, 4));
        return {
            "message": "Insert user Sucessfull",
            "inserted_user": user
        }

    } catch (e) {
        console.error(e);
        throw new Error("Insert user Failed");
    }
};

module.exports = insert;