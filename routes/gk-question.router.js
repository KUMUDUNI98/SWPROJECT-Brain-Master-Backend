const express = require('express');
const gkQuestionController = require('../controllers/gkquestion.controller');

const router = express.Router();

router.post("/", gkQuestionController.save);//send questions
router.get("/:id", gkQuestionController.show);//give id can see question
router.get("/", gkQuestionController.index);//get all questions
router.post("/:id", gkQuestionController.update);
router.delete("/:id", gkQuestionController.destroy);

module.exports = router;