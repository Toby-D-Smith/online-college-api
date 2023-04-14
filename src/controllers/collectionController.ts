import { RequestHandler, Response, Request } from 'express';
import { collectionService } from '../services/collectionServices';

export const getCollectionById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const collection = await collectionService.getCollectionById(id);
    return res.status(200).json({ collection });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const getCollections: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { order } = req.query;
    const collections = await collectionService.getCollections();

    if (String(order).toLowerCase() === 'ascending') {
      collections.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    }
    if (String(order).toLowerCase() === 'descending') {
      collections.sort((a, b) => -a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    }

    // Currently doing it this way to solve type errors
    let limit: number = collections.length;
    if (req.query.limit) {
      limit = Math.min(Number(req.query.limit), limit);
    }
    const limitedCollections = collections.slice(0, limit);

    return res.status(200).json({ collections: limitedCollections });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
