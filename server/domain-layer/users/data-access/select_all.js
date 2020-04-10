const fs = require("fs");
const util = require("util");
const read_file = util.promisify(fs.readFile);
const data_path = require("./config").data_path;

const select_all = async () => {
    try{
        return JSON.parse(await(read_file(data_path)));
    } catch (e){
        console.error(e);
        return null;
    }
};

module.exports = select_all;