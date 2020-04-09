const remove = require("../data-access/remove");

const deleteItem = async (id) => {
    return await remove(id);
};

module.exports = deleteItem;