const fs = require("fs");
const util = require("util");

const [write_file, read_file] = [util.promisify(fs.writeFile), util.promisify(fs.readFile)];
const data_path = require("./config").data_path;

const update = async (item = {}) => {
    try {
        if (!item.id || !item.email) {
            return {
                "message": "Missing mandatory attributes: id, email"
            }
        }
        const items = JSON.parse(await (read_file(data_path)));
        const itemFounded = users.findIndex(itemFound => itemFound.id === item.id);
        items[itemFounded] = item;
        await write_file(data_path, JSON.stringify(items, null, 4));
        return {
            "message": "Insert Item Sucessfull",
            "inserted_item": item
        }

    } catch (e) {
        console.error(e);
        return {
            "message": "Insert User Failed"
        };
    }
};

module.exports = update;