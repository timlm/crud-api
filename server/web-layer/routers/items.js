var express = require('express');
var router = express.Router();
const items_model = require("domain-layer").items_model;

// Get all items
router.get('/', async (req, res) => {
    const item = await items_model.find_all();
    res.send(item);
});

// Get item with id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const item = await items_model.find(id);
    res.send(item);
});

// Create new item
router.post("/", async (req, res) => {
    const id = parseInt(req.body.id);
    const {email, name} = req.body;
    const user = {id, email, name};
    const result = await items_model.create(user);
    res.send(result);
});


// update item
router.put("/:id", async (req, res) => {
    const id = parseInt(req.body.id);
    const {email, name} = req.body;
    const user = {id, email, name};
    const result = await items_model.modify(user);
    res.send(result);
});

// Create new item
router.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await items_model.deleteItem(id);
    res.send(result);
});

module.exports = router;
