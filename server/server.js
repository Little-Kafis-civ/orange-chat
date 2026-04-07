const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Orange Chat Backend Running');
});

app.post('/register', (req, res) => {
  const { username } = req.body;
  res.json({ message: `User ${username} registered` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
