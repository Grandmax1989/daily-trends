import express from "express";
import bodyParser from "body-parser";
import { MongoHelper } from "./mongo-helper";
// import * as feedController from "./controllers/home";

const server = express();
const PORT = 3000;
//BD

(async () => {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // server.get('/', feedController.index);
    // server.get('/users', feedController.users);
    // server.post('/users/create', feedController.create);
    try {
        await MongoHelper.connect(`mongodb://admin:fHYmOGIIsjBxbvcp@localhost:27017/admin`);
        console.info(`Connected to Mongo!`);
      } catch (err) {
        console.error(`Unable to connect to Mongo!`, err);
      }
    server.listen(PORT, function () {
        console.log(`App listening on port ${PORT}!`)
    });
})()

