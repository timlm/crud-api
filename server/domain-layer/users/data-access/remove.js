const fs = require("fs");
const util = require("util");

const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = require("./config").data_path;

const remove = async (id) => {
    try {
        if (!id) {
            return {
                "message": "Insert User, mandatory attributes are id"
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
            return {"message": "USER_DOES_NOT_EXIST"};
        }

    } catch (e) {
        console.error(e);
        throw new Error("DELETE_USER_FAILED");
    }
};

module.exports = remove;