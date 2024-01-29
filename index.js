const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Multer configuration
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// root
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// File analysis endpoint
app.post('/api/fileanalyse', upload.single('upfile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileData = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    };

    res.json(fileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing file' });
  }
});

// listener
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});