const express = require('express');const cors = require('cors');const bodyParser = require('body-parser');const authRoutes = require('./routes/authRoutes');const jobRoutes = require('./routes/jobRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', jobRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});