import { Request, Response, NextFunction } from 'express';

export class Student {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      name: { type: String, maxlength: 24 },
      email: { type: String, maxlength: 24 },
      phonenum: { type: String, maxlength: 24 },
      class: { type: String, maxlength: 24 },
      group: { type: String, maxlength: 24 },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store students information model',
    [
      {
        route: '/get-all-students',
        method: 'POST',
        callback: this.getAllStudents,
        requireToken: true,
      },
      {
        route: '/get-student-by-id/:id',
        method: 'POST',
        callback: this.getStudentById,
        requireToken: true,
      }
    ]
    ];
  }


  getAllStudents(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let studentCtrl = model.controller;
      let resp = await studentCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getStudentById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let studentCtrl = model.controller;
      let resp = await studentCtrl.get(req, null, null);
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