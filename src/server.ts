import express from 'express';
import { db } from './testdb/db';

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

app.get('/humans', async (req, res) => {
  const humans = await db.query('SELECT * FROM humans');
  res.json(humans.rows);
});