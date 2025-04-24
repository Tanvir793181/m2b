const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

// Connect database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/brazil/analysis', require('./routes/brazil/analysis'));
app.use('/api/brazil/matches', require('./routes/brazil/matches'));
app.use('/api/brazil/players', require('./routes/brazil/players'));
app.use('/api/brazil/updates', require('./routes/brazil/updates'));

app.use('/api/madrid/analysis', require('./routes/madrid/analysis'));
app.use('/api/madrid/matches', require('./routes/madrid/matches'));
app.use('/api/madrid/players', require('./routes/madrid/players'));
app.use('/api/madrid/updates', require('./routes/madrid/updates'));

app.use('/api/news', require('./routes/news'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
