
import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Feed } from "../models/feed.entity";
import { WebScrappingService } from "../services/web-scraping.service";
import { ObjectId } from "mongodb";
/**
 * Loads all posts from the database.
 */

const scrappingService = new WebScrappingService();

export async function feedGetAll(request: Request, response: Response) {
    // get a feed repository to perform operations with post
    const feedRepository = getManager().getRepository(Feed);
    const feeds = await feedRepository.find({order: {createdAt: "DESC"}});
    console.log(feeds)
    response.send(feeds);
}

export async function feedSave(request: Request, response: Response) {
    const feedRepository = getManager().getRepository(Feed);
    const feed: Partial<Feed> = request.body;
    feed.createdAt = new Date();
    const saveFeed  = await feedRepository.save(feed)
   
    response.send(saveFeed);
}

export async function feedUpdate(request: Request, response: Response) {
    const feedRepository = getManager().getRepository(Feed);
    const fee: Partial<Feed> = request.body;
    const id = request.body._id;
    delete fee._id;
    const saveFeed  = await feedRepository.update(id, fee);
    response.send(saveFeed);
}

export async function feedGetById(request: Request, response: Response) {
    console.log(request.params)
    const id = request.params.id;
    const feedRepository = getManager().getRepository(Feed);
    const feed = await feedRepository.findOne({_id: new ObjectId(id) });
  
    response.send(feed);
}

export async function deleteById(request: Request, response: Response) {
    const id = request.params.id;
    const feedRepository = getManager().getRepository(Feed);
    console.log(id)
    const deleteFeed = await feedRepository.delete(id);
  
    response.send(deleteFeed);
}

// export async function feedGetAlls(request: Request, response: Response) {
//     // get a feed repository to perform operations with post
//     const feedRepository = getManager().getRepository(Feed);
//     const feeds = await feedRepository.find();

//     // here method, news compare
//     // const newNews = await scrappingService.fetchElPais();
//     // const allFeeds  = await feedRepository.save(newNews)
//     response.send(allFeeds);
// }
