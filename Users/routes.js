const {findByID} = require('./service')
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
   
    const user = findByID(id);

    if (!user) {
        res.send(`User with ID ${id} not found`);
    }
    
    res.send(user);
});

module.exports = router;