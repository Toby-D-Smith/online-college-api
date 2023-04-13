import { RequestHandler, Response, Request } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { authenticationService } from '../services/authenticationService';

export const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    console.log('hello');
    const { username, password } = req.body;
    const user = await authenticationService.createUser(username, password);
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const login: RequestHandler = async (req: Request, res: Response) => {
  try {
    console.log('Trying to login');
    const { username, password } = req.body;
    const user = await authenticationService.getUser(username);
    if (!user || user.password !== password) return res.status(403).json('Incorrect Username or Password');

    console.log('hello');
    console.log(req.body);
    console.log(username);

    const secret: Secret = process.env.ACCESS_TOKEN_SECRET || '';
    const accessToken = jwt.sign(user, secret);

    // const collection = await collectionService.getCollectionById(id);
    return res.status(200).json({ accessToken });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
