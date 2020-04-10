const create = require("./business-implementation/create");
const modify = require("./business-implementation/modify");
const select = require("./data-access/select");
const select_all = require("./data-access/select_all");
const remove = require("./data-access/remove");

module.exports = {
    create, modify, select, select_all, remove
};