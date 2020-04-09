const fs = require("fs");
const util = require("util");

const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = require("./config").data_path;

const insert = async (user = {}) => {
    try {
        if (!user.id || !user.email) {
            return {
                "message": "Insert item, mandatory attributes are id, email"
            }
        }
        const users = JSON.parse(await (read_file(data_path)));
        const new_users_array = users.concat(user);
        await write_file(data_path, JSON.stringify(new_users_array, null, 4));
        return {
            "message": "Insert item Sucessfull",
            "inserted_item": item
        }

    } catch (e) {
        console.error(e);
        return {
            "message": "Insert Item Failed"
        };
    }
};

module.exports = insert;