import * as express from 'express';
import * as bodyParser from 'body-parser';

const router = express.Router();
const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send({
    hostname: request.hostname,
    path: request.path,
    method: request.method,
  });
});

app.use('/api', router);
app.listen(5000);