import express from 'express';
import { load } from 'ts-dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';

const app = express();
const port = 5000;

const env = load({
  API_KEY: String,
});

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World! basic');
});

app.post('/recomm', (req, res) => {
  console.log(req.body);

  res.send('recommendation');
});

app.use(
  '/yelp',
  proxy('https://api.yelp.com', {
    proxyReqPathResolver: (_req) => {
      return '/v3/graphql';
    },
    proxyReqOptDecorator: (proxyReqOpts, _srcReq) => {
      proxyReqOpts.headers['Authorization'] = `Bearer ${env.API_KEY}`;
      return proxyReqOpts;
    },
  })
);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
