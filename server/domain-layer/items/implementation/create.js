const insert = require("../data-access/insert");
const find = require("./find");

const create = async (user) => {
    const item = await find(user.id);
    console.log(item)
    console.log(Object.keys(item).length)
    if(item && Object.keys(item).length > 0){
        return {
            "message" : "ITEM_ALREADY_EXISTED"
        }
    }
    return await insert(user);
};

module.exports = create;