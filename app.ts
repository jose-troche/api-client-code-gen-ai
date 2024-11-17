// app.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 10000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js and TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
