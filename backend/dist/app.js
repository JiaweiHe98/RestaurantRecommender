"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ts_dotenv_1 = require("ts-dotenv");
const grpc_1 = require("grpc");
const RestaurantRecommendation_grpc_pb_1 = require("../proto/RestaurantRecommendation_grpc_pb");
const RestaurantRecommendation_pb_1 = require("../proto/RestaurantRecommendation_pb");
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const cors_1 = __importDefault(require("cors"));
const testRest = [
    'OP-m-Kq-1aEWrrlaszFi9w',
    '8VsGdezAKZh8atZ0tmVskg',
    'e8jerbHMWQ1JSYxKtXEt5w',
];
const app = (0, express_1.default)();
const port = 5002;
const env = (0, ts_dotenv_1.load)({
    API_KEY: String,
});
app.use(express_1.default.static(`${__dirname}/client`));
const client = new RestaurantRecommendation_grpc_pb_1.RestaurantRecommendationServiceClient('localhost:1080', grpc_1.credentials.createInsecure());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    res.send('Hello World! basic');
});
app.post('/recomm', (req, res) => {
    const request = new RestaurantRecommendation_pb_1.UserLikedRestaurants();
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
    }
    else {
        client.getFinalModelRecommendation(request, (e, response) => {
            if (e) {
                res.status(400).send('error');
            }
            res.json(response.getIdsList());
        });
    }
});
app.use('/yelp', (0, express_http_proxy_1.default)('https://api.yelp.com', {
    proxyReqPathResolver: (_req) => {
        return '/v3/graphql';
    },
    proxyReqOptDecorator: (proxyReqOpts, _srcReq) => {
        proxyReqOpts.headers['Authorization'] = `Bearer ${env.API_KEY}`;
        return proxyReqOpts;
    },
}));
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map