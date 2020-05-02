import { Request, Response, NextFunction } from 'express';

export class Course {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      name: { type: String, maxlength: 24 },
      professor: { type: String, maxlength: 24},
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store course information model',
    [
      {
        route: '/get-all-courses',
        method: 'POST',
        callback: this.getAllCourses,
        requireToken: true,
      },
      {
        route: '/get-course-by-id/:id',
        method: 'POST',
        callback: this.getCourseById,
        requireToken: true,
      },
      {
        route: '/create-course',
        method: 'POST',
        callback: this.createCourse,
        requireToken: true,
      },
      {
        route: '/update-course/id/:id',
        method: 'PUT',
        callback: this.updateCourse,
        requireToken: true,
      },
      {
        route: '/delete-course/id/:id',
        method: 'DELETE',
        callback: this.deleteCourse,
        requireToken: true,
      }
    ]
    ];
  }

  createCourse(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let courseCtrl = model.controller;
      let resp = await courseCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateCourse(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let courseCtrl = model.controller;
      let resp = await courseCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  deleteCourse(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let courseCtrl = model.controller;
      let resp = await courseCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getAllCourses(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let courseCtrl = model.controller;
      let resp = await courseCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getCourseById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let courseCtrl = model.controller;
      let resp = await courseCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}