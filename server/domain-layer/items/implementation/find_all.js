const select_all = require("../data-access/select_all");

const find_all = async () => {
    return select_all();
};

module.exports = find_all;