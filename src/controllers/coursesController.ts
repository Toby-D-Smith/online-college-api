import { RequestHandler, Response, Request } from 'express';
import { courseService } from '../services/courseServices';

export const getCourseById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await courseService.getCourseById(id);
    return res.status(200).json({ course });
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
