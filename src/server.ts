import express from 'express';
import { db } from './db/connect';


const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});



