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
    console.log('Getting Collection');
    const collections = await collectionService.getCollections();
    return res.status(200).json({ collections });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
