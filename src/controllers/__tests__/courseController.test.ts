import { describe, expect, test, jest } from '@jest/globals';
import app from '../../app';
import { courseService } from '../../services/courseServices';
import { Course } from '../../interfaces/models/course';
import { Prisma } from '@prisma/client';
const request = require('supertest');

const course: Course = {
  id: 'CourseId',
  name: 'Test Course',
  description: 'A description for the test course',
  duration: '2 Years',
  price: new Prisma.Decimal(540.5),
};

describe('GET-course:/id', () => {
  test('When the endpoint is called with a correct id, a course is returned', async () => {
    const id = course.id;
    jest.spyOn(courseService, 'getCourseById').mockResolvedValue(course);
    const res = await request(app).get(`/courses/${id}`);

    expect(res.status).toEqual(200);
    expect(res.text).toBe(JSON.stringify({ course }));
  });
});
