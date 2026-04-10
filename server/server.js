const express = require('express');
const app = express();

app.use(express.json());

// Temporary storage (we’ll upgrade later)
let users = [];

// Home route
app.get('/', (req, res) => {
  res.send('Orange Chat Backend Running');
});

// Register user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const user = { id: Date.now(), username, password };
  users.push(user);

  res.json({ message: 'User registered', user });
});

// Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
