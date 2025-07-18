const express = require('express');
const { getBugs, createBug, updateBug, deleteBug } = require('../controllers/bugController');
const router = express.Router();

router.get('/bugs', getBugs);
router.post('/bugs', createBug);
router.patch('/bugs/:id', updateBug);
router.delete('/bugs/:id', deleteBug);

module.exports = router;
