const fs = require("fs");
const util = require("util");

const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = require("./config").data_path;

const remove = async (id) => {
    try {

        if (!id) {
            return {
                "message": "Insert User, mandatory attributes are id, email"
            }
        }

        const users = JSON.parse(await (read_file(data_path)));
        const found_user = users.findIndex(userFound => userFound.id === id);
        if (found_user !== -1) {
            users.splice(found_user, 1);
            await write_file(data_path, JSON.stringify(users, null, 4));
            return {
                "message": "Remove User Sucessfull"
            }
        } else {
            return {
                "message": "item does not exist"
            }
        }

    } catch (e) {
        console.error(e);
        return {
            "message": "Delete User Failed"
        };
    }
};

module.exports = remove;