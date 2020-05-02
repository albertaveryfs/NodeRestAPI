"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                class: { type: String, maxlength: 24 },
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
    createGroup(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let groupCtrl = model.controller;
            let resp = yield groupCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateGroup(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let groupCtrl = model.controller;
            let resp = yield groupCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteGroup(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let groupCtrl = model.controller;
            let resp = yield groupCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllGroups(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let groupCtrl = model.controller;
            let resp = yield groupCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getGroupById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let groupCtrl = model.controller;
            let resp = yield groupCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Group = Group;
