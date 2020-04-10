const express = require('express');
const router = express.Router();
const users_model = require("domain-layer").users_model;

// Get all users
router.get('/', async (req, res) => {
    const item = await users_model.select_all();
    res.send(item);
});

// Get item with id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const item = await users_model.select({id});
    item ? res.send(item) : res.status(404).send("USER_DOES_NOT_EXIST");
});

// Create new item
router.post("/", async (req, res, next) => {
    const {email, isActive, firstname, lastname, age, company, phone, address, favoriteFruit} = req.body;
    const user = {email, isActive, firstname, lastname, age, company, phone, address, favoriteFruit};
    try{
        const result = await users_model.create(user);
        res.send(result);
    } catch (e) {
        next(e)
    }
});


// update item
router.put("/:id", async (req, res, next) => {
    const id = parseInt(req.params.id);
    const {email, isActive, firstname, lastname, age, company, phone, address, favoriteFruit} = req.body;
    const user = {id, email, isActive, firstname, lastname, age, company, phone, address, favoriteFruit};
    try{
        const result = await users_model.modify(user);
        res.send(result);
    }catch (e) {
        next(e);
    }
});

// Delete item
router.delete("/:id", async (req, res, next) => {
    const id = parseInt(req.params.id);
    try{
        const result = await users_model.remove(id);
        res.send(result)
    }catch (e) {
        next(e);
    }
});

module.exports = router;
