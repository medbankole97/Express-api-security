import express from 'express';
import helmet from 'helmet';
const app = express();
app.use(helmet());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
