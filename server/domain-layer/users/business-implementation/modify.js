const update = require("../data-access/update");
const select = require("../data-access/select");

const modify = async (user) => {
    const item = await select({id: user.id});
    if(!item || Object.keys(item).length === 0){
        throw new Error ("USER_DOES_NOT_EXISTED");
    }

    const itemEmail = await select({email: user.email});
    if(itemEmail && Object.keys(itemEmail).length > 0 && itemEmail.email !== item.email){
        throw new Error ("EMAIL_IS_ALREADY_ASSIGN_TO_SOMEONE_ELSE");
    }

    if (!user.id || !user.email || !user.firstname || !user.lastname || user.isActive == null) {
        throw new Error("Missing mandatory attributes: id, email, firstname, lastname, isActive");
    }

    return await update(user);
};

module.exports = modify;