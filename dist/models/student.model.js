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
class Student {
    constructor(norm) {
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
    getAllStudents(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getStudentById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.get(req, null, null);
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
exports.Student = Student;
