import 'reflect-metadata';
import bodyParser from "body-parser";
import { createConnection, ConnectionOptions } from 'typeorm';
import { AppRoutes } from "./routes/router";
import { Request, Response, } from "express";
import { WebScrappingService } from "./services/web-scraping.service";
const CronJob = require('cron').CronJob;
const cors = require('cors')
const scrappingService = new WebScrappingService();

const express = require('express');

const job = new CronJob(
  '* * * * *', 
  async () => {
    await scrappingService.fetchElPais()
    await scrappingService.fetchElMundo();
  }, 
  null, 
  true, 
  'Europe/Madrid'
);
job.start();

createConnection().then(async connection => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  // register all application routes
  AppRoutes.forEach

  AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
      console.log(route)
      route.action(request, response)
        .then(() => next)
        .catch((err: any) => next(err));
    });
  });
  // run app
  app.listen(3000);

  console.log("Express application is up and running on port 3000");

  await scrappingService.fetchElPais();
  await scrappingService.fetchElMundo();

}).catch(error => console.log("TypeORM connection error: ", error));
