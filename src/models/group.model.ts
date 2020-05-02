import { Request, Response, NextFunction } from 'express';

export class Group {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      name: { type: String, maxlength: 24 },
      class: { type: String, maxlength: 24},
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store group information model',
    [
      {
        route: '/get-all-groups',
        method: 'POST',
        callback: this.getAllGroups,
        requireToken: true,
      },
      {
        route: '/get-group-by-id/:id',
        method: 'POST',
        callback: this.getGroupById,
        requireToken: true,
      },
      {
        route: '/create-group',
        method: 'POST',
        callback: this.createGroup,
        requireToken: true,
      },
      {
        route: '/update-group/id/:id',
        method: 'PUT',
        callback: this.updateGroup,
        requireToken: true,
      },
      {
        route: '/delete-group/id/:id',
        method: 'DELETE',
        callback: this.deleteGroup,
        requireToken: true,
      }
    ]
    ];
  }

  createGroup(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let groupCtrl = model.controller;
      let resp = await groupCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateGroup(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let groupCtrl = model.controller;
      let resp = await groupCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  deleteGroup(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      let groupCtrl = model.controller;
      let resp = await groupCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getAllGroups(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let groupCtrl = model.controller;
      let resp = await groupCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getGroupById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let groupCtrl = model.controller;
      let resp = await groupCtrl.get(req, null, null);
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