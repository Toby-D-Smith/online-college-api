import { RequestHandler, Response, Request } from 'express';
import { courseService } from '../services/courseServices';
import { CreateCourseBody, UpdateCourseBody } from '../interfaces/models/course';

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
      limit = Math.min(Number(req.query.limit), limit);
    }
    const limitedCourses = courses.slice(0, limit);

    return res.status(200).json({ courses: limitedCourses });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const createCourse: RequestHandler<any, unknown, CreateCourseBody, any> = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, description, duration, price } = req.body;
    const course = await courseService.createCourse({ name, description, duration, price });

    return res.status(200).json({ course });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const updateCourse: RequestHandler<any, unknown, UpdateCourseBody, any> = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { name, description, duration, price } = req.body;
    // if (!name) {
    //   return res.status(401).json('Name needed');
    // }
    const course = await courseService.updateCourse({ id, name, description, duration, price });

    return res.status(200).json({ course });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};

export const deleteCourse: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await courseService.deleteCourse(id);
    return res.status(200).json('Course Deleted');
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
};
