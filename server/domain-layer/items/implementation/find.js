const select = require("../data-access/select");

const find = async (id) => {
    return await select({id});
};

module.exports = find;