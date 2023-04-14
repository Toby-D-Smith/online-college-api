import jwt from 'jsonwebtoken';
import { RequestHandler, Response, Request } from 'express';

export const authenticateToken: RequestHandler = async (req: Request, res: Response, next) => {
  try {
    const authHeader = req.headers['authorization'] as string;
    const token = authHeader?.split(' ')[1];
    if (!token || token === null) return res.status(401).json('Please add a authorisation token');
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || '', (err, user) => {
      if (err) return res.status(403).json('Unauthorised Token');
      next();
    });
  } catch (e) {
    res.status(500);
  }
};
