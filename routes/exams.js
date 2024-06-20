const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

// Create a new exam
router.post('/', async (req, res) => {
  const { subject, date } = req.body;
  try {
    const newExam = await Exam.create({ subject, date });
    res.status(201).json(newExam);
  } catch (error) {
    console.error('Error creating exam:', error);
    res.status(500).json({ error: 'Failed to create exam' });
  }
});

// Get all exams
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.findAll();
    res.status(200).json(exams);
  } catch (error) {
    console.error('Error fetching exams:', error);
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
});

module.exports = router;
