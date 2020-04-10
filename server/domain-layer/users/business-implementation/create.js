const insert = require("../data-access/insert");
const select = require("../data-access/select");

const create = async (user) => {
    const item = await select({email: user.email});
    if(item && Object.keys(item).length > 0){
        throw new Error("USER_ALREADY_EXISTED");
    }

    if (!user.email || !user.firstname || !user.lastname || !user.isActive) {
        throw new Error("Insert user, mandatory attributes are email, firstname, lastname, isActive");
    }

    return await insert(user);
};

module.exports = create;