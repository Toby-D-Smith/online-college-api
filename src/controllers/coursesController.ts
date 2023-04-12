import { RequestHandler, Response, Request } from 'express';

export const getCourseById: RequestHandler = async (req: Request, res: Response) => {
  try {
    // console.log(req);
    const { id } = req.params;
    console.log('Getting Course By Id', id);
    return res.status(200).json({});
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const getCourses: RequestHandler = async (req: Request, res: Response) => {
  try {
    console.log('Getting Courses');
    return res.status(200).json({});
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
