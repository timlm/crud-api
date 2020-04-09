const fs = require("fs");
const util = require("util");
const read_file = util.promisify(fs.readFile);
const data_path = require("./config").data_path;

const select = async (searched_user = {}) => {
    try {
        const {id: searched_user_id = -1, email: searched_user_email = ""} = searched_user;

        if (!searched_user_id && !searched_user_email) {
            return {
                "message": "select user, missing attribute. Mandatory attributes are id or email"
            }
        }
        const users = JSON.parse(await (read_file(data_path)));
        const found_user = users.find(user => user.id === searched_user_id);
        if (!found_user) {
            return {}
        } else {
            return found_user;
        }

    } catch (e) {
        console.error(e);
        return null;
    }
};

module.exports = select;