import * as express from 'express';
import * as bodyParser from 'body-parser';

const router = express.Router();
const app = express();

app.use(bodyParser.json());

router.get('/hello', (request, response) => {
  response.send('Hello world!');
});

app.use('/api', router);
app.listen(5000);