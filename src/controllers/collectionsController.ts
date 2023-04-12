import { RequestHandler, Response, Request } from 'express';

export const getCollectionById: RequestHandler = async (req: Request, res: Response) => {
  try {
    // console.log(req);
    const { id } = req.params;
    console.log('Getting Collection By Id', id);
    return res.status(200).json({});
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const getCollections: RequestHandler = async (req: Request, res: Response) => {
  try {
    console.log('Getting Collection');
    return res.status(200).json({});
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
