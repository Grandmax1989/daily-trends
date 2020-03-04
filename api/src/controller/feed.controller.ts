
import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Feed } from "../models/feed.entity";
import { WebScrappingService } from "../services/webscraping";
import { ObjectId } from "mongodb";
/**
 * Loads all posts from the database.
 */

const scrappingService = new WebScrappingService();

export async function feedGetAll(request: Request, response: Response) {
    // get a feed repository to perform operations with post
    const feedRepository = getManager().getRepository(Feed);
    const feeds = await feedRepository.find();

    response.send(feeds);
}

export async function feedSave(request: Request, response: Response) {
    const feedRepository = getManager().getRepository(Feed);
    const fee: Partial<Feed> = request.params;
    const saveFeed  = await feedRepository.save(fee)
   
    response.send(saveFeed);
}

export async function feedUpdate(request: Request, response: Response) {
    const feedRepository = getManager().getRepository(Feed);
    const fee: Partial<Feed> = request.params;
    const id = request.params.id;
    const saveFeed  = await feedRepository.update(id, fee);
   
    response.send(saveFeed);
}

export async function feedGetById(request: Request, response: Response) {
    const id = request.params.id;
    const feedRepository = getManager().getRepository(Feed);
    const feed = await feedRepository.findOne(id);
  
    response.send(feed);
}

export async function deleteById(request: Request, response: Response) {
    const id = request.params.id;
    const feedRepository = getManager().getRepository(Feed);
    const deleteFeed = await feedRepository.softDelete(id);
  
    response.send(deleteFeed);
}

export async function feedGetAlls(request: Request, response: Response) {
    // get a feed repository to perform operations with post
    const feedRepository = getManager().getRepository(Feed);
    const feeds = await feedRepository.find();

    // here method, news compare
    // const newNews = await scrappingService.fetchElPais();
    // const allFeeds  = await feedRepository.save(newNews)
    const allFeeds  = 'test';
    response.send(allFeeds);
}
