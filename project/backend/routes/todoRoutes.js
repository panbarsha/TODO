// routes/TodolistRoutes.js
const express = require('express');
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  markDone,
} = require('../controllers/todoController');

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', markDone);

module.exports = router;
