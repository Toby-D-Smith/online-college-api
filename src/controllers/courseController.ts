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
    const { order } = req.query;

    console.log('Getting Courses');
    const courses = await courseService.getCourses();

    if (String(order).toLowerCase() === 'ascending') {
      courses.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    }
    if (String(order).toLowerCase() === 'descending') {
      courses.sort((a, b) => -a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    }

    // Currently doing it this way to solve type errors
    let limit: number = courses.length;
    if (req.query.limit) {
      limit = Number(req.query.limit);
    }
    const limitedCourses = courses.slice(limit);

    return res.status(200).json({ courses: limitedCourses });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
