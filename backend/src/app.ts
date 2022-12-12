import express, { response } from 'express';
import { load } from 'ts-dotenv';
import { credentials } from 'grpc';
import { RestaurantRecommendationServiceClient } from '../proto/RestaurantRecommendation_grpc_pb';
import { UserLikedRestaurants } from '../proto/RestaurantRecommendation_pb';
import proxy from 'express-http-proxy';
import cors from 'cors';

const testRest = [
  'OP-m-Kq-1aEWrrlaszFi9w',
  '8VsGdezAKZh8atZ0tmVskg',
  'e8jerbHMWQ1JSYxKtXEt5w',
];

const app = express();
const port = 5000;

const env = load({
  API_KEY: String,
});

const client = new RestaurantRecommendationServiceClient(
  'localhost:1080',
  credentials.createInsecure()
);

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World! basic');
});

app.post('/recomm', (req, res) => {
  const request = new UserLikedRestaurants();
  request.setIdsList(req.body.selected);
  request.setReceived(0);
  request.setAsking(20);

  if (req.body.model === '0') {
    client.getBaseModelRecommendation(request, (e, response) => {
      if (e) {
        res.status(400).send('error');
      }

      res.json(response.getIdsList());
    });
  } else {
    client.getFinalModelRecommendation(request, (e, response) => {
      if (e) {
        res.status(400).send('error');
      }

      res.json(response.getIdsList());
    });
  }
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
