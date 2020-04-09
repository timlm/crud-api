const update = require("../data-access/update");
const find = require("./find");

const modify = async (user) => {
    const item = await find(user.id);
    if(!item || Object.keys(item).length === 0){
        return {
            "message" : "ITEM_DOES_NOT_EXISTED"
        }
    }
    return await update(user);
};

module.exports = modify;